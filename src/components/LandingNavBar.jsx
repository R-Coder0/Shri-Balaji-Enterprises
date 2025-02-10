import { useState } from "react";
import { MdCall } from "react-icons/md";
import { Link } from "react-scroll"; // Import from react-scroll
import "../components/Navbar.css";
import logo from "../assets/SBI.png";
import NavbarToggle from "./NavbarToggle";

function LandingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="/">
        <img src={logo} alt="Shri Balaji Enterprises Logo" className="h-16 w-auto cursor-pointer" />
        </a>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 items-center text-gray-700">
          <li>
            <Link to="contact" smooth={true} duration={500} className="hover:text-blue-500 transition duration-300 font-medium cursor-pointer">
              Super Jumbo Steel
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="hover:text-blue-500 transition duration-300 font-medium cursor-pointer">
              Super Jumbo White
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="hover:text-blue-500 transition duration-300 font-medium cursor-pointer">
              Prince Jumbo White
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="hover:text-blue-500 transition duration-300 font-medium cursor-pointer">
              Prince Jumbo Steel
            </Link>
          </li>
        </ul>

        {/* Call Us Now Button */}
        {/* Call Us Now Button */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="pulse-button bg-green-500 text-white rounded-full h-12 w-12 shadow-md">
            <a href="tel:9971586369">
              <MdCall className="h-6 w-6 relative" />
            </a>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800 font-montserrat">
              Call Us Now
            </p>
            <a
              href="tel:+919971586369"
              className="text-sm text-gray-600 hover:text-green-500 transition duration-300 font-montserrat"
            >
              +91 9971586369
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <NavbarToggle onClick={toggleMobileMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden bg-white text-gray-800 shadow-md space-y-2 py-4`}>
        <li>
          <Link to="contact" smooth={true} duration={500} className="block px-4 py-2 hover:text-blue-500 transition duration-300 cursor-pointer">
            Super Jumbo Steel
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="block px-4 py-2 hover:text-blue-500 transition duration-300 cursor-pointer">
            Super Jumbo White
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="block px-4 py-2 hover:text-blue-500 transition duration-300 cursor-pointer">
            Prince Jumbo White
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="block px-4 py-2 hover:text-blue-500 transition duration-300 cursor-pointer">
            Prince Jumbo Steel
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LandingNavbar;
