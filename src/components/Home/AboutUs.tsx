import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Button } from "../ui/button";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  return (
    <motion.section
      className="mt-20 flex flex-col-reverse lg:flex-row justify-end relative"
      ref={sectionRef}
    >
      <motion.div
        className="bg-blue-900 w-full lg:w-[650px] xl:w-[850px] py-6 sm:py-auto sm:h-[400px] lg:h-[500px] lg:absolute lg:top-[12%] lg:left-0 z-10 text-white flex flex-col justify-center items-center gap-y-7 clip-path-text -mt-12 lg:mt-0"
        initial={{ translateX: -2000 }}
        animate={isVisible ? { translateX: 0 } : { translateX: -2000 }}
      >
        <p className="text-white sm:text-2xl lg:text-4xl font-semibold">
          OOHR INTELLECTUAL RESEARCH LLP
        </p>
        <p className="w-[80%] text-justify leading-6 text-sm sm:text-base">
          Oohr Intellectual Research LLP (OIR) is a techno-legal company that
          offers IP support with dedicated IP solutions. (Currently a member of
          the International Trade Council.) Oohr Intellectual Research LLP
          provide full services for the complete phase of the IP process in all
          IP domains. Our teams of Legal, technology specialists, and subject
          matter experts have experience in various international IP lawsuits.
          Oohr Intellectual Research LLP work with various sets of clients,
          including Fortune 500 companies, premier IP law firms, patent
          monetization & brokerage firms, inventors, and International
          universities.
        </p>
        <Button variant={"primary"} asChild>
          <Link to={"/who-we-are"}>LEARN MORE</Link>
        </Button>
      </motion.div>
      <motion.div
        className="lg:clip-path-image"
        initial={{ translateX: 2000 }}
        animate={isVisible ? { translateX: 0 } : { translateX: 2000 }}
      >
        <img
          src="https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg"
          alt=""
          className="w-full lg:w-[800px] xl:w-[900px] h-[320px] lg:h-auto"
        />
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
