import { useEffect, useState } from "react";

const Visit = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center p-5 gap-8 mb-20 md:mb-44">
      {/* Left Side: Content */}
      <div className="md:w-1/2 w-full py-3 md:p-8 rounded-lg space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-200">Address</h2>
          <p className="text-lg text-gray-400">
            House: 571/1, Begum Rokeya Sharani, Dhaka-1216
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-200">Opening Hours</h2>
          <p className="text-lg text-gray-400">
            Sunday - Thursday: 9 AM to 6 PM
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-200">Contacts</h2>
          <p className="text-lg text-gray-400">
            Email:
            <a
              href="mailto:info@nextgenitltd.com"
              className="text-green-400 hover:text-green-700 hover:underline ml-1"
            >
              info@syntaxss.com
            </a>
          </p>
          <p className="text-lg text-gray-400">
            Phone:
            <a
              href="tel:+8801726621896"
              className="text-green-400 hover:text-green-700 hover:underline ml-1"
            >
              +880 1571119993
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-200">
            Current Date and Time
          </h2>
          <p className="text-lg text-gray-400">{currentDate}</p>
        </div>
      </div>

      {/* Right Side: Google Map */}
      <div className="md:w-1/2 w-full md:p-4 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7299.702895118306!2d90.35968664479671!3d23.823880964481024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s571%2F1%20Begum%20Rokeya%20Avenue%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1738848054003!5m2!1sen!2sbd"
          width="100%"
          height="450"
          className="rounded-lg border-0"
          allowFullScreen=""
          loading="lazy"
          title="Google Map of Syntax Soft Systems LTD."
        ></iframe>
      </div>
    </div>
  );
};

export default Visit;
