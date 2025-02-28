import { motion } from "framer-motion";

export default function YoSphereLanding() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-700 text-white text-center p-6">
      
      {/* Background Sphere Effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Example animated sphere, replace this with your effect */}
        <motion.div 
          className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-3xl rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </div>

      {/* Profile Card (Ensuring it stays at the highest z-index) */}
      <div className="relative z-20">
        <div className="relative">
          <img 
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/blue-background-oil-abstraction-free-image.jpeg?w=600&quality=80" 
            alt="Background" 
            className="w-full h-48 object-cover rounded-t-3xl shadow-inner"
          />
          <img 
            src="https://github.com/sanket3yoprogrammer.png" 
            alt="Profile" 
            className="w-32 h-32 rounded-full border-[10px] border-gray-900 shadow-2xl absolute left-1/2 transform -translate-x-1/2 -bottom-16"
          />
        </div>
        <div className="p-8 pt-20 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-b-3xl shadow-xl">
          <motion.h1 
            className="text-4xl font-bold mb-3 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Yo! Welcome
          </motion.h1>
          <motion.p 
            className="text-lg max-w-lg mx-auto mb-6 text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Yo, it's <span className="font-semibold text-white">Sanket3YoProgrammer</span>. I'm Sanket Kumar Padhan, 
            a passionate developer, tech enthusiast, and problem solver. I love crafting innovative 
            digital experiences and exploring the endless possibilities of the web.
          </motion.p>
          <div className="flex justify-center gap-6">
            <a href="https://sanket3yoprogrammer.vercel.app/" className="shiny-cta">My Portfolio</a>
            <a href="https://sanketme-projectportfolio.onrender.com/" className="shiny-cta">My Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}
