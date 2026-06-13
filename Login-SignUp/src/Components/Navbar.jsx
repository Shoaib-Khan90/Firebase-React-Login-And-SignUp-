import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const auth = getAuth();

  const Logout = () => {
    signOut(auth);
  };

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white px-20 py-6 flex justify-between items-center">

      {/* LOGO */}
      <img
        src="./src/Images/Home/MainLogo.png"
        alt="logo"
        className="w-36"
      />

      {/* MENU */}
      <ul className="flex items-center gap-8 text-[14px] font-medium uppercase">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        {/* SERVICES DROPDOWN */}
        <li className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer uppercase"
          >
            Services
          </button>

          {open && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-52 z-50">
              
              <Link className="block px-4 py-2 hover:bg-gray-100" to="/services/webdevelopment">
                Web Development
              </Link>

              <Link className="block px-4 py-2 hover:bg-gray-100" to="/services/digitalmarketing">
                Digital Marketing
              </Link>

              <Link className="block px-4 py-2 hover:bg-gray-100" to="/services/appdevelopment">
                App Development
              </Link>

              <Link className="block px-4 py-2 hover:bg-gray-100" to="/services/uiuxdesigner">
                UI/UX Designer
              </Link>

              <Link className="block px-4 py-2 hover:bg-gray-100" to="/services/ai">
                Artificial Intelligence
              </Link>

              <Link className="block px-4 py-2 hover:bg-gray-100" to="/services/graphicsdesigner">
                Graphics Designer
              </Link>

            </div>
          )}
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>

        <li>
          <Link to="/pricing">Pricing</Link>
        </li>

        {/* PHONE */}
        <li className="flex font-[sans] font-medium items-center gap-2 text-sm">
          <FontAwesomeIcon className="text-blue-600" icon={faPhone} />
          (720) 360-0903
        </li>

      </ul>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center gap-4">

        <button className="uppercase text-[14px] px-6 py-2 text-white rounded-md bg-gradient-to-r from-[#6754E9] to-[#4534B8]">
         <Link to="/contact">Lets Talk <FontAwesomeIcon icon={faArrowRight} /></Link> 
        </button>

        <button
          onClick={Logout}
          className="uppercase px-6 py-2 text-[14px]  bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </nav>
  );
};

export default Navbar;