import React from "react";

function Possibility() {
  return (
    <div
      className="px-[2rem] py-[1rem] md:px-[4rem] md:py-[1rem] lg:px-[6rem] lg:py-[2rem] flex flex-col sm:flex-row "
      id="possibility"
    >
      <div className="flex-[2] flex items-center justify-start mr-0 mb-[1rem] sm:mb-0 md:mr-[1rem] lg:mr-[2rem]  ">
        <img
          src="/img/possibility.png"
          alt="possibility"
          className="w-[60%] h-[60%] m-auto sm:w-[90%] sm:h-[90%] md:w-[100%] md:h-[100%]  "
        />
      </div>
      <div className="flex-[1] flex flex-col justify-end items-start ">
        <h4 className="text-textColor font-[Manrope] font-medium leading-[30px] text-sm md:text-base ">
          Request Early Access to Get Started.
        </h4>
        <h1 className="gradient_text sm:text-[25px] md:text-[35px] font-[Manrope] leading-10 text-[20px] ">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-textColor md:text-base text-sm leading-[30px] font-[Manrope]  my-3 md:my-[2rem] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          nostrum sed ad enim vero! Porro laudantium enim consequuntur, rem
          placeat debitis esse aliquid voluptatum id.
        </p>
        <h4 className="text-[#ff8a71] font-[Manrope] font-medium leading-[30px] md:text-base text-sm ">
          Request Early Access to Get Started.
        </h4>
      </div>
    </div>
  );
}

export default Possibility;
