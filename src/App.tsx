import { motion } from "framer-motion";
import "@fontsource/dancing-script"; // Calligraphy font
import "@fontsource/parisienne"; // Elegant cursive font

export default function YoSphereLanding() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-700 text-white text-center p-6">
      <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-opacity-90 backdrop-blur-lg border border-gray-700 p-1 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="relative rounded-t-3xl overflow-hidden">
          <img 
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/blue-background-oil-abstraction-free-image.jpeg?w=600&quality=80" 
            alt="Background" 
            className="w-full h-48 object-cover brightness-75"
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-40 h-40 rounded-full p-[6px] bg-gradient-to-r from-purple-500 to-blue-700 shadow-2xl">
            <img 
              src="https://github.com/sanket3yoprogrammer.png" 
              alt="Profile" 
              className="w-full h-full rounded-full border-4 border-gray-900 object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="p-8 pt-24 bg-gray-900 bg-opacity-95 rounded-b-3xl shadow-xl border-t border-gray-700">
          <motion.h1 
            className="text-5xl font-extrabold tracking-wider text-blue-400 drop-shadow-lg font-[Parisienne]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Yoi! Welcome
          </motion.h1>
          <motion.p 
            className="text-xl max-w-lg mx-auto mt-4 text-gray-300 font-[Dancing Script] leading-relaxed"
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
