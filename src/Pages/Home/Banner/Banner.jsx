import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TypingEffect from "react-typing-effect"; // Import the TypingEffect component

const stats = [
  { value: "3+", label: "Years" },
  { value: "3+", label: "Countries" },
  { value: "20+", label: "Professionals" },
  { value: "30+", label: "Projects" },
];

const Banner = ({ baseUrl }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute top- left-0 w-full h-full object-cover z-negative"
        autoPlay
        loop
        muted
        playsInline
        src={`${baseUrl}/videos/star.mp4`}
      ></video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.h1
          className="2xl:text-4xl md:text-3xl font-bold leading-tight"
          initial={{ opacity: 0, y: -50 }} // Start from above
          whileInView={{ opacity: 1, y: 0 }} // Fade in to original position
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="leading-relaxed md:leading-snug">
            <span>Empowering Software Solutions<br/>  </span>
            <span>For Your Workplace Safer and Smarter</span> <br />
          </div>

          <span className="inline-block text-success">
            <TypingEffect
              text={[
                "Web Application",
                "Mobile Application",
                "Custom Software Development",
                "Cloud Solutions",
                "IT Consultancy",
                "SMS & E-mail Platform",
                "Domain & Hosting Services",
                "Managed Services",
                "Website Development",
                "Advanced & Integrated Health Care Solutions",
                "Digital Marketing",
              ]}
              speed={100} // Speed of typing effect
              eraseSpeed={50} // Speed of erasing text
              eraseDelay={2000} // Delay before erasing the text
              typingDelay={1000} // Delay before starting typing the next word
              cursorRenderer={(cursor) => <h1>{cursor}</h1>} // Custom cursor (optional)
            />
          </span>
        </motion.h1>

        {/* Let's Talk Button */}
        <Link to="/contacts">
          <motion.button
            className="bg-success py-1 px-3 text-sm text-white rounded-full mt-1 md:mt-3 transition-all duration-300 ease-in-out md:py-3 md:px-6 md:text-xl hover:bg-white hover:text-success transform hover:translate-x-2"
            initial={{ opacity: 0, scale: 0.8 }} // Start scaled down and invisible
            whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
            transition={{ duration: 0.5, delay: 0.2 }} // Delay for button appearance
          >
            Lets Talk
          </motion.button>
        </Link>

        <div className="flex justify-center mt-10 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }} // Start slightly below
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect based on index
            >
              <h2
                className="text-xl font-bold md:text-2xl"
                style={{ color: "#0f9447" }}
              >
                {stat.value}
              </h2>
              <p className="text-sm md:text-xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
