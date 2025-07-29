import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionData } from "@/dummyData/Data";

const Accord = () => {
  return (
    <div className="w-full py-16 bg-[#cde3db] rounded-lg ">
      <div className="max-container 2xl:w-[80%] w-[90%] mx-auto">
        <h2 className="md:text-5xl text-4xl font-bold pb-2 mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full space-y-3"
        >
          {AccordionData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-b border-[#a9c7bc] p-4 bg-white data-[state=open]:bg-[#fff] data-[state=open]:text-black transition-colors duration-300"
            >
              <AccordionTrigger className="py-4 text-lg font-medium text-green-700 data-[state=open]:text-green-700">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-black data-[state=close]:!text-gray-700 text-base font-normal">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default Accord;
