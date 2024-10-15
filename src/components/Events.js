import { motion } from 'framer-motion';

const events = [
  { title: 'Hackathon 2024', date: 'April 15, 2024', description: 'A 48-hour hackathon to solve real-world problems.' },
  { title: 'Web Development Workshop', date: 'March 10, 2024', description: 'Learn the latest trends in web development.' },
  { title: 'AI & Machine Learning Meetup', date: 'February 20, 2024', description: 'Discuss the future of AI and its applications.' },
];

const Events = () => {
  return (
    <section id="events" className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Upcoming Events</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-700 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">{event.title}</h3>
              <p className="mt-2">{event.date}</p>
              <p className="mt-2">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
