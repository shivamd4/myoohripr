import IPServices from "@/components/IPServices";
import { copyrightAndDesign } from "../../../../constants/copyright-and-design";

const DesignRegistrationPage = () => {
  return (
    <IPServices
      title="Design Registration"
      content={[
        "In a legal sense, an industrial design/Design Patent constitutes the ornamental aspect of an article. An industrial design may consist of three-dimensional features, such as the shape of an article, or two-dimensional features, such as patterns, lines, or color.",
        "In principle, the owner of a registered industrial design or of a design patent has the right to prevent third parties from making, selling, or importing articles bearing or embodying a design that is a copy, or substantially a copy, of the protected design, when such acts are undertaken for commercial purposes.",
        "Industrial designs are applied to a wide variety of products of industry and handicraft items: from packages and containers to furnishing and household goods, from lighting equipment to jewelry, and from electronic devices to textiles. Industrial designs may also be relevant to graphic symbols, graphical user interfaces (GUI), and logos.",
        "In most countries, an industrial design needs to be registered in order to be protected under industrial design law as a “registered design”. In some countries, industrial designs are protected under patent law as “design patents”.",
        "Industrial design laws in some countries grant – without registration – time- and scope-limited protection to so-called “unregistered industrial designs”. Depending on the particular national law and the kind of design, industrial designs may also be protected as works of art under copyright law.",
      ]}
      otherServices={copyrightAndDesign}
    />
  );
};

export default DesignRegistrationPage;
