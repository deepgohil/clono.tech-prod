// import React from 'react';
import video from './video.mp4'
import { useState, useEffect } from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";

// function VideoWithText() {
//   const [openNav, setOpenNav] = useState(false);

//   useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);
//   const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Pages
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Account
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Blocks
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-normal"
//       >
//         <a href="#" className="flex items-center">
//           Docs
//         </a>
//       </Typography>
//     </ul>
//   );
//   return (
//     <div className="relative">
//       <video className="w-full" autoPlay loop muted>
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>



// <Navbar className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
// <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
//   <Typography
//     as="a"
//     href="#"
//     variant="small"
//     className="mr-4 cursor-pointer py-1.5 font-normal"
//   >
//     <span>Material Tailwind</span>
//   </Typography>
//   <div className="hidden lg:block">{navList}</div>
//   <Button variant="gradient" size="sm" className="hidden lg:inline-block">
//     <span>Buy Now</span>
//   </Button>
//   <IconButton
//     variant="text"
//     className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//     ripple={false}
//     onClick={() => setOpenNav(!openNav)}
//   >
//     {openNav ? (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         className="h-6 w-6"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     ) : (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M4 6h16M4 12h16M4 18h16"
//         />
//       </svg>
//     )}
//   </IconButton>
// </div>
// <MobileNav open={openNav}>
//   <div className="container mx-auto">
//     {navList}
//     <Button variant="gradient" size="sm" fullWidth className="mb-2">
//       <span>Buy Now</span>
//     </Button>
//   </div>
// </MobileNav>
// </Navbar>
// </div>
//   );
// }

// export default VideoWithText;



import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import Cards from './Cards';

function VideoWithText() {
  return (
    //     <div className="relative">
    //       <video className="w-full" autoPlay loop muted>
    // <source src={video} type="video/mp4" />
    // Your browser does not support the video tag.
    // </video>
    //       <Navbar />
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    //         {/* Your content goes here */}
    //       </div>
    //     </div>
    ///////////////////////////////RESPONNSIVE video
    <>
      <Navbar />
      <div className="flex items-end justify-center w-full h-screen text-center">

        <video

          src={video}
          autoPlay
          loop
          muted
          className="object-cover h-full w-full absolute -z-10 filter brightness-60 contrast-80"
        />

<Hero/>
      </div>
      <Cards/>
      <Footer/>
    </>
  );
}

export default VideoWithText;