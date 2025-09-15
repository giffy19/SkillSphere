import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import InterviewHub from "./pages/InterviewHub";
import QuizPage from "./pages/QuizPage";
import QuizCategories from "./pages/QuizCategories";

function App() {
  // If running locally → use "/", otherwise "/SkillSphere"
  const base = window.location.hostname === "localhost" ? "/" : "/SkillSphere";

  return (
    <Router basename={base}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:category" element={<QuizPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/interview" element={<InterviewHub />} />
        <Route path="/categories" element={<QuizCategories />} />
      </Routes>
    </Router>
  );
}

export default App;
