import React from "react";

function Cta() {
  return (
    <div
      className="text-white flex justify-between items-center flex-col sm:flex-row px-[1rem] 
    pt-[1rem] sm:pt-[2rem] pb-[1rem] md:p-[2rem] m-[1rem] sm:m-[2rem]  md:m-[4rem] rounded-[1rem] bg-barGradient "
    >
      <div className="content">
        <p className="font-[Manrope] font-medium text-sm leading-8 text-[#0e0e0e] ">
          Request Early Access to Get Started
        </p>
        <h3 className="font-[Manrope] font-extrabold text-[20px] sm:text-[24px] sm:leading-10 ">
          Register today & start explain
        </h3>
      </div>
      <div className="flex w-[70%] sm:w-auto md:ml-[2rem] ">
        <button
          type="button"
          className="bg-black mt-5 w-[100%] sm:mt-0 text-white font-[Manrope] text-lg leading-8 font-bold rounded-[40px] px-3 sm:px-5 py-2 sm:py-3 
          duration-300 hover:bg-[rgba(0,0,0,0.2)] hover:text-black "
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Cta;
