import IPServices from "@/components/IPServices";
import { indianPatent } from "../../../../constants/indian-patent";

const DesignPatentApplicationPage = () => {
  return (
    <IPServices
      title="Design Patent Application"
      content={[
        "Shield your designs! Our user-friendly platform simplifies design patent applications. Get expert guidance throughout the process, from start to finish. We protect the originality of your creations, no matter your experience level. Start safeguarding your designs today!",
      ]}
      otherServices={indianPatent}
    />
  );
};

export default DesignPatentApplicationPage;
