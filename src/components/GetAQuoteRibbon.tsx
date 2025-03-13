import { Link } from "react-router-dom";

const GetAQuoteRibbon = () => {
  return (
    <section className="sm:h-[12vh] flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 py-6 sm:py-0 justify-around items-center bg-rose-500 text-white mt-12">
      <p className="uppercase text-xl font-semibold w-full sm:w-auto text-center">Looking for best IP Solutions?</p>
      <Link
        to={"/contact-us"}
        className="bg-blue-950 text-white py-3 px-5 uppercase flex gap-x-3 group items-center font-semibold rounded-lg hover:shadow-xl"
      >
        Get a Quote
      </Link>
    </section>
  );
};

export default GetAQuoteRibbon;
