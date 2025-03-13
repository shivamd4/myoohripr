import IPServices from "@/components/IPServices";
import { patentManagement } from "../../../../constants/patent-management";

const PatentProofreadingPage = () => {
  return (
    <IPServices
      title="Patent Proofreading"
      content={[
        "Imagine your patent application as the blueprint for your brilliant invention. You want it to be perfect, right? Our patent proofreading service is like a meticulous editor for your patent. We have a team of experts who understand the ins and outs of patent language, so they can catch any typos, unclear phrasing, or even legal mistakes. We'll make sure your application is clear, concise, and protects your invention the way it deserves. Don't let a small mistake hold back your big idea!",
      ]}
      otherServices={patentManagement}
    />
  );
};

export default PatentProofreadingPage;
