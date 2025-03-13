import IPServices from "@/components/IPServices";
import { patentProsecution } from "../../../../constants/patent-prosecution";

const OfficeActionResponsePage = () => {
  const content = [
    "An inventor/applicant gets a granted patent after go-through multiple examinations after filing the patent application.  Once a patent application (Non-provisional) is filed, the patent examiner explores for already available prior art of the filled invention and also notices various other irregularities in the patent/filing documents, etc., based on which the Examiner gives a response to the inventor/applicant.",
    "An answer by the inventor/applicant to the examiner’s response over the objection or rejections knows as an office action response. It is the responsibility of the inventor/applicant to convince the examiner, either with arguments or with necessary amendments in the filed patent application claims during an Office Action Response.",
  ];

  const whyUs = [
    "Drafting of an office action response is a process that may decide the future of the invention. A wrong draft or faulty response can lead to the incorrect mode of the invention. With this the inventor/ applicant, not just loses the benefits of the patent but also can get permanent rejection over there, or also may get the narrow claim.",
    "With the help of highly skilled and experienced techno-legal professionals, Oohr Intellectual Research helps inventors/applicants in drafting rigid and best responses. We provide the office action response service to patents filed across various jurisdictions including the US, India, Europe, Kuwait, Australia, and other Asian countries. Our team has extensive experience in not only drafting superior responses but also in assisting attorneys in negotiating the scope with examiners in examiner interviews, to ensure that the finally allowed claim set is not too narrow.",
  ];
  return (
    <IPServices
      title="Office Action Response"
      content={content}
      whyUs={whyUs}
      otherServices={patentProsecution}
    />
  );
};

export default OfficeActionResponsePage;
