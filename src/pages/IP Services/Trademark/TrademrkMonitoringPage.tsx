import IPServices from "@/components/IPServices";
import { trademark } from "../../../../constants/trademark";

const TrademarkMonitoringPage = () => {
  return (
    <IPServices
      title="Trademark Monitoring"
      content={[
        "Stay ahead of the competition and protect your brand with our trademark monitoring services. Our comprehensive monitoring solutions keep a vigilant eye on trademarks, logos, and brands, ensuring that your intellectual property remains secure. We track registrations, applications, and potential infringements, providing timely alerts to safeguard your brand identity. With our expertise and cutting-edge technology, you can proactively defend against unauthorized usage and maintain the integrity of your brand. Trust us to safeguard your trademarks and preserve your brand's reputation.",
      ]}
      otherServices={trademark}
    />
  );
};

export default TrademarkMonitoringPage;
