import React from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
const YouTubeSection = () => {
  const videos = [
    {
      url: "https://youtu.be/p8BA2KMEq2A?si=4gFeB7Z3OOk-xI_p",
      title: "CriticalByte",
      desc: "6k Views",
    },
    {
      url: "https://youtu.be/Ky4Mh8uAUpY?si=UQZ7MyqsncGC9kuw",
      title: "iDaeDream",
      desc: "2.3k Views",
    },
    {
      url: "https://youtu.be/ON775U-L5OU?si=Uicovo5sudfAWeqq",
      title: "AYHAN",
      desc: "422 Views",
    },
    {
      url: "https://youtu.be/bEqQy2Ojyuo?si=IskDCezMI-omeAwn",
      title: "iDaeDream",
      desc: "1.1k Views",
    },

  ];




    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.2 }
      }
    };
  
    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    };
  
    const fadeIn = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8 } }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900/20 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Featured Videos
              </span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-2 h-1 mx-auto bg-gradient-to-r from-blue-500 to-transparent"
              />
            </motion.h2>
  
            <div className="space-y-20 lg:space-y-28">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-black/80 via-gray-900/50 to-blue-900/20 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
                    {/* Video Player - Increased height */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className={`relative overflow-hidden rounded-2xl shadow-2xl ${
                        index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative w-full h-0 pb-[65%] transition-transform duration-500 group-hover:scale-[1.02]">
                        <ReactPlayer
                          url={video.url}
                          controls
                          width="100%"
                          height="100%"
                          className="absolute top-0 left-0"
                          light={true}
                          playIcon={
                            <motion.div 
                              whileHover={{ scale: 1.1 }}
                              className="w-16 h-16 bg-blue-500/90 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all"
                            >
                              <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                              </svg>
                            </motion.div>
                          }
                        />
                      </div>
                    </motion.div>
  
                    {/* Video Info */}
                {/* Video Info */}
<motion.div
  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className={`flex flex-col justify-center ${
    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
  } p-4 md:p-6`}
>
  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
    {video.title}
  </h3>
  <div className="flex items-center space-x-3 mb-6">
    <span className="flex items-center text-blue-300/80">
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      {video.desc}
    </span>
  </div>
  <a
    href={video.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center w-fit px-6 py-3 border border-blue-500/30 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-all group"
  >
    <span className="text-blue-300 group-hover:text-white">
      Watch Full Video
    </span>
    <svg
      className="ml-2 w-4 h-4 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
</motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default YouTubeSection;
