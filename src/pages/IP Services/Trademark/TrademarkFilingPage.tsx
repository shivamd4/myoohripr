import IPServices from "@/components/IPServices";
import { trademark } from "../../../../constants/trademark";

const TrademarkFilingPage = () => {
  return (
    <IPServices
      title="Trademark Filing"
      content={[
        "Looking to protect your brand identity? Secure your trademarks with our streamlined filing process. Our expert team ensures your trademarks are filed accurately and efficiently, providing you with peace of mind. Whether you're a small business or a large corporation, safeguarding your intellectual property is crucial. We offer comprehensive trademark filing services tailored to your needs, guiding you through every step of the process. Trust us to navigate the complexities of trademark law while you focus on growing your business. Start protecting your brand today.",
      ]}
      otherServices={trademark}
    />
  );
};

export default TrademarkFilingPage;
