import React from "react";
import { Article } from "../Components";

function Blog() {
  return (
    <div className="px-[1.5rem] md:px-[3rem] lg:px-[4rem] py-[2rem]" id="blog">
      <div className="flex justify-center">
        <h1 className="gradient_text text-[20px] sm:text-[28px] md:text-[34px] leading-6 sm:leading-[45px] font-extrabold mb-5 sm:mb-[2rem] font-[Manrope] ">
          A lot is happening. we are blogging about it
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-mobileRow lg:grid-rows-blogRow gap-5 ">
        <div className="w-[100%] sm:w-[80%] m-auto lg:w-[100%] h-[100%] ">
          <Article
            img={"/img/blog01.png"}
            title={
              "GPT-3 and Open. AI is the future. Let us explore how it is ? "
            }
            date={"Mar 12 , 2021 "}
          />
        </div>
        <div className="grid grid-cols-2 lg:w-[100%] w-[100%] sm:w-[80%] m-auto h-[100%] gap-3 sm:gap-5 ">
          <Article
            img={"/img/blog02.png"}
            title={
              "GPT-3 and Open. AI is the future. Let us explore how it is ? "
            }
            date={"May 30 , 2021 "}
          />
          <Article
            img={"/img/blog03.png"}
            title={
              "GPT-3 and Open. AI is the future. Let us explore how it is ? "
            }
            date={"June 15 , 2021 "}
          />
          <Article
            img={"/img/blog04.png"}
            title={
              "GPT-3 and Open. AI is the future. Let us explore how it is ? "
            }
            date={"July 21 , 2021 "}
          />
          <Article
            img={"/img/blog05.png"}
            title={
              "GPT-3 and Open. AI is the future. Let us explore how it is ? "
            }
            date={"Sep 1 , 2021 "}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
