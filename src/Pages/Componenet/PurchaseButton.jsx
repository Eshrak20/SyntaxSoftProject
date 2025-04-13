import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PurchaseButton = () => {
  const [isGreen, setIsGreen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Stop toggling when hovered

    const timeout = setTimeout(() => {
      setIsGreen((prev) => !prev);
    }, 400); // Change color after 0.4s

    return () => clearTimeout(timeout); // Cleanup to prevent memory leaks
  }, [isGreen, isHovered]); // Runs only when color changes or hover state changes

  return (
    <div className="">
      <div className="flex flex-col items-center mt-10">
        {/* Buttons Animation */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://hosting.syntaxss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 md:px-8 md:py-3 text-white font-bold rounded-lg transition md:text-2xl ${
              isGreen ? "bg-green-500" : "bg-orange-500"
            }`}
            onMouseEnter={() => setIsHovered(true)} // Stop on hover
            onMouseLeave={() => setIsHovered(false)} // Resume after hover
          >
            🔍 Search Domain & Hosting
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PurchaseButton;
