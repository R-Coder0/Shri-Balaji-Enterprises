import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaQuoteLeft,
  FaQuoteRight,
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
import About1 from "../assets/Home/about1.jpg";
import About2 from "../assets/Home/about2.jpg";
import service1 from "../assets/Home/service1.jpg";
import service2 from "../assets/Home/service2.jpg";
import service3 from "../assets/Home/service3.jpg";
import service4 from "../assets/Home/service4.jpg";
import service5 from "../assets/Home/service5.jpg";
import service6 from "../assets/Home/service6.jpg";
import testimonial from "../assets/profile.jpg";
import "../styles/Home.css";
import RequestForm from "../components/RequestForm";
import emailjs from "@emailjs/browser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import StickyForm from "../components/SticktForm";

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

function Home() {
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
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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

  const services = [
    {
      id: 1,
      title: "Super Jumbo Steel Cloth Drying Stand",
      description:
        "A spacious and robust steel cloth drying stand designed for heavy-duty use. Perfect for accommodating large loads of laundry with ease and durability.",
      image: service1,
      path: "/products/super-jumbo-steel", // This matches the Route in App.jsx
    },
    {
      id: 2,
      title: "Prince Jumbo Steel Cloth Drying Stand",
      description:
        "Elegant and sturdy, the Prince Jumbo Steel Cloth Drying Stand is ideal for drying larger loads. Its compact design makes it suitable for both indoor and outdoor use.",
      image: service2,
      smallImages: [service2],
    },
    {
      id: 3,
      title: "Super Jumbo White Cloth Drying Stand",
      description:
        "This premium white cloth drying stand combines style with functionality, offering ample drying space for your laundry needs.",
      image: service3,
      smallImages: [service3],
    },
    {
      id: 4,
      title: "Prince Jumbo White Cloth Drying Stand",
      description:
        "The Prince Jumbo White Cloth Drying Stand is a sleek and efficient solution for drying clothes. Built with durability and a modern look in mind.",
      image: service4,
      smallImages: [service4],
    },
    {
      id: 5,
      title: "Double Fold Cloth Drying Stand",
      description:
        "A versatile double-fold design that offers maximum convenience and space efficiency for drying clothes, suitable for all spaces.",
      image: service5,
      smallImages: [service5],
    },
    {
      id: 6,
      title: "Triple Fold Cloth Drying Stand",
      description:
        "A triple-fold cloth drying stand for ultimate flexibility and space-saving. Perfect for drying a variety of clothing and linens.",
      image: service6,
      smallImages: [service6],
    },
  ];

  // const [fullscreenImage, setFullscreenImage] = useState(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxSlides = services.map((service) => ({
    url: service.image,
    title: service.title,
  }));

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  // const closeLightbox = () => {
  //   setIsLightboxOpen(false); // Close the Lightbox
  //   setCurrentImageIndex(""); // Reset the current image
  // }

  // const handleZoom = (image) => {
  //   setFullscreenImage(image);
  // };

  // const closeFullscreen = () => {
  //   setFullscreenImage(null);
  // };

  const toggleRequestForm = () => {
    setShowRequestForm(!showRequestForm);
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
  const partnerCompanies = [
    { id: 1, logo: "path/to/logo1.png", name: "Partner 1" },
    { id: 2, logo: "path/to/logo2.png", name: "Partner 2" },
    { id: 3, logo: "path/to/logo3.png", name: "Partner 3" },
    { id: 4, logo: "path/to/logo4.png", name: "Partner 4" },
    { id: 5, logo: "path/to/logo5.png", name: "Partner 5" },
    { id: 6, logo: "path/to/logo6.png", name: "Partner 6" },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Amit Verma",
      company: "CEO, BrightTech Solutions",
      quote:
        "Working with this team was a game-changer for our company. Their professional services and innovative solutions helped us achieve significant growth.",
      image: testimonial, // Replace with your image URL
    },
    {
      id: 2,
      name: "Ananya Iyer",
      company: "Marketing Head, Zenith Enterprises",
      quote:
        "Their commitment to delivering quality and timely support was truly impressive. I highly recommend their services to any growing business.",
      image: testimonial, // Replace with your image URL
    },
    {
      id: 3,
      name: "Vikram Mehta",
      company: "Founder, InnovateX Labs",
      quote:
        "The team exceeded all our expectations! Their expertise and customized approach helped us streamline operations and enhance efficiency.",
      image: testimonial, // Replace with your image URL
    },
    {
      id: 4,
      name: "Pooja Desai",
      company: "Operations Manager, GlobalMart Pvt. Ltd.",
      quote:
        "Exceptional service from start to finish. The team was approachable, knowledgeable, and always ready to go the extra mile for our success.",
      image: testimonial, // Replace with your image URL
    },
    {
      id: 5,
      name: "Arjun Kapoor",
      company: "Director, Alpha Innovations",
      quote:
        "Their professionalism and attention to detail were outstanding. We witnessed a remarkable improvement in our workflow and client satisfaction.",
      image: testimonial, // Replace with your image URL
    },
    {
      id: 6,
      name: "Meera Joshi",
      company: "Head of Operations, Stellar Services",
      quote:
        "I was amazed by their dedication and expertise. Their solutions were tailor-made for our business, helping us achieve exceptional results.",
      image: testimonial, // Replace with your image URL
    },
  ];
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

              {/* Overlay (hidden on mobile) */}
              {!isMobile && (
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
              )}

              {/* Buttons (hidden on mobile) */}
              <div
                className={`absolute z-20 flex ${
                  isMobile
                    ? "hidden"
                    : index % 2 === 0
                    ? "md:bottom-[3rem] md:left-[3rem] lg:bottom-[4rem] lg:left-[5rem]"
                    : "md:bottom-[3rem] md:right-[3rem] lg:bottom-[4rem] lg:right-[5rem]"
                } md:space-x-4`}
              >
                {/* Enquiry Now Button */}
                <button
                  className="relative px-[1.2rem] py-[0.8rem] lg:px-[1.5rem] lg:py-[1rem] xl:px-[2rem] xl:py-[1.2rem] text-white hover:text-black font-medium shadow-md overflow-hidden group"
                  style={{ border: "1px solid #0e65af" }}
                  onClick={toggleRequestForm}
                >
                  <span className="absolute inset-0 bg-[#0e65af] transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 text-sm md:text-base lg:text-lg">
                    Enquiry Now
                  </span>
                </button>

                {/* Call Now Button */}
                <button className="relative px-[1.2rem] py-[0.8rem] lg:px-[1.5rem] lg:py-[1rem] xl:px-[2rem] xl:py-[1.2rem] text-white font-medium shadow-md border-[1px] border-[#0e65af] overflow-hidden group">
                  <span className="absolute inset-0 bg-[#0e65af] transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300 text-sm md:text-base lg:text-lg">
                    <a href="tel:919971586369">Call Now</a>
                  </span>
                </button>
              </div>
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

      {/* About1 */}
      <section className="py-16 bg-white font-montserrat ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-12 font-montserrat">
            <h2 className="text-4xl font-bold font-montserrat text-[#0e65af]">
              About Us
            </h2>
            <p className="text-gray-600 text-lg font-montserrat mt-4">
              Leading Manufacturer, Supplier, and Exporter of
            </p>
            <h3 className="font-bold text-3xl text-gray-800 mt-2 font-montserrat">
              Cloth Drying Stands |{" "}
              <span className="text-[#2ba5bd]">Hangers</span> | Home Utility
              Products
            </h3>
          </div>

          {/* Content Area */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
            {/* Image Section */}
            <div className="lg:w-[50%] flex justify-center">
              <img
                src={About1} // Replace with your actual image
                alt="About Us"
                className="h-[35rem] w-full max-w-[28re,] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl text-[#2ba5bd] mb-4">
                OFFERING QUALITY ASSURED RANGE
              </h3>
              <p className="text-Black leading-relaxed text-lg mb-6 font-montserrat font-bold">
                We specialize in high-quality cloth drying stands, hangers, and
                other home utility products. Our solutions are designed for
                durability, efficiency, and to meet the everyday needs of modern
                households.
              </p>
              <h4 className="text-xl font-bold text-[#2ba5bd] mb-4">
                An Overview of Shri Balaji Enterprises
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6 font-montserrat">
                As a trusted name in the market, we focus on offering innovative
                and reliable products such as space-saving cloth drying stands,
                sturdy hangers, and a wide range of accessories for efficient
                home management. Our products cater to both domestic and
                commercial use.
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-lg space-y-2 mb-6">
                <li>
                  Durable and rust-resistant drying stands for indoor and
                  outdoor use.
                </li>
                <li>Space-saving and ergonomic designs for modern homes.</li>
                <li>Eco-friendly materials ensuring long-term usability.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6  font-montserrat">
                With a focus on quality and innovation, we ensure timely
                delivery of our products to meet the demands of our valued
                customers.
              </p>
              <button
                className="px-8 py-3 bg-transparent text-black font-medium shadow-md hover:bg-[#0e65af] hover:text-white transition duration-300"
                style={{
                  border: "2px solid #0e65af",
                }}
              >
                <Link to="/about">Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* About2 */}
      <section className="pb-8 bg-white ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 ">
          {/* Content Area */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-10 gap-5">
            {/* Image Section */}
            <div className="lg:w-[50%] flex justify-center">
              <img
                src={About2} // Replace with your actual image
                alt="About Us"
                className="h-[35rem] w-full max-w-[28re,] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 font-montserrat">
              <h3 className="text-2xl text-[#2ba5bd] mb-4 font-montserrat">
                FOCUSING ON CUSTOMER-CENTRIC SOLUTIONS
              </h3>
              <p className="text-Black leading-relaxed text-lg mb-6 font-montserrat font-bold">
                At Shri Balaji Enterprises, we pride ourselves on understanding
                the dynamic needs of our customers. Our commitment lies in
                delivering user-friendly solutions that seamlessly blend
                innovation, durability, and affordability.
              </p>
              <h4 className="text-xl font-bold text-[#2ba5bd] mb-4 font-montserrat">
                Why Choose Shri Balaji Enterprises?
              </h4>
              <p className="text-gray-700 leading-relaxed mb-6 font-montserrat">
                With years of experience and a focus on customer satisfaction,
                we ensure every product is designed with precision. From durable
                drying stands to smart home accessories, our goal is to enhance
                everyday living through quality and efficiency.
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-lg space-y-2 mb-6 font-montserrat">
                <li>
                  Innovative solutions tailored to meet evolving household
                  needs.
                </li>
                <li>
                  A rigorous quality assurance process to deliver long-lasting
                  products.
                </li>
                <li>
                  Exceptional customer support to ensure a hassle-free
                  experience.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6 font-montserrat">
                Our team continuously explores cutting-edge technologies and
                sustainable materials to craft products that simplify lives.
                With a promise of timely service and reliability, we strive to
                build trust and long-term partnerships with our customers.
              </p>
              <button
                className="px-8 py-3 bg-transparent text-black font-medium shadow-md hover:bg-[#0e65af] hover:text-white transition duration-300"
                style={{
                  border: "2px solid #0e65af",
                }}
              >
                <Link to="/about">Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Cards 1 */}
      <section className="py-16 bg-white  font-montserrat ">
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
      {/* Service */}
      <section className="py-16 bg-gray-100 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-[#0e65af]">
              Our Services
            </h2>
            <p className="text-gray-500 mt-4 text-lg font-montserrat">
              Explore our wide range of innovative products built for your
              needs.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-2xl transition duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden font-montserrat">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 font-montserrat"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#0e65af] mb-2 font-montserrat">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 font-montserrat">
                    {service.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-center space-x-4">
                    {/* Zoom Button */}
                    <button
                      onClick={() => openLightbox(index)}
                      className="px-4 py-2 text-sm bg-transparent text-black shadow hover:bg-[#0e65af] hover:text-white transition duration-300 font-montserrat"
                      style={{ border: "2px solid #0e65af" }}
                    >
                      🔍 Zoom
                    </button>
                    <Link
                      to={service.path} // Dynamically navigate to the product page
                      className="px-4 py-2 text-sm bg-transparent text-bla hover:text-white shadow font-montserrat hover:bg-black transition duration-300 border-solid border-2 border-black"
                    >
                      📘 Know More
                    </Link>
                  </div>

                  {/* Enquiry Button */}
                  <button
                    onClick={toggleRequestForm}
                    className="mt-4 px-6 py-2 bg-transparent text-black shadow font-montserrat hover:bg-[#2ba5bd] hover:text-white transition duration-300 border-solid border-2 border-[#2ba5bd]"
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <Lightbox
            images={lightboxSlides}
            startIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}

        {/* Request Form Modal */}
        {showRequestForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div
              className="bg-white p-0 shadow-lg relative w-full max-w-[54rem]"
            >
              {/* No need for a separate close button here */}
              <RequestForm onClose={toggleRequestForm} />
            </div>
          </div>
        )}
      </section>
      {/*Clients  */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0e65af] font-montserrat">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 mt-4 font-montserrat">
              We are proud to work with leading companies in the industry.
            </p>
          </div>
          {/* Partner Logos Carousel */}
          <Slider {...settings2}>
            {partnerCompanies.map((partner) => (
              <div
                key={partner.id}
                className="flex justify-center items-center bg-white p-4 shadow-md rounded-md font-montserrat"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto max-w-[120px] mx-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-[#0e65af] to-[#2ba5bd]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-200 font-montserrat">
              Discover how our solutions have helped businesses grow and thrive.
              Our clients&apos; success stories speak for themselves.
            </p>
          </div>

          {/* Swiper Slider */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true} // Loop to enable continuous sliding
            breakpoints={{
              768: { slidesPerView: 2 }, // Two slides for medium screens
              1024: { slidesPerView: 3 }, // Three slides for large screens
            }}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            modules={[Navigation, Pagination, Autoplay]}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="relative mb-6 font-montserrat">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-[#2ba5bd]"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#2ba5bd] opacity-30 rounded-full"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-gray-800 mb-4 font-montserrat">
                      <FaQuoteLeft className="inline text-2xl text-[#0e65af] font-montserrat" />{" "}
                      {testimonial.quote}{" "}
                      <FaQuoteRight className="inline text-2xl text-[#0e65af]" />
                    </p>
                    <h4 className="text-2xl font-bold text-[#2ba5bd]">
                      {testimonial.name}
                    </h4>
                    <p className="text-lg text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-100 font-montserrat">
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
      <StickyForm/>
    </div>
  );
}

export default Home;
