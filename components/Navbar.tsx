"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@/public/assets/images/fabb_logo.png"
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FaUser, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { GetAidModal } from "./modal/get-aid";

const we_ares = [
  {
    id: "1",
    title: "About Us",
    href: "/who-we-are",
  },
  {
    id: "2",
    title: "Our Leadership",
    href: "/our-leadership",
  },
  {
    id: "3",
    title: "FaBB Network",
    href: "/fabb-network",
  },
];

const interventions = [
  {
    id: "1",
    title: "Quality Education",
    href: "/our-projects?tab=quality-education"
  },
  {
    id: "2",
    title: "Quality Healthcare",
    href: "/our-projects?tab=quality-healthcare"
  },
  {
    id: "3",
    title: "Advocacy & Empowerment",
    href: "/our-projects?tab=advocacy-empowerment"
  },
  {
    id: "4",
    title: "Infrastructure Development",
    href: "/our-projects?tab=infrastructure-development"
  },
  {
    id: "5",
    title: "Others",
    href: "/our-projects?tab=others"
  },
];

const insights = [
  {
    id: "1",
    title: "Report",
    href: "/reports",
  },
  {
    id: "2",
    title: "Gallery",
    href: "/our-gallery",
  },
  {
    id: "3",
    title: "News",
    href: "/our-board-of-directors",
  },
];

const Navbar = () => {
  const [openGetAid, setOpenGetAid] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleNavItemClick = () => {
    setSheetOpen(false);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-container 2xl:w-[80%] w-[90%] flex items-center justify-between mx-auto py-4">
        <Link
          href="/"
          className="xl:w-[110px] w-[90px] h-fit flex items-center "
        >
          <Image 
            src={logo}
            alt="Logo"
            className="w-full h-full"
          />
        </Link>
        
        <div className="hidden xl:flex items-center lg:order-2 space-x-1 lg:space-x-2 rtl:space-x-reverse">
          <Link
            href="/"
            className="p-3 hidden xl:flex items-center justify-center rounded-full bg-[#E92751]"
          >
            <FaSearch className="text-white" size={18} />
          </Link>
          {/* <Link
            href="/"
            className="p-3 hidden xl:flex items-center justify-center rounded-full bg-[#005075]"
          >
            <FaUser className="text-white" size={18} />
          </Link> */}
          <Button
            onClick={() => setOpenGetAid(true)}
            className="border-2 border-[#345F80] text-[#345F80] font-medium rounded-lg text-sm px-3 py-3 xl:px-5 lg:py-5"
          >
            Get Aid
          </Button>
          <Link
            href="#"
            className="border-2 border-[#DB2777] text-[#DB2777] font-medium rounded-lg text-sm px-3 py-2 xl:px-5 lg:py-2.5"
          >
            Donate Now
          </Link>
        </div>
        
        <div className="hidden lg:flex ">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0">
            <li className="px-1">
              <NavigationMenu>
                <NavigationMenuItem className="">
                  <Link className="hover:text-[#DB2777] transition duration-300" href="/" >
                    <NavigationMenuTrigger className="xl:text-[13px] text-[12px] text-[#345F80] font-semibold uppercase" >
                      Who We Are
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="border-t-4 border-[#DB2777]">
                    <ul className="grid text-gray-700 bg-white rounded-xl md:w-[200px] lg:w-[200px] z-60">
                      {we_ares.map(data => (
                        <ListItem
                          key={data.id}
                          href={data.href}
                          className="hover:text-[#DB2777] transition border-b hover:bg-gray-200 border-b-gray-200 duration-300"
                        >
                          <span className="text-[.9rem]">{data.title}</span>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuItem className="">
                  <Link
                    className="hover:text-[#DB2777] transition duration-300"
                    href="/intervention-areas"
                  >
                    <NavigationMenuTrigger className="xl:text-[13px] text-[12px] text-[#345F80] font-semibold uppercase">
                      intervention areas
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="border-t-4 border-[#DB2777]">
                    <ul className="grid text-gray-700 bg-white rounded-xl md:w-[400px] lg:w-[300px] z-60">
                      {interventions.map(data => (
                        <ListItem
                          key={data.id}
                          href={data.href}
                          className="hover:text-[#DB2777] border-b hover:bg-gray-200 border-b-gray-200 transition duration-300"
                        >
                          <span className="text-[.9rem]">{data.title}</span>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </li>
            <li>
              <Link
                href="/our-projects"
                className="xl:text-[13px] text-[12px] text-[#345F80] font-semibold uppercase block py-2 px-3 hover:text-[#DB2777] transition duration-300 dark:text-white"
              >
                successful projects
              </Link>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuItem className="">
                  <Link
                    className="hover:text-[#DB2777] transition duration-300"
                    href="/reports"
                  >
                    <NavigationMenuTrigger className="xl:text-[13px] text-[12px] text-[#345F80] font-semibold uppercase">
                      Insights
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="border-t-4 border-[#DB2777]">
                    <ul className="grid text-gray-700 bg-white rounded-xl md:w-[200px] lg:w-[200px] z-60">
                      {insights.map(data => (
                        <ListItem
                          key={data.id}
                          href={data.href}
                          className="hover:text-[#DB2777] border-b hover:bg-gray-200 border-b-gray-200 transition duration-300"
                        >
                          <span className="text-[.9rem]">{data.title}</span>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="xl:text-[13px] text-[12px] text-[#345F80] font-semibold uppercase block py-2 px-3 hover:text-[#DB2777] transition duration-300 dark:text-white"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="flex lg:hidden items-center gap-4">

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0"
              >
                <Menu size={20} />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <nav className="h-full flex flex-col justify-between gap-4 text-lg font-medium">
                <div className="">
                  <Link
                    href="/"
                    className="w-20 h-fit flex items-center gap-2 mb-4"
                    onClick={handleNavItemClick}
                  >
                    <Image 
                      src={logo}
                      alt="Logo"
                      className="w-full h-full"
                    />
                  </Link>
                  
                  <div className="pt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <button 
                        onClick={() => toggleSection('whoWeAre')}
                        className="flex items-center justify-between text-[.9rem] text-[#345F80] font-semibold uppercase hover:text-[#DB2777]"
                      >
                        Who We Are
                        {openSection === 'whoWeAre' ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                      </button>
                      {openSection === 'whoWeAre' && (
                        <div className="flex flex-col pl-4 gap-2 mt-2">
                          {we_ares.map(data => (
                            <Link
                              key={data.id}
                              href={data.href}
                              className="text-muted-foreground hover:text-[#DB2777] text-base"
                              onClick={handleNavItemClick}
                            >
                              {data.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <button 
                        onClick={() => toggleSection('interventions')}
                        className="flex items-center justify-between text-[.9rem] text-[#345F80] font-semibold uppercase hover:text-[#DB2777]"
                      >
                        Intervention Areas
                        {openSection === 'interventions' ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                      </button>
                      {openSection === 'interventions' && (
                        <div className="flex flex-col pl-4 gap-2 mt-2">
                          {interventions.map(data => (
                            <Link
                              key={data.id}
                              href={data.href}
                              className="text-muted-foreground hover:text-[#DB2777] text-base"
                              onClick={handleNavItemClick}
                            >
                              {data.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <Link
                      href="/our-projects"
                      className="text-[.9rem] text-[#345F80] font-semibold uppercase hover:text-[#DB2777]"
                      onClick={handleNavItemClick}
                    >
                      Successful Projects
                    </Link>
                    
                    <div className="flex flex-col gap-1">
                      <button 
                        onClick={() => toggleSection('insights')}
                        className="flex items-center justify-between text-[.9rem] text-app-primary font-semibold uppercase hover:text-[#DB2777]"
                      >
                        Insights
                        {openSection === 'insights' ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                      </button>
                      {openSection === 'insights' && (
                        <div className="flex flex-col pl-4 gap-2 mt-2">
                          {insights.map(data => (
                            <Link
                              key={data.id}
                              href={data.href}
                              className="text-muted-foreground hover:text-[#DB2777] text-base "
                              onClick={handleNavItemClick}
                            >
                              {data.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      href="/contact-us"
                      className="text-[.9rem] text-[#345F80] font-semibold uppercase hover:text-[#DB2777] mt-2"
                      onClick={handleNavItemClick}
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  <Button
                    onClick={() => {
                      setOpenGetAid(true);
                      setSheetOpen(false);
                    }}
                    className="w-full py-5 border-2 border-app-primary text-app-primary font-medium rounded-lg"
                  >
                    Get Aid
                  </Button>
                  <Link
                    href="#"
                    className="w-full text-center border-2 border-[#DB2777] text-[#DB2777] font-medium rounded-lg py-2 px-4"
                    onClick={handleNavItemClick}
                  >
                    Donate Now
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <GetAidModal open={openGetAid} setOpen={setOpenGetAid} />
    </nav>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";