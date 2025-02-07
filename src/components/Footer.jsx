import {
  FaTwitter,
  FaInstagram,
  FaReddit,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
              About Me
            </h3>
            <p className="text-gray-400 text-lg">
              Hi, I’m Aftab Ansari. I love editing videos and telling stories
              through them. Making things look good and stand out is what I
              enjoy the most.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
              Contact
            </h3>
            <p className="text-gray-400 text-lg">
              You can reach me at{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-indigo-500 hover:text-white transition duration-300"
              >
                aftabprem17@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
              Follow Me
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/aftabDec"
                className="text-indigo-500 hover:text-white transition duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://discord.com/channels/@tartaglia_9"
                className="text-indigo-500 hover:text-white transition duration-300"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href="https://x.com/aftab6th"
                className="text-indigo-500 hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/aetheris_4"
                className="text-indigo-500 hover:text-white transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.reddit.com/user/Euphoric-Funny-4189/"
                className="text-indigo-500 hover:text-white transition duration-300"
              >
                <FaReddit size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} Aftab. All Rights Reserved.
          </p>
        </div>

        {/* Developed By Section */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Developed by{" "}
            <span className="text-indigo-500">Aftab, your friendly editor</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
