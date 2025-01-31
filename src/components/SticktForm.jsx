import { useState } from "react";
import emailjs from "emailjs-com";

const StickyForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    minimumOrder: "",
    message: "",
  });

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        // eslint-disable-next-line no-unused-vars
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            minimumOrder: "",
            message: "",
          });
        },
        // eslint-disable-next-line no-unused-vars
        (error) => {
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="fixed top-20 right-0 z-50 font-montserrat">
      {/* Toggle Button */}
      <button
        onClick={toggleForm}
        className="bg-[#0e65af] text-white px-3 py-1  shadow-lg hover:opacity-90 transition"
      >
        {isOpen ? "Close" : "Open Form"}
      </button>

      {/* Form */}
      {isOpen && (
        <div className="bg-white border border-gray-200 shadow-xl rounded-lg p-6 w-80">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>
          <form className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label htmlFor="fullName" className="block text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="minimumOrder"
                className="block text-sm text-gray-600"
              >
                Minimum Order
              </label>
              <select
                id="minimumOrder"
                name="minimumOrder"
                value={formData.minimumOrder}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="" disabled>
                  Select order range
                </option>
                <option value="50-100">50-100</option>
                <option value="100-200">100-200</option>
                <option value="200-300">200-300</option>
                <option value="300-500">300-500</option>
                <option value="500-1000">500-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#0e65af] border border-[#0e65af] text-white w-full py-2 hover:bg-transparent hover:text-black shadow-lg hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StickyForm;
