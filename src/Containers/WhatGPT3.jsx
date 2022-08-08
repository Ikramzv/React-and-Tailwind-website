import React from "react";
import { Feature } from "../Components";

function WhatGPT3() {
  return (
    <div
      className="px-[1.5rem] md:px-[3rem] lg:px-[4rem] py-[2rem] gradient-bg drop-shadow-lg w-[80%] lg:max-w-[1300px] mx-auto rounded-lg "
      id="wgpt3"
    >
      <div className="flex">
        <Feature
          title={"What is GPT-3"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet impedit quos, voluptas vero, quam eius, laudantium harum necessitatibus odio esse "
          }
          row
        />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center my-[1rem] md:mt-[4rem] md:mb-[2rem] ">
        <h1 className="gradient_text text-[28px] md:text-[34px] leading-[45px] font-extrabold max-w-[510px] font-[Manrope]  ">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="font-[Manrope] mt-3 md:mt-0 font-medium text-[16px] leading-[30px] text-subtextColor cursor-pointer  ">
          Explore the Library
        </p>
      </div>
      <div className="m-0 grid grid-cols-1 md:grid-cols-3">
        <Feature
          title={"Chatbots"}
          text={
            "Lorem ipsum dolor adipisicing sit  adipisicing amet, adipisicing consectetur adipisicing elit. Ipsum amet impedit quos"
          }
        />
        <Feature
          title={"Knowledgebase"}
          text={
            "Lorem ipsum dolor sit amet, consectetur  dolor adipisicing elit. Ipsum elit elit impedit quos"
          }
        />
        <Feature
          title={"Education"}
          text={
            "Lorem ipsum dolor sit amet, consectetur elit adipisicing elit. Ipsum adipisicing amet impedit quos"
          }
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
