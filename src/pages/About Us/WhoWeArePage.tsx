import CoreValuesCard from "@/components/CoreValuesCard";
import Header from "@/components/Header";
import { FcBiotech, FcFlowChart } from "react-icons/fc";
import { GiArchiveResearch, GiChemicalDrop } from "react-icons/gi";
import { IoNewspaper } from "react-icons/io5";
import { LuCheckCircle } from "react-icons/lu";
import { PiSunHorizonBold } from "react-icons/pi";
import { motion } from "framer-motion";

const WhoWeArePage = () => {
  const services = [
    {
      title: "Prior Art Searches",
      description:
        "The objective of a patentability search is to assess the novelty and non-obviousness",
      Icon: GiArchiveResearch,
      color: "black",
    },
    {
      title: "Patent Landspace and White Space Analysis",
      description:
        "Our patent landscape analysis usually starts with the determination and interpretation.",
      Icon: FcFlowChart,
      color: "blue",
    },
    {
      title: "Infringement Analysis and Claim Charts",
      description:
        "Infringement Search is performed in order to find whether a product or technology.",
      Icon: IoNewspaper,
      color: "black",
    },
    {
      title: "Chemical Structure Search",
      description:
        "We offer chemical structure searches for all the above purposes. There is an ever- increasing.",
      Icon: GiChemicalDrop,
      color: "purple",
    },
    {
      title: "Patent Drafting and Illustrations",
      description:
        "A patent is much more than a symbol of innovation; for an organization, it is strategic.",
      Icon: PiSunHorizonBold,
      color: "black",
    },
    {
      title: "Biological Sequence Search",
      description:
        "The prime focus of a Patent search related to Biological sequences is either nucleic.",
      Icon: FcBiotech,
      color: "red",
    },
  ];

  const missions = [
    "Best quality work",
    "Less turnaround time",
    "Expert team",
    "Customizable solution",
    "Cost-effective services",
  ];

  const experience = [
    {
      title: "Patent Prosection",
      experience: 87,
    },
    {
      title: "Patent Litigation",
      experience: 75,
    },
    {
      title: "Technology",
      experience: 95,
    },
    {
      title: "Patent Management",
      experience: 60,
    },
    {
      title: "Design Patent/Industrial Design",
      experience: 72,
    },
    {
      title: "Trademark",
      experience: 67,
    },
  ];
  return (
    <>
      <Header title="Who We Are" />
      <motion.div
        className="bg-gray-200 py-6 px-12 mt-9 flex flex-col gap-y-6"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        <div className="flex flex-col gap-y-2">
          <p className="text-4xl font-bold">WHO WE ARE</p>
          <div className="w-40 h-0.5 bg-yellow-600" />
        </div>
        <p className="text-sm">
          <span className="text-green-600">Oohr Intellectual Research</span> is
          a technology consulting firm aims to be a leader in rendering
          value-added services to a global clientele offer strategic, and a
          comprehensive suite of IP support services to attorneys, law firms,
          research institutions, and corporations around the world. We are
          diligent, transparent, and stop at nothing to help our clients make
          smart and informed IP decisions most cost-effectively.
        </p>
        <p className="text-sm">
          Our clientele includes technology enterprises, law firms, start-ups,
          individual lawyers, patent brokerage firms, and individual inventors.
          With our services, we help our clients make smarter business decisions
          based on critical insights into IP opportunities.
        </p>

        <div className="flex h-auto">
          <div className="bg-blue-600 h-[90px] w-6" />
          <div className="bg-white p-6">
            <p className="text-sm italic">
              We powered by a technically brilliant talent pool of patent and
              management professionals (in diverse technology areas including
              Medicine, Core-Engineering, Automotive, Life Sciences, Chemistry,
              and several others) processes are consonant with the client&apos;s
              methodology and aim at providing an extended workstation approach
              that requires minimum supervision, thus maintaining the highest
              standard of client service and value.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 flex flex-col items-center">
        <div className="flex flex-col gap-y-2">
          <p className="text-4xl font-bold">OUR MOST POPULAR SERVICES</p>
          <div className="w-40 h-0.5 bg-yellow-400" />
        </div>

        <div className="flex flex-wrap px-6 gap-x-6 gap-y-10 mt-10 justify-center">
          {services.map((item) => {
            return <CoreValuesCard item={item} key={item.title} />;
          })}
        </div>
      </div>

      <div className="mt-9 flex flex-col md:flex-row items-center gap-y-6 bg-gray-200 py-10 justify-center gap-x-28">
        <div className="flex flex-col gap-y-10 w-[90%] md:w-[50%]">
          <div className="flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-2">
              <p className="text-2xl font-bold">OUR MISSION</p>
              <div className="w-40 h-0.5 bg-yellow-600" />
            </div>
            <p className="text-sm text-justify">
              Intellectual property is the most valuable asset of anyone in this
              digital world. Technology is rapidly changing according to human
              life and necessity, protection of those inventions, ideas
              discoveries is an essential task. Our mission is to protect each
              idea/creation/invention/discovery with the best quality expertise
              in every IP service, and deliver valuable and expert solutions to
              each client for every IP assistance.
            </p>
            <div className="flex flex-wrap gap-x-10 items-center gap-y-4">
              {missions.map((item) => {
                return (
                  <motion.div
                    key={item}
                    className="flex gap-x-2 items-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  >
                    <LuCheckCircle color="green" size={20} />
                    <p>{item}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-2">
              <p className="text-2xl font-bold">OUR VISION</p>
              <div className="w-40 h-0.5 bg-yellow-600" />
            </div>
            <p className="text-sm text-justify">
              We believe in building relationships and growing together. Our
              Vision is to become the best IP service company for each
              individual or large enterprise.
            </p>
            <p className="text-sm font-bold italic">
              &quot;Making IP easy and cost-effective for everyone.&quot;
            </p>
            <p className="text-sm text-justify">
              If you want a IP consultancy like that,{" "}
              <a
                href="tel:+9160063-75267"
                className="text-green-600 hover:underline"
              >
                give us a call
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-7 w-[90%] md:w-[30%]">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-bold">OUR EXPERIENCE</p>
            <div className="w-40 h-0.5 bg-yellow-600" />
          </div>

          <div className="flex flex-col gap-y-5">
            {experience.map((item) => {
              return (
                <div key={item.title} className="flex flex-col gap-y-3 w-full">
                  <div className="flex justify-between items-center">
                    <p className="text-blue-600 font-bold">{item.title}</p>
                    <p className="font-bold">{item.experience}%</p>
                  </div>
                  <div className="flex gap-x-0 w-full">
                    <motion.div
                      className={`bg-blue-600 h-2`}
                      style={{ width: `${item.experience}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.experience}%` }}
                    />
                    <div
                      className={`bg-gray-600 h-2`}
                      style={{ width: `${100 - item.experience}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeArePage;
