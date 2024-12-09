import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Profile Image */}
      <img
        src="childe.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-4 shadow-lg"
        style={{ "--brown": "#835c3b" }}
      />
      {/* Profile Info */}
      <h1 className="text-3xl font-bold">
        Tartaglia <span>(Aftab)</span>
      </h1>

      <p className="text-gray-400 text-center max-w-md mt-2">
        Video Editor | Developer | I create awesome things and make them look
        good.
      </p>
      {/* Links */}
      <div className="mt-4 flex space-x-4">
        <a
          href="https://github.com/aftabdec"
          className="text-brown hover:text-gray-300 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "--brown": "#a9825c" }}
        >
          GitHub
        </a>
        <a
          href="https://x.com/aftab6th"
          className="text-brown hover:text-gray-300 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </div>
    </div>
  );
};

export default Profile;
