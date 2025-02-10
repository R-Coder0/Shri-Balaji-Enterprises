import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import "../components/Navbar.css";
import logo from "../assets/SBI.png";
import NavbarToggle from "./NavbarToggle";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop: Main dropdown
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Desktop: Active sub-dropdown
  const [activeSecondSubMenu, setActiveSecondSubMenu] = useState(null); // Active second-level submenu
  const [activeMobileSecondSubMenu, setActiveMobileSecondSubMenu] =
    useState(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile: Main menu state
  const [activeMenu, setActiveMenu] = useState(null); // Mobile: Tracks which main menu is open
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null); // Mobile: Active sub-menu
  const secondMenuTimeoutRef = useRef(null);
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

  // Second-Level Submenu Handlers
  const handleSecondSubMenuEnter = (menuName) => {
    if (secondMenuTimeoutRef.current) {
      clearTimeout(secondMenuTimeoutRef.current); // Clear any pending timeout
    }
    setActiveSecondSubMenu(menuName);
  };

  const handleSecondSubMenuLeave = () => {
    secondMenuTimeoutRef.current = setTimeout(() => {
      setActiveSecondSubMenu(null);
    }, 300);
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

    // Prevent closing second-level submenus when opening a first-level submenu
    setActiveMobileSecondSubMenu(null);
  };

  const toggleMobileSecondSubMenu = (subMenu) => {
    setActiveMobileSecondSubMenu((prevSubMenu) =>
      prevSubMenu === subMenu ? null : subMenu
    );
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center md:py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            {" "}
            <img
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
              className={`absolute left-0 top-full mt-2 w-56 bg-white shadow-md z-[50] ${
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
                    <li
                      className="relative"
                      onMouseEnter={() =>
                        handleSecondSubMenuEnter("JUMBOSeries")
                      }
                      onMouseLeave={handleSecondSubMenuLeave}
                    >
                      <button
                        // to="/products/super-jumbo-steel"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50"
                      >
                        Jumbo Series
                      </button>
                      {activeSecondSubMenu === "JUMBOSeries" && (
                        <ul className="absolute left-full top-0 mt-2 w-56 bg-white shadow-md z-[50]">
                          <li>
                            <Link
                              to="/products/super-jumbo-steel"
                              className="block px-4 border-b-[1px] border-dashed py-2 hover:bg-[#2ba5bd] border-black/50"
                            >
                              Super Jumbo Steel
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/prince-jumbo-steel"
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
                              to="/products/royal-jumbo-steel"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Royal Jumbo Steel
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/royal-jumbo-white"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-dashed border-black/50"
                            >
                              Royal Jumbo White
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className="relative"
                      onMouseEnter={() =>
                        handleSecondSubMenuEnter("SumoSeries")
                      }
                      onMouseLeave={handleSecondSubMenuLeave}
                    >
                      <button
                        // to="/products/sumo-steel"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50"
                      >
                        Sumo Series
                      </button>
                      {activeSecondSubMenu === "SumoSeries" && (
                        <ul className="absolute left-full top-0 mt-2 w-56 bg-white shadow-md z-[50]">
                          <li>
                            <Link
                              to="/products/sumo-steel"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Sumo Steel
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/sumo-white"
                              className="block px-4 py-2 hover:bg-[#2ba5bd]"
                            >
                              Sumo White
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className="relative"
                      onMouseEnter={() =>
                        handleSecondSubMenuEnter("ButterFlySeries")
                      }
                      onMouseLeave={handleSecondSubMenuLeave}
                    >
                      <button
                        // to="/products/sumo-steel"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50"
                      >
                        ButterFly Series
                      </button>
                      {activeSecondSubMenu === "ButterFlySeries" && (
                        <ul className="absolute left-full top-0 mt-2 w-56 bg-white shadow-md z-[50]">
                          <li>
                            <Link
                              to="/products/full-steel-butterfly"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Full Steel Butterfly
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/butterfly-white"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Butterfly White
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/products/sky-high"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-dashed border-black/50"
                            >
                              Sky High
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      className="relative"
                      onMouseEnter={() =>
                        handleSecondSubMenuEnter("SteelSeries")
                      }
                      onMouseLeave={handleSecondSubMenuLeave}
                    >
                      <button
                        // to="/products/sumo-steel"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50"
                      >
                        Full Steel Series
                      </button>
                      {activeSecondSubMenu === "SteelSeries" && (
                        <ul className="absolute left-full top-0 mt-2 w-56 bg-white shadow-md z-[50]">
                          <li>
                            <Link
                              to="/products/mini-star"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Mini Star
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/mini-star-small"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Mini Star Small
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/hard-rock"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Hard Rock
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/hard-rock-heavy"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Hard Rock Heavy
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/hard-rock-wheel"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Hard Rock with Wheel
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/bright-full-steel"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Bright Full Steel
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              {/* Shoe Rack */}

              {/* Second Submenu - Shoes Rack */}
              <li
                className="relative"
                onMouseEnter={() => handleSubMenuEnter("shoesRack")}
                onMouseLeave={handleSubMenuLeave}
              >
                <button className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50">
                  Shoes Rack
                </button>

                {activeSubMenu === "shoesRack" && (
                  <ul className="absolute left-full top-0 w-48 bg-white shadow-md">
                    <li
                      className="relative"
                      // onMouseEnter={() =>
                      //   handleSecondSubMenuEnter("JUMBOSteel")
                      // }
                      // onMouseLeave={handleSecondSubMenuLeave}
                    >
                      <Link
                        to={"/products/shoes-rack-steel"}
                        className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Shoes Rack Steel
                      </Link>
                    </li>

                    {/* Another First Level Item */}
                    <li>
                      <Link
                        to="/products/shoes-rack-white"
                        className="block px-4 py-1 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Shoes Rack White
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
                <Link
                  to="/products/ladder"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left border-b-[1px] border-dashed border-black/50"
                >
                  Aluminium Ladder
                </Link>
              </li>

              {/* Ironing Table */}
              <li
                className="relative"
                onMouseEnter={() => handleSubMenuEnter("ironingTable")}
                onMouseLeave={handleSubMenuLeave}
              >
                <Link
                  to="/products/ironing-table"
                  className="block px-4 py-2 text-gray-700 hover:bg-[#0e65af] hover:text-white w-full text-left "
                >
                  Ironing Table
                </Link>
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

      <ul
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white text-gray-800 shadow-md space-y-2 py-4 max-h-[80vh] overflow-y-auto`}
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
                    {/* Super Jumbo Series (Second-Level) */}
                    <li>
                      <button
                        onClick={() => toggleMobileSecondSubMenu("jumboSeries")}
                        className="block px-4 py-2 hover:bg-[#2ba5bd]"
                      >
                        Jumbo Series{" "}
                        {activeMobileSecondSubMenu === "jumboSeries"
                          ? "▲"
                          : "▼"}
                      </button>
                      {activeMobileSecondSubMenu === "jumboSeries" && (
                        <ul className="pl-4 space-y-1">
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
                              to="/products/prince-jumbo-steel"
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
                              to="/products/royal-jumbo-steel"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Royal Jumbo Steel
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/royal-jumbo-white"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Royal Jumbo White
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button
                        onClick={() => toggleMobileSecondSubMenu("sumoSeries")}
                        className="block px-4 py-2 hover:bg-[#2ba5bd]"
                      >
                        Sumo Series{" "}
                        {activeMobileSecondSubMenu === "sumoSeries" ? "▲" : "▼"}
                      </button>
                      {activeMobileSecondSubMenu === "sumoSeries" && (
                        <ul className="pl-4 space-y-1">
                          <li>
                            <Link
                              to="/products/sumo-steel"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Sumo Steel
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/sumo-white"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Sumo White
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          toggleMobileSecondSubMenu("butterflySeries")
                        }
                        className="block px-4 py-2 hover:bg-[#2ba5bd]"
                      >
                        Butterfly Series{" "}
                        {activeMobileSecondSubMenu === "butterflySeries"
                          ? "▲"
                          : "▼"}
                      </button>
                      {activeMobileSecondSubMenu === "butterflySeries" && (
                        <ul className="pl-4 space-y-1">
                          <li>
                            <Link
                              to="/products/full-steel-butterfly"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Full Steel Butterfly
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/butterfly-white"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Butterfly White
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/products/sky-high"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Sky High
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button
                        onClick={() => toggleMobileSecondSubMenu("steelSeries")}
                        className="block px-4 py-2 hover:bg-[#2ba5bd]"
                      >
                        Full Steel Series{" "}
                        {activeMobileSecondSubMenu === "steelSeries"
                          ? "▲"
                          : "▼"}
                      </button>
                      {activeMobileSecondSubMenu === "steelSeries" && (
                        <ul className="pl-4 space-y-1">
                          <li>
                            <Link
                              to="/products/mini-star"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Mini Star
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/mini-star-small"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Mini Star Small
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/hard-rock"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Hard Rock
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/hard-rock-heavy"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Hard Rock Heavy
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/hard-rock-wheel"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Hard Rock with Wheel
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/bright-full-steel"
                              className="block px-4 py-2 hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                            >
                              Bright Full Steel
                            </Link>
                          </li>
                        </ul>
                      )}
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
                        to="/products/shoes-rack-steel"
                        className="block px-4 py-1 hover:hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Shoes Rack Steel
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/shoes-rack-white"
                        className="block px-4 py-1 hover:hover:bg-[#2ba5bd] border-b-[1px] border-dashed border-black/50"
                      >
                        Shoes Rack white
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Clothes Rack */}
              <li className="pt-[5px]">
                <Link
                  to="/products/ladder"
                  onClick={() => toggleMobileSubMenu("clothesRack")}
                  className="w-full text-left px-4 py-2 hover:text-green-500"
                >
                  Aluminium Ladder
                </Link>
                {/* {activeMobileSubMenu === "clothesRack" && (
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
                )} */}
              </li>
              {/* Irroning Table Rack */}
              <li className="pt-[8px]">
                <Link
                  to="/products/ironing-table"
                  onClick={() => toggleMobileSubMenu("ironingTable")}
                  className="w-full text-left px-4 py-2 hover:text-green-500"
                >
                  Ironning Table
                </Link>
                {/* {activeMobileSubMenu === "ironingTable" && (
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
                )} */}
              </li>

              {/* Shoes Rack */}
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
