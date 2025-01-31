import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Social Media Section (Left Side) */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaWhatsapp />
            </a>
          </div>

          {/* Enquiry Now Button */}
          <a
            href="/contact"
            className="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition"
          >
            Enquiry Now
          </a>
        </div>

        {/* Business Contact Info (Right Side) */}
        <div>
          <h3 className="text-lg font-semibold">Business Contact Info</h3>
          <p className="mt-2 text-gray-400">
            📍 Address: XYZ Road, City, India <br />
            📞 Phone: <a href="tel:+911234567890" className="hover:text-white">+91 123 456 7890</a> <br />
            ✉ Email: <a href="mailto:info@shribalajienterprises.com" className="hover:text-white">info@shribalajienterprises.com</a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-lg font-montserrat">
        &copy; {new Date().getFullYear()} Shri Balaji Enterprises. All rights reserved. | Powered by <a href="https://bussinesskaro.com/" target="_blank">Bussinesskaro.com</a>
      </div>
    </footer>
  );
};

export default LandingFooter;
