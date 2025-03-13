import IPServices from "@/components/IPServices";
import { indianPatent } from "../../../../constants/indian-patent";

const OppositionSearchesPage = () => {
  return (
    <IPServices
      title="Opposition Searches"
      content={[
        "Opposition Searches provides comprehensive research and investigation services. Our experts use advanced methods to gather the data you need, from background checks to competitor analysis. We deliver accurate results quickly and prioritize confidentiality throughout the process. Gain actionable insights you can trust - start your investigation today.",
      ]}
      otherServices={indianPatent}
    />
  );
};

export default OppositionSearchesPage;
