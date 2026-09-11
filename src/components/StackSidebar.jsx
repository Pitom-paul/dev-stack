// function StackSidebar({ stack, onRemove, onRemoveAll }) {
//   return (
//     <aside className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      
//       {/* Header */}
//       <div className="flex items-center justify-between border-b border-gray-100 pb-4">
//         <div>
//           <h3 className="text-lg font-extrabold text-gray-900">
//             Your Stack
//           </h3>

//           <p className="mt-1 text-xs text-gray-400">
//             Your selected technologies
//           </p>
//         </div>

//         <span className="grid h-8 min-w-8 place-items-center rounded-full bg-gradient-to-r from-orange-50 to-pink-50 px-2 text-xs font-extrabold text-pink-600">
//           {stack.length}
//         </span>
//       </div>

//       {/* Empty State */}
//       {stack.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-12 text-center">
//           <div className="mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gray-50 text-2xl">
//             🧩
//           </div>

//           <h4 className="text-sm font-bold text-gray-700">
//             Your stack is empty
//           </h4>

//           <p className="mt-2 max-w-[190px] text-xs leading-5 text-gray-400">
//             Add technologies from the list to build your development stack.
//           </p>
//         </div>
//       ) : (
//         <>
//           {/* Stack Items */}
//           <div className="mt-4 flex flex-col gap-2">
//             {stack.map((technology) => (
//               <div
//                 key={technology.id}
//                 className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 transition hover:bg-gray-100"
//               >
//                 {/* Icon */}
//                 <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white p-1.5 shadow-sm">
//                   <img
//                     src={technology.icon}
//                     alt={technology.name}
//                     className="h-full w-full object-contain"
//                   />
//                 </div>

//                 {/* Name + Category */}
//                 <div className="min-w-0 flex-1">
//                   <p className="truncate text-xs font-bold text-gray-800">
//                     {technology.name}
//                   </p>

//                   <p className="mt-0.5 text-[10px] text-gray-400">
//                     {technology.category}
//                   </p>
//                 </div>

//                 {/* Remove */}
//                 <button
//                   onClick={() => onRemove(technology.id)}
//                   className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
//                   aria-label={`Remove ${technology.name}`}
//                 >
//                   ×
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Remove All */}
//           <button
//             onClick={onRemoveAll}
//             className="mt-4 w-full rounded-xl border border-red-100 bg-red-50 py-2.5 text-xs font-bold text-red-500 transition hover:bg-red-100"
//           >
//             Remove All
//           </button>
//         </>
//       )}
//     </aside>
//   );
// }

// export default StackSidebar;