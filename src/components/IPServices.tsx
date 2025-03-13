import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "./Header";

const IPServices = ({
  title,
  content,
  whyUs,
  otherServices,
}: {
  title: string;
  content: string[];
  whyUs?: string[];
  otherServices: {
    title: string;
    url: string;
  }[];
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Header title={title} />

      <div className="flex flex-col lg:flex-row lg:px-8 xl:px-28 mt-12 justify-center lg:justify-between items-center lg:items-start gap-y-7">
        <div className="flex flex-col gap-y-8 w-[90%] lg:w-[70%]">
          <div className="flex flex-col gap-y-2">
            <motion.p
              className="text-4xl font-bold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
            >
              {title}
            </motion.p>
            <div className="w-40 h-0.5 bg-yellow-400" />
          </div>

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

          {whyUs && (
            <>
              <div className="flex flex-col gap-y-2">
                <p className="text-4xl font-bold">Why Us?</p>
                <div className="w-40 h-0.5 bg-yellow-400" />
              </div>

              <div className="flex flex-col gap-y-4">
                {whyUs?.map((item) => {
                  return (
                    <p key={item} className="leading-7 text-justify">
                      {item}
                    </p>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <motion.div
          className="flex flex-col gap-y-6 w-[90%] lg:w-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-bold">Other Services</p>
            <div className="w-40 h-0.5 bg-yellow-400" />
          </div>
          {otherServices
            .filter((item) => item.title !== title)
            .map((item) => {
              return (
                <p
                  key={item.title}
                  className={`border-b-2 font-semibold border-transparent ${
                    item.url !== ""
                      ? "hover:border-yellow-400 cursor-pointer"
                      : ""
                  } delay-75 transition-all w-fit`}
                  onClick={() => item.url !== "" && navigate(`/${item.url}`)}
                >
                  {item.title}
                </p>
              );
            })}
        </motion.div>
      </div>
    </>
  );
};

export default IPServices;
