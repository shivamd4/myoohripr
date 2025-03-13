import IPServices from "@/components/IPServices";
import { trademark } from "../../../../constants/trademark";

const TrademarkOppositionPage = () => {
  return (
    <IPServices
      title="Trademark Opposition"
      content={[
        "Are you facing trademark opposition? Don't navigate it alone. Our experienced team specializes in handling trademark disputes, guiding you through the process with expertise and efficiency. Whether you're contesting a trademark application or defending your own, we provide tailored strategies to protect your intellectual property rights. With a proven track record of successful outcomes, we're dedicated to advocating for your interests every step of the way. Trust us to safeguard your brand and reputation. Contact us today for personalized assistance in resolving trademark oppositions swiftly and effectively.",
      ]}
      otherServices={trademark}
    />
  );
};

export default TrademarkOppositionPage;
