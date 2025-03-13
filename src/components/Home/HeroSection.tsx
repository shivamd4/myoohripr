import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "../ui/button";

const HeroSection = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  return (
    <main className="h-[85vh] relative flex justify-center items-center px-10 mb-4">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          fpsLimit: 120,
          particles: {
            color: {
              value: "#2563eb",
            },
            links: {
              color: "#000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="h-full w-full absolute"
      />

      <div className="flex flex-col gap-y-3 items-center lg:items-start">
        <p className="sm:text-2xl font-bold">Our Motto</p>
        <motion.h1
          className="text-3xl sm:text-5xl xl:text-7xl text-blue-900 font-bold leading-8 sm:leading-[70px] xl:leading-[100px] text-center lg:text-left"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
        >
          GUARDING YOUR COMPETITIVE EDGE.
        </motion.h1>

        <div className="w-20 h-0.5 bg-black" />

        <p className="text-sm sm:text-xl text-center">
          Providing best Patent Prosecution and Litigation Services
        </p>

        <Button variant={"primary"} className="z-10" asChild>
          <Link to={"/contact-us"}>CONTACT US</Link>
        </Button>
      </div>

      <img
        src="/hero-img.png"
        alt="Hero Image"
        className="w-[580px] z-10 lg:block hidden"
      />
    </main>
  );
};

export default HeroSection;
