// import bannerStack from "../assets/banner-stack.png";

// function Hero() {
//   return (
//     <section className="overflow-hidden bg-white">
//       <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
//         <div className="grid items-center gap-12 lg:grid-cols-2">

//           {/* LEFT SIDE */}
//           <div>
//             <h1 className="text-5xl font-black leading-[1.05] tracking-[-2px] text-gray-900 sm:text-6xl lg:text-[68px]">
//               Build Your Ideal
//               <br />
//               <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
//                 Development Stack
//               </span>
//             </h1>

//             <p className="mt-7 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
//               Explore frontend, backend, database, and tooling options,
//               compare them side by side, and put together the stack that fits
//               your next project.
//             </p>

//             {/* BUTTONS */}
//             <div className="mt-9 flex items-center gap-5">

//               {/* Explore Technologies Button */}
//               <a
//                 href="#technologies"
//                 className="rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >
//                 Explore Technologies
//               </a>

//               {/* Learn More */}
//               <a
//                 href="#about"
//                 className="rounded-xl px-4 py-3.5 text-sm font-bold text-gray-700 transition hover:text-pink-600"
//               >
//                 Learn More
//               </a>

//             </div>
//           </div>

//           {/* RIGHT SIDE IMAGE */}
//           <div className="relative flex items-center justify-center">

//             {/* Orange decorative dots */}
//             <div className="absolute right-5 top-5 grid grid-cols-5 gap-2 opacity-60">
//               {[...Array(20)].map((_, index) => (
//                 <span
//                   key={index}
//                   className="h-1.5 w-1.5 rounded-full bg-orange-300"
//                 ></span>
//               ))}
//             </div>

//             {/* Background glow */}
//             <div className="absolute h-72 w-72 rounded-full bg-pink-100 opacity-40 blur-3xl"></div>

//             {/* Banner Image */}
//             <img
//               src={bannerStack}
//               alt="Development Stack"
//               className="relative z-10 w-full max-w-xl object-contain"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;