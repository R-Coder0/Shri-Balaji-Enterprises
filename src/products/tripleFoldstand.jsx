import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import productImage from "../assets/Gallery/81h0pC98XjL.jpg"; // Replace with your product image path
import heroBackground from "../assets/hero1.jpg";
import RequestForm from "../components/RequestForm";
import RequestCallForm from "../components/RequestCallForm";
import '../styles/product.css'

const TripleFoldstand = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [isCallBackModalOpen, setIsCallBackModalOpen] = useState(false);
    const [showRequestForm, setShowRequestForm] = useState(false);

    const toggleRequestForm = () => {
        setShowRequestForm(!showRequestForm);
    };

    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    // };

    // const handleCloseModal = () => {
    //     setIsModalOpen(false);
    // };

    const handleOpenCallBackModal = () => {
        setIsCallBackModalOpen(true); // Open the modal
    };

    const handleCloseCallBackModal = () => {
        setIsCallBackModalOpen(false); // Close the modal
    };
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the delivery time for the product?",
            answer: "The delivery time for the product is 10 days after placing the order.",
        },
        {
            question: "What are the payment terms?",
            answer: "We offer cash on delivery (COD) and other flexible payment options.",
        },
        {
            question: "What is the minimum order quantity?",
            answer: "The minimum order quantity for this product is 50 units.",
        },
        {
            question: "Is the product available for outdoor use?",
            answer: "Yes, the product is designed for both indoor and outdoor use.",
        },
        {
            question: "What material is the product made of?",
            answer: "The product is made of high-quality stainless steel with an anti-corrosion coating.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center text-white text-center h-[40vh] flex flex-col justify-center"
                style={{ backgroundImage: `url(${heroBackground})` }}
            >
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-4">Triple Fold Cloth Drying Stand</h1>
                    <nav className="flex justify-center items-center space-x-2 text-sm">
                        <Link to="/" className="text-blue-300 hover:underline">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link to="/products" className="text-blue-300 hover:underline">
                            Products
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-white">Triple Fold Cloth Drying Stand</span>
                    </nav>
                </div>
            </section>

            {/* Product Details Section */}
            <section className="container mx-auto px-6 md:px-12 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Card */}
                    <div className="bg-white rounded-lg shadow-md p-6  flex items-center justify-center">
                        <img
                            src={productImage}
                            alt="Triple Fold Cloth Drying Stand"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>

                    {/* Description Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 ">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Triple Fold Cloth Drying Stand
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Shri Balaji Enterprises brings you the <strong>Triple Fold Cloth Drying Stand</strong>, a perfect blend of elegance and functionality for your laundry needs. Designed to meet the modern household&apos;s requirements, this drying stand is an excellent choice for convenient and organized drying of clothes. Its sleek white finish adds a touch of sophistication to your home.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Made with top-quality stainless steel and coated with a premium white finish, the Triple Fold Cloth Drying Stand offers excellent durability and style. Its anti-corrosion properties make it ideal for long-term use, even in humid environments. The foldable and space-saving design ensures it fits seamlessly into your lifestyle, whether indoors or outdoors.
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>High-quality stainless steel frame with a stylish white finish</li>
                            <li>Foldable design for easy storage and portability</li>
                            <li>Multiple tiers for drying a wide range of clothes and linens</li>
                            <li>Sturdy anti-slip base for enhanced stability and safety</li>
                            <li>Rust-resistant and weatherproof for long-lasting performance</li>
                            <li>Ideal for both indoor and outdoor drying requirements</li>
                        </ul>
                        <p className="text-gray-700">
                            Upgrade your laundry experience with the <strong>Triple Fold Cloth Drying Stand</strong>. Trust Shri Balaji Enterprises for products that combine innovative design, exceptional quality, and practical solutions for everyday needs. Choose a product that makes your life easier and your home more organized.
                        </p>

                    </div>
                </div>
            </section>
            {/* Details */}
            <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
                <div className="bg-white rounded-lg shadow-md p-6 ">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Triple Fold
                    </h3>
                    <p className="text-xl text-red-600 font-bold mb-4">1250.0 INR/Unit</p>

                    {/* Product Details Table */}
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">
                            Product Details:
                        </h4>
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                <tr>
                                    <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">
                                        Feature
                                    </td>
                                    <td className="border-b border-gray-300 py-2 text-gray-600">
                                        High Quality
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">
                                        Usage
                                    </td>
                                    <td className="border-b border-gray-300 py-2 text-gray-600">
                                        Commercial & Household
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">
                                        Size
                                    </td>
                                    <td className="border-b border-gray-300 py-2 text-gray-600">
                                        Different Available
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">
                                        Material
                                    </td>
                                    <td className="border-b border-gray-300 py-2 text-gray-600">
                                        Stainless Steel
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">
                                        Function
                                    </td>
                                    <td className="border-b border-gray-300 py-2 text-gray-600">
                                        Manual
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Share Section */}
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-gray-700">Share Your Product:</span>
                        <a
                            href="https://www.facebook.com/profile.php?id=61571119231209"
                            className="text-blue-600 hover:opacity-75"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF className="text-lg" />
                        </a>
                        <a
                            href="#"
                            className="text-blue-400 hover:opacity-75"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className="text-lg" />
                        </a>
                        <a
                            href="#"
                            className="text-blue-700 hover:opacity-75"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn className="text-lg" />
                        </a>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        {/* Button to open the modal */}
                        <button
                            className="bg-white text-red-600 border border-red-600 py-3 px-6 rounded hover:bg-red-600 hover:text-white transition duration-300"
                            onClick={handleOpenCallBackModal}
                        >
                            Request to Call Back
                        </button>
                        <button
                            className="w-full md:w-auto bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition duration-300"
                            onClick={toggleRequestForm}
                        >
                            Send Inquiry
                        </button>
                    </div>
                </div>
            </section>

            {/* Price and Details Section */}
            <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
                <div className="bg-white rounded-lg shadow-md p-6 ">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Triple Fold Cloth Drying Stand Price and Quantity</h3>
                    <table className="w-full text-left border-collapse mb-6">
                        <tbody>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Price</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">1250.0 INR/Unit</td>
                            </tr>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Weight</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">9 Kg</td>
                            </tr>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Minimum Order Quantity</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">50 Units</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Triple Fold Cloth Drying Stand Product Specifications</h3>
                    <table className="w-full text-left border-collapse mb-6">
                        <tbody>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Feature</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">High Quality</td>
                            </tr>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Usage</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">Commercial & Household</td>
                            </tr>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Size</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">Different Available</td>
                            </tr>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Function</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">Manual</td>
                            </tr>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Material</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">Stainless Steel</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Triple Fold Cloth Drying Stand Trade Information</h3>
                    <table className="w-full text-left border-collapse">
                        <tbody>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Payment Terms</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">Cash on Delivery (COD)</td>
                            </tr>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Delivery Time</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">10 Days</td>
                            </tr>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Supply Ability</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">5000 Units Per Month</td>
                            </tr>
                            <tr>
                                <td className="border-b border-gray-300 py-2 pr-4 font-medium text-gray-800">Main Domestic Market</td>
                                <td className="border-b border-gray-300 py-2 text-gray-600">All India</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQs */}
            <section className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-md"
                        >
                            <button
                                className="w-full text-left px-6 py-4 flex justify-between items-center text-gray-800 font-medium hover:bg-gray-100 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="text-lg">
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="px-6 py-4 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>


            {/* Request Form Modal */}
            {showRequestForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-0 shadow-lg relative w-full max-w-[54rem]"
            style={{borderTop:"4px solid #0e65af",
                    borderRadius: "10px"
            }}
            >
              <button
                onClick={toggleRequestForm}
                className="absolute top-2 right-2 text-gray-600 font-montserrat hover:text-red-600"
              >
                ✖
              </button>
              <RequestForm />
            </div>
          </div>
        )}

            {/* Modal for the Request Call Form */}
            {isCallBackModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className=" p-6  rounded-lg shadow-lg relative w-full max-w-md">
                        <RequestCallForm onClose={handleCloseCallBackModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TripleFoldstand;