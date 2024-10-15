import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    quote: "GDSC has been a fantastic platform for networking and learning.",
    name: "Alice Johnson",
    role: "Web Developer",
  },
  {
    quote: "The workshops helped me build my confidence in coding.",
    name: "Bob Smith",
    role: "Software Engineer",
  },
  {
    quote: "I met amazing people and learned so much at the events!",
    name: "Charlie Brown",
    role: "Data Scientist",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">What Our Members Say</h2>
        <motion.div
          key={current}
          className="mt-8 p-6 bg-gray-800 rounded-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl">"{testimonials[current].quote}"</p>
          <p className="mt-4 font-bold">{testimonials[current].name}</p>
          <p className="text-gray-400">{testimonials[current].role}</p>
        </motion.div>
        <div className="mt-4">
          <button onClick={handlePrev} className="px-4 py-2 bg-gray-600 text-white rounded-lg mr-2">Previous</button>
          <button onClick={handleNext} className="px-4 py-2 bg-gray-600 text-white rounded-lg">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
