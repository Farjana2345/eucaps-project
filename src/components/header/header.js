import React, { useState } from "react";
import { Transition } from "@headlessui/react";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <nav className="bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 {/* <img
//                   className="h-8 w-8"
//                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                   alt="Workflow"
//                 /> */}
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <a
//                     href="#"
//                     className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Dashboard
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Team
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Projects
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Calendar
//                   </a>

//                   <a
//                     href="#"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Reports
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           {(ref) => (
//             <div className="md:hidden" id="mobile-menu">
//               <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <a
//                   href="#"
//                   className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Dashboard
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Team
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Projects
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Calendar
//                 </a>

//                 <a
//                   href="#"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Reports
//                 </a>
//               </div>
//             </div>
//           )}
//         </Transition>
//       </nav>
//     </div>
//   );
// }

// export default Header;


function Header (){
  return(
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">eucaps</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900">INVEST</a>
              <a className="mr-5 hover:text-gray-900">EXPLORE</a>
              <a className="mr-5 hover:text-gray-900">ABOUT</a>

        </nav>
        <button style={{borderRadius:'100px'}} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LOGIN
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> 
        </div>
    </header>
  )
}
export default Header;