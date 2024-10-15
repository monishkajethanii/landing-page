import { motion } from 'framer-motion';

const features = [
  { title: 'Collaborative Learning', description: 'Work with peers to enhance your skills.' },
  { title: 'Workshops & Seminars', description: 'Attend workshops led by industry professionals.' },
  { title: 'Networking Opportunities', description: 'Meet like-minded individuals and professionals.' },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Features</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
