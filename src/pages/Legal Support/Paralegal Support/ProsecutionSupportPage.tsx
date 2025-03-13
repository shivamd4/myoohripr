import IPServices from "@/components/IPServices";
import { paralegalSupport } from "../../../../constants/paralegal-support";

const ProsecutionSupportPage = () => {
  return (
    <IPServices
      title="Prosecution Support"
      content={[
        "Getting a patent or trademark in India? We can help! Our experts guide you through the process, from filing to approval, ensuring your intellectual property is protected under Indian law.",
      ]}
      otherServices={paralegalSupport}
    />
  );
};

export default ProsecutionSupportPage;
