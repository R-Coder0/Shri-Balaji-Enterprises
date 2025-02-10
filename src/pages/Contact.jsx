import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import heroImage from "../assets/banner.svg";

const Contact = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(""); // Clear any previous messages

    try {
      await emailjs.send(
        "service_0a7ufx6",
        "template_po5hlml",
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_message: formData.message,
        },
        "2zeRNlW7w8EuZlHUQ"
      );

      setResponseMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setResponseMessage("Oops! Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-40 flex items-center justify-center font-montserrat">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-contain bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-8 font-montserrat">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 font-montserrat"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Contact Us
          </h1>
          <p
            className="text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto font-montserrat"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let us make your product{" "}
            <span className="font-bold">unforgettable</span>. Reach out to us
            for <span className="font-bold">bookings</span> and inquiries!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Contact Form */}
          <div className="bg-white shadow-2xl p-10 rounded-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#0e65af] font-montserrat">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 font-montserrat">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#2ba5bd]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-transparent text-black font-bold hover:bg-[#0e65af] hover:text-white transition duration-300"
                style={{
                  border: "2px solid #0e65af"
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {responseMessage && (
                <p className="mt-4 text-center text-green-600 font-semibold">
                  {responseMessage}
                </p>
              )}
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-[#0e65af] font-montserrat">
              Contact Information
            </h2>
            <p className="text-lg text-gray-700 font-montserrat">
              Connect with us directly using the contact information below, or
              reach out on our social platforms.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 text-lg">
              <div className="flex items-center text-gray-700 font-montserrat">
                <FaPhoneAlt className="text-[#0e65af] mr-3" /> +91 9971586369
              </div>
              <div className="flex items-center text-gray-700 font-montserrat">
                <FaEnvelope className="text-[#0e65af] mr-3" />{" "}
                info@shribalajienterprises.in
              </div>
              <div className="flex items-center text-gray-700 font-montserrat">
                <FaMapMarkerAlt className="text-[#0e65af] mr-3" /> KH. No. 494,
                Ground Floor, Village Siraspur, Jeewan Park, Delhi - 110042
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 pt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gold-600 hover:text-gold-700 transition duration-300 transform hover:scale-110"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gold-600 hover:text-gold-700 transition duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center text-[#0e65af]">
            Our Location
          </h3>
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.799638577147!2d77.1430966730172!3d28.75539853155101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0198307a0481%3A0xb244435d9f8a3540!2sSHRI%20BALAJI%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1733905967619!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
