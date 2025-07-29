import BoardOfDirectors from "@/components/Universal/BoardOfDirectors";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-6 pb-10 border-b border-b-gray-200 border-t-gray-200  border-t pt-20">
        <div className="space-y-8 max-w-4xl">
          <h1 className="font-bold text-7xl max-md:text-4xl tracking-[-0.14rem]">
            Board of Directors
          </h1>
          <p className="text-2xl font-normal max-md:text-base text-black">
            The Board of Directors oversees the Open Society Foundations. It is
            the only body that reviews and advises with respect to all programs
            and entities within the Open Society Foundations. The board
            considers the strategies submitted by all Open Society entities and
            programs, and conducts reviews and recommends corresponding budgets.
            connect with a specific office.
          </p>
        </div>
      </div>

      <BoardOfDirectors/>
      
    </div>
  );
};

export default page;
