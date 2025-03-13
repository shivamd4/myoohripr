import IPServices from "@/components/IPServices";
import { patentManagement } from "../../../../constants/patent-management";

const DataVerificationPage = () => {
  return (
    <IPServices
      title="Data Verification"
      content={[
        "Data verification in patents is like double-checking your homework. We meticulously examine patent details to make sure everything is accurate, from inventor names and dates to technical info. We use fancy tech and reliable sources to confirm everything is legit. This ensures you make informed decisions based on trustworthy patent information, whether you're inventing something new or protecting your ideas.",
      ]}
      otherServices={patentManagement}
    />
  );
};

export default DataVerificationPage;
