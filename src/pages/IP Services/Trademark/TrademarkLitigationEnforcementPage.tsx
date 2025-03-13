import IPServices from "@/components/IPServices";
import { trademark } from "../../../../constants/trademark";

const TrademarkLitigationEnforcementPage = () => {
  return (
    <IPServices
      title="Trademark Litigation/Enforcement"
      content={[
        "Protect your brand with our expert trademark litigation and enforcement services. Our team specializes in defending your intellectual property rights, ensuring that your trademarks are safeguarded against infringement. Whether it's pursuing legal action against violators or negotiating settlements, we provide comprehensive strategies tailored to your specific needs. With our in-depth knowledge of trademark law and extensive experience in the field, we are dedicated to preserving the integrity of your brand. Trust us to diligently protect your trademarks and uphold your rights in the ever-evolving landscape of intellectual property.",
      ]}
      otherServices={trademark}
    />
  );
};

export default TrademarkLitigationEnforcementPage;
