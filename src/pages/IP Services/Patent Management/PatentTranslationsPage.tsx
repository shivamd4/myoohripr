import IPServices from "@/components/IPServices";
import { patentManagement } from "../../../../constants/patent-management";

const PatentTranslationsPage = () => {
  const content = [
    "An inventor/applicant always wants the complete benefits of his invention worldwide. To file the patent in every jurisdiction needs the patent in the jurisdiction language. It is not just translating the invention in the other language but also making it correct in the form of that language.",
    "Nowadays, there are multiple tools and software are available for patent translation that make it easy to translate any word in any language. But every invention contains all the technical definition in it, which make any tool hard to translate.",
    "A machine translation done by the tool can make a huge difference in its original sense. In machine translation, errors are not limited to a single word but they can even alter the understanding of large excerpts.",
  ];

  const whyUs = [
    "Even if we do a human translation, the invention carries technical things. The human translation only can be done correctly if the translator knows technology and legal. Oohr Intellectual Research has native language persons with expertise and experience in technology and legal.",
    "We provide language translation services in Chinese, Japanese, Korean patents. In addition to providing patent translation services, we prepare patent applications in compliance with specific jurisdiction protocols.",
    "A strict legal commitment to information security and confidentiality is applied to every step of the patent translation process to guarantee that your documents remain private.  Linguistic quality assurance is provided by the application of linguistic quality analysis to measure and certify the accuracy of each patent translation.",
  ];
  return (
    <IPServices
      title="Patent Translations"
      content={content}
      whyUs={whyUs}
      otherServices={patentManagement}
    />
  );
};

export default PatentTranslationsPage;
