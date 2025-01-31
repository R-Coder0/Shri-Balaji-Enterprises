import "../styles/testimonial.css";
const testimonials = [
  {
    text: "The Properties and Builders made our home-buying experience seamless. Their professionalism and attention to detail ensured we found our dream home hassle-free. Highly recommended!",
    stars: 5,
    author: "Amit Khurana",
    position: "Homebuyer",
  },
  {
    text: "Exceptional service from The Properties and Builders! Their team guided us through every step of the property investment process, ensuring transparency and great returns. Trusted experts!",
    stars: 5,
    author: "Ritika Mehta",
    position: "Real Estate Investor",
  },
  {
    text: "From start to finish, The Properties and Builders provided outstanding construction services. Our custom-built villa was completed on time and exceeded our expectations. Great workmanship!",
    stars: 5,
    author: "Vikas Sharma",
    position: "Homeowner",
  },
  {
    text: "Choosing The Properties and Builders for our rental property management was the best decision. Their team ensures smooth tenant dealings and maintenance. Highly professional!",
    stars: 5,
    author: "Neha Arora",
    position: "Property Owner",
  },
];
const Testimonials = () => {
  return (
    <div className="reviews">
      <section
        className="testimonials-section"
        style={{
          borderTop: "1xp dashed gray",
        }}
      >
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>“{testimonial.text}”</p>
              <div className="stars">{"★".repeat(testimonial.stars)}</div>
              <div className="divider"></div>
              <div className="author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
