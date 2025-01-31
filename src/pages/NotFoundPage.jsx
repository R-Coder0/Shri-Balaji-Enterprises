import { Link } from "react-router-dom";
import notFoundImage from "../assets/404.png"; // Add a 404 image in your assets folder

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Image Section */}
      <div className="text-center">
        <img
          src={notFoundImage}
          alt="404 Not Found"
          className="max-w-sm md:max-w-md mx-auto"
        />
      </div>
      {/* Text Section */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600">
          We can&apos;t find the page you&apos;re looking for.
        </p>
      </div>
      {/* Button Section */}
      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
