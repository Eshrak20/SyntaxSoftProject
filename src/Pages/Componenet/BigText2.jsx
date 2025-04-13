import { motion } from "framer-motion";

const BigText2 = ({title}) => {
  return (
    <div className="text-center rounded-lg">
    <motion.h1 
      className="text-2xl md:text-7xl font-bold mb-10 px-4 md:px-12 text-start"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-white">{title}</span>
    </motion.h1>
  </div>
  );
};

export default BigText2;
