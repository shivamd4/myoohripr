import IPServices from "@/components/IPServices";
import { trademark } from "../../../../constants/trademark";

const TrademarkRenewalPage = () => {
  return (
    <IPServices
      title="Trademark Renewal"
      content={[
        "Ensure the longevity of your brand's identity with our trademark renewal services. Don't let your hard-earned trademark expire and risk losing your legal protection. Our expert team simplifies the renewal process, guiding you through the necessary steps to maintain your trademark's validity. Whether you're a small business or a large corporation, we're dedicated to safeguarding your intellectual property rights. Stay ahead of potential infringements and maintain your competitive edge in the market. Trust us to handle your trademark renewal efficiently and effectively. Contact us today to secure your brand's future.",
      ]}
      otherServices={trademark}
    />
  );
};

export default TrademarkRenewalPage;
