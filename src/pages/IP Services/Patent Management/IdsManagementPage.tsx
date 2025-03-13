import IPServices from "@/components/IPServices";
import { patentManagement } from "../../../../constants/patent-management";

const IdsManagementPage = () => {
  return (
    <IPServices
      title="IDS Management"
      content={[
        "Efficient management of Information Disclosure Statements (IDS) is crucial for patent prosecution success. Our IDS management services streamline the process, ensuring timely submission and compliance with patent office regulations. We provide comprehensive support, from gathering relevant prior art to organizing and submitting documents. Our experienced team understands the importance of accuracy and thoroughness in preparing IDS filings, helping clients avoid costly delays and potential legal issues. With our tailored approach, clients can focus on innovation while entrusting us with the meticulous management of their IDS requirements, ensuring a smooth and hassle-free patent prosecution experience.",
      ]}
      otherServices={patentManagement}
    />
  );
};

export default IdsManagementPage;
