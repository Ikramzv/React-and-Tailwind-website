import React from "react";

function Feature({ title, text, row, center }) {
  return (
    <div
      className={`flex m-[1rem] ${
        row
          ? "md:flex-row flex-col md:items-center items-start justify-between w-[100%] "
          : "flex-col items-start "
      } ${center ? "items-center md:items-start" : ""} `}
    >
      <div
        className={`flex-1 max-w-[180px] ${
          center && "max-w-[250px]"
        } mr-[2rem]`}
      >
        <h1 className="text-white font-[Manrope] font-extrabold text-[18px] leading-6 tracking-tighter relative text_bar ">
          {title}
        </h1>
      </div>
      <div
        className="text-textColor leading-5 max-w-[390px] text-[14px] font-medium font-[Manrope] mt-2 md:mt-3 lg:mt-5 "
        style={{ wordWrap: "break-word" }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
