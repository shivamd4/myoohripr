import IPServices from "@/components/IPServices";
import { trademark } from "../../../../constants/trademark";

const TrademarkPortfolioAnalysisPage = () => {
  return (
    <IPServices
      title="Trademark Portfolio Analysis"
      content={[
        "Discover the power of strategic trademark portfolio analysis with our expert services. We specialize in comprehensive assessments to optimize your brand's intellectual property assets. Our tailored approach examines the strength, value, and potential risks associated with each trademark in your portfolio. By leveraging cutting-edge analysis tools and industry expertise, we provide actionable insights to safeguard your brand identity and maximize its commercial potential. Trust us to deliver meticulous assessments that empower your business decisions and protect your intellectual property rights.",
      ]}
      otherServices={trademark}
    />
  );
};

export default TrademarkPortfolioAnalysisPage;
