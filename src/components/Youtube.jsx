import React from "react";
import ReactPlayer from "react-player";

const YouTubeSection = () => {
  const videos = [
    {
      url: "https://youtu.be/W0f4g2VInL4?si=C1hDBkx4OJ3kPXt-",
      title: "Caboose Yt",
      desc: "8.5k Views",
    },
    {
      url: "https://youtu.be/Vg3m__GGhhk?si=YBixXayrfvpaZbal",
      title: "Caboose Yt",
      desc: "10k Views",
    },
    {
      url: "https://youtu.be/bEqQy2Ojyuo?si=IskDCezMI-omeAwn",
      title: "iDaeDream",
      desc: "1.1k Views",
    },
  ];

  return (
    <div className="py-10 px-4 bg-zinc-950">
      <h2 className="text-4xl font-bold mb-10 text-white text-center">
        Featured Videos
      </h2>

      <div className="space-y-10">
        {videos.map((video, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6"
          >
            {/** Alternating Layout Logic */}
            <div
              className={`order-1 ${index % 2 !== 0 ? "md:order-2" : ""} px-4`}
            >
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
            <div
              className={`order-2 ${
                index % 2 !== 0 ? "md:order-1" : ""
              } px-4 text-center`} // Ensure text is always centered
            >
              <h3 className="text-2xl font-bold text-white uppercase">
                {video.title}
              </h3>
              <p className="text-lg text-gray-300 mt-2">
                {video.desc || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSection;
