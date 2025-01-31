import { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import image from "../assets/Gallery/61I9ViL4c1L.jpg";

const RequestForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    minimumOrder: "", // New field for dropdown
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
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          setResponseMessage("Request submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            minimumOrder: "",
          });
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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 top-[70px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-auto"
        style={{ borderTop: "4px solid #0e65af", borderRadius: "10px" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left Image Section */}
          <div
            className="hidden lg:block lg:w-1/2 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-8 left-6 text-white">
              <h2 className="text-3xl font-bold">Lorem ipsum dolor sit.</h2>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full lg:w-1/2 p-6 lg:p-12 font-montserrat">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Request Form</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
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
              {/* Minimum Order Dropdown */}
              <div>
                <label
                  htmlFor="minimumOrder"
                  className="block text-sm font-medium text-gray-700"
                >
                  Minimum Order
                </label>
                <select
                  id="minimumOrder"
                  name="minimumOrder"
                  value={formData.minimumOrder}
                  onChange={handleChange}
                  className="w-full p-3 border rounded focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="50 - 100">50 - 100</option>
                  <option value="100 - 200">100 - 200</option>
                  <option value="200 - 300">200 - 300</option>
                  <option value="300 - 400">300 - 400</option>
                  <option value="400 - 500">400 - 500</option>
                  <option value="500 - 1000">500 - 1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
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
        </div>
      </div>
    </motion.div>
  );
};

RequestForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default RequestForm;
