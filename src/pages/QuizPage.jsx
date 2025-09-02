import React, { useState } from "react";
import "./QuizPage.css";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


const questionsData = {
  aptitude: [
    { question: "What is 25% of 200?", options: ["25", "50", "75", "100"], answer: "50" },
    { question: "If 5x = 20, what is x?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "The average of 10, 20, 30 is?", options: ["15", "20", "25", "30"], answer: "20" },
    { question: "Ratio of 2:3 means?", options: ["2/5", "3/2", "2/3", "5/2"], answer: "2/3" },
    { question: "Simplify: 15 + (6 ÷ 2)", options: ["16", "18", "20", "21"], answer: "18" },
    { question: "The LCM of 4 and 6 is?", options: ["6", "8", "12", "24"], answer: "12" },
    { question: "Square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
    { question: "If SP > CP, then there is?", options: ["Profit", "Loss", "Equal", "None"], answer: "Profit" },
    { question: "Work done = Force × ?", options: ["Mass", "Distance", "Speed", "Time"], answer: "Distance" },
    { question: "The probability of getting head in coin toss?", options: ["0", "0.25", "0.5", "1"], answer: "0.5" },
    { question: "Area of square with side 4?", options: ["8", "12", "16", "20"], answer: "16" },
    { question: "Perimeter of rectangle 4×6?", options: ["10", "16", "20", "24"], answer: "20" },
    { question: "What is 3³?", options: ["6", "9", "27", "81"], answer: "27" },
    { question: "Speed = Distance ÷ ?", options: ["Time", "Force", "Work", "Mass"], answer: "Time" },
    { question: "HCF of 12 and 16?", options: ["2", "4", "6", "8"], answer: "4" },
  ],
  coding: [
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All"], answer: "All" },
    { question: "Output of 2+2+'2'?", options: ["22", "24", "42", "Error"], answer: "42" },
    { question: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue" },
    { question: "Which loop runs at least once?", options: ["for", "while", "do-while", "foreach"], answer: "do-while" },
    { question: "Which symbol is used for comments in JS?", options: ["//", "/*", "#", "<!--"], answer: "//" },
    { question: "In Python, what does len('hello') return?", options: ["4", "5", "6", "Error"], answer: "5" },
    { question: "Which keyword is used in Java to inherit a class?", options: ["implements", "extends", "inherits", "using"], answer: "extends" },
    { question: "Time complexity of binary search?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: "O(log n)" },
    { question: "Which is not OOP concept?", options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"], answer: "Compilation" },
    { question: "Which language runs in the browser?", options: ["Python", "C++", "JavaScript", "Java"], answer: "JavaScript" },
    { question: "Which sorting algorithm is fastest on average?", options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Selection Sort"], answer: "Quick Sort" },
    { question: "Which data type is immutable in Python?", options: ["List", "Set", "Tuple", "Dictionary"], answer: "Tuple" },
    { question: "In C, which operator is used for address of variable?", options: ["*", "&", "%", "@"], answer: "&" },
    { question: "HTML stands for?", options: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlinking Text Mark Language", "None"], answer: "Hyper Text Markup Language" },
    { question: "Which is not a database?", options: ["MySQL", "MongoDB", "Oracle", "React"], answer: "React" },
  ],
  itcore: [
    { question: "Full form of DBMS?", options: ["Database Management System", "Data Backup Main Server", "Disk Base Memory System", "None"], answer: "Database Management System" },
    { question: "Which is not an OS?", options: ["Linux", "Windows", "Oracle", "MacOS"], answer: "Oracle" },
    { question: "Which layer does IP work on?", options: ["Application", "Transport", "Network", "Data Link"], answer: "Network" },
    { question: "Which protocol is used for email?", options: ["HTTP", "SMTP", "FTP", "SSH"], answer: "SMTP" },
    { question: "Which memory is volatile?", options: ["ROM", "Cache", "RAM", "Hard Disk"], answer: "RAM" },
    { question: "Which SQL command is used to remove a table?", options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"], answer: "DROP" },
    { question: "Which is not a programming language?", options: ["C", "Python", "Java", "MS Excel"], answer: "MS Excel" },
    { question: "Which topology uses a central hub?", options: ["Bus", "Ring", "Star", "Mesh"], answer: "Star" },
    { question: "Primary key in DB is?", options: ["Unique", "Duplicate", "Nullable", "Optional"], answer: "Unique" },
    { question: "Which of these is not a cloud provider?", options: ["AWS", "Azure", "Google Cloud", "Linux"], answer: "Linux" },
    { question: "TCP works at which layer?", options: ["Network", "Transport", "Data Link", "Application"], answer: "Transport" },
    { question: "Which one is a NoSQL database?", options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"], answer: "MongoDB" },
    { question: "Firewall works at which layer?", options: ["Network", "Application", "Physical", "Data Link"], answer: "Network" },
    { question: "Which is not a type of OS?", options: ["Batch", "Real-time", "Time-sharing", "Compilation"], answer: "Compilation" },
    { question: "IPv4 address size?", options: ["32-bit", "64-bit", "128-bit", "256-bit"], answer: "32-bit" },
  ],
  engineering: [
    { question: "Unit of Force?", options: ["Newton", "Pascal", "Joule", "Watt"], answer: "Newton" },
    { question: "Thermodynamics deals with?", options: ["Motion", "Heat & Work", "Electricity", "Waves"], answer: "Heat & Work" },
    { question: "Ohm’s Law: V = ?", options: ["IR", "VI", "R/I", "I/R"], answer: "IR" },
    { question: "Unit of Power?", options: ["Watt", "Volt", "Ampere", "Newton"], answer: "Watt" },
    { question: "Which is a civil engineering structure?", options: ["Transformer", "Bridge", "Motor", "Transistor"], answer: "Bridge" },
    { question: "Bernoulli’s principle is in?", options: ["Mechanics", "Fluid Mechanics", "Thermodynamics", "Circuits"], answer: "Fluid Mechanics" },
    { question: "Which is a semiconductor?", options: ["Silicon", "Iron", "Copper", "Aluminum"], answer: "Silicon" },
    { question: "First law of thermodynamics is about?", options: ["Entropy", "Energy Conservation", "Mass", "Heat Transfer"], answer: "Energy Conservation" },
    { question: "In mechanics, Torque = ?", options: ["Force × Distance", "Mass × Acceleration", "Work × Time", "Power × Force"], answer: "Force × Distance" },
    { question: "Pascal is unit of?", options: ["Pressure", "Force", "Energy", "Velocity"], answer: "Pressure" },
    { question: "What does CAD stand for?", options: ["Computer Aided Design", "Central Automatic Device", "Circuit And Design", "None"], answer: "Computer Aided Design" },
    { question: "Which law defines current, voltage, resistance?", options: ["Faraday’s Law", "Newton’s Law", "Ohm’s Law", "Hooke’s Law"], answer: "Ohm’s Law" },
    { question: "In EEE, AC means?", options: ["Alternative Current", "Alternating Current", "Applied Current", "Active Current"], answer: "Alternating Current" },
    { question: "Bridge circuit is used to measure?", options: ["Temperature", "Resistance", "Voltage", "Power"], answer: "Resistance" },
    { question: "Reynolds number is used in?", options: ["Fluid flow", "Electricity", "Thermal", "Mechanics"], answer: "Fluid flow" },
  ],
};



const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();



  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false); // ✅ new state

  const questions = questionsData[category] || [];

  const handleAnswer = (selected) => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowDashboard(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowDashboard(false);
    setShowAnswers(false);
  };

  return (
    <div className="quiz-container">
      <Button onClick={() => navigate("/Home")}>Back to Categories</Button>
{/* <Button onClick={() => navigate("/dashboard")}>Back to Dashboard</Button> */}

      {!showDashboard ? (
        <div>
          <h2>{category.toUpperCase()} Quiz</h2>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <p>
            Question {currentQ + 1} of {questions.length}
          </p>
          <h3>{questions[currentQ].question}</h3>
          <div className="options">
            {questions[currentQ].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : !showAnswers ? (
        <div className="dashboard">
          <h2>📊 Performance Dashboard</h2>
          <p>Total Questions: {questions.length}</p>
          <p>Correct Answers: {score}</p>
          <p>Accuracy: {((score / questions.length) * 100).toFixed(2)}%</p>

          <button onClick={restartQuiz}>🔄 Try Again</button>
          <button onClick={() => setShowAnswers(true)}>👀 View Answers</button>
          {/* <button onClick={() => navigate("/quiz")}>🔙 Return to Categories</button> */}
        </div>
      ) : (
        <div className="answers">
          <h2>✅ Correct Answers</h2>
          <ul>
            {questions.map((q, index) => (
              <li key={index}>
                <strong>Q{index + 1}:</strong> {q.question} <br />
                <span className="answer">Answer: {q.answer}</span>
              </li>
            ))}
          </ul>

          <button onClick={restartQuiz}>🔄 Restart Quiz</button>
          <button onClick={() => navigate("/quiz")}>🔙 Back to Categories</button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;