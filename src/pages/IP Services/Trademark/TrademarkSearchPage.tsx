import IPServices from "@/components/IPServices";
import { trademark } from "../../../../constants/trademark";

const TrademarkSearchPage = () => {
  return (
    <IPServices
      title="Trademark Search"
      content={[
        "Discovering whether a trademark is available is crucial before launching your brand. Our comprehensive trademark search service helps you navigate through the complexities of trademark law and avoid potential conflicts. We meticulously examine existing trademarks to ensure yours is unique and legally secure. With our expert guidance, you can confidently protect your brand identity and investments. Don't risk legal disputes or costly rebranding efforts. Trust our trademark search expertise to safeguard your intellectual property and pave the way for business success.",
      ]}
      otherServices={trademark}
    />
  );
};

export default TrademarkSearchPage;
