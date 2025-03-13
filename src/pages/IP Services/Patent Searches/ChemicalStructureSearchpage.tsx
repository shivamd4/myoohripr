import IPServices from "@/components/IPServices";
import { patentSearch } from "../../../../constants/patent-search";

const ChemicalStructureSearchPage = () => {
  const content = [
    "Chemical structure is defined as the molecular geometry of a compound. In this search, we focus on finding a similar compound’s chemical structure search in patent and non-patent literature. This is basically conducted to evaluate Patentability, FTO, or validity/ invalidity of the structure.",
    "Some of the key tools we use for chemical structure searches are – Scientific-Technical Networks (STN), Questel Orbit, SciFinder, ChemSpider, PubChem, WIPO and Sure ChEMBL, etc.  Additionally, our search methodology includes the study of distinctive property and behavior analysis, related background, typical usage, extensive class-based searches, assignee/inventor-based searches, etc.",
  ];
  return (
    <IPServices
      title="Chemical Structure Search"
      content={content}
      otherServices={patentSearch}
    />
  );
};

export default ChemicalStructureSearchPage;
