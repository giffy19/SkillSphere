import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Example questions by category
const quizData = {
  aptitude: [
    {
      question: "What is 10% of 250?",
      options: ["25", "20", "15", "30"],
      answer: "25",
    },
    {
      question: "If a train travels 60km in 1 hour, how far in 3 hours?",
      options: ["120km", "180km", "90km", "150km"],
      answer: "180km",
    },
  ],
  coding: [
    {
      question: "Which keyword declares a variable in JavaScript?",
      options: ["var", "int", "float", "char"],
      answer: "var",
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Text Markup Leveler",
      ],
      answer: "Hyper Text Markup Language",
    },
  ],
};

const transition = { duration: 0.5, type: "spring" };

const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const questions = quizData[category] || [];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleOptionClick = (option) => setSelected(option);

  const handleNext = () => {
    if (selected === questions[current].answer) setScore((s) => s + 1);
    setSelected("");
    if (current < questions.length - 1) setCurrent((c) => c + 1);
    else setFinished(true);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent((c) => c - 1);
    setSelected("");
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected("");
    setScore(0);
    setFinished(false);
  };

  if (!questions.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={transition}
        className="bg-white rounded-lg shadow-lg p-6 mt-6 max-w-md mx-auto text-center"
      >
        <h1 className="text-2xl font-bold mb-2">Quiz Page</h1>
        <p className="mb-4 text-gray-600">No questions found for this category.</p>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded hover:scale-105 transition-transform"
          onClick={() => navigate("/")}
        >
          Back to Categories
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl shadow-2xl p-8 mt-8 max-w-md mx-auto"
    >
      <h1 className="text-3xl font-extrabold mb-4 text-center capitalize text-blue-700 drop-shadow">
        {category} Quiz
      </h1>
      <p className="mb-6 text-center text-blue-900 font-medium">
        Answer the questions for your selected category.
      </p>
      <AnimatePresence mode="wait">
        {finished ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={transition}
            className="text-center"
          >
            <h2 className="text-xl font-semibold mb-2 animate-bounce">🎉 Quiz Complete!</h2>
            <p className="mb-4 text-lg font-bold text-green-700">
              Your score: {score} / {questions.length}
            </p>
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded hover:scale-105 transition-transform"
              onClick={handleRestart}
            >
              Try Again
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={transition}
          >
            <h2 className="text-lg font-semibold mb-4">{questions[current].question}</h2>
            <div className="flex flex-col gap-2 mb-4">
              {questions[current].options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`py-2 px-4 rounded border shadow ${
                    selected === option
                      ? "bg-blue-600 text-white animate-pulse"
                      : "bg-gray-100 hover:bg-blue-200"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </motion.button>
              ))}
            </div>
            <div className="flex justify-between mb-2">
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:scale-105 transition-transform"
                onClick={handlePrev}
                disabled={current === 0}
              >
                Previous
              </button>
              <button
                className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded hover:scale-105 transition-transform"
                onClick={handleNext}
                disabled={!selected}
              >
                {current < questions.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
            <div className="text-right text-sm text-gray-500">
              Question {current + 1} / {questions.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizPage;