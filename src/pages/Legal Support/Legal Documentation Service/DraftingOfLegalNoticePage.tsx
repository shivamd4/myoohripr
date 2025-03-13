import IPServices from "@/components/IPServices";
import { legalDocumentationServices } from "../../../../constants/legal-documentation-service";

const DraftingOfLegalNoticePage = () => {
  return (
    <IPServices
      title="Drafting of Legal Notice"
      content={[
        "Our legal notice drafting services offer precision and expertise in crafting formal notices tailored to your specific needs. Whether it's a demand letter, cease and desist notice, or any other legal notification, our experienced team ensures accuracy and compliance with legal standards. Trust us to articulate your concerns effectively, protecting your rights and interests. With our meticulous attention to detail, you can rest assured that your legal notices are professionally drafted to achieve the desired outcomes.",
      ]}
      otherServices={legalDocumentationServices}
    />
  );
};

export default DraftingOfLegalNoticePage;
