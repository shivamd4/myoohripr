import IPServices from "@/components/IPServices";
import { indianPatent } from "../../../../constants/indian-patent";

const IndianPatentApplicationDraftingPage = () => {
  return (
    <IPServices
      title="Indian Patent Application Drafting"
      content={[
        "We draft strong patent applications for India's Patent Office. Our experts understand Indian patent law and create applications tailored to their specific requirements. We handle everything, from prior art searches to detailed specifications, claims, and drawings. Whether you're a startup, small business, or large corporation, we can help you efficiently protect your intellectual property in India.",
      ]}
      otherServices={indianPatent}
    />
  );
};

export default IndianPatentApplicationDraftingPage;
