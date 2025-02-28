import { motion } from "framer-motion";

export default function YoSphereLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-700 text-white text-center p-6 ">
      <div className="">
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
            style={{ fontFamily: 'Jolly Lodger', fontWeight: '400' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Yo, it's <span className="font-semibold text-white">Sanket3YoProgrammer</span>. I'm Sanket Kumar Padhan, 
            a passionate developer, tech enthusiast, and problem solver. I love crafting innovative 
            digital experiences and exploring the endless possibilities of the web.
          </motion.p>
          <div className="flex justify-center gap-6">
            <a href="/portfolio" className="shiny-cta">My Portfolio</a>
            <a href="/projects" className="shiny-cta">My Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}
