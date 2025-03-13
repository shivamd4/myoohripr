import IPServices from "@/components/IPServices";
import { patentSearch } from "../../../../constants/patent-search";

const StateOfArtSearchPage = () => {
  const content = [
    "State of the art search involves exhaustive search, analysis, and synthesis of patent documents and specific publications relating to the technology domain of interest. The principal objective of a state of art search is to advise a client in evaluating the possible market possibilities for inventing the product or filing its patent.",
    "It is also useful to understand potential competitors, identifying technology clumps, the potential improvisation in R&D for future prospective concerning others.",
    "Our team provides extensive descriptions that incorporate the identified results and scenarios. We have subject matter experts for diverse technology domains.",
    "Our team conducts the Research in multiple databases in the patent database and non-patent literature coverage (journals, articles, scientific literature, product manuals, conference papers, video, image, and many more) around the World.",
    "In this process, All the searched references are manually analyzed, reviewed by a subject matter expert. To accomplish this, we utilize paid software for searching and preparing the best exhaustive report.",
  ];
  return (
    <IPServices
      title="State of Art Search"
      content={content}
      otherServices={patentSearch}
    />
  );
};

export default StateOfArtSearchPage;
