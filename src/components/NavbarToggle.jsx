import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavbarToggle({ onClick }) {
  const [isChecked, setIsChecked] = useState(false); // Default closed
  const location = useLocation(); // Track route changes

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsChecked((prev) => !prev);
    onClick(); // Notify parent component
  };

  // Close toggle menu automatically on route change
  useEffect(() => {
    setIsChecked(false); // Ensure the menu is closed
    onClick(); // Ensure parent state syncs
  }, [location.pathname]);

  // Ensure menu is always closed on initial load
  useEffect(() => {
    setTimeout(() => {
      setIsChecked(false); // Explicit reset on production build
      onClick(); // Ensure parent menu state also resets
    }, 0);
  }, []); // Runs only once on component mount

  return (
    <div onClick={handleToggle} className="flex flex-col gap-2 w-8 cursor-pointer md:hidden">
      {/* Top Line */}
      <div
        className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 origin-right ${
          isChecked ? "rotate-[225deg] -translate-x-[12px] -translate-y-[1px]" : ""
        }`}
      ></div>
      {/* Middle Line */}
      <div
        className={`rounded-2xl h-[3px] w-full bg-black duration-500 ${
          isChecked ? "-rotate-45" : ""
        }`}
      ></div>
      {/* Bottom Line */}
      <div
        className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 origin-left place-self-end ${
          isChecked ? "rotate-[225deg] translate-x-[12px] translate-y-[1px]" : ""
        }`}
      ></div>
    </div>
  );
}

export default NavbarToggle;
