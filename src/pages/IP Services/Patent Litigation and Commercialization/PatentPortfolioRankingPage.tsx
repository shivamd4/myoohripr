import IPServices from "@/components/IPServices";
import { patentLitigationAndCommercialization } from "../../../../constants/patent-litigation-and-commercialization";

const PatentPortfolioRankingPage = () => {
  return (
    <IPServices
      title="Patent Portfolio Ranking"
      content={[
        "Our patent ranking service analyzes your patents' strength, marketability, and overall value. Make data-driven decisions for licensing, investment, and gaining a competitive edge. Maximize your intellectual property with our expert ranking.",
      ]}
      otherServices={patentLitigationAndCommercialization}
    />
  );
};

export default PatentPortfolioRankingPage;
