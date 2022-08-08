import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = ({ mobile, handleClick }) => {
  return (
    <>
      <p
        onClick={handleClick}
        className={`nav_menu_links ${
          mobile &&
          "hover:bg-textColor duration-300 ease-in-out px-2 py-1 rounded-md"
        } `}
      >
        <a href="#home">Home</a>
      </p>
      <p
        onClick={handleClick}
        className={`nav_menu_links ${
          mobile &&
          "hover:bg-textColor duration-300 ease-in-out px-2 py-1 rounded-md"
        } `}
      >
        <a href="#wgpt3">What is GPT3 ?</a>
      </p>
      <p
        onClick={handleClick}
        className={`nav_menu_links ${
          mobile &&
          "hover:bg-textColor duration-300 ease-in-out px-2 py-1 rounded-md"
        } `}
      >
        <a href="#possibility">Open AI </a>
      </p>
      <p
        onClick={handleClick}
        className={`nav_menu_links ${
          mobile &&
          "hover:bg-textColor duration-300 ease-in-out px-2 py-1 rounded-md"
        } `}
      >
        <a href="#features">Case Studies</a>
      </p>
      <p
        onClick={handleClick}
        className={`nav_menu_links ${
          mobile &&
          "hover:bg-textColor duration-300 ease-in-out px-2 py-1 rounded-md"
        } `}
      >
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu((prev) => prev === true && false);
  };

  return (
    <div className="flex justify-between flex-1 items-center px-5 py-[1rem] md:py-[2rem] md:px-[6rem] lg:px-[3rem] duration-500 ">
      <div className="flex-1 flex justify-between lg:justify-start items-center flex-row">
        <div className="mr-[2rem]">
          <img src={"/img/logo.svg"} alt="logo" className="w-[62.56px] h-4 " />
        </div>
        <div className="flex-row mobile_lg flex">
          <Menu />
        </div>
        <div className="flex items-center justify-end text-white mobile_lg lg:flex-[1]">
          <p className="font-[Manrope] font-semibold text-lg capitalize leading-6 my-0 mx-[1rem] cursor-pointer ">
            Sign in
          </p>
          <button
            type="button"
            className="py-[1rem] px-[2rem] text-white bg-[#ff4920] rounded-md 
            font-semibold text-lg leading-6 border-none outline-none cursor-pointer hover:bg-[#ff4920c0] duration-300"
          >
            Sign up
          </button>
        </div>
        <div className="block lg:hidden">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer"
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
              className="ml-auto cursor-pointer"
            />
          )}
          {toggleMenu && (
            <div className="animate-scaleUpCenter bg-footerColor fixed top-[59px] md:top-[91px] right-0 left-0">
              <div className="px-4 py-2 flex flex-col gap-4">
                <Menu mobile handleClick={handleClick} />
                <div className="flex items-start flex-col gap-4 ml-3 text-white">
                  <p className="font-[Manrope] font-semibold text-lg capitalize leading-6 my-0 mx-[1rem] cursor-pointer ">
                    Sign in
                  </p>
                  <button
                    type="button"
                    className="py-2 px-4 text-white bg-[#ff4820] rounded-md w-[30vmax]
                    font-semibold text-lg leading-6 border-none outline-none cursor-pointer hover:bg-[#ff4920c0] duration-300"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
