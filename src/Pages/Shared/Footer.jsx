import { useState } from "react";
import { useEffect } from "react";
import servicesTitle from "../../../src/Json/Services.json";
import productsTitle from "../../../src/Json/Products.json";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString(); // Format as MM/DD/YYYY or as per locale
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className=" max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto md:px-8 lg:px-12  text-white">
      <div className="flex flex-col p-4 md:p-10 gap-10">
        {/* Company Info and Payment Partners */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8">
          {/* Syntax Soft Systems Section */}
          <div>
            <div className="mb-10">
              <span className="text-2xl md:text-5xl text-success font-semibold">
                Syntax Soft Systems
              </span>
              <p className="mt-5 text-sm text-gray-400">
                A leading Software Company focusing on Web and Desktop
                Application, Mobile Application, Custom Software, Health Care
                Solution, SMS and E-mail Platform, and ERP Solutions.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold text-success">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-gray-300">
                Address: 571/1, Begum Rokeya Sharani, Dhaka - 1216
              </p>

              <div className="mt-4">
                <p className="text-sm text-gray-400">
                  <span>Current Date: {currentDate}</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <footer className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400">
              <nav className="">
                <h6 className="footer-title text-xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">
                  Services
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-start">
                  {/* {servicesTitle.slice(0, 12).map((service) => (
                    <Link
                      key={service.id}
                      className="inline-block text-base  transform transition-all duration-300 hover:text-success mb-2"
                      to={`/service/${service.id}`}
                    >
                      {service.title.split(" ").slice(0, 3).join(" ")}
                      
                    </Link>
                    
                  ))} */}
                  {servicesTitle.slice(0, 12).map((service) => {
                    const cleanTitle = service.title
                      .replace(/[^\w\s]/g, "") // Remove special characters
                      .split(" ") // Split into words
                      .filter(
                        (word) =>
                          word.trim() !== "" && word.toLowerCase() !== "and"
                      ); // Remove empty strings and "and"

                    return (
                      <Link
                        key={service.id}
                        className="block lg:text-xs 2xl:text-base transform transition-all duration-300 hover:text-success mb-2"
                        to={`/service/${service.id}`}
                      >
                        {cleanTitle.slice(0, 2).join(" ")}
                      </Link>
                    );
                  })}
                </div>
              </nav>

              <nav>
                <h6 className="footer-title text-xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">
                  Products
                </h6>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {productsTitle.slice(0, 12).map((product) => {
                    const cleanTitle = product.title
                      .replace(/[^\w\s]/g, "") // Remove special characters
                      .split(" ") // Split into words
                      .filter(
                        (word) =>
                          word.trim() !== "" && word.toLowerCase() !== "and"
                      ); // Remove empty strings and "and"

                    return (
                      <Link
                        key={product.id}
                        className="block lg:text-xs 2xl:text-base transform transition-all duration-300 hover:text-success mb-2"
                        to={`/products/${product.id}`}
                      >
                        {cleanTitle.slice(0, 2).join(" ")}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </footer>
          </div>
        </div>
        {/* Divider Line */}
        <hr className="border-gray-700" />
        {/* Bottom Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-6">
          <aside className="flex items-center gap-4">
            <img src={`${baseUrl}/icon.png`} className="w-10 h-10" alt="icon" />
            <p>
              <span className="font-bold text-white">Syntax Soft Systems</span>
              <br />
              <span className="text-gray-400 text-sm">
                Providing reliable services since 2023
              </span>
            </p>
          </aside>
          <p className="text-center text-gray-400">
            Copyright &#169; 2025, Syntax Soft Systems All Rights Reserved.
          </p>
          <nav className="flex flex-col md:flex-row items-center md:gap-6 gap-2">
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/syntaxsoftsystems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={24}
                  className="hover:text-success transition"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/syntaxsoftsystems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={24}
                  className="hover:text-success transition"
                />
              </a>
              <a
                href="https://x.com/syntaxss25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={24}
                  className="hover:text-success transition"
                />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
