'use client';
import { Clock } from "lucide-react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Typography from "../shared/typography";
import { Button } from "../ui/button";

const ContactInfo = () => {
  return (
    <div className="max-container 2xl:w-[80%] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 sm:pt-16 pt-8 lg:grid-cols-4 gap-4">
      {/* Address */}
      <div className="flex flex-col gap-3 bg-app-primary text-white sm:p-8 p-8 rounded-xl text-center hover:shadow-lg hover:scale-[1.03] transition-all duration-700">
        <div className="flex flex-col gap-1">
          <FaMapMarkerAlt size={40} className="mx-auto" />
          <h3 className="text-lg font-semibold">MAIN OFFICE</h3>
        </div>
        <div className="flex flex-col gap-1">
          <Typography
            typo="body-medium-medium"
          >
            Banjul, The Gambia
          </Typography>
          <Typography
            typo="body-medium-medium"
          >
            Near Independence Drive
          </Typography>
        </div>
        <Button
          variant="outline"
          className="w-fit mx-auto rounded-[0.3rem] border-none bg-white hover:bg-gray-100 text-black hover:text-gray-600"
        >
          Get Directions
        </Button>
      </div>

      <div className="flex flex-col gap-3 bg-[#DB2777] text-white sm:p-8 p-8 rounded-xl text-center hover:shadow-lg hover:scale-[1.03] transition-all duration-700">
        <div className="flex flex-col gap-1">
          <FaPhoneAlt size={35} className="mx-auto" />
          <h3 className="text-lg font-semibold">PHONE</h3>
        </div>
        <div className="flex flex-col gap-1">
          <Typography
            typo="body-medium-medium"
          >
            +220 123 4567 (Main)
          </Typography>
          <Typography
            typo="body-medium-medium"
          >
            +220 987 6543 (Emergency)
          </Typography>
        </div>
        <Button
          variant="outline"
          className="w-fit mx-auto rounded-[0.3rem] border-none bg-white hover:bg-gray-100 text-black hover:text-gray-600"
        >
          Call Now
        </Button>
      </div>

      <div className="flex flex-col gap-3 bg-[#000] text-white sm:p-8 p-8 rounded-xl text-center hover:shadow-lg hover:scale-[1.03] transition-all duration-700">
        <div className="flex flex-col gap-1">
          <FaEnvelope size={35} className="mx-auto" />
          <h3 className="text-lg font-semibold">EMAIL</h3>
        </div>
        <div className="flex flex-col gap-1">
          <Typography
            typo="body-medium-medium"
          >
            info@fabbfoundation.gm
          </Typography>
          <Typography
            typo="body-medium-medium"
          >
            programs@fabbfoundation.gm
          </Typography>
        </div>
        <Button
          variant="outline"
          className="w-fit mx-auto rounded-[0.3rem] border-none bg-white hover:bg-gray-100 text-black hover:text-gray-600"
        >
          Send Email
        </Button>
      </div>

      <div className="flex flex-col gap-1 bg-[#49B9EA] text-white sm:py-8 p-8 rounded-xl text-center hover:shadow-lg hover:scale-[1.03] transition-all duration-700">
        <div className="flex flex-col gap-">
          <Clock size={35} className="mx-auto"  />
          <h3 className="text-lg font-semibold">OFFICE HOURS</h3>
        </div>
        <div className="flex flex-col">
          <Typography
            typo="body-medium-regular"
          >
            Mon. - Friday: 8:00AM - 5:00PM
          </Typography>
          <Typography
            typo="body-medium-regular"
          >
            Saturday: 9:00 AM - 2:00 PM
          </Typography>
          <Typography
            typo="body-medium-regular"
          >
            Sunday: Closed
          </Typography>
        </div>
        <Button
          variant="outline"
          className="w-fit mx-auto rounded-[0.3rem] border-none bg-white hover:bg-gray-100 text-black hover:text-gray-600"
        >
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
