import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import InterviewHub from "./pages/InterviewHub";
import QuizPage from "./pages/QuizPage";
import QuizCategories from "./pages/QuizCategories";

function App() {
  // Use basename only if deployed on GitHub Pages
  const basename = import.meta.env.MODE === "production" ? "/SkillSphere" : "/";

  return (
    <Router basename={basename}>
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

export default App; // <-- THIS LINE WAS MISSING
