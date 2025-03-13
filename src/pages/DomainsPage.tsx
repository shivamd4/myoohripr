import { LuCheckCircle } from "react-icons/lu";
import { motion } from "framer-motion";

import Header from "@/components/Header";

const DomainsPage = () => {
  const content = [
    {
      title: "Computer Science",
      list: [
        "Internet of Things (IOT)",
        "Software as a Service (SaaS)",
        "Networking Protocols",
        "Artificial Inteeligence",
        "Cloud Management",
        "Online Services and Solutions",
        "Internet and World Wide Web",
      ],
      image: "/domains/domain4.png",
      reverse: false,
    },
    {
      title: "Electronics and Telecommunications",
      list: [
        "Power Electronics",
        "Semiconductor Devices",
        "Robotics",
        "Electronic Circuits",
        "Wireless Technology and Devices",
        "Communication Protocols",
      ],
      image: "/domains/domain3.png",
      reverse: true,
    },
    {
      title: "Electrical",
      list: ["Electric Machines", "Transmission and Distribution"],
      image: "/domains/domain2.png",
      reverse: false,
    },
    {
      title: "Mechanical",
      list: [
        "Automobiles",
        "Oil, Gas and Energy",
        "Aerospace",
        "Fluid Mechanics",
        "Thermal Engineering",
        "Mechatronic",
      ],
      image: "/domains/domain1.png",
      reverse: true,
    },
    {
      title: "Chemical",
      list: [
        "Medicinal",
        "Chemistry",
        "Pharmaceutical Chemistry",
        "Organic/Inorganic Chemistry",
        "Physical Chemistry",
        "Polymer Chemistry",
        "Analytical Chemistry",
      ],
      image: "/domains/domain5.jpg",
      reverse: false,
    },
    {
      title: "Medical, Biotechnology and Pharmaceutical",
      list: [
        "Medicine formulation and chemical structure",
        "Personalized Medicine",
        "Synthetic Biology & Nanotechnology",
        "Therapeutics",
        "Tissue Engineering",
        "Dosage & Formulations",
        "RNA/DNA sequence searching",
      ],
      image: "/domains/domain6.png",
      reverse: true,
    },
    {
      title: "Aerospace Technology",
      list: [
        "Zero-Fuel Aircraft",
        "Structural Health Monitoring (SHM)",
        "Advanced Materials",
        "Smart Automation and Blockchain",

        "Additive Manufacturing (3D Printing)",

        "Supersonic Flights",
        "More Resilient and Dynamic A&D Supply Chains",
        "Utilizing Internet of Things (IoT) to Anticipate Maintenance Issues",
        "Artificial intelligence (AI)",
      ],
      image: "/domains/domain7.png",
      reverse: false,
    },
  ];
  return (
    <>
      <Header title="Domains" />

      <div className="mt-12 flex flex-col gap-y-16">
        {content.map((item) => {
          return (
            <div
              key={item.title}
              className={`flex ${
                item.reverse
                  ? "flex-col lg:flex-row-reverse gap-y-8"
                  : "flex-col lg:flex-row gap-y-8"
              } px-4 sm:px-10 xl:px-20 2xl:px-36 items-center justify-between`}
            >
              <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                  <motion.p
                    className="text-2xl font-bold"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                  >
                    {item.title}
                  </motion.p>
                  <div className="w-20 h-0.5 bg-yellow-400" />
                </div>
                {item.list.map((listItem) => {
                  return (
                    <motion.div
                      key={listItem}
                      className="flex gap-x-3 items-center"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                    >
                      <LuCheckCircle color="green" size={20} />
                      <p>{listItem}</p>
                    </motion.div>
                  );
                })}
              </div>
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-[300px] xl:w-[450px] 2xl:w-[600px]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DomainsPage;
