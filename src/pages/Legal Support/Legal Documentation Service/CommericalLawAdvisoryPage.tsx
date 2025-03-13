import IPServices from "@/components/IPServices";
import { legalDocumentationServices } from "../../../../constants/legal-documentation-service";

const CommercialLawAdvisoryPage = () => {
  return (
    <IPServices
      title="Commercial Law Advisory"
      content={[
        "Welcome to our Commercial Law Advisory, where expertise meets excellence in legal counsel. With a seasoned team of professionals, we offer comprehensive solutions tailored to your business needs. From contract drafting to dispute resolution, our firm is dedicated to navigating the complexities of commercial law with precision and integrity. Whether you're a small startup or a multinational corporation, we provide personalized guidance to protect your interests and ensure compliance with regulations. Trust us to be your trusted partner in the ever-evolving landscape of business law.",
      ]}
      otherServices={legalDocumentationServices}
    />
  );
};

export default CommercialLawAdvisoryPage;
