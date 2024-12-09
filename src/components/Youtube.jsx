import React from "react";
import ReactPlayer from "react-player";

const YouTubeSection = () => {
  const videos = [
    {
      url: "https://youtu.be/W0f4g2VInL4?si=C1hDBkx4OJ3kPXt-",
      title: "Caboose Yt",
      desc: "6k Views",
    },
    {
      url: "https://youtu.be/Vg3m__GGhhk?si=YBixXayrfvpaZbal",
      title: "Caboose Yt",
      desc: "7k Views",
    },
  ];

  return (
    <div className="py-10 px-4">
      <h2 className="text-4xl font-bold mb-10 text-gray-200 text-center">
        Featured Videos
      </h2>

      <div className="space-y-10">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-6`}
          >
            {/* Conditional Rendering for Alternating Layout */}
            {index % 2 === 0 ? (
              <>
                {/* Text on Left, Video on Right */}
                <div className="text-center  md:text-left px-4">
                  <h3 className="text-2xl font-bold text-gray-200 uppercase">
                    {video.title}
                  </h3>
                  <p className="text-lg  text-gray-300 mt-2">{video.desc}</p>
                </div>
                <div className="px-4">
                  <div
                    className="relative w-full h-0 overflow-hidden rounded-lg shadow-lg"
                    style={{ paddingBottom: "56.25%" }} // 16:9 Aspect Ratio
                  >
                    <ReactPlayer
                      url={video.url}
                      controls
                      width="100%"
                      height="100%"
                      className="absolute top-0 left-0"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Video on Left, Text on Right */}
                <div className="px-4">
                  <div
                    className="relative w-full h-0 overflow-hidden rounded-lg shadow-lg"
                    style={{ paddingBottom: "56.25%" }} // 16:9 Aspect Ratio
                  >
                    <ReactPlayer
                      url={video.url}
                      controls
                      width="100%"
                      height="100%"
                      className="absolute top-0 left-0"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left px-4">
                  <h3 className="text-2xl font-bold text-gray-200 uppercase">
                    {video.title}
                  </h3>
                  <p className="text-lg text-gray-300 mt-2">{video.desc}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSection;
