import { useState } from "react";
import emailjs from "emailjs-com";

// eslint-disable-next-line react/prop-types
const RequestCallForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_PUBLIC_KEY";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessMessage("Your request has been sent successfully!");
        setIsSubmitting(false);
        setFormData({ name: "", mobile: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setIsSubmitting(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="request-call-form-container"
      className=" bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto relative"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
      >
        ✖
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Request a Call Back
      </h2>

      {successMessage && (
        <p className="text-green-600 mb-4 text-center">{successMessage}</p>
      )}

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mobile Number
        </label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Enter your mobile number"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Enter additional details (optional)"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default RequestCallForm;
