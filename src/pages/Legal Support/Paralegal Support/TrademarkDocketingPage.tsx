import IPServices from "@/components/IPServices";
import { paralegalSupport } from "../../../../constants/paralegal-support";

const TrademarkDocketingPage = () => {
  return (
    <IPServices
      title="Trademark Docketing"
      content={[
        "Never miss an IP deadline again! Our streamlined system tracks filings, renewals, and more for patents, trademarks, and copyrights. We handle the complexities so you can focus on innovation. Let us manage your IP docketing.",
      ]}
      otherServices={paralegalSupport}
    />
  );
};

export default TrademarkDocketingPage;
