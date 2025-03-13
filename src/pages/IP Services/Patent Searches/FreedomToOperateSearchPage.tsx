import IPServices from "@/components/IPServices";
import { patentSearch } from "../../../../constants/patent-search";

const FreedomToOperateSearchPage = () => {
  const content = [
    "Before launching a product in the market, there is always a risk of being infringed by an already available patent. Freedom to operate search/ clearance search is used to analyze the product against an appropriate selection of patents to find out the level of risk associated with bringing the product to market.",
    "Freedom to operate search/clearance search is geo-specific and particularly focuses on the claims of the granted patent. In our search strategy, we target granted patents while simultaneously including pending patent applications, as those may grant in the future can prove a threat to the client’s product.",
    "We also make sure to include an analysis of WIPO patent applications that have the client’s specific geographical country as a designated country. Our freedom-to-operate/clearance search reports include an in-depth analysis of the claimed elements in the identified relevant prior-arts by our SME’s (subject matter experts).",
  ];
  return (
    <IPServices
      title="Freedom to Operate Search"
      content={content}
      otherServices={patentSearch}
    />
  );
};

export default FreedomToOperateSearchPage;
