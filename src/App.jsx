import React, { useState, useEffect } from 'react';
import './App.css';
import splashImage from './splash.jpg';

const questions = [
  {
    question: "What is the capital of Nigeria?",
    options: { A: "Lagos", B: "Abuja", C: "Kano", D: "Port Harcourt" },
    correct: "B"
  },
  {
    question: "What is the largest continent by area?",
    options: { A: "Africa", B: "Asia", C: "Europe", D: "Antarctica" },
    correct: "B"
  },
  {
    question: "Which programming language is known as the language of the web?",
    options: { A: "Python", B: "JavaScript", C: "Java", D: "C++" },
    correct: "B"
  }
];

const prizeLadder = [
  "₦500",
  "₦1000",
  "₦1500",
  "₦2000",
  "₦2500",
  "₦3000",
  "₦3500",
  "₦4000",
  "₦4500",
  "₦5000"
];

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [fiftyUsed, setFiftyUsed] = useState(false);
  const [allowedOptions, setAllowedOptions] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSplash || answered) return;
    if (timeLeft === 0) {
      setFeedback('wrong');
      setAnswered(true);
      setTimeout(() => nextQuestion(), 1000);
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showSplash, answered]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (optionKey) => {
    if (answered) return;
    setAnswered(true);
    if (optionKey === currentQuestion.correct) {
      setFeedback('correct');
      setScore(score + 500);
    } else {
      setFeedback('wrong');
    }
    setTimeout(() => nextQuestion(), 1000);
  };

  const nextQuestion = () => {
    setAnswered(false);
    setFeedback(null);
    setTimeLeft(30);
    setFiftyUsed(false);
    setAllowedOptions(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Game Over! Your final score is ₦${score}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  const handleFiftyFifty = () => {
    if (fiftyUsed || answered) return;
    setFiftyUsed(true);
    const incorrectOptions = Object.keys(currentQuestion.options).filter(key => key !== currentQuestion.correct);
    const randomIncorrect = incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
    setAllowedOptions([currentQuestion.correct, randomIncorrect]);
  };

  if (showSplash) {
    return (
      <div className="splash-screen">
        <img src={splashImage} alt="Splash Screen" className="splash-image" />
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>Who Wants to Be a Millionaire?</h1>
      <div className="game">
        <div className="question-section">
          <div className="timer">Time left: {timeLeft}s</div>
          <div className={`question-box ${feedback === 'correct' ? 'blink-correct' : feedback === 'wrong' ? 'blink-wrong' : ''}`}>
            {currentQuestion.question}
          </div>
          <div className="options">
            {Object.entries(currentQuestion.options).map(([key, value]) => {
              if (allowedOptions && !allowedOptions.includes(key)) return null;
              return (
                <button
                  key={key}
                  className="option-btn"
                  onClick={() => handleAnswer(key)}
                  disabled={answered}
                >
                  {key}. {value}
                </button>
              );
            })}
          </div>
          <div className="lifelines">
            <button className="lifeline-btn" onClick={handleFiftyFifty} disabled={fiftyUsed || answered}>
              50-50 {fiftyUsed ? "(Used)" : ""}
            </button>
          </div>
        </div>
        <div className="score-ladder">
          <h2>Prize Ladder</h2>
          <ul>
            {prizeLadder.map((prize, index) => (
              <li key={index} className={index === currentQuestionIndex ? 'current-prize' : ''}>
                {prize}
              </li>
            ))}
          </ul>
          <div className="score">Score: ₦{score}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
