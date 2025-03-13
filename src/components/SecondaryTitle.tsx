import { motion } from "framer-motion";

const SecondaryTitle = ({ title }: { title: string }) => {
  return (
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
  );
};

export default SecondaryTitle;
