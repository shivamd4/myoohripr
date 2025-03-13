import IPServices from "@/components/IPServices";
import { indianPatent } from "../../../../constants/indian-patent";

const IndiaEntryStrategyPage = () => {
  return (
    <IPServices
      title="India Entry Strategy"
      content={[
        "India Entry Strategy simplifies patent protection for international businesses. Our team of experts in Indian IP law helps you navigate the process, from filing to approval. We offer tailored solutions for startups and large corporations alike, ensuring your innovations are protected in the Indian market.",
      ]}
      otherServices={indianPatent}
    />
  );
};

export default IndiaEntryStrategyPage;
