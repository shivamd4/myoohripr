import IPServices from "@/components/IPServices";
import { patentManagement } from "../../../../constants/patent-management";

const RemotePatentDocketingPage = () => {
  return (
    <IPServices
      title="Remote Patent Docketing"
      content={[
        "Imagine never missing a deadline for your patent application again! Our remote patent docketing service is like a virtual filing cabinet that follows you anywhere. You can access it from your phone, laptop, or tablet to track deadlines, update statuses, and keep your whole patent portfolio organized. Plus, our system is super user-friendly, so you don't need to be a tech whiz to use it. We even have a team of experts on hand to answer any questions and help you navigate the process. With remote docketing, you can collaborate with colleagues and lawyers easily, all while saving time and focusing on what you do best.",
      ]}
      otherServices={patentManagement}
    />
  );
};

export default RemotePatentDocketingPage;
