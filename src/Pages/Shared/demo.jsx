import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css"; // Optional external CSS for additional customizations

const Navbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 150);

      if (currentScrollY > lastScrollY && currentScrollY > 1050) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navOptions = (
    <>
      {[
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        { path: "/products", label: "Products" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/contacts", label: "Contacts" },
        { path: "/testimonial", label: "Testimonial" },
        { path: "/courses", label: "Training" },
      ].map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div
      className={`navbar bg-[#1D232A] text-white fixed top-0 z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-opacity-100" : "bg-opacity-0"
      } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Syntax Soft Systems Logo" className="w-12 h-12" />
            <span className="ml-2 text-xl font-bold">Syntax Soft Systems</span>
          </Link>
        </div>

        {/* Navigation Items for Larger Screens */}
        <div className="hidden md:flex navbar-center">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">{navOptions}</ul>
        </div>

        {/* Hamburger Menu for Smaller Screens */}
        <div className="navbar-end md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
