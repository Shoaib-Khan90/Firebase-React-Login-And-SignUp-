import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"; 
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
const Dashboad = () => {
  return (
    <div>
    <div
  className="flex justify-center w-full h-[500px] mt-[15px] rounded-br-[30px] rounded-bl-[30px] bg-gradient-to-r from-[#6754E9] to-[#4534B8]">
    <div className="w-[500px] leading-[1.1] mt-20">
    <h1 className="font-[syne] text-[66px] text-white">Solvepeek <br /> – Powering Your Digital Future</h1>
    <p className="text-white text-[16px] font-[kanit] mt-5">At solvepeek, we craft innovative solutions in SEO, mobile app development, and web design to help your business stand out. Let us transform your vision into long-term digital success.</p>
    <button
  className="px-6 py-4 rounded-[8px] font-[syne] mt-10 gap-1 bg-white text-black hover:bg-gradient-to-r hover:from-[#6754E9] hover:to-[#4534B8] hover:text-white transition-all duration-300">
   <Link to="/contact"> SCHEDULE A FREE CONSULTATION </Link></button>
<button
  className="items-center px-6 py-4 rounded-[8px] font-[syne] mt-10 ml-5 text-white bg-gradient-to-r from-[#6754E9] to-[#4534B8]  hover:bg-gradient-to-r hover:from-[white] hover:to-[white] hover:text-[#4534B8] transition-all duration-300"
>
 <Link to="/about"> About Us <FontAwesomeIcon icon={faArrowRight} /> </Link>
</button>
    </div>
    <div className="mt-20 ml-20">
      <img src="./src/Images/Home/a.png" width="410px" height="500px" />
    </div>
</div>

<div className="flex w-full bg-[#F7F7FA] rounded-br-[40px] rounded-bl-[40px] p-5 gap-8">
  <h1 className="uppercase font-[syne]">A Partner, Not a <br /> Vendor</h1>
  <img src="./src/Images/Home/Vector5.png" width="100px" />
  <img src="./src/Images/Home/Vector (1).png" width="100px" />
  <img src="./src/Images/Home/Vector (2).png" width="100px"  />
  <img src="./src/Images/Home/Vector (3).png" width="100px" />
  <img src="./src/Images/Home/Vector (4).png" width="100px" />
</div>

<div className="flex ml-20 gap-20">
<div>
  <h1 className="text-[16px] uppercase font-[syne] mt-10 ml-20">What we do</h1>
  <h2 className="font-[syne] ml-20 text-[48px] leading-14.5">Shaping the Future of <br /> Digital</h2>
</div>
<div className="w-[550px]">
  <p className="mt-14 text-[#00000092] text-[16px] font-[kanit] ">Our work goes beyond trends. We deliver forward-thinking marketing, powerful software, and timeless design to future-proof your business.</p>
  <p className="text-[12px] font-[syne] mt-10 uppercase font-bold">view all solutions</p>
</div>
 </div>

 <div className="flex w-[950px] h-[430px] ml-40 mt-10 mb-10 rounded-[40px] border-gray-400 border-1   overflow-hidden">

  {/* Left Side Menu */}
  <div className="w-[300px] bg-[#4C3BC2]  p-8 flex flex-col gap-4">
    
    <button className="w-80 px-6 py-3 bg-black text-white font-syne text-[16px] font-semibold rounded-[50px] shadow-md">
      Web Development <FontAwesomeIcon className="rounded-[50px] border-blue-500 border-2 bg-blue-500 ml-27" icon={faCaretRight} />
    </button>

    <button className="w-67 px-6 py-3 text-white text-left  hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300">
      App Development
    </button>

    <button className="w-67 px-6 py-3 text-white text-left  hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300">
      UI/UX Designer
    </button>

    <button className="w-67 px-6 py-3 text-white text-left  hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300">
      Digital Marketing
    </button>

    <button className="w-67 px-6 py-3 text-white text-left  hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300">
      Artificial Intelligence
    </button>

    <button className="w-67 px-6 py-3 text-white text-left  hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300">
      Graphics Designer
    </button>
  </div>

  {/* Right Side Content */}

    <div className="flex">
      <div>
      <p className="text-3xl font-bold">
        Build fast, secure, and scalable websites that rank and convert.
      </p>

      <p><FontAwesomeIcon className="text-blue-500 rounded-[50px]" icon={faSquareCheck} /> Custom Website Design & Developmen </p>
      <p><FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 rounded-[50px]" /> Responsive & Mobile-First Design </p>
      <p><FontAwesomeIcon className="text-blue-500 rounded-[50px]" icon={faSquareCheck} /> SEO-Optimized Structure </p>
      <p><FontAwesomeIcon className="text-blue-500 rounded-[50px]" icon={faSquareCheck} /> High-Speed Performance </p>
      <p><FontAwesomeIcon className="text-blue-500 rounded-[50px]" icon={faSquareCheck} /> CMS Development WordPress and Shopify </p>


      </div>
      <div >
      <img src="./src/Images/Home/Web Development.png" alt="" />
      </div>
    </div>
</div>
</div>
  );
};

export default Dashboad;