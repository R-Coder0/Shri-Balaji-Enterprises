import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import "../components/Navbar.css";
import logo from "../assets/SBI.png";
import NavbarToggle from "./NavbarToggle";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop: Main dropdown
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Desktop: Active sub-dropdown

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile: Main menu state
  const [activeMenu, setActiveMenu] = useState(null); // Mobile: Tracks which main menu is open
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null); // Mobile: Active sub-menu

  const dropdownTimeoutRef = useRef(null); // Timeout reference for closing menus

  // Handlers for Desktop Menu
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      setActiveSubMenu(null); // Close submenus when the main dropdown closes
    }, 200);
  };

  const handleSubMenuEnter = (menuName) => {
    setActiveSubMenu(menuName);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  // Handlers for Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const toggleMainMenu = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    setActiveMobileSubMenu(null); // Reset sub-menu when switching main menus
  };

  const toggleMobileSubMenu = (subMenu) => {
    setActiveMobileSubMenu((prevSubMenu) =>
      prevSubMenu === subMenu ? null : subMenu
    );
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center md:py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
         <Link to="/"> <img
            src={logo}
            alt="Shri Balaji Enterprises Logo"
            className="h-[4.5rem] w-[10.5rem] object-contain"
          />
          </Link>
        </div>
        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 items-center text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition duration-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 transition duration-300 font-medium"
            >
              About Us
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Products Button */}
            <button className="hover:text-blue-500 transition duration-300 font-medium flex items-center">
              Products
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Main Dropdown Menu */}
            <ul
              className={`absolute left-0 top-full mt-2 w-56 bg-white shadow-md z-10 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              {/* Clothes Drying Stand */}
              <li
                className="relative"
                onMouseEnter={() => handleSubMenuEnter("dryingStand")}
                onMouseLeave={handleSubMenuLeave}
              >
                <button className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50">
                  Clothes Drying Stand
                </button>
                {activeSubMenu === "dryingStand" && (
                  <ul className="absolute left-full top-0 w-72 bg-white  shadow-md">
                    <li>
                      <Link
                        to="/products/super-jumbo-steel"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Super Jumbo Steel 
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/prince-jumbbo-steel"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Prince Jumbo Steel
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/super-jumbo-white"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Super Jumbo White
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/prince-jumbo-white"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Prince Jumbo White
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/double-fold-drying-stand"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Double Fold Cloth Drying Stand
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/triple-fold-drying-stand"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Triple Fold Cloth Drying Stand
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Clothes Rack */}
              <li
                className="relative"
                onMouseEnter={() => handleSubMenuEnter("clothesRack")}
                onMouseLeave={handleSubMenuLeave}
              >
                <button className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50">
                  Clothes Rack
                </button>
                {activeSubMenu === "clothesRack" && (
                  <ul className="absolute left-full top-0 w-48 bg-white rounded-md shadow-md">
                    <li>
                      <Link
                        to="/products/404-upcomming-product"
                        className="block px-4 py-2 hover:bg-[#2ba5bd]"
                      >
                        Clothes Rack Item 1
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Shoes Rack */}
              <li
                className="relative"
                onMouseEnter={() => handleSubMenuEnter("shoesRack")}
                onMouseLeave={handleSubMenuLeave}
              >
                <button className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50">
                  Shoes Rack
                </button>
                {activeSubMenu === "shoesRack" && (
                  <ul className="absolute left-full top-0 w-48 bg-white rounded-md shadow-md">
                    <li>
                      <Link
                        to="/products/404-upcomming-product"
                        className="block px-4 py-2 hover:bg-[#2ba5bd]"
                      >
                        Shoes Rack Item 1
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Ironing Table */}
              <li
                className="relative"
                onMouseEnter={() => handleSubMenuEnter("ironingTable")}
                onMouseLeave={handleSubMenuLeave}
              >
                <button className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50">
                  Ironing Table
                </button>
                {activeSubMenu === "ironingTable" && (
                  <ul className="absolute left-full top-0 w-52 bg-white rounded-md shadow-md">
                    <li>
                      <Link
                        to="/products/404-upcomming-product"
                        className="block px-4 py-2 hover:bg-[#2ba5bd]"
                      >
                        Ironing Table Item 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/404-upcomming-product"
                        className="block px-4 py-2 hover:bg-[#2ba5bd]"
                      >
                        Ironing Table Item 2
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:text-blue-500 transition duration-300 font-medium"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition duration-300 font-medium"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Call Us Now Button */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="pulse-button bg-green-500 text-white rounded-full h-12 w-12 shadow-md">
            <a href="tel:9971586369">
              <MdCall className="h-6 w-6 relative" />
            </a>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800 font-montserrat" >Call Us Now</p>
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
      <ul
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white text-gray-800 shadow-md space-y-2 py-4`}
      >
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className="block px-4 py-2 hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>
        </li>

        {/* About Us */}
        <li>
          <Link
            to="/about"
            className="block px-4 py-2 hover:text-blue-500 transition duration-300"
          >
            About Us
          </Link>
        </li>

        {/* Products Menu */}
        <li>
          <button
            onClick={() => toggleMainMenu("products")}
            className="w-full text-left px-4 py-2  flex justify-between hover:text-blue-500 transition duration-300"
          >
            Products
            <span>{activeMenu === "products" ? "▲" : "▼"}</span>
          </button>
          {activeMenu === "products" && (
            <ul className="pl-6 bg-white space-y-1 shadow-inner font-montserrat">
              {/* Clothes Drying Stand */}
              <li>
                <button
                  onClick={() => toggleMobileSubMenu("dryingStand")}
                  className="w-full text-left px-4 py-2 hover:text-green-500"
                >
                  Clothes Drying Stand
                </button>
                {activeMobileSubMenu === "dryingStand" && (
                  <ul className="pl-4 space-y-1">
                    <li>
                      <Link
                        to="/products/super-jumbo-steel"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-t-[1px] border-b-[1px] border-dashed border-black/50"
                      >
                        Super Jumbo Steel 
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/prince-jumbbo-steel"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Prince Jumbo Steel
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/super-jumbo-white"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Super Jumbo White
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/prince-jumbo-white"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Prince Jumbo White
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/double-fold-drying-stand"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Double Fold Cloth Drying Stand
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/triple-fold-drying-stand"
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Triple Fold Cloth Drying Stand
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Clothes Rack */}
              <li>
                <button
                  onClick={() => toggleMobileSubMenu("clothesRack")}
                  className="w-full text-left px-4 py-2 hover:text-green-500"
                >
                  Clothes Rack
                </button>
                {activeMobileSubMenu === "clothesRack" && (
                  <ul className="pl-4 space-y-1">
                    <li>
                      <Link
                        to="/products/404-upcomming-product"
                        className="block px-4 py-1 hover:text-blue-500 border-t-[1px] border-b-[1px] border-dashed border-black/50"
                      >
                        Clothes Rack Item 1
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Clothes Rack */}
              <li>
                <button
                  onClick={() => toggleMobileSubMenu("ironingTable")}
                  className="w-full text-left px-4 py-2 hover:text-green-500"
                >
                  Ironning Table
                </button>
                {activeMobileSubMenu === "ironingTable" && (
                  <ul className="pl-4 space-y-1">
                    <li>
                      <Link
                        to="/products/404-upcomming-product"
                        className="block px-4 py-1 hover:text-blue-500 border-t-[1px] border-b-[1px] border-dashed border-black/50"
                      >
                        Iron Table Item 1
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Shoes Rack */}
              <li>
                <button
                  onClick={() => toggleMobileSubMenu("shoesRack")}
                  className="w-full text-left px-4 py-2 hover:text-green-500"
                >
                  Shoes Rack
                </button>
                {activeMobileSubMenu === "shoesRack" && (
                  <ul className="pl-4 space-y-1">
                    <li>
                      <Link
                        to="/products/404-upcomming-product"
                        className="block px-4 py-1 hover:text-blue-500 border-t-[1px] border-b-[1px] border-dashed border-black/50"
                      >
                        Shoes Rack Item 1
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        {/* Gallery */}
        <li>
          <Link
            to="/gallery"
            className="block px-4 py-2 hover:text-blue-500 transition duration-300"
          >
            Gallery
          </Link>
        </li>

        {/* Contact Us */}
        <li>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:text-blue-500 transition duration-300"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;