import IPServices from "@/components/IPServices";
import { contractLifecycleManagement } from "../../../../constants/contract-lifecycle-management";

const ContractDraftingAndCreationPage = () => {
  return (
    <IPServices
      title="Contract Drafting and Creation"
      content={[
        "Looking for precise and professional contract drafting services? Our team specializes in crafting comprehensive contracts tailored to your specific needs. Whether it's employment agreements, business partnerships, or vendor contracts, we ensure clarity and legal accuracy every step of the way. With our attention to detail and expertise in contract law, you can trust us to draft documents that protect your interests and facilitate successful business dealings. Contact us today to discuss your contract drafting needs and experience peace of mind.",
      ]}
      otherServices={contractLifecycleManagement}
    />
  );
};

export default ContractDraftingAndCreationPage;
