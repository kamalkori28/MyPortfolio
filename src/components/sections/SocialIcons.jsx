// components/SocialIcons.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';


export const SocialIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-17 sm:gap-10 md:gap-12 p-4 sm:p-6">
      <a
        href="https://github.com/kamalkori28"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-xl bg-white border border-gray-300 hover:scale-110 hover:shadow-md transition-transform duration-300 ease-in-out"
      >
        <FaGithub size={24} color="#181717" />
      </a>

      <a
        href="https://www.instagram.com/_anshu__kori"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-xl bg-white border border-gray-300 hover:scale-110 hover:shadow-md transition-transform duration-300 ease-in-out"
      >
        <FaInstagram size={24} color="#E4405F" />
      </a>

      <a
        href="https://www.linkedin.com/in/kamalkori28"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-xl bg-white border border-gray-300 hover:scale-110 hover:shadow-md transition-transform duration-300 ease-in-out"
      >
        <FaLinkedin size={24} color="#0077B5" />
      </a>
    </div>
  );
};