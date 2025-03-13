import IPServices from "@/components/IPServices";
import { contractLifecycleManagement } from "../../../../constants/contract-lifecycle-management";

const ContractNegotiationAndReviewPage = () => {
  return (
    <IPServices
      title="Contract Negotiation and Review"
      content={[
        "Our team specializes in comprehensive contract negotiation and review services tailored to meet your specific needs. With years of experience, we meticulously examine contracts to ensure clarity, legality, and favorable terms for our clients. Whether you're entering into a new agreement or reviewing an existing one, we provide expert guidance to protect your interests and maximize your benefits. Trust us to navigate the complexities of contracts, empowering you to make informed decisions with confidence.",
      ]}
      otherServices={contractLifecycleManagement}
    />
  );
};

export default ContractNegotiationAndReviewPage;
