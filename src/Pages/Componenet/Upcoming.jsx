import { motion } from 'framer-motion';

const Upcoming = () => {
  return (
    <div className="text-center p-20 my-52 rounded-lg">
      <motion.h1
        className="text-9xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation properties
      >
        <span className="text-success">Upcoming Page</span> 
      </motion.h1>
    </div>
  );
};

export default Upcoming;
