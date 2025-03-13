import { motion } from "framer-motion";

const CoreValuesCard = ({ item }: any) => {
  return (
    <motion.div
      className="flex flex-col sm:w-[380px] items-center justify-center shadow-xl gap-y-8 p-4 rounded-xl bg-white"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <item.Icon size={40} color={item.color} />
      <div className="flex flex-col gap-y-4 items-center">
        <p className="md:text-xl font-medium text-center">{item.title}</p>
        <p className="w-[90%] text-justify text-sm md:text-base">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default CoreValuesCard;
