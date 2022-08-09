import React from "react";

function Footer() {
  return (
    <div className="px-[1.5rem] md:px-[3rem] lg:px-[4rem] py-[2rem] flex flex-col justify-center items-center bg-footerColor ">
      <div className="w-[100%] text-center mb-[3rem]">
        <h1 className="gradient_text text-[20px] sm:text-[28px] md:text-[35px] lg:text-[55px] leading-8 lg:leading-[72px] tracking-tighter font-extrabold ">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="flex justify-center items-center p-[1rem] border border-white mb-[4rem] sm:mb-[6rem] md:mb-[8rem] lg:mb-[10rem] cursor-pointer ">
        <button className="font-[Manrope] text-[18px] leading-5 text-white ">
          Request Early Access
        </button>
      </div>
      <div className="flex justify-between items-start text-white flex-wrap flex-row w-[100%] text-left ">
        <div className="w-[100%] sm:max-w-[250px] m-[1rem] flex flex-col ">
          <img
            src="/img/logo.svg"
            alt="logo"
            className="w-28 h-8 mb-[1rem]  "
          />
          <p className="font-[Manrope] text-sm leading-4 text-white ">
            All Right Reserved
          </p>
        </div>
        <div className="max-w-[250px] flex flex-col justify-start footer-links m-[1rem]">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="max-w-[250px]  flex flex-col justify-start footer-links m-[1rem] ">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="w-[100%] md:max-w-[250px] flex flex-col justify-start footer-links m-[1rem] ">
          <h4>Get in Touch</h4>
          <p>Baku , Azerbaijan</p>
          <p>+994 55 278 74 18</p>
          <p>ikramzulfugarcodein@gmail.com</p>
        </div>
      </div>
      <div className="mt-[2rem] w-[100%] text-center ">
        <p className="text-white text-sm leading-4 font-[Manrope]">
          &copy; 2022 GPT-3. All rights reserved{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
