import IPServices from "@/components/IPServices";
import { indianPatent } from "../../../../constants/indian-patent";

const LicensingAndLitigationSupportPage = () => {
  return (
    <IPServices
      title="Licensing and Litigation Support"
      content={[
        "Our Licensing & Litigation Support team tackles complex legal issues. We analyze contracts, resolve disputes, and craft strong litigation strategies. Our experts ensure your licensing agreements are ironclad and your legal approach is effective. Focus on your business - we'll handle the legal complexities.",
      ]}
      otherServices={indianPatent}
    />
  );
};

export default LicensingAndLitigationSupportPage;
