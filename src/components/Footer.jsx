import { FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Work Together Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-8">
            Work Together?
          </h2>
          
          <a
  href="https://twitter.com/aftab6th"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-xl font-bold rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 group"
>
  <span className="mr-3">DM tartaglia</span>
  <FaX className="w-6 h-6 group-hover:-rotate-12 transition-transform" />
</a>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aftab Ansari. Crafted with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;