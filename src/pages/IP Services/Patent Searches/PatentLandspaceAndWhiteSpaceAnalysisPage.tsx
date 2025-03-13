import IPServices from "@/components/IPServices";
import { patentSearch } from "../../../../constants/patent-search";

const PatentLandspaceAndWhiteSpaceAnalysisPage = () => {
  const content = [
    "A patent landscape is an analysis of patent data that exposes business, scientific and technological trends. Landscape searches provide an opportunity for its analyst to evaluate the technology domain of interest from diverse viewing angles and zoom levels.",
    "Patent Landscape Whitespace Analysis is one of the key methods for strategic innovation & usually follows preliminary patent landscaping.",
    "The Patent Landscape Whitespace Analysis is a survey of patents in a given technological area that seeks to answer one or more business objectives and scape reports typically focus on a single industry, technology, or geographic region.",
    "By analyzing the patent holdings of competitors/ leading patent filers, their strategies and future products can be fairly identified. Therefore, it helps businesses to identify areas in which competitors/ leading patent filers may pose threat in the future and helps them to refine their strategies and identify possible areas for research and development (R&D).",
    "We have experts in different technology domains, provide an exhaustive report to the client, which include: market trends, technology leaders, and their IP strategies, IP activity over the years organizing technology in a particular area, White space analysis for future research strategies.",
  ];
  return (
    <IPServices
      title="Patent Landspace and White Space Analysis"
      content={content}
      otherServices={patentSearch}
    />
  );
};

export default PatentLandspaceAndWhiteSpaceAnalysisPage;
