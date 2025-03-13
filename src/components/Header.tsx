import { FaCaretRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = ({ title }: { title: string }) => {
  return (
    <section className="md:h-[24vh] bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-800 px-20 py-8 md:pt-8 text-white flex flex-col gap-y-6">
      <div className="flex gap-x-5 items-center">
        <p>Home</p>
        <FaCaretRight color="yellow" size={20} />
        <p className="text-lg font-bold">{title}</p>
      </div>
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
    </section>
  );
};

export default Header;
