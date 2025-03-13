import { services } from "../../../constants/services";
import Marquee from "react-fast-marquee";

const Services = () => {
  return (
    <Marquee loop={0}>
      {services.map((item) => {
        return (
          <div
            key={item.title}
            className="w-52 h-48 bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-800 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md flex flex-col items-center 
            justify-center gap-y-4 hover:shadow-2xl mr-7"
          >
            <item.Icon color="white" size={30} />
            <p className="text-white md:text-xl font-medium text-center">
              {item.title}
            </p>
          </div>
        );
      })}
    </Marquee>
  );
};

export default Services;
