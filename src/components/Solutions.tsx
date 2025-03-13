import { LuCheckCircle } from "react-icons/lu";
import Header from "./Header";
import SecondaryTitle from "./SecondaryTitle";
import { motion } from "framer-motion";

const Solutions = ({
  title,
  content,
  image,
  tagline,
  secondaryPara,
  servicesList,
}: {
  title: string;
  content: string[];
  image: string;
  tagline: string;
  secondaryPara?: string;
  servicesList?: string[];
}) => {
  return (
    <>
      <Header title={title} />

      <div className="flex flex-col lg:flex-row gap-y-6 px-10 xl:px-28 mt-12 justify-between">
        <div className="flex flex-col gap-y-8 w-full lg:w-[60%]">
          <SecondaryTitle title={title} />
          <motion.div
            className="flex flex-col gap-y-4"
            initial={{ translateX: -2000 }}
            animate={{ translateX: 0 }}
          >
            {content.map((item) => {
              return (
                <p key={item} className="leading-7 text-justify">
                  {item}
                </p>
              );
            })}
          </motion.div>

          <p className="font-bold italic">{tagline}</p>

          {secondaryPara && (
            <p className="leading-7 text-justify">{secondaryPara}</p>
          )}
          <div className="flex flex-col gap-y-4">
            {servicesList?.map((item) => {
              return (
                <motion.div
                  key={item}
                  className="flex gap-x-5 items-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                >
                  <LuCheckCircle color="green" size={20} />
                  <div className="flex gap-x-3 flex-wrap">
                    <p className="leading-7 text-justify">{item}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="flex flex-col gap-y-6 mt-10 items-center lg:items-start"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <img src={image} alt={title} className="w-[350px]" />
        </motion.div>
      </div>
    </>
  );
};

export default Solutions;
