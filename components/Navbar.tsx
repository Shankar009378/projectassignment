"use client";
import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar: React.FC = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-27 bg-[#212122] text-white sticky top-0 z-10">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6 md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <ul className="hidden md:flex items-center space-x-6">
          <a href="#banner"><li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
            brands
          </li></a>
          <a href="#banner"><li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
            shop
          </li></a>
          <a href="#banner"><li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
            premium
          </li></a>
          <a href="#banner"><li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
            gift Cards
          </li></a>
        </ul>

        <div className="flex items-center justify-center flex-grow">
          <a href="#banner" className="flex items-center">
            <img
              src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
              alt="brava logo"
              className="h-20 w-30"
            />
          </a>
        </div>

        <ul className="hidden md:flex items-center space-x-6">
          <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
            become an affiliate
          </li>
          <a href="https://twitter.com" target="_blank">
            <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
              <FaTwitter className="text-2xl" />
            </li>
          </a>
          <a href="https://tiktok.com" target="_blank">
            <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
              <FaTiktok className="text-2xl" />
            </li>
          </a>
          <a href="https://instagram.com" target="_blank">
            <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
              <FaInstagram className="text-2xl" />
            </li>
          </a>
          <a>
            <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
              <MdOutlineAccountCircle className="text-2xl" />
            </li>
          </a>
          <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
            <IoSearch className="text-2xl" />
          </li>
          <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
            <LuShoppingBag className="text-2xl" />
          </li>
        </ul>

        {showMenu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ul className="flex items-center space-x-6">
                <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
                  brands
                </li>
                <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
                  shop
                </li>
                <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
                  premium
                </li>
                <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
                  gift Cards
                </li>
              </ul>

              <ul className="hidden md:flex items-center space-x-6">
                <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
                  become an affiliate
                </li>
                <a href="https://twitter.com" target="_blank">
                  <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
                    <FaTwitter className="text-2xl" />
                  </li>
                </a>
                <a href="https://tiktok.com" target="_blank">
                  <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
                    <FaTiktok className="text-2xl" />
                  </li>
                </a>
                <a href="https://instagram.com" target="_blank">
                  <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
                    <FaInstagram className="text-2xl" />
                  </li>
                </a>
                <a>
                  <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
                    <MdOutlineAccountCircle className="text-2xl" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// Your TSX code
// "use client";

// import React, { useState } from "react";
// import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
// import { IoSearch } from "react-icons/io5";
// import { LuShoppingBag } from "react-icons/lu";
// import { MdOutlineAccountCircle } from "react-icons/md";

// const Navbar: React.FC = () => {
//   const [isClick, setisClick] = useState(false);

//   const toggleNavbar = () => {
//     setisClick(!isClick);
//   };

//   return (
//     <div className="w-full h-27 bg-[#212122] text-white sticky top-0 z-10">
//       <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
//         <div className="flex items-center md:hidden">
//           <button
//             className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//             onClick={toggleNavbar}
//           >
//             {isClick ? (
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         <ul className='flex items-center space-x-6 '>
//           <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//             brands
//           </li>
//           <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//             shop
//           </li>
//           <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//             premium
//           </li>
//           <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//             gift Cards
//           </li>
//         </ul>

//         <div className="flex items-center justify-center flex-grow">
//           <a href="#banner" className="flex items-center">
//             <img
//               src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
//               alt="brava logo"
//               className="h-20 w-30"
//             />
//           </a>
//         </div>

//         <ul className='flex items-center space-x-6'>
//           <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//             become an affiliate
//           </li>
//           <a href="https://twitter.com" target="_blank">
//             <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//               <FaTwitter className="text-2xl" />
//             </li>
//           </a>
//           <a href="https://tiktok.com" target="_blank">
//             <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//               <FaTiktok className="text-2xl" />
//             </li>
//           </a>
//           <a href="https://instagram.com" target="_blank">
//             <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//               <FaInstagram className="text-2xl" />
//             </li>
//           </a>
//           <a>
//             <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//               <MdOutlineAccountCircle className="text-2xl" />
//             </li>
//           </a>
//           <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//             <IoSearch className="text-2xl" />
//           </li>
//           <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//             <LuShoppingBag className="text-2xl" />
//           </li>
//         </ul>
//       </div>

//       {isClick && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <ul className="flex items-center space-x-6">
//               <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//                 brands
//               </li>
//               <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//                 shop
//               </li>
//               <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//                 premium
//               </li>
//               <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//                 gift Cards
//               </li>
//             </ul>

//             <ul className="flex items-center space-x-6">
//               <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//                 become an affiliate
//               </li>
//               <a href="https://twitter.com" target="_blank">
//                 <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//                   <FaTwitter className="text-2xl" />
//                 </li>
//               </a>
//               <a href="https://tiktok.com" target="_blank">
//                 <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//                   <FaTiktok className="text-2xl" />
//                 </li>
//               </a>
//               <a href="https://instagram.com" target="_blank">
//                 <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//                   <FaInstagram className="text-2xl" />
//                 </li>
//               </a>
//               <a>
//                 <li className="hover:text-[#E1C300] hover:underline-[#E1C300] cursor-pointer">
//                   <MdOutlineAccountCircle className="text-2xl" />
//                 </li>
//               </a>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

