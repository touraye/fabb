'use client';
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "@/public/assets/images/fabb_white_logo.png"
import Typography from "../shared/typography";
import { Button } from "../ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import qrCodeImg from "@/public/assets/images/qr_code.png";

const Footer = () => {
  return (
    <footer className="space-y-8 bg-app-primary text-white pt-10 pb-4">
      <div className="max-container 2xl:w-[80%] w-[90%] mx-auto flex flex-col gap-5">
        <div className="flex lg:flex-row flex-col justify-between md:gap-16 gap-8">
          <section className="lg:min-w-[350px] flex-1 flex lg:flex-col sm:flex-row flex-col justify- gap-6">
              <Link
                href="/" 
                className="lg:min-w-[200px] min-w-[160px] w-[160px] h-fit"
              >
                <Image
                  src={logo}
                  alt="New Africa Foundation"
                  className="w-full h-full"
                />
              </Link>
              <p className="text-justify">
                The FaBB Foundation owned by the First Lady Fatoumatta Bah Barrow is a focused on addressing challenges in the Gambia. Our mission goes beyond typical 
                charitable activities such as distributing food. We strive to bridge religious, societal, racial, and 
                interpersonal gaps.
              </p>
          </section>
          <div className="flex sm:flex-row flex-col justify-between sm:gap-20 gap-10">
            <section className="flex-1 lg:pt-10 grid xs:grid-cols-2 md:gap-8 gap-4">
              <div className="flex-1 flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <Typography
                    typo="header-6-semibold"
                  >Quick Links</Typography>
                  <div className="w-12 h-[2px] bg-white"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li
                    className="text-lg font-medium"
                  >
                    <Link href="/who-we-are">
                      About us
                    </Link>
                  </li>
                  <li
                    className="text-lg font-medium"
                  >
                    <Link href="/contact-us">
                      Contact us
                    </Link>
                  </li>
                  <li
                    className="text-lg font-medium"
                  >
                    <Link href="/our-leadership">
                      our Leadership
                    </Link>
                  </li>
                  <li
                    className="text-lg font-medium"
                  >
                    <Link href="/fabb-network">
                      FaBB Network
                    </Link>
                  </li>
                  
                </ul>
              </div>
              <div className="xl:w-[250px] lg:w-[150px] w-[200px] flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <Typography
                    typo="header-6-semibold"
                  >Contact us</Typography>
                  <div className="w-12 h-[2px] bg-white"></div>
                </div>
                <ul className="flex flex-col justify-start gap-5">
                  <li
                    className="flex items-center gap-4 text-lg font-normal"
                  >
                    <FaMapMarkerAlt size={35} className="mx-auto" />
                    <span>
                      Banjul, The Gambia
                      Near Independence Drive
                    </span>
                  </li>
                  <li
                    className="flex justify-start items-center gap-4 text-lg font-normal"
                  >
                    <FaPhoneAlt size={20} />
                    <span>
                      +220 123 4567 (Main)
                    </span>
                  </li>
                  <li
                    className="flex items-center gap-4 text-lg font-normal"
                  >
                    <FaEnvelope size={25} className="mx-auto" />
                    <span>
                      info@fabbfoundation.gm
                    </span>
                  </li>
                 
                </ul>
              </div>
            </section>
            <section className="w-fit flex flex-col gap-2">
              <div className="xl:w-[200px] xs:w-[200px] w-[150px] h-fit ">
                <Image 
                  src={qrCodeImg}
                  alt="QR code"
                  className="w-full h-full"
                />
              </div>
              <Typography
                typo="body-large-semibold"
                className="text-center"
              >
                Scan to Donate
              </Typography>
            </section>
          </div>
        </div>

        <div className="w-full flex md:flex-row flex-col justify-between items-center gap-5 text-sm">
          <div className="sm:flex-1 w-full">
            <div className="xs:w-[350px] w-full flex items-center border border-white text-white rounded-xl">
              
              <input 
                placeholder="Email"
                className="flex-1 px-3 placeholder:text-gray-300 outline-none border-none border-r focus:outline-none bg-transparent"
              />
              <Button
                variant="secondary"
                className="!py-6 text-app-primary bg-white hover:bg-gray-200 rounded-r-xl"
              >
                SUBSCRIBE
                <ArrowRight className="xs:flex hidden" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-end items-center space-x-4 text-xl">
            <Link 
              href="https://x.com/fabbfoundation"
              target="_blank"  
            >
              <FaTwitter />
            </Link>
            <Link 
              href="https://www.facebook.com/FaBBFoundation/"
              target="_blank" 
            >
              <FaFacebookF />
            </Link>
            <Link 
              href="https://www.instagram.com/fabbfoundation/"
              target="_blank" 
            >
              <FaInstagram />
            </Link>
            <Link 
              href="https://www.youtube.com/channel/UCX9J6J6J6J6J6J6J6J6J6J6"
              target="_blank" 
            >
              <FaYoutube />
            </Link>
            <Link 
              href="https://www.linkedin.com/company/fatoumatta-bah-barrow-foundation-fabb/"
              target="_blank" 
            >
              <Linkedin />
            </Link>
          </div>
        </div>

      </div>
      <div className="w-full pt-6 border-t border-gray-400">
        <div className="max-container 2xl:w-[80%] w-[90%] mx-auto pb-6 flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="flex justify-start items-center gap-3">
            <Link 
              href="#"
              className="text-white hover:text-[#DB2777] font-medium hover:font-semibold border-b-2"
            >Contact us</Link>
            <Link 
              href="#"
              className="text-white hover:text-[#DB2777] hover:font-semibold font-medium border-b-2"
            >Privacy Policy</Link>
            <Link 
              href="#"
              className="text-white hover:text-[#DB2777] hover:font-semibold font-medium border-b-2"
            >Terms of use</Link>
          </div>
          <p className="text-center text-gray-200">Copyright 2025. FaBB Foundation. All Rights Reserved</p>
        </div>
        <div className="w-full pt-4 border-t border-gray-400">
          <p className="w-[80%] mx-auto text-gray-300 text-center">Designed by: <span className="text-xl font-semibold text-white">DK Telecom Limited</span> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
