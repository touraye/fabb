import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { AccordionData } from "@/dummyData/Data";
  
  const Faqs = () => {
    return (
      <div className="p-8 rounded-lg mt-[80px]">
        <div className="md:mx-[8rem]">
          <h2 className="text-5xl font-bold pt-6 pb-2 mb-6">
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
                className="border-b border-[#a9c7bc] p-4 bg-white data-[state=open]:bg-[#345F80] data-[state=open]:text-white transition-colors duration-300"
              >
                <AccordionTrigger className="py-4 text-lg font-medium text-green-700 data-[state=open]:text-white">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-white data-[state=close]:!text-gray-700 text-base font-normal">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}{" "}
          </Accordion>
        </div>
      </div>
    );
  };
  export default Faqs;
  