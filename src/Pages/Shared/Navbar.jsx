import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css"; // Import external CSS file for custom styles

const Navbar = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const screenWidth = window.innerWidth;

      if (screenWidth > 768) {
        // Large screens (e.g., desktop)
        setIsScrolled(currentScrollY > 150);
      } else {
        // Small screens (e.g., mobile)
        setIsScrolled(currentScrollY > 30);
      }

      setShowNavbar(!(currentScrollY > lastScrollY && currentScrollY > 1050));

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className={`nav-item mt-2 ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={`nav-item mt-2 ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className={`nav-item mt-2 ${
            location.pathname === "/services" ||
            location.pathname.startsWith("/service/")
              ? "active"
              : ""
          }`}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="/products"
          className={`nav-item mt-2 ${
            location.pathname === "/products" ||
            location.pathname.startsWith("/products/")
              ? "active"
              : ""
          }`}
        >
          Products
        </Link>
      </li>
      <li className="relative group">
        <Link
          to="/courses"
          className={`nav-item mt-2 ${
            location.pathname === "/courses" ||
            location.pathname.startsWith("/course")
              ? "active"
              : ""
          }`}
        >
          Training
        </Link>
        <ul className="absolute hidden group-hover:block bg-[#1D232A] mt-2 p-2 pl-5 w-40 z-20">
          <li>
            <Link to="/courses/technical" className="block px-4 py-2 nav-item">
              Technical
            </Link>
          </li>
          <li>
            <Link to="/courses/english" className="block px-4 py-2 nav-item">
              English
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link
          to="/resources"
          className={`nav-item mt-2 ${
            location.pathname === "/resources" ? "active" : ""
          }`}
        >
          Resource
        </Link>
      </li>
      <li>
        <Link
          to="/contacts"
          className={`nav-item mt-2 ${
            location.pathname === "/contacts" ? "active" : ""
          }`}
        >
          Contacts
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`w-full flex justify-center fixed top-0 z-10 md:px-7 transition-all duration-300 ease-in-out bg-[#1D232A] ${
        isScrolled ? "bg-opacity-100" : "bg-opacity-0"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full px-5 pt-2 max-w-full lg:max-w-screen-xl 2xl:max-w-screen-2xl flex items-center justify-between mt-5 md:mt-2">
        <div className="md:hidden font-bold text-3xl dropdown">
          <button tabIndex={0} className="mr-5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu w-44 p-2 menu-sm dropdown-content font-semibold bg-base-100 rounded-lg shadow-lg transition-transform duration-300 z-30"
          >
            {navOptions}
          </ul>
        </div>
        <div>
          <Link to="/">
            <img
              src={`${baseUrl}/logo2.png`}
              alt="Syntax Soft Systems Logo"
              className="w-52 md:w-80  md:ml-16 pb-3 md:pb-0"
            />
          </Link>
        </div>
        <div className="navi">
          <ul className="hidden md:flex text-xl font-semibold menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
