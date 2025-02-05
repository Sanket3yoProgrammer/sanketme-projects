import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Github, Heart, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: "Phg-web",
    description: "A web application with cool features",
    link: "https://phg-web.vercel.app/index.html"
  },
  {
    id: 2,
    name: "Yo-Chat",
    description: "A real-time chat application",
    link: "https://yo-phg-chat.vercel.app/chat"
  },
  {
    id: 3,
    name: "BMI Calculator",
    description: "A simple BMI calculator",
    link: "https://sanket3yoprogrammer.github.io/BmiCalculator/"
  },
  {
    id: 4,
    name: "Aggressor",
    description: "An advanced web-based platform",
    link: "https://aggressor.vercel.app/",
    adminLink: "https://admin-aggressor.vercel.app/"
  },
  {
    id: 5,
    name: "History Chapter 1 Timeline",
    description: "A timeline representation for History Chapter 1",
    link: "https://sanket3yoprogrammer.github.io/History-class-10/"
  },
  {
    id: 6,
    name: "History Chapter 2 Timeline",
    description: "A timeline representation for History Chapter 2",
    link: "https://sanket3yoprogrammer.github.io/Class10his2/"
  },
  {
    id: 7,
    name: "Uploadyoi",
    description: "A media upload platform",
    link: "https://adminuploadyoi.vercel.app/",
    galleryLink: "https://uploadyoi.vercel.app/"
  },
  {
    id: 8,
    name: "Galleryyoi",
    description: "A media gallery platform",
    link: "https://uploadyoi.vercel.app/",
  },
  {
    id: 9,
    name: "OAV-HK-JSG",
    description: "A web application with unique functionalities",
    link: "https://oav-hk-jsg.vercel.app/"
  },
  {
    id: 10,
    name: "Speech-to-Text Model",
    description: "An AI-powered speech-to-text converter",
    link: "https://speech-to-text-model-ten.vercel.app/"
  },
  {
    id: 11,
    name: "Face AI Detection",
    description: "A web app for face detection using AI",
    link: "https://face-ai-detection.netlify.app/"
  },
  {
    id: 12,
    name: "SanketCalc-AI",
    description: "An AI-powered calculator",
    link: "https://sanketcalc-ai.vercel.app/"
  },
  {
    id: 13,
    name: "Happy New Year",
    description: "A special New Year greeting web app",
    link: "https://happy-new-year-sand.vercel.app/"
  },
  {
    id: 14,
    name: "Thank You Page",
    description: "A simple thank you message webpage",
    link: "https://sanket3yoprogrammer.github.io/Thanku/"
  },
  {
    id: 15,
    name: "OAV-IMG-DB",
    description: "A cool web page for digital album of memories.",
    link: "https://oav-vault.vercel.app/"
  },  
  {
    id: 16,
    name: "More Projects",
    description: "Check out more projects in my repositories",
    link: "https://github.com/Sanket3yoProgrammer?tab=repositories"
  }
  
  
];


const techStack = [
  "React", "TypeScript", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "Docker", "AWS", "Git", "Tailwind CSS","HTML","CSS","JavaScript","Python",
];

function MobileMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="fixed inset-y-0 right-0 w-full sm:w-64 bg-black/95 dark:bg-white/95 backdrop-blur-lg z-40"
        >
          <div className="flex flex-col p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-gray-300 dark:text-gray-700 mb-8"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black"
              >
                About
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Navbar({ isOpen, setIsOpen, darkMode, toggleDarkMode }: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <nav className="fixed w-full bg-black/50 dark:bg-white/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white dark:text-gray-900 text-xl font-bold">Portfolio</Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black px-3 py-2">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black px-3 py-2">
              About
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-700/20 dark:hover:bg-gray-300/20"
            >
              {darkMode ? <Sun className="text-gray-300" /> : <Moon className="text-gray-700" />}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-700/20 dark:hover:bg-gray-300/20"
            >
              {darkMode ? <Sun className="text-gray-300" /> : <Moon className="text-gray-700" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white dark:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-16">
          <img 
            src="https://avatars.githubusercontent.com/u/152056082?v=4" 
            alt="Profile" 
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500 dark:border-blue-500"
          />
          <h1 className="text-4xl font-bold text-white dark:text-gray-100 mb-2">Sanket</h1>
          <p className="text-xl text-gray-500 dark:text-gray-300">A Developer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 dark:bg-gray-900 backdrop-blur-md p-6 rounded-lg"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold text-white dark:text-gray-100 mb-2">{project.name}</h3>
                <p className="text-gray-300 dark:text-gray-400">{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function About() {
  const [cursor, setCursor] = useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCursor(c => !c);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-black text-green-400 font-mono p-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              backgroundColor: 'rgba(0, 255, 0, 0.8)',
              opacity: Math.random(),
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-black/90 border border-green-400 p-8 rounded-lg shadow-lg shadow-green-500/50 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-lg"
          >
            <span className="text-green-500">root@Sanket-Portfolio</span>
            <span className="text-gray-300">:</span>
            <span className="text-blue-500">~</span>
            <span className="text-gray-300">$ whoami</span>
            <span className={`ml-1 animate-pulse ${cursor ? 'opacity-100' : 'opacity-0'}`}>▊</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-2 text-lg"
          >
            <p><span className="text-cyan-400">Name:</span> Sanket</p>
            <p><span className="text-cyan-400">Role:</span> Not!? A Full Stack Developer</p>
            <p><span className="text-cyan-400">Location:</span> India</p>
            <p><span className="text-cyan-400">Age:</span> 16</p>
            <p><span className="text-cyan-400">Experience:</span> 3+ years</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-lg"
          >
            <span className="text-green-500">root@Sanket-Portfolio</span>
            <span className="text-gray-300">:</span>
            <span className="text-blue-500">~</span>
            <span className="text-gray-300">$ ls tech-stack/</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="bg-green-500/20 border border-green-400 px-3 py-1 rounded-full text-green-300 shadow-lg shadow-green-500/30"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 to-purple-900' : 'bg-gradient-to-br from-blue-300 to-purple-300'} relative overflow-hidden`}> 
        <div className="fixed inset-0 -z-10">
          {darkMode ? (
            <>
              {[...Array(80)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 2}px`,
                    height: `${Math.random() * 3 + 2}px`,
                    backgroundColor: 'lime',
                    opacity: Math.random(),
                    animation: `twinkle ${Math.random() * 3 + 2}s infinite`
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent animate-pulse"></div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-purple-100 to-purple-200 opacity-50" />
          )}
        </div>

        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>

        <footer className="bg-black/70 dark:bg-white/20 backdrop-blur-lg py-6 mt-16 border-t border-green-500 shadow-lg shadow-green-500/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-300 dark:text-gray-200">
                <Mail size={20} />
                <a href="mailto:sanketkumarpadhan95@gmail.com" className="hover:text-white dark:hover:text-black">
                sanketkumarpadhan95@gmail.com
                </a>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <span className="text-gray-300 dark:text-gray-200">Made with</span>
                <Heart className="mx-1 text-red-400 animate-pulse" size={20} />
                <span className="text-gray-300 dark:text-gray-200">by</span>
                <a
                  href="https://github.com/sanket3yoprogrammer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center ml-1 text-green-400 dark:text-green-200 hover:text-green-300 dark:hover:text-green-200"
                >
                  @sanket3yoprogrammer
                  <Github className="ml-1" size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>

  );
}

export default App;