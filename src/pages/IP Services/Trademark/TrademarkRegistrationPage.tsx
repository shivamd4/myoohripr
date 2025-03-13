import IPServices from "@/components/IPServices";
import { trademark } from "../../../../constants/trademark";

const TrademarkRegistrationPage = () => {
  return (
    <IPServices
      title="Trademark Registration"
      content={[
        "Welcome to our trademark registration service! Protect your brand identity and intellectual property with ease. Our experienced team simplifies the trademark registration process, guiding you through every step to ensure your brand is legally safeguarded. From conducting comprehensive trademark searches to filing your application with precision, we handle it all. Whether you're a small business or a multinational corporation, our tailored solutions cater to your unique needs. Don't leave your brand vulnerable to infringement – secure your trademarks confidently with us today. Take the first step towards protecting your brand's legacy and reputation.",
      ]}
      otherServices={trademark}
    />
  );
};

export default TrademarkRegistrationPage;
