import "../styles/testimonial.css";
const testimonials = [
  {
    text: "Shree Balaji Enterprises offers the best quality cloth drying stands! Sturdy, durable, and perfect for everyday use. I’m extremely satisfied with my purchase.",
    stars: 5,
    author: "Rajesh Verma",
    position: "Satisfied Customer",
  },
  {
    text: "The ladder I purchased from Shree Balaji Enterprises is strong, lightweight, and easy to store. Excellent quality and very safe to use. Highly recommend their products!",
    stars: 5,
    author: "Priya Malhotra",
    position: "Customer",
  },
  {
    text: "Their shoe racks are stylish and space-saving. Now my entryway looks more organized than ever. Great design and sturdy build!",
    stars: 5,
    author: "Ankit Saxena",
    position: "Customer",
  },
  {
    text: "I love the ironing table from Shree Balaji Enterprises. It's well-built, adjustable, and makes ironing much easier. A must-have for every household!",
    stars: 5,
    author: "Meenal Agarwal",
    position: "Customer",
  },
];
const Testimonials = () => {
  return (
    <div className="reviews max-w-[1440px] mx-auto">
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
