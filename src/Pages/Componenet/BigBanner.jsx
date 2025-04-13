import { motion } from "framer-motion";

const BigBanner = ({ title, description }) => {
  const titleParts = title.split(" ");

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-12 mb-5 md:mb-20 mt-32 md:mt-44">
      <motion.h1
        className="text-3xl md:text-5xl 2xl:text-7xl font-bold mb-6 md:mb-10 text-start"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {titleParts.slice(0, 4).map((word, index) => (
          <span key={index} className="text-success text-3xl md:text-5xl 2xl:text-7xl">
            {word}{" "}
          </span>
        ))}
        <span className="text-white">{titleParts.slice(4).join(" ")}</span>
      </motion.h1>
      <motion.p
        className="text-sm sm:text-lg md:text-2xl text-gray-200 text-start"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default BigBanner;
