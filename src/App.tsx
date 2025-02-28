import { motion } from "framer-motion";
  
export default function YoSphereLanding() {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white text-center p-6">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Yo Sphere
      </motion.h1>
      <motion.p 
        className="text-lg max-w-2xl mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Yo, it's <span className="font-semibold">Sanket3YoProgrammer</span>. I'm Sanket Kumar Padhan, 
        a passionate developer, tech enthusiast, and problem solver. I love crafting innovative 
        digital experiences and exploring the endless possibilities of the web.
      </motion.p>
      <div className="flex gap-4">
        <a href="/portfolio" className="shiny-cta">My Portfolio</a>
        <a href="/projects" className="shiny-cta">My Projects</a>
      </div>
    </div>
  );
}
