import { motion } from "framer-motion";

export default function YoSphereLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-700 text-white text-center p-6">
      <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-opacity-90 backdrop-blur-lg border border-gray-700">
        <div className="relative">
          <img 
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/blue-background-oil-abstraction-free-image.jpeg?w=600&quality=80" 
            alt="Background" 
            className="w-full h-48 object-cover rounded-t-3xl"
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-36 h-36 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-700 shadow-2xl">
            <img 
              src="https://github.com/sanket3yoprogrammer.png" 
              alt="Profile" 
              className="w-full h-full rounded-full border-4 border-gray-900 object-cover"
            />
          </div>
        </div>
        <div className="p-8 pt-24 bg-gray-900 bg-opacity-90 rounded-b-3xl shadow-lg">
          <motion.h1 
            className="text-5xl font-extrabold tracking-wider text-blue-400 drop-shadow-lg font-[Poppins]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Yoi! Welcome
          </motion.h1>
          <motion.p 
            className="text-lg max-w-lg mx-auto mt-4 text-gray-300 font-[Raleway]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Yo, it's <span className="font-semibold text-white">Sanket3YoProgrammer</span>. I'm Sanket Kumar Padhan, 
            a passionate developer, tech enthusiast, and problem solver. I love crafting innovative 
            digital experiences and exploring the endless possibilities of the web.
          </motion.p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="/portfolio" className="shiny-cta">My Portfolio</a>
            <a href="/projects" className="shiny-cta">My Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}
