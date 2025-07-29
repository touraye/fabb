import NewsFilter from "@/components/Universal/NewsFilter";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-6 pb-10 pl-14  border-b-2 border-b-gray-200 border-t-gray-200 border-t-2 pt-20 ">
        <div className="space-y-8 max-w-4xl">
          <h1 className="font-bold text-6xl max-md:text-4xl tracking-[-0.14rem]">
            NEWSROOM
          </h1>
          <p className="text-2xl max-md:text-base font-normal text-black">
            Read the latest news and get the facts about the work of the Open
            Society Foundations and our partners. For press inquiries, please
            contact media@opensocietyfoundations.org.{" "}
          </p>
        </div>

        <NewsFilter/>
      </div>
    </div>
  );
};

export default page;
