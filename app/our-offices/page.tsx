import TabOffice from "@/components/Universal/TabOffice";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-6 pb-10  border-b-[6px] border-b-black  border-t-2 pt-20  mx-4">
        <div className="space-y-8 max-w-4xl">
          <h1 className="font-bold text-6xl max-md:text-4xl tracking-[-0.14rem]">
            Offices
          </h1>
          <p className="text-3xl font-normal max-md:text-base text-black">
            The Open Society Foundations form a global network of entities
            committed to local knowledge and national expertise. Please use our
            <span className="border-b border-b-black"> contact form</span>  to connect with a specific office.
          </p>
        </div>
      </div>

      <TabOffice/>
    </div>
  );
};

export default page;
