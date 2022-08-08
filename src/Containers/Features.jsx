import React from "react";
import { Feature } from "../Components";

const features = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, debitis dolore amet excepturi nobis doloremque id perspiciatis porro eligendi quisquam quidem repellendus aperiam velit placeat.",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corporis voluptas illum velit ea explicabo magni in dolor hic asperiores!",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error recusandae quos provident blanditiis, sapiente Lorem, ipsum. Lorem ipsum dolor sit amet.    ",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amett excepturi nobis doloremque id perspiciatis porro eligendi quisquam quidem repellendus aperiam velit placeat.",
  },
];

function Features() {
  return (
    <div
      className="features px-[2rem] md:px-[4rem] py-[1rem] lg:px-[6rem] lg:py-[2rem] flex md:flex-row flex-col items-center md:items-start justify-between w-[100%]"
      id="features"
    >
      <div className="flex-[1] flex justify-start items-start flex-col text-center md:text-left md:mr-[2rem]  lg:mr-[3rem] xl:mr-[5rem] ">
        <h1 className="gradient_text font-[Manrope] text-[35px] md:text-[45px]">
          The Future is Now and You Just Need to Realize it. Step into Future
          Today & Make it Happen .
        </h1>
        <p className="font-[Manrope] font-medium text-base leading-[30px] text-[#ff8a71] mt-[2rem] w-[100%] mb-5 md:mb-0 ">
          Request Early Access to Get Started{" "}
        </p>
      </div>
      <div className="flex-[1] w-[100%] flex flex-col items-center  md:w-auto ">
        {features.map((item, index) => (
          <Feature row title={item.title} text={item.text} center key={index} />
        ))}
      </div>
    </div>
  );
}

export default Features;
