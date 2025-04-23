import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 p-8 bg-black/30 rounded-3xl backdrop-blur-lg border border-gray-800 shadow-2xl">
        {/* Profile Image */}
        <div className="flex justify-center relative group">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
          <img
            src="childe.jpg"
            alt="Profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-500/80 mb-6 shadow-xl relative transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Tartaglia
            <span className="block text-xl md:text-2xl text-blue-300 mt-2">
              (Aftab)
            </span>
          </h1>

          <p className="text-blue-200/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Video Editor | Developer
            <span className="block text-blue-300/70 text-sm md:text-base mt-2">
            Turning ideas into screen-ready stories
            </span>
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-6 mt-8">
          {[
            {
              href: "https://github.com/aftabdec",
              text: "GitHub",
              color: "from-blue-400 to-cyan-400",
            },
            {
              href: "https://x.com/aftab6th",
              text: "Twitter",
              color: "from-sky-400 to-blue-500",
            },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full bg-gradient-to-r ${link.color} hover:shadow-lg transition-all duration-300 group`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white group-hover:text-white/90">
                {link.text}
              </span>
              <svg
                className="ml-2 -mr-1 h-5 w-5 text-white group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
      </div>
    </div>
  );
};

export default Profile;