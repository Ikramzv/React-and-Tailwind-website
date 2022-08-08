import React from "react";

function Header() {
  return (
    <div
      className="px-[3rem] sm:px-[4rem] py-[2rem] flex flex-col lg:flex-row"
      id="home"
    >
      <div className="flex-[1] flex items-start justify-center flex-col lg:mr-[5rem] mb-[3rem] mr-0  ">
        <h1 className="gradient_text font-[Manrope] font-extrabold text-[48px] leading-[60px] sm:text-[62px] sm:leading-[75px] tracking-tighter ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </h1>
        <p className="mt-[1.5rem] font-[Manrope] text-base leading-6 sm:text-[20px] sm:leading-[27px] text-textColor   ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          quisquam laudantium praesentium similique odit! Magnam quia
          exercitationem iste possimus, quos error beatae tenetur omnis, natus
          libero rem veniam iusto! Harum quod hic voluptates neque saepe!
        </p>
        <div className="w-[100%] md:w-[80%] lg:w-[60%] mt-[2rem] mb-[1rem] flex">
          <input
            type="email"
            placeholder="Email..."
            className="rounded-tl-lg rounded-bl-lg text-[16px] sm:text-[20px] leading-[27px] text-white outline-none 
            flex-[7] w-[100%] min-h-[50px] font-[Manrope] bg-blogColor px-[1rem]  "
          />
          <button
            type="button"
            className="bg-[#ff4820] rounded-tr-lg rounded-br-lg font-bold text-[16px] sm:text-[20px] leading-normal sm:leading-[27px] px-[1rem]
            min-h-[50px] flex-[3] hover:bg-[#ff4920c0] duration-300 text-white cursor-pointer"
          >
            Get started !
          </button>
        </div>
        <div className="flex w-[100%] justify-start items-center mt-[2rem] flex-col sm:flex-row  ">
          <img
            src="/img/people.png"
            alt="people"
            className="w-[182px] h-[38px] "
          />
          <p className="text-white text-xs leading-9 font-medium font-[Manrope] m-0 sm:ml-[1rem] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ea.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img
          src="/img/ai.png"
          alt="people"
          className="w-[80vmin] lg:w-[80%] lg:h-[80%] xl:w-[100%] xl:h-[100%] object-cover  "
        />
      </div>
    </div>
  );
}

export default Header;
