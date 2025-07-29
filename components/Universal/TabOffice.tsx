"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

const TabOffice = () => {
  const [activeSection, setActiveSection] = useState("");
  const sections = {
    africa: useRef<HTMLDivElement>(null),
    europe: useRef<HTMLDivElement>(null),
    latinAmerica: useRef<HTMLDivElement>(null),
    middleEast: useRef<HTMLDivElement>(null),
    usa: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-2/5 pl-8 p-4 text-gray-600 max-md:hidden font-bold text-2xl bg-white sticky top-0 h-screen overflow-hidden">
        <ul className="space-y-3">
          <li
            className={`cursor-pointer ${
              activeSection === "africa" ? "text-black" : ""
            }`}
            onClick={() => scrollToSection("africa")}
          >
            AFRICA
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "europe" ? "text-black" : ""
            }`}
            onClick={() => scrollToSection("europe")}
          >
            EUROPE AND CENTRAL ASIA
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "latinAmerica" ? "text-black" : ""
            }`}
            onClick={() => scrollToSection("latinAmerica")}
          >
            LATIN AMERICA AND THE CARIBBEAN
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "middleEast" ? "text-black" : ""
            }`}
            onClick={() => scrollToSection("middleEast")}
          >
            MIDDLE EAST AND NORTH AFRICA
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "usa" ? "text-black" : ""
            }`}
            onClick={() => scrollToSection("usa")}
          >
            UNITED STATES
          </li>
        </ul>{" "}
      </div>

      {/* Content Area */}
      <div className="md:w-4/5 h-screen overflow-y-auto text-gray-900 p-8">
        <section ref={sections.africa} className="pt-[60px] pb-[100px]">
          <h2 className="text-3xl font-bold">AFRICA</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6 ">
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Kenya</p>
              <h3 className="text-xl font-bold">Nairobi</h3>
              <p>Open Society–Africa</p>
              <p>Merchant Square, 2nd Floor, Riverside Drive, P.O. Box 2193</p>
              <p>Nairobi, 00202, Kenya</p>
            </div>
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Senegal</p>
              <h3 className="text-xl font-bold">Dakar</h3>
              <p>Open Society–Africa</p>
              <p>Stèle Mermoz, Rue El Hadj Ibrahima Niasse</p>
              <p>Dakar, MZ 83 X MZ 100, Senegal</p>
            </div>
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">South Africa</p>
              <h3 className="text-xl font-bold">Johannesburg</h3>
              <p>Open Society–Africa</p>
              <p>1 Hood Avenue / 148 Jan Smuts, Rosebank</p>
              <p>Johannesburg, GP 2196, South Africa</p>
              <p>T. +27-011-587-5000</p>
              <p>F. +27-011-587-5099</p>
            </div>
          </div>
        </section>

        <section ref={sections.europe} className="pb-[100px]">
          <h2 className="text-3xl font-bold">EUROPE AND CENTRAL ASIA</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Albania</p>
              <h3 className="text-xl font-bold">Tirana</h3>
              <p>Open Society Foundation for Albania</p>
              <p>Rr. Qemal Stafa P.120/2</p>
              <p className="pb-4">Tirana, Albania</p>
              <Link className=" text-black font-normal border-b  " href="/">
                Website
              </Link>
            </div>
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Belgium</p>
              <h3 className="text-xl font-bold">Brussels</h3>
              <p>Open Society European Policy Institute</p>
              <p>Square de Meeûs 5-6</p>
              <p>Brussels, 1000, Belgium</p>
              <p>T. +32-2-505-4646</p>
              <p className="pb-4">F. +32-2-502-4646</p>
              <Link className=" text-black font-normal border-b  " href="/">
                Website
              </Link>
            </div>
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Bosnia and Herzegovina</p>
              <h3 className="text-xl font-bold">Sarajevo</h3>
              <p>Open Society Fund–Bosnia and Herzegovina</p>
              <p>Marsala Tita 19/III</p>
              <p className="pb-4">Sarajevo, 71000, Bosnia and Herzegovina</p>
              <Link className=" text-black font-normal border-b  " href="/">
                Website
              </Link>
            </div>
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Georgia</p>
              <h3 className="text-xl font-bold">Tbilisi</h3>
              <p>Open Society Georgia Foundation</p>
              <p>10 Chovelidze Street</p>
              <p className="pb-4">Tblisi, 0108, Georgia</p>
              <Link className=" text-black font-normal border-b  " href="/">
                Website
              </Link>
            </div>
          </div>
        </section>

        <section ref={sections.latinAmerica} className="pb-[100px]">
          <h2 className="text-3xl font-bold">
            LATIN AMERICA AND THE CARIBBEAN
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Brazil</p>
              <h3 className="text-xl font-bold">Rio de Janeiro</h3>
              <p>Open Society Foundations</p>
              <p>Rio de Janeiro, Brazil</p>
            </div>
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Colombia</p>
              <h3 className="text-xl font-bold">Bogota</h3>
              <p>Open Society Foundations</p>
              <p>Bogota, Colombia</p>
              <p>T. +1 202-654-1003</p>
            </div>
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Haiti</p>
              <h3 className="text-xl font-bold">Port-au-Prince</h3>
              <p>Fondation Connaissance et Liberte</p>
              <p>143 Avenue Christophe</p>
              <p className="pb-4">Port-au-Prince, BP 2720 HT 6112, Haiti</p>
              <Link className=" text-black font-normal border-b  " href="/">
                Website
              </Link>
            </div>
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Mexico</p>
              <h3 className="text-xl font-bold">Mexico City</h3>
              <p>Open Society Foundations</p>
              <p>Reforma 180 Avenida Paseo de la Reforma número 180, piso 19</p>
              <p>Mexico City, 06600, Mexico</p>
              <p className="pb-4">T. +1 202-654-1003</p>
              <Link className=" text-black font-normal border-b  " href="/">
                Website
              </Link>
            </div>
          </div>
        </section>

        <section ref={sections.middleEast} className="pb-[100px]">
          <h2 className="text-3xl font-bold">MIDDLE EAST AND NORTH AFRICA</h2>
          {/* Add content here */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">Jordan</p>
              <h3 className="text-xl font-bold">Amman</h3>
              <p>Open Society Foundations</p>
              <p>Amman, Jordan</p>
              <p>T. +972-2-622-2500</p>
            </div>
          </div>
        </section>

        <section ref={sections.usa} className="pb-[100px]">
          <h2 className="text-3xl font-bold">UNITED STATES</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">United States</p>
              <h3 className="text-xl font-bold">New York</h3>
              <p>Open Society Foundations</p>
              <p>224 West 57th Street</p>
              <p>New York, NY 10019, United States</p>
              <p>T. +1-212-548-0600</p>
              <p>F. +1-212-548-4600</p>
            </div>
            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">United States</p>
              <h3 className="text-xl font-bold">Washington D.C.</h3>
              <p>Open Society Foundations</p>
              <p>1730 Pennsylvania Avenue, NW 7th Floor</p>
              <p>Washington, DC 20006, United States</p>
              <p>T. +1-202-721-5600</p>
              <p>F. +1-202-530-0128</p>
            </div>

            <div className="border-t border-gray-200  pt-4">
              <p className="text-gray-500">United States</p>
              <h3 className="text-xl font-bold">Washington D.C.</h3>
              <p>Open Society Action Fund</p>
              <p>1730 Pennsylvania Avenue, NW 7th Floor</p>
              <p className="pb-4">Washington, DC 20006, United States</p>
              <Link className=" text-black font-normal border-b  " href="/">
                Website
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TabOffice;
