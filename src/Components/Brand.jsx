import React from "react";

function Brand() {
  return (
    <div className="flex flex-wrap items-center justify-center mt-[2rem]">
      <div
        className="flex-1 max-w-[175px] sm:max-w-[300px] md:max-w-[100%] flex-wrap min-w-[120px] 
      flex justify-center items-center mb-5 md:m-[1rem] md:mb-[2rem] gap-5 md:gap-10"
      >
        <img src="/img/google.png" alt="" />
        <img src="/img/slack.png" alt="" />
        <img src="/img/atlassian.png" alt="" />
        <img src="/img/dropbox.png" alt="" />
      </div>
    </div>
  );
}

export default Brand;
