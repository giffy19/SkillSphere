
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import InterviewHub from "./pages/InterviewHub";
import QuizPage from "./pages/QuizPage";
import QuizCategories from "./pages/QuizCategories";


function App() {
  return (
    
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:category" element={<QuizPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/interview" element={<InterviewHub />} />
<Route path="/" element={<Home />} />
<Route path="/Home" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
