// "use client";

// import React, { useState } from "react";
// import {
//   Shuffle,
//   SkipBack,
//   SkipForward,
//   Repeat,
//   Pause,
//   Play,
// } from "lucide-react";

// interface MusicPlayerProps {
//   title: string;
//   artist: string;
//   coverUrl: string;
//   duration: string;
//   currentTime: string;
// }

// const MusicPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(true);

//   const musicData = {
//     title: "Don't Need You",
//     artist: "Virtual Riot",
//     coverUrl: "/api/placeholder/64/64",
//     duration: "5:03",
//     currentTime: "3:39",
//   };

//   const progress =
//     ((parseInt(musicData.currentTime.split(":")[0]) * 60 +
//       parseInt(musicData.currentTime.split(":")[1])) /
//       (parseInt(musicData.duration.split(":")[0]) * 60 +
//         parseInt(musicData.duration.split(":")[1]))) *
//     100;

//   return (
//     <div className="bg-[#282828] p-4 rounded-xl max-w-md w-full shadow-lg">
//       <div className="flex items-center gap-4 mb-4">
//         <img
//           src={musicData.coverUrl}
//           alt={`${musicData.title} cover`}
//           className="w-16 h-16 rounded-md"
//         />
//         <div>
//           <h2 className="text-[#1DB954] font-medium">{musicData.title}</h2>
//           <p className="text-white text-sm">{musicData.artist}</p>
//         </div>
//       </div>

//       <div className="space-y-2">
//         <div className="relative h-1 bg-[#4D4D4D] rounded-full">
//           <div
//             className="absolute h-full bg-[#1DB954] rounded-full"
//             style={{ width: `${progress}%` }}
//           />
//         </div>

//         <div className="flex justify-between text-xs text-[#B3B3B3]">
//           <span>{musicData.currentTime}</span>
//           <span>{musicData.duration}</span>
//         </div>
//       </div>

//       <div className="flex items-center justify-center gap-6 mt-4">
//         <button className="text-[#B3B3B3] hover:text-white transition-colors">
//           <Shuffle className="w-5 h-5" />
//         </button>
//         <button className="text-[#B3B3B3] hover:text-white transition-colors">
//           <SkipBack className="w-5 h-5" />
//         </button>
//         <button
//           className="bg-[#1DB954] p-3 rounded-full hover:scale-105 transition-transform"
//           onClick={() => setIsPlaying(!isPlaying)}
//         >
//           {isPlaying ? (
//             <Pause className="w-6 h-6 text-black" />
//           ) : (
//             <Play className="w-6 h-6 text-black" />
//           )}
//         </button>
//         <button className="text-[#B3B3B3] hover:text-white transition-colors">
//           <SkipForward className="w-5 h-5" />
//         </button>
//         <button className="text-[#B3B3B3] hover:text-white transition-colors">
//           <Repeat className="w-5 h-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;
