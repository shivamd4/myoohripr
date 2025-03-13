import IPServices from "@/components/IPServices";
import { patentLitigationAndCommercialization } from "../../../../constants/patent-litigation-and-commercialization";

const MarketResearchDamageStudyPage = () => {
  return (
    <IPServices
      title="Market Research Damage Study"
      content={[
        "Our Market Research Damage Study analyzes market disruptions (like recessions or new tech) to help you make smart decisions and stay ahead of the curve. Get actionable insights to thrive in any market.",
      ]}
      otherServices={patentLitigationAndCommercialization}
    />
  );
};

export default MarketResearchDamageStudyPage;
