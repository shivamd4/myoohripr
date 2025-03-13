import IPServices from "@/components/IPServices";
import { contractLifecycleManagement } from "../../../../constants/contract-lifecycle-management";

const ContractComplianceAndMonitoringPage = () => {
  return (
    <IPServices
      title="Contract Compliance and Monitoring"
      content={[
        "Ensure peace of mind and efficiency in your business operations with our contract compliance and monitoring services. Our expert team diligently oversees all aspects of your contracts, ensuring adherence to terms and regulations. With meticulous monitoring and proactive measures, we mitigate risks and optimize performance, allowing you to focus on your core objectives. Trust our comprehensive approach to safeguard your interests and uphold the integrity of your agreements. Experience seamless contract management with our tailored solutions.",
      ]}
      otherServices={contractLifecycleManagement}
    />
  );
};

export default ContractComplianceAndMonitoringPage;
