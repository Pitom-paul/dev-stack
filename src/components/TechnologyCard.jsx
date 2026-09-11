// function TechnologyCard({ technology, onAdd, isAdded }) {
//   return (
//     <article className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
      
//       {/* Top */}
//       <div className="mb-5 flex items-start justify-between">
//         <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gray-50 p-3 transition group-hover:bg-orange-50">
//           <img
//             src={technology.icon}
//             alt={`${technology.name} icon`}
//             className="h-full w-full object-contain"
//           />
//         </div>

//         <span className="rounded-full bg-pink-50 px-3 py-1 text-[10px] font-bold text-pink-600">
//           {technology.badge}
//         </span>
//       </div>

//       {/* Name */}
//       <h3 className="text-xl font-extrabold tracking-tight text-gray-900">
//         {technology.name}
//       </h3>

//       {/* Description */}
//       <p className="mt-2 min-h-[60px] text-sm leading-6 text-gray-500">
//         {technology.description}
//       </p>

//       {/* Category + Difficulty */}
//       <div className="mt-5 flex items-center justify-between">
//         <span className="rounded-lg bg-purple-50 px-3 py-1.5 text-[10px] font-bold text-purple-600">
//           {technology.category}
//         </span>

//         <span className="text-xs font-semibold text-gray-400">
//           {technology.difficulty}
//         </span>
//       </div>

//       {/* Bottom */}
//       <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
        
//         {/* Rating */}
//         <div className="flex items-center gap-1 text-sm font-bold text-gray-700">
//           <span className="text-base text-amber-400">★</span>
//           {technology.rating}
//         </div>

//         {/* Add Button */}
//         <button
//           onClick={() => onAdd(technology)}
//           disabled={isAdded}
//           className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
//             isAdded
//               ? "cursor-not-allowed bg-gray-100 text-gray-400"
//               : "border border-gray-200 bg-white text-gray-700 hover:border-pink-300 hover:text-pink-600"
//           }`}
//         >
//           {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
//         </button>
//       </div>
//     </article>
//   );
// }

// export default TechnologyCard;