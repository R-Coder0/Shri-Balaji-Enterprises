import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing social media and contact icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-green-600 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Footer Top - Company Information and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4 font-montserrat">Company</h4>
            <p className="text-lg mb-4 font-montserrat ">
              We are a company committed to delivering top-quality services with a focus on customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61571119231209" className="text-white hover:text-yellow-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://wa.me/+919971586369" className="text-white hover:text-yellow-500 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li>
                <Link to="/" className="text-lg text-gray-200 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-lg text-gray-200 hover:text-white transition duration-300">About</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-lg text-gray-200 hover:text-white transition duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-lg text-gray-200 hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Contact Info</h4>
            <ul>
              <li className="flex items-center mb-4">
                <FaMapMarkerAlt size={20} className="mr-3" />
                <a href="https://maps.app.goo.gl/ES2ZfdzryCyY4VUFA" className="text-lg">KH. No. 494, Ground Floor, Village Siraspur, Jeewan Park, Delhi - 110042</a>
              </li>
              <li className="flex items-center mb-4">
                <FaPhoneAlt size={20} className="mr-3" />
                <a href="tel:9971586369" className="text-lg">+91 9971586369</a>
              </li>
              <li className="flex items-center mb-4">
                <FaEnvelope size={20} className="mr-3" />
                <span className="text-lg">info@shribalajienterprises.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Subscribe</h4>
            <p className="text-lg mb-4">Stay updated with our latest news and offers. Subscribe to our newsletter.</p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="p-3 w-full rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-800 p-3 rounded-r-lg hover:bg-yellow-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="mt-16 text-center border-t-[1px] border-dashed">
          <p className="text-lg font-montserrat">&copy; {new Date().getFullYear()} Shri Balaji Enterprises. All Rights Reserved. | Powered By <a href="https://bussinesskaro.com/">BUSSINESSKARO.COM</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
