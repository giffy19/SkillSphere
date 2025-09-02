import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
    <div className="font-bold text-lg mb-2 sm:mb-0">React Chatbot</div>
    <div className="flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/chatbot" className="hover:underline">Chatbot</Link>
      <Link to="/interview" className="hover:underline">Interview Hub</Link>
    </div>
  </nav>
);

export default Navbar;