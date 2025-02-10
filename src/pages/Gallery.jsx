import { useState } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import Masonry from "react-masonry-css"; // Import Masonry layout
import '../styles/gallery.css'
import heroImage from '../assets/banner.svg'
function Gallery() {
  // Dynamically import all images
  const images = Object.values(
    import.meta.glob("../assets/product/*.{jpg,jpeg,png,webp}", { eager: true })
  ).map((module) => module.default);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index); // Set the index of the clicked image
  };

  const closeLightbox = () => {
    setLightboxIndex(null); // Close the lightbox
  };

  // Breakpoints for Masonry layout
  const breakpointColumnsObj = {
    default: 4, 
    1100: 3, 
    768: 2, 
    500: 1, 
  };

  return (
    <div className="text-center bg-gray-100">
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-40 flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-contain bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Gallery
          </h1>
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Explore our curated collection of stunning moments and beautiful
            products.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-800">
            Our Gallery
          </h2>

          {/* Masonry Layout */}
          <Masonry
            breakpointCols={breakpointColumnsObj} // Set responsive breakpoints
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden shadow-md cursor-pointer"
                onClick={() => openLightbox(index)} // Open lightbox
              >
                {/* Image */}
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover" // Ensures proper scaling
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold tracking-wider">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images.map((img) => ({ url: img }))}
          startIndex={lightboxIndex}
          onClose={closeLightbox} // Close lightbox
        />
      )}
    </div>
  );
}

export default Gallery;
