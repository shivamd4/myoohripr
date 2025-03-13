import IPServices from "@/components/IPServices";
import { patentSearch } from "../../../../constants/patent-search";

const PatentabilitySearchPage = () => {
  const content = [
    "A patentability novelty search is also known as novelty search, is conducted before the filing of any patent application to check whether the invention is already available in the public domain. It is also useful for inventors, to know about the unique feature of their invention. This search ensures the inventor that the application won’t refuse during the examination.",
    "If some prior art is found during the search, the inventor either does not file the application and saves money or improvises the invention to file the application further. This patentability novelty search is conducted in different patent and non-patent databases such as written documents, utility models, products, and scientific literature.",
  ];
  return (
    <IPServices
      title="Patentability Search"
      content={content}
      otherServices={patentSearch}
    />
  );
};

export default PatentabilitySearchPage;
