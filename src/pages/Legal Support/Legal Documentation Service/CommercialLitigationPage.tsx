import IPServices from "@/components/IPServices";
import { legalDocumentationServices } from "../../../../constants/legal-documentation-service";

const CommercialLitigationPage = () => {
  return (
    <IPServices
      title="Commercial Litigation"
      content={[
        "Our firm specializes in navigating the complexities of commercial litigation with precision and expertise. Whether it's breach of contract disputes, intellectual property conflicts, or shareholder disagreements, we deliver strategic solutions tailored to each client's unique needs. Backed by years of experience, our attorneys diligently advocate for our clients in negotiations, mediations, arbitrations, and courtroom proceedings. We prioritize efficient resolution while ensuring our clients' interests are vigorously protected. Trust us to provide the legal guidance and representation necessary to navigate the challenges of commercial litigation successfully.",
      ]}
      otherServices={legalDocumentationServices}
    />
  );
};

export default CommercialLitigationPage;
