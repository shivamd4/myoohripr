import IPServices from "@/components/IPServices";
import { patentLitigationAndCommercialization } from "../../../../constants/patent-litigation-and-commercialization";

const InfringementContentionsPage = () => {
  return (
    <IPServices
      title="Infringement Contentions"
      content={[
        "Someone copying your ideas? Infringement Contentions can help! Our legal experts craft strong arguments for patent, copyright, and trademark disputes. We analyze your situation and build a watertight case to protect your intellectual property. Whether you're suing or being sued.",
      ]}
      otherServices={patentLitigationAndCommercialization}
    />
  );
};

export default InfringementContentionsPage;
