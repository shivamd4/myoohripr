import { motion } from "framer-motion";

const TeamCard = ({ member }: any) => {
  return (
    <motion.div
      key={member.name}
      className="p-4 flex flex-col gap-y-6 bg-white items-center rounded-xl shadow-2xl w-[369px] h-fit"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <img
        src={member.image}
        alt="Team Member"
        className="rounded-full w-[150px] h-[150px]"
      />
      <div className="flex flex-col gap-y-1.5 items-center">
        <p className="text-blue-600 text-2xl font-semibold uppercase">
          {member.name}
        </p>
        <p className="text-red-600 text-sm font-semibold">
          {member.designation}
        </p>
        {member.education && <p>{member.education}</p>}
        {member.email && <p>{member.email}</p>}
      </div>
    </motion.div>
  );
};

export default TeamCard;
