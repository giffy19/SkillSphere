import React, { useState, useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Chatbot.css';
const EnglishTutorChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isVoiceActive, setIsVoiceActive] = useState(true);
  const [activeFeature, setActiveFeature] = useState('grammar');
  const messagesEndRef = useRef(null);

  // Speech recognition setup
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const languages = ['English', 'Tamil', 'Hindi', 'Spanish', 'French', 'German'];
  
  // Common grammar mistakes and corrections
  const commonGrammarMistakes = {
    'your welcome': 'you\'re welcome',
    'could of': 'could have',
    'should of': 'should have',
    'would of': 'would have',
    'their is': 'there is',
    'their are': 'there are',
    'its good': 'it\'s good',
    'i am good': 'I am good',
    'i like': 'I like',
    'me and my friend': 'my friend and I',
    'less people': 'fewer people',
    'between you and i': 'between you and me'
  };

  // Common pronunciation challenges
  const pronunciationTips = {
    'th': 'Place your tongue between your teeth and blow air out',
    'r': 'Curl your tongue back without touching the roof of your mouth',
    'l': 'Touch the tip of your tongue to the ridge behind your upper teeth',
    'v': 'Place your top teeth on your bottom lip and vibrate vocal cords',
    'w': 'Make your lips into a small circle while keeping teeth apart'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Update input text when speech is recognized
  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
    }
  }, [transcript]);

  // Check for grammar mistakes and provide corrections
  const checkGrammar = (text) => {
    let corrections = [];
    let correctedText = text;
    
    // Check for common mistakes
    Object.keys(commonGrammarMistakes).forEach(mistake => {
      const regex = new RegExp(`\\b${mistake}\\b`, 'gi');
      if (regex.test(text)) {
        corrections.push({
          mistake: mistake,
          correction: commonGrammarMistakes[mistake],
          explanation: `"${mistake}" is incorrect. The proper form is "${commonGrammarMistakes[mistake]}".`
        });
        correctedText = correctedText.replace(regex, commonGrammarMistakes[mistake]);
      }
    });
    
    // Check for basic punctuation and capitalization
    if (!text.match(/^[A-Z]/)) {
      corrections.push({
        mistake: text.charAt(0),
        correction: text.charAt(0).toUpperCase(),
        explanation: "Sentences should begin with a capital letter."
      });
      correctedText = correctedText.charAt(0).toUpperCase() + correctedText.slice(1);
    }
    
    // Check for missing period at the end
    if (!text.match(/[.!?]$/) && text.length > 5) {
      corrections.push({
        mistake: "Missing punctuation",
        correction: ".",
        explanation: "Sentences should end with proper punctuation (.!?)."
      });
      correctedText += '.';
    }
    
    return { correctedText, corrections };
  };

  // Get pronunciation tips for specific sounds
  const getPronunciationTips = (text) => {
    const tips = [];
    const words = text.toLowerCase().split(' ');
    
    words.forEach(word => {
      Object.keys(pronunciationTips).forEach(sound => {
        if (word.includes(sound)) {
          tips.push({
            sound: sound,
            word: word,
            tip: pronunciationTips[sound]
          });
        }
      });
    });
    
    return tips;
  };

  // Real API integration for advanced grammar checking
  const getBotResponse = async (userMessage) => {
    setIsTyping(true);
    
    // First, check for basic grammar mistakes
    const { correctedText, corrections } = checkGrammar(userMessage);
    const pronunciationTips = getPronunciationTips(userMessage);
    
    let responseText = '';
    
    // If we found grammar mistakes
    if (corrections.length > 0) {
      responseText = `I noticed some areas to improve in your sentence:\n\n`;
      
      corrections.forEach((correction, index) => {
        responseText += `${index + 1}. ${correction.explanation}\n`;
      });
      
      responseText += `\nCorrected sentence: "${correctedText}"\n\n`;
      
      // Add pronunciation tips if needed
      if (pronunciationTips.length > 0) {
        responseText += `Pronunciation tips:\n`;
        pronunciationTips.forEach((tip, index) => {
          responseText += `- For "${tip.sound}" sound in "${tip.word}": ${tip.tip}\n`;
        });
      }
      
      responseText += `\nWould you like me to explain any of these rules in more detail?`;
    } 
    // If no obvious mistakes, provide general feedback
    else {
      responseText = `Great job! Your sentence "${userMessage}" is grammatically correct.\n\n`;
      
      // Still provide pronunciation tips if applicable
      if (pronunciationTips.length > 0) {
        responseText += `Pronunciation tips for your sentence:\n`;
        pronunciationTips.forEach((tip, index) => {
          responseText += `- For "${tip.sound}" sound in "${tip.word}": ${tip.tip}\n`;
        });
      } else {
        responseText += `Your pronunciation should be clear for this sentence. Keep practicing!`;
      }
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsTyping(false);
    return responseText;
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    const userMessage = {
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    resetTranscript();

    // Get bot response
    const responseText = await getBotResponse(inputText);
    
    const botMessage = {
      text: responseText,
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);

    // Read response aloud if voice is active
    if (isVoiceActive) {
      speakResponse(responseText);
    }
  };

  // Function to speak the response
  const speakResponse = (text) => {
    if ('speechSynthesis' in window) {
      // First, speak the corrected version clearly
      const { correctedText } = checkGrammar(inputText);
      const speech = new SpeechSynthesisUtterance();
      speech.text = correctedText || text;
      speech.volume = 1;
      speech.rate = 0.9; // Slower for teaching
      speech.pitch = 1;
      speech.lang = 'en-US';
      
      window.speechSynthesis.speak(speech);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleVoice = () => {
    setIsVoiceActive(!isVoiceActive);
    if (!isVoiceActive) {
      speakResponse("Voice mode activated. I will now pronounce corrections.");
    }
  };

  const startListening = () => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.startListening({ language: 'en-US' });
    } else {
      alert("Your browser doesn't support speech recognition. Please use Chrome or Edge.");
    }
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    if (inputText.trim() !== '') {
      handleSendMessage();
    }
  };

  const provideGrammarLesson = (topic) => {
    let lessonText = '';
    
    switch(topic) {
      case 'tenses':
        lessonText = "English has 12 verb tenses. The most common are:\n\n" +
                    "1. Present Simple: I work every day.\n" +
                    "2. Present Continuous: I am working now.\n" +
                    "3. Past Simple: I worked yesterday.\n" +
                    "4. Future Simple: I will work tomorrow.\n\n" +
                    "Which tense would you like to practice?";
        break;
      case 'articles':
        lessonText = "Articles (a, an, the) are used before nouns:\n\n" +
                    "- Use 'a' before words that begin with a consonant sound: a book, a university\n" +
                    "- Use 'an' before words that begin with a vowel sound: an apple, an hour\n" +
                    "- Use 'the' for specific things: the book you recommended\n\n" +
                    "Let's practice with some examples!";
        break;
      case 'prepositions':
        lessonText = "Prepositions show relationships between words:\n\n" +
                    "- Place: in the room, on the table, at the station\n" +
                    "- Time: at 3 PM, on Monday, in July\n" +
                    "- Direction: to school, from work, into the room\n\n" +
                    "Try using prepositions in a sentence!";
        break;
      default:
        lessonText = "I can help you with grammar topics like:\n\n" +
                    "- Verb tenses\n- Articles (a, an, the)\n- Prepositions\n- Sentence structure\n\n" +
                    "What would you like to learn about?";
    }
    
    const botMessage = {
      text: lessonText,
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, botMessage]);
    setActiveFeature('grammar');
    
    if (isVoiceActive) {
      speakResponse(lessonText);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="chatbot-container">
        <div className="browser-warning">
          Your browser doesn't support speech recognition. Please use Chrome or Edge.
        </div>
      </div>
    );
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <button className="back-button" onClick={() => window.location.href = '/'}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>English Tutor Bot</h2>
        <div className="language-selector">
          <select 
            value={selectedLanguage} 
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="chatbot-features">
        <div className="feature" onClick={() => provideGrammarLesson('tenses')}>
          <i className="fas fa-clock"></i>
          <span>Verb Tenses</span>
        </div>
        <div className="feature" onClick={() => provideGrammarLesson('articles')}>
          <i className="fas fa-file-word"></i>
          <span>Articles</span>
        </div>
        <div className="feature" onClick={() => provideGrammarLesson('prepositions')}>
          <i className="fas fa-map-marker-alt"></i>
          <span>Prepositions</span>
        </div>
        <div className="feature" onClick={toggleVoice}>
          <i className={isVoiceActive ? "fas fa-volume-up" : "fas fa-volume-mute"}></i>
          <span>Voice {isVoiceActive ? 'On' : 'Off'}</span>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.length === 0 && (
          <div className="welcome-message">
            <h3>Welcome to your English Tutor!</h3>
            <p>I can help you improve your English grammar, pronunciation, and speaking skills.</p>
            <div className="welcome-options">
              <button onClick={() => provideGrammarLesson('tenses')}>Learn Verb Tenses</button>
              <button onClick={() => provideGrammarLesson('articles')}>Practice Articles</button>
              <button onClick={() => provideGrammarLesson('prepositions')}>Study Prepositions</button>
            </div>
            <p className="instruction">Type or speak a sentence, and I'll help correct it!</p>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="message-content">
              <p>{message.text}</p>
              <span className="timestamp">{message.timestamp}</span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message bot">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type an English sentence or click the microphone to speak..."
        />
        <button onClick={handleSendMessage} className="send-button">
          <i className="fas fa-paper-plane"></i>
        </button>
        <button 
          onMouseDown={startListening}
          onMouseUp={stopListening}
          onTouchStart={startListening}
          onTouchEnd={stopListening}
          className={`voice-button ${listening ? 'listening' : ''}`}
        >
          <i className="fas fa-microphone"></i>
        </button>
      </div>
      
      {listening && (
        <div className="listening-indicator">
          <i className="fas fa-microphone"></i>
          <span>Listening... Speak your English sentence</span>
        </div>
      )}
    </div>
  );
};

export default EnglishTutorChatbot;