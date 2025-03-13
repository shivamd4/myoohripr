import IPServices from "@/components/IPServices";
import { contractLifecycleManagement } from "../../../../constants/contract-lifecycle-management";

const ContractExecutionAndManagementPage = () => {
  return (
    <IPServices
      title="Contract Execution and Management"
      content={[
        "Our comprehensive contract execution and management services streamline your business operations, ensuring seamless agreements from start to finish. With meticulous attention to detail, we handle every aspect of contract administration, from drafting and negotiation to execution and ongoing management. Our team of experts ensures compliance with legal requirements and optimal terms for your business. Let us handle the complexities, while you focus on driving your business forward with confidence. Trust us for efficient, effective contract solutions tailored to your needs.",
      ]}
      otherServices={contractLifecycleManagement}
    />
  );
};

export default ContractExecutionAndManagementPage;
