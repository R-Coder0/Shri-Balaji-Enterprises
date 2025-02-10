// src/pages/About.jsx
import { useState } from "react";
import headerImage from "../assets/About/AboutHero.jpg";
import aboutImage1 from "../assets/About.jpg";
import aboutImage3 from "../assets/product/IrroningTable.webp";
import teamImage3 from "../assets/profile.jpg";
import teamImage1 from "../assets/profile.jpg";
import teamImage2 from "../assets/profile.jpg";
import Ts from '../assets/TS.png'
import {
  FaHeartbeat,
  FaStar,
  FaLightbulb,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";
import RequestForm from "../components/RequestForm";

const About = () => {
  const [showRequestForm, setShowRequestForm] = useState(false);

  const toggleRequestForm = () => {
    setShowRequestForm(!showRequestForm);
  };

  return (
    <div className="about-page">
      {/* Header Section with Background Image */}
      <section
        className="relative bg-cover bg-center text-white text-center h-[45vh] md:h-[70vh] flex flex-col justify-center pt-20 md:pt-24 font-montserrat"
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundAttachment: "fixed", // Keeps the image fixed on scroll
        }}
      >
        {/* Dark Overlay */}
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-0 font-montserrat">
          <h1
            className="text-[2rem] md:text-6xl font-extrabold mb-4 font-montserrat"
            data-aos="fade-down"
          >
            About Shri Balaji Enterprises
          </h1>
          <p
            className="text-[0.72rem] md:text-lg max-w-3xl mx-auto leading-relaxed font-montserrat"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Founded in 1996, Shri Balaji Enterprises is a trusted manufacturer
            and exporter of high-quality{" "}
            <span className="font-semibold">Clothes Drying Stands</span>,{" "}
            <span className="font-semibold">Clothes Racks</span>,
            <span className="font-semibold">Shoes Racks</span>, and{" "}
            <span className="font-semibold">Ironing Tables</span>. Based in
            Delhi, India, we combine durability, innovation, and style to
            enhance every household.
          </p>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-20 bg-maroon-900 text-gold-100" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h2 className="text-5xl font-extrabold mb-6 text-gold-500 text-[#0e65af] font-montserrat">
              Discover Our Legacy
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-black font-montserrat">
              Established in 1996, Shri Balaji Enterprises has been a leading
              name in the manufacturing and export of high-quality Clothes
              Drying Stands, Clothes Racks, Shoes Racks, and Ironing Tables.
              With decades of expertise, we have earned the trust of customers
              worldwide.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-black font-montserrat">
              We take pride in offering products that blend innovation,
              durability, and style, meeting the diverse needs of modern
              households. Our commitment to quality and customer satisfaction
              has made us a preferred choice in the industry.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-black font-montserrat">
              Based in Delhi, India, we have been at the forefront of designing
              functional and aesthetic home solutions. Our mission is to make
              everyday living more convenient with products that combine
              practicality with contemporary design.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-black font-montserrat">
              Join the many satisfied customers who trust Shri Balaji
              Enterprises for top-notch products that enhance the functionality
              and elegance of their homes. Let us help you discover the perfect
              solutions for your needs.
            </p>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="relative">
              <img
                src={aboutImage1}
                alt="About Hira Band"
                className="shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-50 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-6 space-y-8 md:space-y-0 md:space-x-12 gap-8">
          {/* Content */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <h2 className="text-5xl font-extrabold mb-6 text-[#2ba5bd] font-montserrat">
              Discover the Excellence in Home Solutions
            </h2>
            <p className="text-lg leading-relaxed mb-4 font-montserrat">
              At Shri Balaji Enterprises, we believe in providing more than just
              home essentials—we offer solutions that elevate your living space.
              Our products are designed to bring practicality, style, and
              durability to every home, making everyday tasks easier and more
              efficient.
            </p>
            <p className="text-lg leading-relaxed mb-4 font-montserrat">
              Whether it’s our Clothes Drying Stands, Ironing Tables, Shoes
              Racks, or Clothes Racks, each product is carefully crafted to meet
              the needs of modern households. We blend cutting-edge design with
              high-quality materials to ensure that every item enhances your
              home with both functionality and elegance.
            </p>
            <p className="text-lg leading-relaxed mb-4 font-montserrat">
              From residential spaces to commercial establishments, Shri Balaji
              Enterprises has been trusted by customers for years. Our mission
              is to deliver home solutions that are not only practical but also
              aesthetically pleasing, offering our customers the best in both
              form and function.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-montserrat">
              Join the countless customers who rely on Shri Balaji Enterprises
              for superior home solutions. Let us help you make your home a more
              organized and stylish space with our range of products designed
              for your needs.
            </p>
          </div>

          {/* Image with Proper Sizing */}
          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative w-full max-w-lg">
              {" "}
              {/* Set max width here */}
              <img
                src={aboutImage3}
                alt="Home Solutions"
                className="w-full h-auto shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Company Profile Section */}
      <section className="py-20 bg-gray-50 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-[#0e65af] font-montserrat text-center">
            Company Profile
          </h2>
          <p className="text-lg max-w-4xl mx-auto mb-12 text-center font-montserrat">
            Shri Balaji Enterprises is a notable manufacturer, supplier, and
            exporter of Stainless Steel 3 Shelves Shoe Rack, Ironing Table,
            Laundry Cloth Drying Stand, Stainless Steel Four Shelves Cloth Rack,
            and more. Established in 1996, we are based in Delhi, India, and
            offer high-quality, tailored solutions to meet the needs of our
            clients.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 text-left text-sm shadow-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-3 px-6 font-semibold text-gray-800">
                    Key Facts
                  </th>
                  <th className="py-3 px-6 font-semibold text-gray-800">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-6 py-4">Business Type</td>
                  <td className="border px-6 py-4">
                    Manufacturer, Exporter, and Supplier
                  </td>
                </tr>
                <tr>
                  <td className="border px-6 py-4">Year of Establishment</td>
                  <td className="border px-6 py-4">1996</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4">Location</td>
                  <td className="border px-6 py-4">Delhi, India</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4">Number of Employees</td>
                  <td className="border px-6 py-4">25</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4">GST No.</td>
                  <td className="border px-6 py-4">07BMGPA7276P1ZI</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4">IEC</td>
                  <td className="border px-6 py-4">BMGP7276P</td>
                </tr>
                <tr>
                  <td className="border px-6 py-4">Banker</td>
                  <td className="border px-6 py-4">HDFC Bank</td>
                </tr>
              </tbody>
            </table>
          </div>
          <blockquote className="text-lg font-semibold italic text-center text-[#0e65af] mt-8">
            &quot;We are dealing with more than 50 pieces.&quot;
          </blockquote>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-white text-gray-800" data-aos="fade-up">
        <div className="container mx-auto text-center font-montserrat">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900 font-montserrat">
            Our Mission & Vision
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 font-montserrat">
            At Shri Balaji Enterprises, we are committed to delivering
            high-quality home solutions that enhance the functionality and
            beauty of every space. Our mission is to provide innovative and
            durable products that offer practical solutions to everyday needs.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-[#0e65af] to-[#2ba5bd] p-8 rounded-lg shadow-md text-white">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-2 font-montserrat">
                <FaHeartbeat className="text-yellow-400 " /> Our Mission
              </h3>
              <p className="font-montserrat">
                Our mission is to revolutionize home products with innovative
                designs that cater to modern living. We strive to deliver
                products that seamlessly blend functionality, style, and
                durability. By constantly pushing the boundaries of design, we
                aim to create home solutions that simplify daily tasks while
                elevating the aesthetic of any space.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#0e65af] to-[#2ba5bd] p-8 rounded-lg shadow-md text-white">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-2 font-montserrat ">
                <FaStar className="text-yellow-400" /> Our Vision
              </h3>
              <p className="font-montserrat">
                Shri Balaji Enterprises envisions becoming a leader in the home
                products industry, known for providing exceptional quality and
                innovative designs. Our vision is to set the benchmark for home
                solutions, creating products that bring lasting value and
                enhance the lives of our customers. We aspire to be recognized
                as a trusted brand that delivers both style and functionality in
                every product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 text-gray-800" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-[#0e65af] font-montserrat">
            Our Core Values
          </h2>
          <p className="text-lg max-w-4xl mx-auto mb-8 font-montserrat">
            At Shri Balaji Enterprises, our core values are the foundation of
            our commitment to providing high-quality home products. These values
            guide us in everything we do, from design to delivery, ensuring
            every product meets the highest standards of craftsmanship,
            innovation, and customer satisfaction.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="text-[#2ba5bd] text-5xl mb-4">
                <FaLightbulb />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-montserrat">
                Innovation
              </h3>
              <p className="font-montserrat">
                We embrace creativity and innovation in every product we design,
                ensuring that we continually meet the evolving needs of our
                customers with cutting-edge solutions.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="text-[#2ba5bd] text-5xl mb-4">
                <FaCheckCircle />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-montserrat">
                Quality
              </h3>
              <p className="font-montserrat">
                We are committed to delivering products that exceed expectations
                in durability and performance, ensuring that each item enhances
                the functionality and aesthetics of your space.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="text-[#2ba5bd] text-5xl mb-4">
                <FaHandsHelping />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-montserrat">
                Customer-Centric
              </h3>
              <p className="font-montserrat">
                We prioritize our customers needs, focusing on providing
                exceptional service and building lasting relationships based on
                trust and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call-to-Action Section */}
      <section className="py-20 bg-[#0e65af] text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 font-montserrat">
            Ready to Explore Our Products?
          </h2>
          <p className="text-lg mb-8 font-montserrat">
            Contact us to know more our products and services.
          </p>
          <a
            href="/contact"
            className="bg-transparent text-white hover:text-black py-3 px-8  shadow-lg hover:shadow-xl hover:bg-[#76b9c7] transform hover:scale-105  transition-all duration-300"
            style={{
              border: "2px solid #76b9c7",
            }}
          >
            Book Now
          </a>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-6 bg-white text-gray-800" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900 font-montserrat">
            Meet Our Talented Team
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 font-montserrat">
            Our dedicated team at Shri Balaji Enterprises combines years of
            manufacturing expertise and innovation to deliver high-quality
            products, making each customer’s experience exceptional.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src={teamImage1}
                alt="Team Member"
                className="rounded-full mx-auto mb-4 w-32 h-32 shadow-md"
              />
              <h3 className="text-2xl font-bold mb-2">Name 1</h3>
              <p className="text-[#0e65af] font-semibold">Founder</p>
              <p className="text-gray-600">Founder of The company.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src={teamImage2}
                alt="Team Member"
                className="rounded-full mx-auto mb-4 w-32 h-32 shadow-md"
              />
              <h3 className="text-2xl font-bold mb-2">Name 2</h3>
              <p className="text-[#0e65af] font-semibold">Co-Founder</p>
              <p className="text-gray-600">Co-Founder of the company.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src={teamImage3}
                alt="Team Member"
                className="rounded-full mx-auto mb-4 w-32 h-32 shadow-md"
              />
              <h3 className="text-2xl font-bold mb-2">Name 3</h3>
              <p className="text-[#0e65af] font-semibold">CEO</p>
              <p className="text-gray-600">
                Cheif Technical Officer of the company
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section
        className="pb-8 bg-white text-gray-800 font-montserrat"
        data-aos="fade-up"
      >
        <div className="container mx-auto">
          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold text-[#0e65af] font-montserrat">
              Contact Us
            </h2>
          </div>

          {/* Contact Details */}
          <div className="text-lg max-w-4xl mx-auto mb-6 font-montserrat">
            <p className="mb-2">
              <strong>Address:</strong> Ground Floor, Kh No 499, Village
              Siraspur, Near Sunday Bazar Wali Gali, Jeevan Park, Delhi -
              110042, India
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> 08045475654
            </p>
            <p className="mb-2">
              <strong>Contact Person:</strong> Mr. Nitin Aggarwal (Proprietor)
            </p>
            <p>
              <strong>Mobile:</strong> 08045475654
            </p>
          </div>

          {/* Trusted Seller Badge */}
          <div className="flex justify-center mb-6">
            <img
              src={Ts} // Replace with actual "Trusted Seller" image link
              alt="Trusted Seller"
              className="w-24 h-auto"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="relative px-8 py-3 text-black hover:text-white font-medium shadow-md overflow-hidden group border border-[#0e65af]"
              onClick={toggleRequestForm}
            >
              <span className="absolute inset-0 bg-[#0e65af] transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              <span className="relative z-10">Enquiry Now</span>
            </button>
            <button className="relative px-8 py-3 text-black font-medium shadow-md border border-[#0e65af] overflow-hidden group">
              <span className="absolute inset-0 bg-[#0e65af] transform translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                <a href="tel:919971586369">Call Now</a>
              </span>
            </button>
          </div>
        </div>

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
    </div>
  );
};

export default About;
