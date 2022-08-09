import React from "react";

function Article({ img, date, title }) {
  return (
    <div className="blogArticle">
      <div className="w-[100%] h-[50%] bg-footerColor ">
        <img src={img} alt="blog" className="h-[100%] w-[100%] object-cover " />
      </div>
      <div className="px-[1rem] py-[0.5rem] lg:px-[2rem] lg:py-[1rem] text-white flex flex-col justify-between h-[100%] overflow-auto">
        <div>
          <p className="text-textColor text-sm leading-8  ">{date}</p>
          <h3 className="font-extrabold text-base sm:text-lg leading-5 sm:leading-6 mb-4 cursor-pointer ">
            {title}
          </h3>
        </div>
        <p className="text-sm cursor-pointer ">Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
