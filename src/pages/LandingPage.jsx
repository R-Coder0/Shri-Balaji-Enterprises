import { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaTruck,
  FaThumbsUp,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero2 from "../assets/hero1.jpg";
import hero1 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import phonehero1 from "../assets/PhoneHero1.jpg";
import phonehero2 from "../assets/PhoneHero2.jpg";
import phonehero3 from "../assets/PhoneHero3.jpg";
import phonehero4 from "../assets/PhoneHero4.jpg";
import "../styles/Home.css";
import emailjs from "@emailjs/browser";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-awesome-lightbox/build/style.css";
import StickyForm from "../components/SticktForm";
import Testimonials from "../components/Tesimonial";
import LandingFooter from "../components/landingfooter";
// Import Product Images
import product1 from "../assets/product/SuperJumboSteel.jpg";
import product2 from "../assets/product/DSC02702.jpg";
import product3 from "../assets/product/PrinceJumboSteel.jpg";
import product4 from "../assets/product/DSC02803 copy.jpg";
// eslint-disable-next-line react/prop-types
const CircularProgressDot = ({ isActive, autoplaySpeed }) => {
  return (
    <div className="progress-dot">
      <svg className="progress-ring" viewBox="0 0 36 36">
        <circle
          className="progress-ring__background"
          cx="18"
          cy="18"
          r="16"
          strokeWidth="10" // Increased stroke width for the background
        ></circle>
        <circle
          className={`progress-ring__circle ${isActive ? "active" : ""}`}
          cx="18"
          cy="18"
          r="16"
          strokeWidth="10" // Increased stroke width for the animated circle
          style={{
            animationDuration: `${autoplaySpeed}ms`,
          }}
        ></circle>
      </svg>
    </div>
  );
};

function LandingPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable built-in autoplay as we handle it manually
    afterChange: (current) => setActiveSlide(current),
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setResponseMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setResponseMessage("Failed to send the message. Please try again.");
          console.error("EmailJS Error: ", error);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const slides = [
    {
      title: "Slide 1",
      desktopImage: hero1,
      mobileImage: phonehero1, // Replace with your image paths
    },
    {
      title: "Slide 2",
      desktopImage: hero2,
      mobileImage: phonehero2, // Replace with your image paths
    },
    {
      title: "Slide 3",
      desktopImage: hero3,
      mobileImage: phonehero3, // Replace with your image paths
    },
    {
      title: "Slide 4",
      desktopImage: hero4,
      mobileImage: phonehero4, // Replace with your image paths
    },
  ];
  const sliderRef = useRef(null);
  const autoplaySpeed = 8000;

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (activeSlide + 1) % slides.length;
      setActiveSlide(nextSlide);
      sliderRef.current.slickGoTo(nextSlide); // Move the slider to the next slide
    }, autoplaySpeed);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [activeSlide, slides.length]);

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="hero-section z-10 mt-[4.5rem] md:mt-24 relative">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-[100vh] md:h-[75vh] lg:h-[60vh] xl:h-[800px] overflow-hidden"
            >
              {/* Slide Image */}
              <img
                src={isMobile ? slide.mobileImage : slide.desktopImage}
                alt={slide.title}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: isMobile
                    ? "center"
                    : index % 2 === 0
                    ? "left center"
                    : "right center", // Adjust object position based on the slide and screen size
                }}
              />
              {/* Buttons (hidden on mobile) */}
              <div
                className={`absolute z-20 flex ${
                  isMobile
                    ? "hidden"
                    : index % 2 === 0
                    ? "md:bottom-[3rem] md:left-[3rem] lg:bottom-[4rem] lg:left-[5rem]"
                    : "md:bottom-[3rem] md:right-[3rem] lg:bottom-[4rem] lg:right-[5rem]"
                } md:space-x-4`}
              ></div>
            </div>
          ))}
        </Slider>

        {/* Custom Dots Section */}
        <div className="custom-dots flex justify-center mt-[-4rem]">
          {slides.map((_, index) => (
            <CircularProgressDot
              key={index}
              isActive={index === activeSlide}
              autoplaySpeed={autoplaySpeed}
            />
          ))}
        </div>
      </section>
      {/* 🔹 Featured Product Section */}
      <section className="py-16 font-montserrat max-w-[1440px] mx-auto">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#2ba5bd]">
                  Our Best Products
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                  Explore our top-selling products crafted with excellence.
                </p>
              </div>
              {/* Product Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Product 1 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold">
                      Super Jumbo Steel
                    </h3>
                    <a
                      href="/contact"
                      className="mt-4 inline-block bg-[#0e65af] hover:bg-transparent border border-[#0e65af] hover:text-black  text-white px-6 py-2  hover:bg-[#2ba5bd]"
                    >
                      Enquiry Now
                    </a>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition">
                  <img
                    src={product2}
                    alt="Product 2"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold">
                      Super Jumbo White
                    </h3>
                    <a
                      href="/contact"
                      className="mt-4 inline-block bg-[#0e65af] hover:bg-transparent border border-[#0e65af] hover:text-black  text-white px-6 py-2  hover:bg-[#2ba5bd]"
                    >
                      Enquiry Now
                    </a>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition">
                  <img
                    src={product3}
                    alt="Product 3"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold">Prince Jumbo Steel</h3>
                    <a
                      href="/contact"
                      className="mt-4 inline-block bg-[#0e65af] hover:bg-transparent border border-[#0e65af] hover:text-black  text-white px-6 py-2  hover:bg-[#2ba5bd]"
                    >
                      Enquiry Now
                    </a>
                  </div>
                </div>

                {/* Product 4 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition">
                  <img
                    src={product4}
                    alt="Product 4"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold">
                      Prince Jumbo White
                    </h3>
                    <a
                      href="/contact"
                      className="mt-4 inline-block bg-[#0e65af] hover:bg-transparent border border-[#0e65af] hover:text-black  text-white px-6 py-2  hover:bg-[#2ba5bd]"
                    >
                      Enquiry Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Cards 1 */}
      <section className="py-16 bg-white  font-montserrat max-w-[1440px] mx-auto ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-montserrat text-[#2ba5bd]">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 mt-4 text-lg  font-montserrat">
              We provide reliable, efficient, and high-quality solutions
              tailored to meet your needs.
            </p>
          </div>

        
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  font-montserrat">
            {/* Card 1 */}
            <div className="card-1 text-white shadow-lg p-8 transform hover:-translate-y-2 transition duration-300 border-2 border-white">
              <div className="flex justify-center mb-4">
                <FaCheckCircle className="text-[4rem]" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4  font-montserrat">
                Quality & Consistency
              </h3>
              <p className="text-center  font-montserrat">
                We have a team of experts who verify the quality of the product
                from its initial stage to its completion.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-2 bg-[#0e65af] border-2 p-8 transform hover:-translate-y-2 transition duration-300">
              <div className="flex justify-center mb-4">
                <FaTruck className="text-[4rem] text-Black" />
              </div>
              <h3 className="text-2xl font-semibold text-black text-center mb-4 font-montserrat">
                Bulk Qty & Timely Delivery
              </h3>
              <p className="text-center text-black font-montserrat">
                Wide distribution network and skilled logistics professionals
                assure timely delivery of orders at the customer&apos;s end.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-1 text-white shadow-lg p-8 transform hover:-translate-y-2 transition duration-300 border-white border-2">
              <div className="flex justify-center mb-4">
                <FaThumbsUp className="text-[4rem]" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 font-montserrat">
                Customer Satisfaction
              </h3>
              <p className="text-center font-montserrat">
                Our company keeps all our efforts to make customers satisfied
                with our products, known for high performance and durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <Testimonials />
      {/* Contact */}
      <section
        id="contact"
        className="py-16 bg-gray-100 font-montserrat max-w-[1440px] mx-auto"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form Section */}
            <div
              id="contactform"
              className="lg:col-span-1 bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold text-[#0e65af] mb-6">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-lg text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#0e65af]"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#0e65af]"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-lg text-gray-700 mb-2"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#0e65af]"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-lg text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#0e65af]"
                    placeholder="Enter your message"
                    rows="4"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-transparent text-black py-3 hover:bg-[#0e65af] hover:text-white transition duration-300"
                  disabled={isSubmitting}
                  style={{ border: "2px solid #0e65af" }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
              {responseMessage && (
                <p className="text-center text-[#0e65af] mt-4">
                  {responseMessage}
                </p>
              )}
            </div>

            {/* Contact Details and Map Section */}
            <div className="lg:col-span-2 bg-gray-100 p-0 rounded-lg ">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#0e65af] mb-6">
                  Get In Touch
                </h2>
                <div className="flex flex-col space-y-6">
                  {/* Address */}
                  <div className="flex items-center text-lg text-gray-700">
                    <FaMapMarkerAlt size={24} className="mr-3" />
                    <span>
                      KH. No. 494, Ground Floor, Village Siraspur, Jeewan Park,
                      Delhi - 110042
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center text-lg text-gray-700">
                    <FaPhoneAlt size={24} className="mr-3" />
                    <a href="tel:9971586369">+91 9971586369</a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center text-lg text-gray-700">
                    <FaEnvelope size={24} className="mr-3" />
                    <span>info@shribalajienterprises.in</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative w-full h-96 rounded-b-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.799638577147!2d77.1430966730172!3d28.75539853155101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0198307a0481%3A0xb244435d9f8a3540!2sSHRI%20BALAJI%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1733905967619!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  title="Company Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StickyForm />
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
