import { Link, useLocation } from "react-router-dom";

import GetAQuoteRibbon from "./GetAQuoteRibbon";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/contact-us" && <GetAQuoteRibbon />}
      <footer
        className={`bg-blue-950 text-white p-5 flex justify-evenly ${
          pathname === "/contact-us" ? "mt-9" : ""
        } flex-wrap gap-y-16`}
      >
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">
              OOHR Intelluctual Research LLP
            </p>
            <div className="bg-yellow-500 w-40 h-0.5" />
          </div>
          <div className="flex flex-col gap-y-1.5">
            <p>Unlocking Potential, Protecting Progress;</p>
            <p>Your Intelluctual Property; Our Expertise</p>
          </div>
          <div className="flex gap-x-3">
            <Link
              to={
                "https://www.linkedin.com/company/oohr-intellectual-research-llp/"
              }
            >
              <FaLinkedin
                size={22}
                className="hover:scale-110 cursor-pointer delay-100 transition-all"
              />
            </Link>
            <Link to={"https://www.facebook.com/oohrintellectualresearchllp"}>
              <FaFacebook
                size={22}
                className="hover:scale-110 cursor-pointer delay-100 transition-all"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">Quick Links</p>
            <div className="bg-yellow-500 w-40 h-0.5" />
          </div>
          <Link
            to={"/why-us"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Why Us
          </Link>
          <Link
            to={"/our-team"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Our Team
          </Link>
          <Link
            to={"/who-we-are"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Who We Are
          </Link>
          <Link
            to={"/contact-us"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">Services</p>
            <div className="bg-yellow-500 w-40 h-0.5" />
          </div>
          <Link
            to={"/patent-drafting"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Patent
          </Link>
          <Link
            to={"/trademark-filing"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Trademark
          </Link>
          <Link
            to={"/copyright-registration"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Copyrights
          </Link>
          <Link
            to={"/contract-drafting-and-creation"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Legal Support
          </Link>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">Expertise Domains</p>
            <div className="bg-yellow-500 w-40 h-0.5" />
          </div>
          <Link
            to={"/domains"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Aerospace
          </Link>
          <Link
            to={"/domains"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Biotechnology
          </Link>
          <Link
            to={"/domains"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Software
          </Link>
          <Link
            to={"/domains"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Life Science & Chemistry
          </Link>
          <Link
            to={"/domains"}
            className="hover:text-blue-600 delay-75 transition-all"
          >
            Engineering
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
