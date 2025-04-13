import { useEffect } from "react";
import { useState } from "react";

const ImageDuo = ({ baseUrl }) => {
  const [imagePath1, setimagePath1] = useState("");
  const [imagePath2, setimagePath2] = useState("");

  const updateimagePath1 = () => {
    setimagePath1(`${baseUrl}/images/About us /1.jpg`);
    setimagePath2(`${baseUrl}/images/About us /2.jpg`);
  };

  useEffect(() => {
    updateimagePath1(); // Set initial image path
    window.addEventListener("resize", updateimagePath1); // Update on resize

    return () => {
      window.removeEventListener("resize", updateimagePath1); // Cleanup listener
    };
  }, []);
  return (
    <div className="text-center px-5 md:px-10 pb-10 md:pb-20 pt-14 mb-24 md:my-4">
      {/* Text Section */}

      <div className="mb-10 text-start md:text-center max-w-9xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 leading-snug">
          Welcome to <span className="text-success">Syntax Soft Systems.</span>
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl text-gray-400 leading-relaxed">
          {/* A leading Software Company from Bangladesh, specializing in{" "} */}
          Syntax Soft Systems is one of the leading technology solutions and
          system integration companies operating Bangladesh. We have
          specialization in{" "}
          <strong className="text-success">Web Application Development,</strong>{" "}
          Custom Software Development, Mobile Apps Development, Health Care
          Tech, SMS & E-mail Platform, Cloud and ERP Solutions.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-24 md:space-y-0 space-x-0 md:space-x-10 2xl:space-x-16">
        <div className="text-center relative w-full md:w-1/2">
          <div className="aspect-[1665/1637] w-full">
            <img
              src={imagePath1}
              alt="Image 1"
              className="max-w-full h-full object-cover rounded-3xl"
            />
          </div>
          <p className="absolute -bottom-30  left-0 right-0 p-4 text-base text-gray-200 bg-opacity-70 rounded-md transform text-start md:p-6">
            Our software is transforming businesses, improving operations in
            over 3+ countries
          </p>
        </div>
        <div className="text-center relative w-full md:w-1/2">
          <div className="aspect-[1665/1637] w-full">
            <img
              src={imagePath2}
              alt="Image 2"
              className="max-w-full h-full object-cover rounded-3xl"
            />
          </div>
          <p className="absolute -bottom-30 left-0 right-0 p-4 text-base text-gray-200 bg-opacity-70 rounded-md transform md:p-6">
            A vibrant, energetic space designed for crafting the future through
            state-of-the-art technology to foster productivity, collaboration,
            and employee wellbeing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageDuo;
