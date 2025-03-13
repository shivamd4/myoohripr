import IPServices from "@/components/IPServices";
import { patentProsecution } from "../../../../constants/patent-prosecution";

const DesignPatentDrawingsPage = () => {
  const content = [
    "Design Patent Drawings assist you in protecting the structural and ornamental representation of your inventive idea. It doesn’t protect the functions of your invention. In the Design Patent application, the drawings themselves are the claims.",
    "The drawings must be prepared as the Patent Law to meet the requirements of the country, where the patent is filed such as the United State Patent and Trademark Office (USPTO), EPO, CHINA, ARIPO, South Korea, Indian Patent Office, or any other jurisdictions.",
    "To prepare High-Quality drawings you need Drawing Engineer, who is well-versed in the legal and technical field to prepare the best drawings as per your need. Our engineers can prepare Utility Patent Drawing, Design Patent Drawing, Objected Drawing, and PCT Drawing & Trademark Drawing have significant experience with IP in medicine, mechanical and electrical engineering, high-tech, biotechnology, and chemistry or other industries.",
  ];
  return (
    <IPServices
      title="Design Patent Drawings"
      content={content}
      otherServices={patentProsecution}
    />
  );
};

export default DesignPatentDrawingsPage;
