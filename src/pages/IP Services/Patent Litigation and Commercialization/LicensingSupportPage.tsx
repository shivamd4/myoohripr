import IPServices from "@/components/IPServices";
import { patentLitigationAndCommercialization } from "../../../../constants/patent-litigation-and-commercialization";

const LicensingSupportPage = () => {
  return (
    <IPServices
      title="Licensing Support"
      content={[
        "Don't get bogged down by licensing complexities! Our experts provide guidance and support for businesses, individuals, and organizations. We handle everything from obtaining licenses to renewals and ensure compliance. Focus on what matters - your success. Contact us today for a smoother licensing experience!",
      ]}
      otherServices={patentLitigationAndCommercialization}
    />
  );
};

export default LicensingSupportPage;
