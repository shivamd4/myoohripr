import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WhyUsRibbon = () => {
  return (
    <section className="sm:h-[12vh] flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 py-6 sm:py-0 justify-around items-center bg-blue-950 text-white mt-12">
      <p className="uppercase text-xl font-semibold w-full sm:w-auto text-center">
        Stay ahead of COmpetition
      </p>
      <Link
        to={"/why-us"}
        className="border-2 border-red-600 p-3 uppercase flex gap-x-3 group items-center font-bold"
      >
        Why Us
        <FaArrowRightLong
          className="group-hover:-rotate-45 delay-150 transition-all"
          size={18}
          color="red"
        />
      </Link>
    </section>
  );
};

export default WhyUsRibbon;
