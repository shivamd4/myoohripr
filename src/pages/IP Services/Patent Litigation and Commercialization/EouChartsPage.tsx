import IPServices from "@/components/IPServices";
import { patentLitigationAndCommercialization } from "../../../../constants/patent-litigation-and-commercialization";

const EouChartsPage = () => {
  return (
    <IPServices
      title="EOU Charts"
      content={[
        "Evidence of Use (EoU)/Claim Charting helps the client to identify potentially infringing products in the marketplace. Our Claim charts comprise a mapping of claim elements to specific features of recognized infringing products and services and also present an indication of the intensity of patent Infringement Analysis Claim Charts.",
      ]}
      otherServices={patentLitigationAndCommercialization}
    />
  );
};

export default EouChartsPage;
