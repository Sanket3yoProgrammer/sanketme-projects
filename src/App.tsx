import { motion } from "framer-motion";

export default function YoSphereLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white text-center p-6">
      <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-400">
        <div className="relative">
          <img 
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/blue-background-oil-abstraction-free-image.jpeg?w=600&quality=80" 
            alt="Background" 
            className="w-full h-32 object-cover" 
          />
          <img 
            src="https://github.com/sanket3yoprogrammer.png" 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -bottom-12"
          />
        </div>
        <div className="p-6 pt-16 text-center">
          <motion.h1 
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Yo Sphere
          </motion.h1>
          <motion.p 
            className="text-lg max-w-sm mx-auto mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Yo, it's <span className="font-semibold">Sanket3YoProgrammer</span>. I'm Sanket Kumar Padhan, 
            a passionate developer, tech enthusiast, and problem solver. I love crafting innovative 
            digital experiences and exploring the endless possibilities of the web.
          </motion.p>
          <div className="flex justify-center gap-4">
            <a href="/portfolio" className="shiny-cta">My Portfolio</a>
            <a href="/projects" className="shiny-cta">My Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}
