import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const InteractiveChatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hello! I’m your English Tutor. Type a sentence in English and I’ll correct it. I can also pronounce it in your chosen language with spelling help." }
  ]);
  const [input, setInput] = useState("");
  const [selectedLang, setSelectedLang] = useState("en-US"); // default
  const recognitionRef = useRef(null);


  
  // Available languages for pronunciation
  const languages = [
    { code: "en-US", name: "English (US)", phonetic: "Good morning → gud mor-ning" },
    { code: "en-GB", name: "English (UK)", phonetic: "Good morning → guud maw-ning" },
    { code: "en-IN", name: "English (India)", phonetic: "Good morning → gud mor-ning (Indian accent)" },
    { code: "es-ES", name: "Spanish", phonetic: "Good morning → goo mohr-neeng" },
    { code: "fr-FR", name: "French", phonetic: "Good morning → gud mor-neeng (rolled r)" },
    { code: "de-DE", name: "German", phonetic: "Good morning → goot mor-ning" },
    { code: "it-IT", name: "Italian", phonetic: "Good morning → guud mor-neeng" },
    { code: "ja-JP", name: "Japanese", phonetic: "Good morning → gu-do mo-ni-n-gu" },
    { code: "ko-KR", name: "Korean", phonetic: "Good morning → gu-deu mo-ni-ng" }
  ];

  // Speech recognition setup
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      recognitionRef.current = recognition;

      recognition.onresult = (event) => {
        const speechText = event.results[0][0].transcript;
        handleUserInput(speechText);
      };
    }
  }, []);

  // Add messages
  const addMessage = (from, text) => {
    setMessages(prev => [...prev, { from, text }]);
  };

  // Handle user input
  const handleUserInput = (text) => {
    if (!text.trim()) return;
    addMessage("user", text);

    setTimeout(() => {
      let corrected = correctSentence(text);
      addMessage("bot", corrected);

      // Speak the corrected sentence in the selected language
      speakWords(corrected, selectedLang);

      // Show phonetic spelling
      const phonetic = getPhonetic(selectedLang, text);
      if (phonetic) {
        addMessage("bot", `📖 Pronunciation in ${getLangName(selectedLang)}: [${phonetic}]`);
      }

      // Add follow-up interactive practice
      const followUp = getFollowUp();
      setTimeout(() => addMessage("bot", followUp), 1500);
    }, 1000);
  };

  // Simple correction logic
  const correctSentence = (sentence) => {
    let lower = sentence.toLowerCase();

    if (lower.includes("i is")) {
      return "❌ Wrong: 'I is'. ✅ Correct: 'I am'.";
    } else if (lower.includes("he go")) {
      return "❌ Wrong: 'He go'. ✅ Correct: 'He goes'.";
    } else if (sentence.trim().length < 3) {
      return "That doesn’t look like a sentence 🤔. Try writing a full one.";
    } else {
      return `✅ Good sentence! "${sentence}"`;
    }
  };

  // Follow-up practice prompts
  const getFollowUp = () => {
    const prompts = [
      "👉 Can you make this into a question?",
      "👉 Try saying it in past tense.",
      "👉 Add one more sentence to continue your thought.",
      "👉 Can you say it in a polite way?",
      "👉 Now try pronouncing the word 'pronunciation' correctly 😃."
    ];
    return prompts[Math.floor(Math.random() * prompts.length)];
  };

  // Text-to-speech in selected language
  const speakWords = (sentence, lang) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.lang = lang; // use selected language
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Get phonetic spelling based on language
  const getPhonetic = (lang, sentence) => {
    const langData = languages.find(l => l.code === lang);
    return langData ? langData.phonetic : null;
  };

  // Get language name
  const getLangName = (code) => {
    const lang = languages.find(l => l.code === code);
    return lang ? lang.name : code;
  };

  const startListening = () => {
    if (recognitionRef.current) recognitionRef.current.start();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserInput(input);
    setInput("");
  };

  

  return (
    <div className="chatbot-container">
      <h2>🗣️ English Tutor Bot</h2>

      <div className="lang-select">
        <label>Select Pronunciation Language: </label>
        <select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)}>
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>

      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>

      
    
      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate("/")} // navigates to home page
      >
        ⬅ Back to Home
      </button>
      
    
  

      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          placeholder="Type a sentence in English..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send 📨</button>
        <button type="button" onClick={startListening}>🎤 Speak</button>
      </form>
    </div>
  );
};

export default InteractiveChatbot;
