import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import image from '../assets/Gallery/61I9ViL4c1L.jpg';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setResponseMessage("Please complete the CAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setResponseMessage("Request submitted successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setCaptchaVerified(false);
        },
        (error) => {
          setResponseMessage("Something went wrong. Please try again.");
          console.error("EmailJS Error: ", error);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row bg-white shadow-lg overflow-hidden max-w-5xl mx-auto mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Image Section */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-8 left-6 text-white">
          <h2 className="text-3xl font-bold">Your Adventure Starts Here</h2>
          <p className="text-sm mt-2">
            Experience 20,000+ Tours And Activities from 1,200+ Suppliers
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Request Form</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 font-montserrat  ">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-orange-500 focus:border-orange-500"
              placeholder="Full Name"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-orange-500 focus:border-orange-500"
              placeholder="Email"
              required
            />
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <div className="flex">
              <select
                className="p-3 border rounded-l focus:ring-orange-500 focus:border-orange-500 bg-gray-100"
                defaultValue="+91"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-r focus:ring-orange-500 focus:border-orange-500"
                placeholder="Phone"
                required
              />
            </div>
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          {/* Captcha */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LdpRbgqAAAAAJARcPcsicMvNaoeoF4pxhCAt-YW" // Replace with your Google reCAPTCHA site key
              onChange={handleCaptchaChange}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-3 text-white bg-orange-500 rounded hover:bg-orange-600 transition duration-200 ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {responseMessage && (
          <motion.p
            className="mt-4 text-center text-sm text-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {responseMessage}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default RequestForm;