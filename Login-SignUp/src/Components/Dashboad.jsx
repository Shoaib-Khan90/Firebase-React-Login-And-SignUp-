import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"; 
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Dashboad = () => {
   const [service, setService] = useState("web");

   const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.scrollLeft += 420;
  };

  const prev = () => {
    sliderRef.current.scrollLeft -= 420;
  };

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
      <img src="./Images/Home/a.png" width="410px" height="500px" />
    </div>
</div>

<div className="flex w-full bg-[#F7F7FA] rounded-br-[40px] rounded-bl-[40px] p-5 gap-8">
  <h1 className="uppercase font-[syne]">A Partner, Not a <br /> Vendor</h1>
  <img src="./Images/Home/Vector5.png" width="100px" />
  <img src="./Images/Home/Vector (1).png" width="100px" />
  <img src="./Images/Home/Vector (2).png" width="100px"  />
  <img src="./Images/Home/Vector (3).png" width="100px" />
  <img src="./Images/Home/Vector (4).png" width="100px" />
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

{/* // Works */}
 <div className="flex w-[1050px] h-[430px] ml-30 mt-10  rounded-[40px] bg-[#F7F7FA] overflow-hidden">
  <div className="w-[300px] bg-[#4C3BC2]  p-8 flex flex-col gap-4">
    
    <button
  onClick={() => setService("web")}
  className="w-80 px-6 py-3 bg-black text-white font-syne text-[16px] font-semibold rounded-[50px] shadow-md"
>
  Web Development
  <FontAwesomeIcon
    className="rounded-[50px] border-blue-500 border-2 bg-blue-500 ml-27"
    icon={faCaretRight}
  />
</button>

<button
  onClick={() => setService("app")}
  className="w-67 px-6 py-3 focus:bg-black text-white text-left hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300"
>
  App Development
</button>

<button
  onClick={() => setService("uiux")}
  className="w-67 px-6 py-3 focus:bg-black text-white text-left hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300"
>
  UI/UX Designer
</button>

<button
  onClick={() => setService("digital")}
  className="w-67 px-6 py-3 focus:bg-black text-white text-left hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300"
>
  Digital Marketing
</button>

<button
  onClick={() => setService("ai")}
  className="w-67 px-6 py-3 focus:bg-black text-white text-left hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300"
>
  Artificial Intelligence
</button>

<button
  onClick={() => setService("graphics")}
  className="w-67 px-6 py-3 focus:bg-black text-white text-left hover:text-white hover:bg-black rounded-bl-[50px] rounded-tl-[50px] transition-all duration-300"
>
  Graphics Designer
</button>
  </div>

  {/* Right Side Content */}

    {/* <div className="flex"> */}
      <div className="mt-27 ml-20 w-full">
  {service === "web" && (
    <div className="flex">
    <div className="w-[300px]">
      <p className=" leading-4.9 font-medium text-[15px]">
        Build fast, secure, and scalable websites that rank and convert.
      </p>
      <p className="font-[kanit] text-[14px] mt-5"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Custom Website Design & Development</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Responsive & Mobile-First Design</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> SEO-Optimized Structure</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> High-Speed Performance</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> CMS Development WordPress & Shopify</p>
      </div>
      <div className="mt-[-32px] ml-[20px]">
        <img src="./Images/Home/Web Development.png" />
    </div>
    </div>
  )}

 {service === "app" && (
    <div className="flex">
    <div className="w-[300px]">
      <p className=" leading-4.9 font-medium text-[15px]">
        Build fast, secure, and scalable websites that rank and convert.
      </p>
      <p className="font-[kanit] text-[14px] mt-5"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Custom Website Design & Development</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Responsive & Mobile-First Design</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> SEO-Optimized Structure</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> High-Speed Performance</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> CMS Development WordPress & Shopify</p>
      </div>
      <div className="mt-[-32px] ml-[20px]">
        <img src="./Images/Home/App development.png" />
    </div>
    </div>
  )}

   {service === "uiux" && (
    <div className="flex">
    <div className="w-[300px]">
      <p className=" leading-4.9 font-medium text-[15px]">
        Build fast, secure, and scalable websites that rank and convert.
      </p>
      <p className="font-[kanit] text-[14px] mt-5"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Custom Website Design & Development</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Responsive & Mobile-First Design</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> SEO-Optimized Structure</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> High-Speed Performance</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> CMS Development WordPress & Shopify</p>
      </div>
      <div className="mt-[-32px] ml-[20px]">
        <img src="./Images/Home/UI UX Design.png" />
    </div>
    </div>
  )}

   
   {service === "digital" && (
    <div className="flex">
    <div className="w-[300px]">
      <p className=" leading-4.9 font-medium text-[15px]">
        Build fast, secure, and scalable websites that rank and convert.
      </p>
      <p className="font-[kanit] text-[14px] mt-5"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Custom Website Design & Development</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Responsive & Mobile-First Design</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> SEO-Optimized Structure</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> High-Speed Performance</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> CMS Development WordPress & Shopify</p>
      </div>
      <div className="mt-[-32px] ml-[20px]">
        <img src="./Images/Home/Digital Marketing.png" />
    </div>
    </div>
  )}

   {service === "ai" && (
    <div className="flex">
    <div className="w-[300px]">
      <p className=" leading-4.9 font-medium text-[15px]">
        Build fast, secure, and scalable websites that rank and convert.
      </p>
      <p className="font-[kanit] text-[14px] mt-5"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Custom Website Design & Development</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Responsive & Mobile-First Design</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> SEO-Optimized Structure</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> High-Speed Performance</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> CMS Development WordPress & Shopify</p>
      </div>
      <div className="mt-[-32px] ml-[20px]">
        <img src="./Images/Home/AI.png" />
    </div>
    </div>
  )}

   {service === "graphics" && (
    <div className="flex">
    <div className="w-[300px]">
      <p className=" leading-4.9 font-medium text-[15px]">
        Build fast, secure, and scalable websites that rank and convert.
      </p>
      <p className="font-[kanit] text-[14px] mt-5"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Custom Website Design & Development</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> Responsive & Mobile-First Design</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> SEO-Optimized Structure</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> High-Speed Performance</p>
      <p className="font-[kanit] text-[14px] mt-3"><FontAwesomeIcon className="text-blue-500" icon={faSquareCheck}/> CMS Development WordPress & Shopify</p>
      </div>
      <div className="mt-[-32px] ml-[20px]">
        <img src="./Images/Home/Logo.png" />
    </div>
    </div>
  )}
  <p className="font-[syne] font-bold text-[14px] mt-[-60px]">
    LEARN MORE
  </p>
</div>
</div>

{/* //About */}

<div className="flex ml-20 gap-20">
<div>
  <h1 className="text-[16px] uppercase font-[syne] mt-10 ml-13">about SOLVEPEAK</h1>
  <h2 className="font-[syne] ml-13 text-[48px] leading-14.5">We turn customer <br /> insights into digital success</h2>
</div>
<div className="w-[550px] ml-[-60px] ">
  <p className="mt-14 text-[#00000092] text-[16px] font-[kanit] ">
Our work goes beyond trends. We deliver forward-thinking marketing, <br /> powerful software, and timeless design to future-proof your business.</p>
  <p className="text-[12px] font-[syne] mt-10 uppercase font-bold">more about our unique approach</p>
</div>
 </div>

{/* //100% */}

 <div className="flex gap-5 mt-10 justify-center">
  <div className="ml-22 ">
    <FontAwesomeIcon className="text-blue-500 text-[12px]" icon={faCircle} />
    <div className="border-1 text-gray-500 border-dashed  w-[200px]"></div>
    <p className="font-medium w-[200px] text-[14px]">100% client retention for over two years</p>
  </div>
  <div className="">
    <FontAwesomeIcon className="text-blue-500 text-[12px]" icon={faCircle} />
    <div className="border-1 text-gray-500 border-dashed  w-[250px]"></div>
    <p className="font-medium w-[250px] text-[14px]">Trusted by the world’s fastest-growing startups</p>
  </div>
  <div className="">
    <FontAwesomeIcon className="text-blue-500 text-[12px]" icon={faCircle} />
    <div className="border-1 text-gray-500 border-dashed  w-[300px]"></div>
    <p className="font-medium w-[300px] text-[14px]" >A global team of expert marketers, designers, and storytellers</p>
  </div>
  <div className="">
    <FontAwesomeIcon className="text-blue-500 text-[12px]" icon={faCircle} />
    <div className="border-1 text-gray-500 border-dashed  w-[300px]"></div>
    <p className="font-medium w-[300px] text-[14px]">We've helped brands break into new markets and grow faster</p>
  </div>
 </div>

  {/* Outcome Section */}

 <div className="relative">

  <div className="w-[1050px] h-[490px] ml-30 mt-15 bg-gradient-to-r from-[#6754E9] to-[#4534B8] rounded-[20px] relative z-10">
    
    <div className="flex gap-30">
      <h1 className="text-white font-[syne] font-bold text-[30px] ml-10 p-5">
        Outcome, not output
      </h1>

      <p className="text-white font-[kanit] text-[16px] w-[500px] p-5">
        Solvepeak is a tech-enabled digital marketing solutions provider, and we create custom strategies for each of our clients based on their needs and goals. As a result, we’ve driven over $3 billion in sales and over 7.8 million leads for our clients.
      </p>
    </div>

    <div className="ml-10">
      <img
        src="./Images/Home/outcome-service 1.png"
        width="880px"
        alt=""
      />
    </div>

  </div>

  {/* Services Section */}
  <div className="pt-[150px] bg-[linear-gradient(to_bottom,#E9E5FF_2%,#F7F7FA_100%)]">

    <div className="p-10 ml-25">
      <h1 className="mt-10 font-[syne] text-[16px] uppercase font-bold">
        OUR SERVICES
      </h1>

      <p className="font-[syne] text-[38px] font-bold lowercase">
        Digital Services Built For Growth
      </p>
    </div>

    {/* serviice part */}

    <div className="grid grid-cols-4 gap-y-12 gap-x-8 justify-items-center mt-16 px-10">

  {/* Card 1 */}
  <div className="relative w-[290px] h-[260px] bg-white rounded-[32px] pt-16 text-center border border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-black hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300">

    <img
      className="absolute -top-10 left-1/2 -translate-x-1/2"
      src="./Images/Home/Frame 2147223459.png"
      alt=""
    />

    <h2 className="font-bold font-[syne] text-[20px] mt-[-12px]">
      Web <br /> Development
    </h2>

    <p className="px-5 mt-4 font-[kanit] text-[#000000B2] text-[14px]">
      Custom, high-performance websites optimized for speed, scalability, and seamless user experiences.
    </p>

    <p className="mt-8 font-[syne] text-[12px] font-bold uppercase">
      LEARN MORE
    </p>

  </div>

  {/* Card 2 */}
  <div className="relative w-[290px] h-[260px] bg-white rounded-[32px] pt-16 text-center border border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-black hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
    <img className="absolute -top-10 left-1/2 -translate-x-1/2" src="./Images/Home/Frame 2147223459 (1).png" alt="" />
    <h2 className="font-bold font-[syne] text-[20px] mt-[-12px]">App <br /> Development</h2>
    <p className="px-5 mt-4 font-[kanit] text-[#000000B2] text-[14px]">
     From concept to code, we build intuitive, feature-rich mobile and web apps that deliver real value.
    </p>
    <p className="mt-8 font-[syne] text-[12px] font-bold uppercase">LEARN MORE</p>
  </div>

  {/* Card 3 */}
  <div className="relative w-[290px] h-[260px] bg-white rounded-[32px] pt-16 text-center border border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-black hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
    <img className="absolute -top-10 left-1/2 -translate-x-1/2" src="./Images/Home/Frame 2147223459 (2).png" alt="" />
    <h2 className="font-bold font-[syne] text-[20px] mt-[-12px]">UI/UX <br /> Designer</h2>
    <p className="px-5 mt-4 font-[kanit] text-[#000000B2] text-[14px]">
      Smart, user-first designs that increase engagement, streamline journeys, and elevate brand perception.
    </p>
    <p className="mt-8 font-[syne] text-[12px] font-bold uppercase">LEARN MORE</p>
  </div>

  {/* Card 4 */}
  <div className="relative w-[290px] h-[260px] bg-white rounded-[32px] pt-16 text-center border border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-black hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
    <img className="absolute -top-10 left-1/2 -translate-x-1/2" src="./Images/Home/Frame 2147223459 (3).png" alt="" />
    <h2 className="font-bold font-[syne] text-[20px] mt-[-12px]">Digital <br /> Marketing</h2>
    <p className="px-5 mt-4 font-[kanit] text-[#000000B2] text-[14px]">
     Performance-driven marketing strategies SEO, paid media, content, and more to drive traffic and ROI.
    </p>
    <p className="mt-8 font-[syne] text-[12px] font-bold uppercase">LEARN MORE</p>
  </div>

  {/* Card 5 */}
  <div className="relative col-start-2 w-[290px] h-[260px] bg-white rounded-[32px] pt-16 justify-center text-center border border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-black hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
    <img className="absolute -top-10 left-1/2 -translate-x-1/2" src="./Images/Home/Frame 2147223459 (4).png" alt="" />
    <h2 className="font-bold font-[syne] text-[20px] mt-[-12px]">Artificial <br /> Intelligence</h2>
    <p className="px-5 mt-4 font-[kanit] text-[#000000B2] text-[14px]">
    AI solutions tailored to your workflow think automation, predictive insights, and smarter decision-making
    </p>
    <p className="mt-8 font-[syne] text-[12px] font-bold uppercase">LEARN MORE</p>
  </div>

  {/* Card 6 */}
  <div className=" mb-15 relative w-[290px] h-[260px] bg-white rounded-[32px] pt-16 text-center border border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-black hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
    <img className="absolute -top-10 left-1/2 -translate-x-1/2" src="./Images/Home/Frame 2147223459 (5).png" alt="" />
    <h2 className="font-bold font-[syne] text-[20px] mt-[-12px]">Graphics <br /> Designer</h2>
    <p className="px-5 mt-4 font-[kanit] text-[#000000B2] text-[14px]">
      Creative visual storytelling from branding to campaigns that communicates clearly and converts effectively.
    </p>
    <p className="mt-8 font-[syne] text-[12px] font-bold uppercase">LEARN MORE</p>
  </div>

</div>
  </div>
</div>

{/* Pricing */}

 <div className="bg-gradient-to-r from-[#E9E5FF] to-[#F7F7FA] ">

    <div className="p-10">
      <h1 className="font-[syne] text-[16px] uppercase font-bold">
       Pricing
      </h1>

      <p className="font-[syne] text-[38px] font-bold ">
       Tailored Solutions for Your Success
      </p>
    </div>

  <div className=" p-8 flex flex-row gap-2">
    
    <button
  onClick={() => setService("website")}
  className="w-40 bg-white text-black hover:bg-[#6754E9] hover:text-white focus:bg-[#6754E9] focus:text-white  font-syne text-[16px] font-semibold rounded-[10px] shadow-md"
>
  Website
</button>

  <button
  onClick={() => setService("Logo")}
  className="w-40 bg-white text-black hover:bg-[#6754E9] hover:text-white focus:bg-[#6754E9] focus:text-white  font-syne text-[16px] font-semibold rounded-[10px] shadow-md"
>
 Logo
</button>

 <button
  onClick={() => setService("Animation")}
  className="w-40 bg-white text-black hover:bg-[#6754E9] hover:text-white focus:bg-[#6754E9] focus:text-white  font-syne text-[16px] font-semibold rounded-[10px] shadow-md"
>
 Animation
</button>

 <button
  onClick={() => setService("Illustation")}
  className="w-40 bg-white text-black hover:bg-[#6754E9] hover:text-white focus:bg-[#6754E9] focus:text-white  font-syne text-[16px] font-semibold rounded-[10px] shadow-md"
>
Illustration
</button>

 <button
  onClick={() => setService("Branding")}
  className="w-40 bg-white text-black hover:bg-[#6754E9] hover:text-white focus:bg-[#6754E9] focus:text-white  font-syne text-[16px] font-semibold rounded-[10px] shadow-md"
>
 Branding
</button>

 <button
  onClick={() => setService("SEO")}
  className="w-40 bg-white text-black hover:bg-[#6754E9] hover:text-white focus:bg-[#6754E9] focus:text-white  font-syne text-[16px] font-semibold rounded-[10px] shadow-md"
>
 SEO
</button>

 <button
  onClick={() => setService("Online Reputation Managment")}
  className=" bg-white text-black hover:bg-[#6754E9] hover:text-white focus:bg-[#6754E9] focus:text-white  font-syne text-[16px] font-semibold rounded-[10px] shadow-md"
>
 Online Reputation Managment
</button>

 <button
  onClick={() => setService("Social Media Marketing")}
  className="w-40 bg-white text-black hover:bg-[#6754E9] hover:text-white focus:bg-[#6754E9] focus:text-white  font-syne text-[16px] font-semibold rounded-[10px] shadow-md"
>
 Social Media Marketing
</button>
  </div>

  {/* Right Side Content */}

    {/* <div className="flex"> */}
   <div className="mt-27 ml-10  relative">

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute -ml-10 mt-5 left-0 top-1/2 -translate-y-1/2  text-black p-2 rounded-full z-10"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {service === "website" && (
        <div
          ref={sliderRef}
          className="flex  gap-4 overflow-x-hidden scroll-smooth  w-full "
        >

          {/* CARD 1 */}
          <div className="flex-shrink-0 mb-10  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Silver Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $459{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $759
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  5 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  3 Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  FREE Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  48 to 72 hours TAT
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Mobile Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Gold Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $1,259{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $2,399
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Up to 15 Unique Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Conceptual and Dynamic Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Forms
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Lead Capturing Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Striking Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                NewsLetter Subscription (Optional)
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Newsfeed Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Social Media Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Search Engine Submission
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                8 Stock Photos
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                3 Unique Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                1 JQuery Slider Banner 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Complete W3C Certified HTML
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               48 to 72 hours TAT
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Titanium Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,239{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $4,019
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Website Up to 15 to 20 Pages
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Interactive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Dedicated Accounts Manager
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 4 */}
        <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Business Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,819{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $5,689
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

           <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

            <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 Seconds 2D Explainer Video
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Voice-Over & Sound Effects
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Script Writing
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Storyboard
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 SEO Meta Tags
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 to 20 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Iteractive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Search Engine Submission
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

        </div>
      )}

      {/* Logo */}

       {service === "Logo" && (
        <div
          ref={sliderRef}
          className="flex  gap-4 overflow-x-hidden scroll-smooth  w-full "
        >

          {/* CARD 1 */}
          <div className="flex-shrink-0 mb-10  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Startup Logo Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $49{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $89
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5  pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  3 Logo Concepts
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  3 Revisions 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  2 Dedicated Designers
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  48 Hours Turnaround Time
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               All source files (PSD , JPG , PDF , PNG) 
                </span>
              </p>

            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Sliver Logo Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $69{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $129
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  5 Logo Concepts
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  4 Revisions 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 4 Creative Designers 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  48 Hours Turnaround Time 
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                All source files (PSD , JPG , PDF , PNG) 
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Gold Logo Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $99{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $199
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 8 Logo Concepts
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Free Business Card design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Free files (PSD , JPG , PDF , PNG) 
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Free vector Files
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Free Letter Head Design
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                6 Creative Designers
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                48 Hours Turnaround Time
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 4 */}
        <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Business Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,819{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $5,689
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

           <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

            <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 Seconds 2D Explainer Video
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Voice-Over & Sound Effects
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Script Writing
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Storyboard
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 SEO Meta Tags
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 to 20 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Iteractive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Search Engine Submission
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

        </div>
      )}

      {/* Animation */}

      {service === "Animation" && (
        <div
          ref={sliderRef}
          className="flex  gap-4 overflow-x-hidden scroll-smooth  w-full "
        >

          {/* CARD 1 */}
          <div className="flex-shrink-0 mb-10  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Animation Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $459{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $759
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  5 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  3 Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  FREE Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  48 to 72 hours TAT
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Mobile Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Gold Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $1,259{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $2,399
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Up to 15 Unique Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Conceptual and Dynamic Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Forms
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Lead Capturing Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Striking Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                NewsLetter Subscription (Optional)
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Newsfeed Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Social Media Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Search Engine Submission
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                8 Stock Photos
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                3 Unique Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                1 JQuery Slider Banner 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Complete W3C Certified HTML
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               48 to 72 hours TAT
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Titanium Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,239{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $4,019
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Website Up to 15 to 20 Pages
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Interactive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Dedicated Accounts Manager
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 4 */}
        <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Business Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,819{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $5,689
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

           <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

            <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 Seconds 2D Explainer Video
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Voice-Over & Sound Effects
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Script Writing
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Storyboard
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 SEO Meta Tags
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 to 20 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Iteractive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Search Engine Submission
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

        </div>
      )}

      {/* Illustartion */}

      {service === "Illustation" && (
        <div
          ref={sliderRef}
          className="flex  gap-4 overflow-x-hidden scroll-smooth  w-full "
        >

          {/* CARD 1 */}
          <div className="flex-shrink-0 mb-10  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Silver Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $459{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $759
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  5 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  3 Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  FREE Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  48 to 72 hours TAT
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Mobile Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Gold Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $1,259{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $2,399
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Up to 15 Unique Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Conceptual and Dynamic Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Forms
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Lead Capturing Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Striking Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                NewsLetter Subscription (Optional)
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Newsfeed Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Social Media Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Search Engine Submission
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                8 Stock Photos
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                3 Unique Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                1 JQuery Slider Banner 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Complete W3C Certified HTML
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               48 to 72 hours TAT
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Titanium Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,239{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $4,019
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Website Up to 15 to 20 Pages
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Interactive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Dedicated Accounts Manager
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 4 */}
        <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Business Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,819{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $5,689
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

           <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

            <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 Seconds 2D Explainer Video
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Voice-Over & Sound Effects
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Script Writing
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Storyboard
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 SEO Meta Tags
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 to 20 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Iteractive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Search Engine Submission
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

        </div>
      )}

      {/* Branding */}

      {service === "Branding" && (
        <div
          ref={sliderRef}
          className="flex  gap-4 overflow-x-hidden scroll-smooth  w-full "
        >

          {/* CARD 1 */}
          <div className="flex-shrink-0 mb-10  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Silver Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $459{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $759
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  5 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  3 Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  FREE Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  48 to 72 hours TAT
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Mobile Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Gold Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $1,259{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $2,399
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Up to 15 Unique Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Conceptual and Dynamic Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Forms
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Lead Capturing Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Striking Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                NewsLetter Subscription (Optional)
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Newsfeed Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Social Media Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Search Engine Submission
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                8 Stock Photos
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                3 Unique Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                1 JQuery Slider Banner 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Complete W3C Certified HTML
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               48 to 72 hours TAT
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Titanium Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,239{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $4,019
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Website Up to 15 to 20 Pages
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Interactive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Dedicated Accounts Manager
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 4 */}
        <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Business Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,819{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $5,689
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

           <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

            <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 Seconds 2D Explainer Video
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Voice-Over & Sound Effects
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Script Writing
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Storyboard
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 SEO Meta Tags
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 to 20 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Iteractive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Search Engine Submission
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

        </div>
      )}

      {/* SEO */}

      {service === "SEO" && (
        <div
          ref={sliderRef}
          className="flex  gap-4 overflow-x-hidden scroll-smooth  w-full "
        >

          {/* CARD 1 */}
          <div className="flex-shrink-0 mb-10  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Silver Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $459{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $759
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  5 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  3 Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  FREE Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  48 to 72 hours TAT
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Mobile Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Gold Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $1,259{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $2,399
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Up to 15 Unique Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Conceptual and Dynamic Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Forms
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Lead Capturing Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Striking Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                NewsLetter Subscription (Optional)
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Newsfeed Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Social Media Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Search Engine Submission
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                8 Stock Photos
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                3 Unique Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                1 JQuery Slider Banner 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Complete W3C Certified HTML
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               48 to 72 hours TAT
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Titanium Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,239{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $4,019
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Website Up to 15 to 20 Pages
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Interactive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Dedicated Accounts Manager
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 4 */}
        <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Business Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,819{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $5,689
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

           <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

            <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 Seconds 2D Explainer Video
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Voice-Over & Sound Effects
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Script Writing
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Storyboard
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 SEO Meta Tags
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 to 20 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Iteractive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Search Engine Submission
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

        </div>
      )}

      {/* Online Reputation Managment */}

      {service === "Online Reputation Managment" && (
        <div
          ref={sliderRef}
          className="flex  gap-4 overflow-x-hidden scroll-smooth  w-full "
        >

          {/* CARD 1 */}
          <div className="flex-shrink-0 mb-10  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Silver Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $459{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $759
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  5 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  3 Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  FREE Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  48 to 72 hours TAT
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Mobile Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Gold Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $1,259{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $2,399
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Up to 15 Unique Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Conceptual and Dynamic Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Forms
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Lead Capturing Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Striking Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                NewsLetter Subscription (Optional)
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Newsfeed Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Social Media Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Search Engine Submission
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                8 Stock Photos
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                3 Unique Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                1 JQuery Slider Banner 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Complete W3C Certified HTML
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               48 to 72 hours TAT
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Titanium Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,239{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $4,019
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Website Up to 15 to 20 Pages
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Interactive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Dedicated Accounts Manager
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 4 */}
        <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Business Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,819{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $5,689
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

           <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

            <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 Seconds 2D Explainer Video
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Voice-Over & Sound Effects
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Script Writing
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Storyboard
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 SEO Meta Tags
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 to 20 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Iteractive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Search Engine Submission
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

        </div>
      )}

      {/* Social Media Marketing */}

      {service === "Social Media Marketing" && (
        <div
          ref={sliderRef}
          className="flex  gap-4 overflow-x-hidden scroll-smooth  w-full "
        >

          {/* CARD 1 */}
          <div className="flex-shrink-0 mb-10  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Silver Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $459{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $759
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  5 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  3 Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  FREE Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  48 to 72 hours TAT
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Mobile Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Gold Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $1,259{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $2,399
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Up to 15 Unique Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Conceptual and Dynamic Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Forms
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Lead Capturing Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Striking Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                NewsLetter Subscription (Optional)
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               Newsfeed Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Social Media Integration
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Search Engine Submission
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                8 Stock Photos
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                3 Unique Banner Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                1 JQuery Slider Banner 
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Complete W3C Certified HTML
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
               48 to 72 hours TAT
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
             Titanium Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,239{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $4,019
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

            <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Website Up to 15 to 20 Pages
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Interactive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Dedicated Accounts Manager
                </span>
              </p>
            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* CARD 4 */}
        <div className="flex-shrink-0  p-5 w-[400px] h-[521px] rounded-[40px] bg-white shadow-[4px_4px_#6754E9]">
            <h1 className="text-center font-[syne] font-bold text-[24px] text-[#6754E9]">
              Business Package
            </h1>

            <p className="mt-5 text-center font-[syne] text-[32px] font-bold">
              $2,819{" "}
              <span className="text-[12px] line-through text-[#FF3D2E]">
                $5,689
              </span>
            </p>

            <div className="border border-gray-300 mt-5 w-full"></div>

           <div className="h-[250px] mt-5 overflow-y-scroll pr-2">

            <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 Seconds 2D Explainer Video
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Voice-Over & Sound Effects
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Professional Script Writing
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Storyboard
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 SEO Meta Tags
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  15 to 20 Pages Website
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Media, Iteractive, Dynamic & High-End Design
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Custom Wordpress Website (or) Custom PHP Development
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  1 jQuery Slider Banner
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Up to 10 Custom Media Banner Designs
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  10 Stocks Images
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Unlimited Revisions
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Special Hover Effects
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 CMS
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Appointment/Scheduling/Online
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Ordering Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Online Payment Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Multi-Lingual (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Custom Dynamic Forms (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Signup Area (For NewsLetter, Offers, etc)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Live Feeds of Social Networks Integration (Optional)
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Moblie Responsive
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Free 5 Years Domains Name
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                Free Google Friendly Sitemap
                </span>
              </p>

              <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                  Search Engine Submission
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Complete W3C Certified HTML
                </span>
              </p>

               <p className="flex items-start gap-2 mt-2">
                <FontAwesomeIcon icon={faSquareCheck} className="text-blue-500 text-[18px]" />
                <span className="font-[kanit] text-[16px] ml-2">
                 Industry Specified Team of Expert Designers and Developers
                </span>
              </p>

            </div>

            <button className="ml-25 mt-10 px-6 py-3 mt-6 flex items-center gap-2 rounded-[8px] text-white bg-gradient-to-r from-[#4534B8] to-[#6754E9] hover:from-[#6754E9] hover:to-[#4534B8] transition-all duration-300">
              Call Now <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

        </div>
      )}
      

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute  mt-5  right-0 top-1/2 -translate-y-1/2 text-black p-2 rounded-full z-10"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>

    </div>
</div>
</div>
  );
};

export default Dashboad;