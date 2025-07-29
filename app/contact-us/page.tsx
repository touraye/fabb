'use client';
import ContactusMain from "@/components/contactus/contact-main";
import ContactInfo from "@/components/contactus/ContactInfo";
import Typography from "@/components/shared/typography";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="w-full bg-app-primary md:py-[70px] py-12">
        <div className="max-container 2xl:w-[80%] w-[90%] mx-auto flex flex-col sm:gap-6 gap-3 text-white">
          <p className="w-full text-4xl lg:text-7xl text-white font-bold text-center">Contact us</p>
          <Typography
            typo="body-large-medium"
            className="lg:w-[660px] sm:w-[80%] mx-auto text-center"
          >
            Get in touch with us to learn more about our programs, volunteer opportunities, or partnership possibilities. We&apos;re here to help and answer any questions you may have.
          </Typography>
        </div>
      </div>
      <div className=" bg-gray-100">
        <ContactInfo />
      </div>
      <div className="flex justify-between  bg-gray-100 w-full py-8">
        <ContactusMain />
      </div>
    </div>
  );
};

export default ContactPage;
