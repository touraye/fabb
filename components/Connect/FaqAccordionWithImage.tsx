import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaQuestion } from "react-icons/fa";

const FaqAccordionWithImage = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-[#F3EEFC] to-white py-[10%]">
      <div className="w-[78%] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <div>
          <p className="text-lg mb-4 text-[#0FB3F0] font-semibold">FAQs</p>
          <h2 className="text-5xl text-[#282781] font-semibold mb-10">
            Frequently <br /> Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-[90%] space-y-4">
            <AccordionItem
              className="border-t border-b border-l border-gray-300 hover:border-[#7FD7F7] px-4 py-1 rounded-xl hover:bg-[#CBEBF7] transition duration-300"
              value="item-1"
            >
              <AccordionTrigger className="text-gray-500 hover:text-[#282781]">
                What is Nafa Wallet?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                explicabo rerum ipsa quidem optio animi aliquam?
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="border-t border-b border-l border-gray-300 hover:border-[#7FD7F7] px-4 py-1 rounded-xl hover:bg-[#CBEBF7] transition duration-300"
              value="item-2"
            >
              <AccordionTrigger className="text-gray-500 hover:text-[#282781]">
                Where can I pickup Nafa transfer in The Gambia?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                explicabo rerum ipsa quidem optio animi aliquam? Yes. It adheres
                to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="border-t border-b border-l border-gray-300 hover:border-[#7FD7F7] px-4 py-1 rounded-xl hover:bg-[#CBEBF7] transition duration-300"
              value="item-3"
            >
              <AccordionTrigger className="text-gray-500 hover:text-[#282781]">
                Does Nafa give out loan to customers?
              </AccordionTrigger>
              <AccordionContent>
                Currently, Nafa does not give out loan to customers. We
                specialize in offering secure and efficient money transfer
                within The Gambia and across Africa. We are unable to offer loan
                service because we do not operate as a microfinance company.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="border-t border-b border-l border-gray-300 hover:border-[#7FD7F7] px-4 py-1 rounded-xl hover:bg-[#CBEBF7] transition duration-300"
              value="item-4"
            >
              <AccordionTrigger className="text-gray-500 hover:text-[#282781]">
                What are Nafa&rsquo;s operating hours?
              </AccordionTrigger>
              <AccordionContent>
                Nafa&rsquo;s offices are open from Monday to Saturday from 8:00
                AM to 5:00 PM.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="border-t border-b border-l border-gray-300 hover:border-[#7FD7F7] px-4 py-1 rounded-xl hover:bg-[#CBEBF7] transition duration-300"
              value="item-5"
            >
              <AccordionTrigger className="text-gray-500 hover:text-[#282781]">
                Where can I send money using Nafa?
              </AccordionTrigger>
              <AccordionContent>
                Nafa provides secure money transfer services to 16 countries.
                These include domestic transfers within The Gambia, as well as
                international transfers to Senegal, Guinea Conakry, Mali,
                Liberia, Sierra Leone, Cote d&aposIvoire, Nigeria, Ghana,
                Cameroon, Benin, Burkina Faso, Niger, Mauritania, Guinea-Bissau,
                and Togo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Image Section */}
        <div className="flex w-[78%] h-[90%] relative">
          <Image
            src="https://img.freepik.com/free-photo/beautiful-african-american-woman-cafe_273609-5074.jpg?t=st=1739207192~exp=1739210792~hmac=a24a66effdaa5c0670f8c1d577a85a8f17fe0471dd834aeab3a3c5cfb6d3a2b7&w=996"
            alt="FAQ Image"
            className="rounded-xl shadow-lg w-full h-full"
            width={300} // Adjust width to the desired size
            height={500} // Adjust height to maintain aspect ratio
            objectFit="cover" // Ensures the image is contained within its box
          />
          <div className="absolute top-[70%] left-[83%] w-[45%] bg-white p-5 rounded-xl shadow-md flex items-center flex-col justify-center">
            <div className="animate-pulse border border-[#282781]  p-2 rounded-full mb-[50px]">
              <FaQuestion className="text-[#282781] text-sm" />
            </div>
            <p className="text-xs text-gray-500 font-semibold pb-1">
              If you need to talk to an agent or have any questions or concerns,
              our team is always available and ready to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordionWithImage;
