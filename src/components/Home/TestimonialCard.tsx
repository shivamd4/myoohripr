import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

const TestimonialCard = ({ by, text }: { by: string; text: string }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <motion.div
        className="py-8 px-9 bg-blue-900 text-white w-[320px] h-[450px] relative rounded-xl"
        initial={{ backgroundColor: "#fff" }}
        whileInView={{ backgroundColor: "#1e3a8a" }}
      >
        <FaQuoteLeft className="absolute top-[8%] left-[3%]" color="white" />
        <motion.p
          className="leading-7 text-justify text-sm"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          {text}
        </motion.p>
        <FaQuoteRight
          className="absolute bottom-[5%] right-[3%]"
          color="white"
        />
        <div className="absolute bottom-3 left-0 w-full flex justify-center">
          <p className="font-bold text-white text-center">{by}</p>
        </div>
      </motion.div>
      {/* <div className="flex gap-x-5 items-center">
        <img
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          alt="Customer"
          className="w-[120px] "
        />
        <p className="font-bold w-40 text-center">{by}</p>
      </div> */}
    </div>
  );
};

export default TestimonialCard;
