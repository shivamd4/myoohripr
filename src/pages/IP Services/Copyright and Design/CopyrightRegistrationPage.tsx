import IPServices from "@/components/IPServices";
import { copyrightAndDesign } from "../../../../constants/copyright-and-design";

const CopyrightRegistrationPage = () => {
  return (
    <IPServices
      title="Copyright Registration"
      content={[
        "Artistic, literary, or intellectually created works, such as novels, music, movies, software code, photographs, and paintings that are original and exist in a tangible medium, such as paper, canvas, film, or digital format.",
        "Protects your exclusive right to reproduce, distribute, and perform or display the created work, and prevents other people from copying or exploiting the creation without the copyright holder’s permission.",
      ]}
      otherServices={copyrightAndDesign}
    />
  );
};

export default CopyrightRegistrationPage;
