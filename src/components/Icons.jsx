import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Icons = () => {
  return (
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
                className="text-black hover:opacity-75"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="text-[#0a66c2] hover:opacity-75"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://wa.me/919971586369"
                className="text-green-600 hover:opacity-75"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
  )
}

export default Icons
