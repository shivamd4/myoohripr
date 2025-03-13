import IPServices from "@/components/IPServices";
import { patentProsecution } from "../../../../constants/patent-prosecution";

const PatentDraftingPage = () => {
  const content = [
    "A patent application needs to explain an invention entirely. Patent Drafting Illustrations is the first and most essential step of the entire patent lifecycle. In this, it should be really clear that the invention is new and non-obvious, which means that heretofore it hasn’t existed.",
    "Patent Drafting Illustrations is a process that combines technology and law.  Preparing these techno legal documents requires deep technology domain knowledge and must be adhered to certain criteria and standards of the Patent Law.",
    "A patent application needs to describe an invention completely such as Title of the invention, Summary of the invention, Abstract, Specifications, Claims, Detailed description of the drawings & Conclusion. Patent Application is a document through which an inventor discloses complete details of his invention and gets exclusive rights to it.",
    "Our team assists clients in both provisional and non-provisional patent drafting support services in different technological domains",
  ];
  return (
    <IPServices
      title="Patent Drafting"
      content={content}
      otherServices={patentProsecution}
    />
  );
};

export default PatentDraftingPage;
