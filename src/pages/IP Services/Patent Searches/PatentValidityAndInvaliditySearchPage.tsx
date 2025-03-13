import IPServices from "@/components/IPServices";
import { patentSearch } from "../../../../constants/patent-search";

const PatentValidityAndInvaliditySearchPage = () => {
  const content = [
    "Patent validity/invalidity is a comprehensive prior art search. It’s conducted after the issuance of a patent either to authenticate the enforceability of a patent’s claims or to revoke claims of a patent.",
    "In this, a search is performed to identify patent or non-patent literature filed or published before the earliest priority date of the subject patent. The search serves as a basis for a legal opinion against infringement or as due diligence prior to licensing, buying, or selling of a patent.",
  ];

  const whyUs = [
    "Our team conducts the Research in multiple databases in the patent database and non-patent literature coverage (journals, articles, scientific literature, product manuals, conference papers, video, image, and many more) around the World.",
    "In this process, All the searched references are manually analyzed, reviewed by a subject matter expert. To accomplish this, we utilize paid software for searching and preparing the best exhaustive report.",
  ];
  return (
    <IPServices
      title="Patent Validity and Invalidity Search"
      content={content}
      otherServices={patentSearch}
      whyUs={whyUs}
    />
  );
};

export default PatentValidityAndInvaliditySearchPage;
