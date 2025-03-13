import IPServices from "@/components/IPServices";
import { patentLitigationAndCommercialization } from "../../../../constants/patent-litigation-and-commercialization";

const PatentDueDiligencePage = () => {
  return (
    <IPServices
      title="Patent Due Diligence"
      content={[
        "Our patent due diligence service investigates the strength, potential risks, and commercial value of patents. We provide detailed reports to help you make informed decisions on business deals, investments, and overall IP strategy. Let us safeguard your intellectual property with reliable due diligence solutions.",
      ]}
      otherServices={patentLitigationAndCommercialization}
    />
  );
};

export default PatentDueDiligencePage;
