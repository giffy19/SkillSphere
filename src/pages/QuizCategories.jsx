import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Aptitude", path: "/quiz/aptitude" },
  { name: "Coding", path: "/quiz/coding" },
  { name: "IT Core", path: "/quiz/itcore" },
  { name: "Engineering", path: "/quiz/engineering" },
];

const extras = [
  { name: "Chatbot", path: "/chatbot" },
  { name: "Interview Hub", path: "/interview" },
];

const QuizCategories = () => {
  return (
    <div className="quiz-categories">
      <h1>Quiz Categories</h1>
      <p>Choose a category:</p>
      <ul className="categories-list">
        {categories.map((cat) => (
          <li key={cat.name}>
            <Link to={cat.path}>{cat.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Extras</h2>
      <ul className="extras-list">
        {extras.map((extra) => (
          <li key={extra.name}>
            <Link to={extra.path}>{extra.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizCategories;
