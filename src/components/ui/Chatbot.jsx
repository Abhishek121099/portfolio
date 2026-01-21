import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiUser } from 'react-icons/fi';
import { profile } from '../../data/profile';
import { experience } from '../../data/experience';
import { education, certifications } from '../../data/education';
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `Hi! I'm here to help you learn more about ${profile.name}. Ask me anything about his experience, skills, projects, education, or background!`
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAnswer = (question) => {
    const lowerQuestion = question.toLowerCase();

    // Name and Role
    if (lowerQuestion.includes('name') || lowerQuestion.includes('who are you')) {
      return `My name is ${profile.name}, and I'm a ${profile.role} based in ${profile.location}.`;
    }

    if (lowerQuestion.includes('role') || lowerQuestion.includes('what do you do') || lowerQuestion.includes('profession')) {
      return `I'm a ${profile.role} with experience in building clean, responsive, and reliable web applications. I work primarily with React and modern JavaScript (ES6+).`;
    }

    if (lowerQuestion.includes('location') || lowerQuestion.includes('where') || lowerQuestion.includes('based')) {
      return `I'm currently based in ${profile.location}.`;
    }

    // Experience
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('job')) {
      let response = 'Here\'s my professional experience:\n\n';
      experience.forEach((exp) => {
        response += `• ${exp.position} at ${exp.company} (${exp.period})\n`;
      });
      return response;
    }

    if (lowerQuestion.includes('weblink') || lowerQuestion.includes('current')) {
      const currentExp = experience.find(exp => exp.company === 'Weblink Pvt Ltd');
      if (currentExp) {
        return `I'm currently working as a ${currentExp.position} at ${currentExp.company} (${currentExp.period}). My responsibilities include: ${currentExp.responsibilities.slice(0, 3).join(', ')}.`;
      }
    }

    // Skills
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech stack') || lowerQuestion.includes('what can you do')) {
      let response = 'Here are my key skills:\n\n';
      Object.keys(skills).forEach((category) => {
        response += `${category}:\n`;
        skills[category].forEach((skill) => {
          response += `• ${skill}\n`;
        });
        response += '\n';
      });
      return response;
    }

    if (lowerQuestion.includes('react')) {
      return 'Yes! I specialize in React development. I work with React, JavaScript (ES6+), and build reusable components, intuitive user interfaces, and performance-friendly designs.';
    }

    if (lowerQuestion.includes('javascript') || lowerQuestion.includes('js')) {
      return 'I work extensively with modern JavaScript (ES6+), including features like arrow functions, destructuring, async/await, and more.';
    }

    // Projects
    if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio') || lowerQuestion.includes('work sample')) {
      let response = 'Here are some of my featured projects:\n\n';
      projects.slice(0, 4).forEach((project) => {
        response += `• ${project.title}: ${project.description}\n`;
      });
      response += '\nYou can check out the Projects section for more details!';
      return response;
    }

    if (lowerQuestion.includes('vetconnect')) {
      const project = projects.find(p => p.title.toLowerCase().includes('vetconnect'));
      if (project) {
        return `${project.title}: ${project.description}. Key highlights: ${project.highlights.slice(0, 2).join(', ')}.`;
      }
    }

    // Education
    if (lowerQuestion.includes('education') || lowerQuestion.includes('degree') || lowerQuestion.includes('university') || lowerQuestion.includes('qualification')) {
      let response = 'Here\'s my educational background:\n\n';
      education.forEach((edu) => {
        response += `• ${edu.degree} from ${edu.institution} (Completed ${edu.completed})\n`;
      });
      response += '\nCertifications:\n';
      certifications.forEach((cert) => {
        response += `• ${cert.name} - ${cert.provider}\n`;
      });
      return response;
    }

    // Contact
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach') || lowerQuestion.includes('get in touch')) {
      return `You can reach me at:\n• Email: ${profile.email}\n• Phone: ${profile.phone}\n• LinkedIn: ${profile.linkedin}\n• GitHub: ${profile.github}\n\nOr use the contact form on this page!`;
    }

    if (lowerQuestion.includes('linkedin')) {
      return `You can connect with me on LinkedIn: ${profile.linkedin}`;
    }

    if (lowerQuestion.includes('github')) {
      return `Check out my GitHub profile: ${profile.github}`;
    }

    // About
    if (lowerQuestion.includes('about') || lowerQuestion.includes('tell me about') || lowerQuestion.includes('background')) {
      return profile.summary;
    }

    // Design Sprints
    if (lowerQuestion.includes('design sprint') || lowerQuestion.includes('innovation')) {
      return 'I\'ve participated in design sprints including the Brisbane Botanical Garden App Design Sprint and the Student Wellbeing App project at James Cook University. Check out the Design Sprints section for more details!';
    }

    // Default responses
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi') || lowerQuestion.includes('hey')) {
      return `Hello! I'm here to help you learn more about ${profile.name}. What would you like to know?`;
    }

    if (lowerQuestion.includes('help')) {
      return 'I can answer questions about:\n• Experience and work history\n• Skills and technologies\n• Projects and portfolio\n• Education and certifications\n• Contact information\n• Design sprints\n\nJust ask me anything!';
    }

    // Fallback
    return `I'm not sure about that specific question. I can help you with information about ${profile.name}'s experience, skills, projects, education, or contact details. Try asking about one of those topics!`;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: input
    };
    setMessages(prev => [...prev, userMessage]);

    // Get bot response
    const botResponse = {
      type: 'bot',
      text: getAnswer(input)
    };

    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chatbot"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FiUser className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Portfolio Assistant</h3>
                <p className="text-white/80 text-xs">Ask me anything!</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center"
                  aria-label="Send message"
                >
                  <FiSend size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

