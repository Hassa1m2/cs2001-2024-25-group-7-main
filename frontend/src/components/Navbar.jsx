import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Fitness", path: "/fitness" },
    { name: "Support", path: "/support" },
    { name: "Profile", path: "/profile" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActiveLink = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="bg-heroBg text-white py-4 px-4 fixed top-0 left-0 right-0 z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/mentalhealthlogo.png" alt="Mental Health Logo" className="w-12 h-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActiveLink(link.path) ? "text-primary" : ""
                } hover:text-primary transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Login & Sign Up Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/signup"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={handleToggle}
            className="block md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="bg-heroBg md:hidden mt-2 px-4 py-4 rounded-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-white hover:text-primary transition-colors duration-200 ${
                  isActiveLink(link.path) ? "text-primary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/signup"
              className="block py-2 text-white bg-primary mt-2 text-center rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="block py-2 text-white bg-primary mt-2 text-center rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
