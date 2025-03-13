import { motion } from "framer-motion";
import Header from "./Header";
import SecondaryTitle from "./SecondaryTitle";

const Solutions2 = ({
  title,
  tagline,
  endPara,
  list,
  startPara,
  image,
}: {
  title: string;
  tagline?: string;
  startPara: string;
  endPara: string;
  list: { title: string; content: string }[];
  image: string;
}) => {
  return (
    <>
      <Header title={title} />

      <div className="flex flex-col lg:flex-row gap-y-6 px-10 xl:px-28 mt-12 justify-between">
        <div className="flex flex-col gap-y-8 w-full lg:w-[60%]">
          <SecondaryTitle title={title} />
          {tagline && <p className="font-bold italic">{tagline}</p>}
          <p className="leading-7 text-justify">{startPara}</p>

          <div className="flex flex-col gap-y-4">
            {list.map((item, i) => {
              return (
                <motion.div
                  key={item.title}
                  className="flex gap-x-4"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                >
                  <p className="mt-0.5 font-bold">{i + 1}.</p>
                  <p className="leading-7 text-justify">
                    <span className="font-bold">{item.title}: </span>
                    {item.content}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <p className="leading-7 text-justify">{endPara}</p>
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

export default Solutions2;
