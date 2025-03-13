import { LuCheckCircle } from "react-icons/lu";

import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { patentSearch } from "../../../../constants/patent-search";

const InfringementSearchPage = () => {
  const navigate = useNavigate();

  const content = [
    "Patent Infringement Analysis Claim Charts necessitates, while some organization commences producing, marketing, or utilizing the patented product without taking permission or license from the patent inventor or assignee. The Patent Infringement Analysis Claim Charts Searches are performed to find similar product existence in the market using the same technology.",
    "We assist our clients to find infringement evidence by searching for specific products related to patent claim's feature.",
    "There are different ways another party may infringe on the patent",
  ];

  const list = [
    {
      title: "Direct Infringement",
      description:
        "This occurs when a product covered by a patent is manufactured without permission.",
    },
    {
      title: "Indirect Infringement",
      description:
        "An indirect infringer may induce infringement by encouraging or aiding another in infringing a patent.",
    },
    {
      title: "Contributory Infringement",
      description:
        "This occurs when a party supplies a direct infringer with a part that has no substantial non-infringing use.",
    },
    {
      title: "Literal Infringement",
      description:
        "This exists if there is a direct correspondence between the words in the patent claims and the infringing device.",
    },
  ];
  return (
    <>
      <Header title={"Infringement Search"} />

      <div className="flex px-10 xl:px-28 flex-col xl:flex-row mt-12 justify-between">
        <div className="flex flex-col gap-y-8 w-[97%] xl:w-[70%]">
          <div className="flex flex-col gap-y-2">
            <p className="text-4xl font-bold">Infringement Search</p>
            <div className="w-40 h-0.5 bg-yellow-400" />
          </div>

          <div className="flex flex-col gap-y-4">
            {content.map((item) => {
              return (
                <p key={item} className="leading-7 text-justify">
                  {item}
                </p>
              );
            })}

            {list.map((item) => {
              return (
                <div key={item.title} className="flex gap-x-5 items-center">
                  <LuCheckCircle color="green" size={20} />
                  <div className="flex gap-x-3 flex-wrap">
                    <p className="leading-7 text-justify">
                      <span className="font-bold">{item.title}: </span>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="text-xl font-bold"></p>
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-bold">Other Services</p>
            <div className="w-40 h-0.5 bg-yellow-400" />
          </div>
          {patentSearch
            .filter((item) => item.title !== "Infringement Search")
            .map((item) => {
              return (
                <p
                  key={item.title}
                  className={`border-b-2 font-semibold cursor-pointer border-transparent ${
                    item.url !== "" ? "hover:border-yellow-400" : ""
                  } delay-75 transition-all w-fit text-center xl:text-left`}
                  onClick={() => item.url !== "" && navigate(`/${item.url}`)}
                >
                  {item.title}
                </p>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default InfringementSearchPage;
