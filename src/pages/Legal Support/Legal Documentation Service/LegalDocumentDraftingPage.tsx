import IPServices from "@/components/IPServices";
import { legalDocumentationServices } from "../../../../constants/legal-documentation-service";

const LegalDocumentDraftingPage = () => {
  return (
    <IPServices
      title="Legal Document Drafting"
      content={[
        "Looking for precise and professional legal document drafting services? Look no further. Our experienced team specializes in crafting legally sound documents tailored to your specific needs. Whether you require contracts, agreements, or other legal instruments, we ensure accuracy and compliance with the latest regulations. Trust us to deliver meticulous drafting that safeguards your interests and facilitates seamless transactions. Contact us today to discuss your requirements and experience the difference of expertly crafted legal documents.",
      ]}
      otherServices={legalDocumentationServices}
    />
  );
};

export default LegalDocumentDraftingPage;
