import IPServices from "@/components/IPServices";
import { contractLifecycleManagement } from "../../../../constants/contract-lifecycle-management";

const ContractRemovalAndOptimizationPage = () => {
  return (
    <IPServices
      title="Contract Removal and Optimization"
      content={[
        "Looking to optimize your contracts for better efficiency and cost-effectiveness? Our contract renewal and optimization services ensure that your agreements are updated, streamlined, and aligned with your evolving business needs. We analyze existing contracts, negotiate terms, and implement strategies to maximize value and minimize risks. With our expertise, you can enhance your bottom line while maintaining strong relationships with partners and suppliers. Trust us to enhance your contracts and drive success for your organization.",
      ]}
      otherServices={contractLifecycleManagement}
    />
  );
};

export default ContractRemovalAndOptimizationPage;
