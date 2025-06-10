import React, { useState, useEffect } from 'react';
import './App.css';
import splashImage from './splash.jpg';

const questions = [
  {
    question: "LET YOUR ________ BE KNOWN UNTO MEN. THE LORD IS AT HAND.?",
    options: { A: "STRIFE", B: "MODERATION", C: "HOLINESS", D: "CHARACTER" },
    correct: "B"
  },
  {
    question: "LET THIS MIND BE IN YOU, WHICH WAS ALSO IN __________.?",
    options: { A: "HOLY SPIRIT", B: "THE SON", C: "CHRIST JESUS", D: "GOD THE FATHER" },
    correct: "C"
  },
  {
    question: "IN THE EARLY CHAPTER OF THE BOOK OF PHILIPPIANS CHAPTER 4, APOSTLE PAUL BEGGED TWO WOMEN TO ALWAYS HAVE SAME MIND, WHAT IS THE NAME OF THESE WOMEN?",
    options: { A: "ENODIAN & SYNTICHE", B: "ENODIAN & CYTHIAN", C: "SYNTICHE & EPAPHRODITUS", D: "ENODIAN & EPAPHRODITUS" },
    correct: "A"
  },
  {
    question: "FINALLY, MY BRETHEN REJOICE IN THE LORD. TO WRITE THE SAME THINGS TO YOU, TO ME INDEED IS NOT GRIEVOUS, BUT FOR YOU IT IS SAFE. THIS CAN BE FOUND IN?",
    options: { A: "PHIL 4:1", B: "PHIL 4:12", C: "PHIL 3:1", D: "PHIL 3:12"  },
    correct: "C"
  },
  {
    question: "FOR WE ARE THE CIRCUMCISION, WHICH WORSHIP GOD IN SPIRIT, AND REJIOCE IN CHRIST JESUS AND HAVE NO CONFIDENCE IN?",
    options: { A: "FLESH", B: "DEVIL", C: "CHRIST JESUS", D: "UTTERANCES" },
    correct: "A"
  },
  {
    question: "WHICH VERSE OF THE BOOK OF PHILIPIAN CHAPTER 3 CONFIRM THAT APOSTLE PAUL WAS A PHARISEE?",
    options: { A: "PHI 3: 3", B: "PHI 3: 4", C: "PHI 3: 5", D: "PHI 3: 8"},
    correct: "C"
  },
  {
    question: "PHIL 4 VS 6, SAYS BE CAREFUL FOR NOTHING BUT IN EVERYTHING BY ________ , _______ WITH _________?",
    options: { A: "PRAYER, SUPPLICATION, THANKGIVING ", B: "PRAYER, THANKGIVING, SUPPLICATION", C: "SUPPLICATION, PRAYER, THANKGIVING", D: "THANKGIVING, PRAYER, SUPPLICATION" },
    correct: "A"
  },
  {
    question: "THAT I MAY KNOW AND THE POWER OF ________ AND FELLOWSHIP OF HIS ________ BEING MADE CONFORMABLE UNTO HIS DEATH?",
    options: { A: "RESURRECTION & DEATH ", B: "RESURRECTION & LIFE", C: "RESURRECTION AND POWER", D: "RESURRECTION AND SUFFERINGS" },
    correct: "D"
  },
  {
    question: "ACCORDING TO PHIL 3: 20, BELIEVERS CITIZENSHIP IS IN WHERE?",
    options: { A: "IN GOODWILL", B: "IN GOOD MANNER", C: "EARTH", D: "HEAVEN" },
    correct: "D"
  },
  {
    question: "WHO IS THE AUTHOR OF THE BOOK OF PHIL AND HE IS FROM WHICH TRIBE IN ISREAL?",
    options: { A: "APOSTLE PAUL, ISREAL", B: "APOSTLE PAUL, PHARISEE", C: "APOSTLE PAUL, JUDA", D: "PAUL, BENJEMIN" },
    correct: "D"
  },
  {
    question: "APOSTLE PAUL INSTRUCT THE SAINT AT PHILLIP, IN PHIL 4 VS 4, WHAT IS THE INSTRUCTION?",
    options: { A: "REJOICE IN THE LORD ALWAYS", B: "REJOICE IN THE SALVATION ALWAYS", C: "REJOICE IN HIS STRENGTH ALWAYS", D: "REJOICE IN HIS STRENGTH ALWAYS" },
    correct: "A"
  },
  {
    question: "PHIL 4 : 16 SAYS NEVERTHELESS WHERETO WE HAVE ALREADY ATTAINED, LET US WALK BY THE SAME ______, LET US MIND THE SAME THING?",
    options: { A: "MIND", B: "FAITH", C: "RULE", D: "FOCUS" },
    correct: "C"
  },
  {
    question: "THE BOOK OF PHILLIPIAN WAS FOUND IN THE NEW TESTAMENT OF THE BIBLE BEFORE AND AFTER WHICH BOOK?",
    options: { A: "EPHISIAN & COLOSSIAN", B: "COLOSSIAN & PHILIPHIAN", C: "COLOSIAN & EPHESIAN", D: "EPHESIAN & THESSALONIAN" },
    correct: "C"
  },
  {
    question: "IN THE INTRODUCTION PART/VERSE OF THE BOOK OF PHILIPIAN, WHAT IS THE NAME OF THE APOSTLE REGARDED AS SERVANT OF JESUS WITH APOSTLE PAUL",
    options: { A: "EPAPHRODITUS", B: "TIMOTHY", C: "PETER", D: "EURODIS" },
    correct: "B"
  },
  {
    question: "IN PHIL 1:3, WHAT DOES THE AUTHOR CLAIMED HE DOES EACH TIME HE REMEMBER THE PEOPLE OF PHILLIPIAN ?",
    options: { A: "HE PRAYED", B: "HE ENCOURAGED ", C: "HE BESEECHED", D: "HE GIVES THANKS" },
    correct: "D"
  },
  {
    question: "IN PHIL 4 VS 11,  WHAT DOES THE AUTHOR SAID HE HAS LEARNED HOW TO BE IN ANY SITUATION?",
    options: { A: "THANKFUL", B: "PRAYERFUL", C: "MODERATE", D: "CONTENT" },
    correct: "D"
  },
  {
    question: "Brethren, I count not myself to have apprehended: but this one thing I do, forgetting those things which are behind and reaching forth unto those things which are before, is found where ?",
    options: { A: "Phil 1 vs 13", B: "Phil 3 vs 13", C: "Phil 4 vs 13", D: "Phil 2 vs 13" },
    correct: "B"
  },
  {
    question: "THE BOOK OF PHILLIPIANS CHAPTER 4 HAS HOW MANY VERSE ?",
    options: { A: "20", B: "23", C: "22", D: "21" },
    correct: "B"
  },
  {
    question: "WHAT IS THE ULTIMATE GOAL OF APOSTLE PAUL IN PHILIPIANS 3 VS 14",
    options: { A: "TO MAINTAIN HIS CALLING", B: "TO ATTAIN GOD'S CALLING", C: "TO ACHEIVE GOD'S CALLING", D: "TO ATTAIN THE PRIZE OF THE HIGH CALLING" },
    correct: "D"
  },
  {
    question: "WHERE CAN WE FIND THIS VERSE THOSE THINGS WHICH YE HAVE BOTH LEARNED AND RECIEVED AND HEARD AND SEEN IN ME, DO: AND -------",
    options: { A: "PHILLIPIANS 3 VS 9", B: "PHILLIPIANS 2 VS 9", C: "PHILLIPIANS 4 VS 9", D: "PHILLIPIANS 1 VS 9" },
    correct: "C"
  },
  {
    question: "THE BOOK OF PHILLIPPIANS CHAPTER 3 CONSIST OF HOW MANY VERSES",
    options: { A: "20", B: "30", C: "21", D: "31" },
    correct: "C"
  },
  {
    question: "IN THE BEGINNING OF THE GOSPEL OF APOSTLE PAUL, WHICH OF THE CHURCH SENT HIM GIFT WHEN HE DEPARTED FROM MACEDONIA",
    options: { A: "PHILIPPIANS ", B: "MECEDONIA", C: "THESSALONIANS", D: "EPHESIAN" },
    correct: "A"
  },
  {
    question: "APOSTLE PAUL WHILE HE WAS IN THESSALONICA RECIEVE A GIFT FROM THE BELIEVERS IN PHILIP WHICH HE WAS AS A WELL PLEASING SACRIFICE UNTO GOD, WHAT IS THE NAME OF THIS MAN",
    options: { A: "TIMOTHY", B: "CAESAR", C: "EPHAPHRODITUS", D: "EUODIAS" },
    correct: "C"
  },
  {
    question: "IN PHILIPPIAN 4 VS 6, WHAT DOES APOSTLE PAUL SAYS ABOUT BEEN WORRIED AS A BELIEVER",
    options: { A: "BE CAREFUL FOR NOTHING", B: "CAST ALL YOUR WORRIES ON HIM", C: "TRUST HIM TO SETTLE YOU", D: "WORRY LESS" },
    correct: "A"
  },
  {
    question: "PHILIPPIAN CHAPTER 2 HAS HOW MANY VERSES",
    options: { A: "31", B: "21", C: "30", D: "22" },
    correct: "C"
  },

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
