import IPServices from "@/components/IPServices";
import { patentProsecution } from "../../../../constants/patent-prosecution";

const PatentFilingServicesPage = () => {
  const content = [
    "To get the protection of the inventor’s unique invention, it needs to file in the best manner so the inventor can get its benefits. Patent filing service is a complicated process, in which the applicant/Inventor may need proper assistance from experienced attorneys and experts.",
    "Oohr Intellectual Research has a well-experienced team of USA patent attorneys and Indian patent agents, who always help clients to file their patents most suitable manner. Right now we are only providing patent filing services in the USA and India.",
  ];

  const whyUs = [
    "Filing patent needs techno-legal knowledge, incorrectly completed procedures and forms may result in the loss of a significant right. It also may delay in priority date.",
    "Even after application filing and submission, there are still many other documents that need to be submitted within the stipulated timeframes. Lack of a deadline for such submissions may result in the revocation of the patent and provide time and money invested as a waste. With expert knowledge and experience, we take care of the complete filing process and give entire support to clients and inventions.",
  ];
  return (
    <IPServices
      title="Patent Filing Services"
      content={content}
      whyUs={whyUs}
      otherServices={patentProsecution}
    />
  );
};

export default PatentFilingServicesPage;
