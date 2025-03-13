import Title from "../Title";
import { solutionOfferings } from "../../../constants/solution-offerings";
import Section from "../Section";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SolutionOfferings = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  return (
    <Section>
      <Title>Solution Offerings</Title>

      <div className="mt-20 relative hidden xl:flex w-full pl-24">
        <div
          className="relative w-[500px] h-[345px] rounded-xl drop-shadow-[0_0px_20px_rgba(128,128,128)] hover:scale-110 cursor-pointer z-[70] delay-75 transition-all"
          onClick={() => navigate(solutionOfferings[index].url)}
        >
          <img
            src={solutionOfferings[index].image}
            alt={solutionOfferings[index].title}
            className="w-full h-full rounded-xl"
          />
          <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 gap-y-5 top-0">
            <p className="uppercase font-medium sm:text-2xl text-center text-white">
              {solutionOfferings[index].title}
            </p>
            <p className="text-white text-sm text-justify">
              {solutionOfferings[index].description}
            </p>
          </div>
        </div>

        {solutionOfferings
          .map((e) => e.id)
          .filter((ele) => ele !== index)
          .map((item, i) => {
            return (
              <div
                className={`absolute w-[500px] h-[345px] rounded-xl drop-shadow-[0_0px_20px_rgba(128,128,128)] cursor-pointer transform-card`}
                style={{
                  left: `${6 + 9 * (i + 1)}%`,
                  zIndex: `${Math.floor(50 / (i + 1))}`,
                }}
                key={solutionOfferings[item].title}
                onClick={() => {
                  const index = solutionOfferings
                    .map((e) => e.id)
                    .indexOf(solutionOfferings[item].id);
                  setIndex(index);
                }}
              >
                <img
                  src={solutionOfferings[item].image}
                  alt={solutionOfferings[item].title}
                  className="w-full h-full rounded-xl"
                />
                <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 gap-y-5 top-0">
                  <p className="uppercase font-medium sm:text-2xl text-center text-white">
                    {solutionOfferings[item].title}
                  </p>
                  <p className="text-white text-sm text-justify">
                    {solutionOfferings[item].description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="mt-20 flex xl:hidden max-w-[1200px] gap-x-6 justify-center items-center flex-wrap px-7 gap-y-6">
        {solutionOfferings.map((item) => {
          return (
            <div
              className="flex flex-col relative w-[300px] h-[275px] shadow shadow-black rounded-lg"
              key={item.title}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full shadow shadow-black rounded-lg"
              />
              <div className="absolute w-full h-full flex flex-col items-center justify-center px-4 gap-y-5 top-0">
                <p className="uppercase font-medium sm:text-2xl text-center text-white">
                  {item.title}
                </p>
                <p className="text-white text-sm text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default SolutionOfferings;
