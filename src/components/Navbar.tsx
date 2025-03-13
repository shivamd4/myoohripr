import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { aboutUs } from "../../constants/about-us";
import { ipServices } from "../../constants/ip-services";
import { legalSupport } from "../../constants/legal-support";
import { solutions } from "../../constants/solutions";
import { Input } from "./ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  return (
    <nav
      className={`flex justify-between xl:justify-around items-center h-[10vh] py-2 px-6 xl:px-0 bg-white`}
    >
      <img src="/logo.png" alt="Logo" className="w-28" />
      <ul className="hidden xl:flex items-center gap-x-8">
        <li className="uppercase font-semibold cursor-pointer hover:text-blue-600 delay-75 transition-all">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="uppercase font-semibold cursor-pointer flex gap-x-1 items-center hover:text-blue-600 delay-75 transition-all">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="uppercase font-semibold cursor-pointer flex gap-x-1 items-center hover:text-blue-600 delay-75 transition-all">
                IP Services <ChevronDown strokeWidth={1.75} size={17} />
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-800 text-white border-none shadow-lg shadow-blue-600 w-[100vw] pl-4 pr-8 py-8 flex justify-between">
              {ipServices.map((item) => {
                return (
                  <div key={item.title} className="flex flex-col gap-y-7">
                    <p className="font-bold text-sm">{item.title}</p>
                    <div className="flex flex-col gap-y-4">
                      {item.content.map((ele) => {
                        return (
                          <DropdownMenuItem
                            key={ele.subTitle}
                            asChild
                            className="focus:bg-transparent focus:text-white cursor-pointer px-0 py-0 text-xs"
                          >
                            <Link
                              to={ele.url}
                              className="border-b-2 w-fit border-transparent hover:border-yellow-600 delay-100 transition-all"
                            >
                              {ele.subTitle}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="uppercase font-semibold cursor-pointer flex gap-x-1 items-center hover:text-blue-600 delay-75 transition-all">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="uppercase font-semibold cursor-pointer flex gap-x-1 items-center hover:text-blue-600 delay-75 transition-all">
                Legal Support <ChevronDown strokeWidth={1.75} size={17} />
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-800 text-white border-none shadow-lg shadow-blue-600 w-[70vw] p-8 flex justify-between">
              {legalSupport.map((item) => {
                return (
                  <div key={item.title} className="flex flex-col gap-y-7">
                    <p className="font-bold text-sm">{item.title}</p>
                    <div className="flex flex-col gap-y-4">
                      {item.content.map((ele) => {
                        return (
                          <DropdownMenuItem
                            key={ele.subTitle}
                            asChild
                            className="focus:bg-transparent focus:text-white cursor-pointer px-0 py-0 text-xs"
                          >
                            <Link
                              to={ele.url}
                              className="border-b-2 w-fit border-transparent hover:border-yellow-600 delay-100 transition-all"
                            >
                              {ele.subTitle}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="font-semibold cursor-pointer hover:text-blue-600 delay-75 transition-all">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="uppercase font-semibold cursor-pointer flex gap-x-1 items-center hover:text-blue-600 delay-75 transition-all">
                Solutions <ChevronDown strokeWidth={1.75} size={17} />
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-800 border-none text-white">
              {solutions.map((item) => {
                return (
                  <DropdownMenuItem
                    className="focus:bg-blue-200 focus:text-black cursor-pointer"
                    key={item.title}
                    asChild
                  >
                    <Link to={item.url}>{item.title}</Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="font-semibold cursor-pointer hover:text-blue-600 delay-75 transition-all">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="uppercase font-semibold cursor-pointer flex gap-x-1 items-center hover:text-blue-600 delay-75 transition-all">
                About Us <ChevronDown strokeWidth={1.75} size={17} />
              </p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-800 border-none text-white">
              {aboutUs.map((item) => {
                return (
                  <DropdownMenuItem
                    className="focus:bg-blue-200 focus:text-black cursor-pointer"
                    key={item.title}
                    asChild
                  >
                    <Link to={item.url}>{item.title}</Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="uppercase font-semibold cursor-pointer hover:text-blue-600 delay-75 transition-all">
          <Link to={"/domains"}>Domains</Link>
        </li>
        <li className="uppercase font-semibold cursor-pointer hover:text-blue-600 delay-75 transition-all">
          <Link to={"/contact-us"}>Contact Us</Link>
        </li>
      </ul>

      <div className="hidden xl:flex gap-x-4 relative">
        <FaSearch className="absolute top-3 left-2.5" />
        <Input
          className={`bg-transparent border-none w-[120px] pl-10`}
          placeholder="Search"
        />
        <div className="flex gap-x-2 items-center">
          <TbWorld size={20} />
          <p className="text-lg">ENG</p>
        </div>
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <button className="border border-black rounded-md xl:hidden block">
            <IoIosMenu size={30} />
          </button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col gap-y-4 items-center pb-4">
          <DrawerClose asChild>
            <Link to={"/"}>Home</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link to={"/patent-drafting"}>IP Services</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link to={"/contract-drafting-and-creation"}>Legal Support</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link to={"/who-we-are"}>About Us</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link to={"/domains"}>Domains</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link to={"/contact-us"}>Contact Us</Link>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
