import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="text-center bg-opacity-50 p-6 ">
        <motion.h1
          className="text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join the Developer Community
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Learn, Collaborate, and Grow Together
        </motion.p>
        <a
          href="#events"
          className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          Upcoming Events
        </a>
      </div>
    </section>
  );
};

export default Hero;
