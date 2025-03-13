import IPServices from "@/components/IPServices";
import { patentLitigationAndCommercialization } from "../../../../constants/patent-litigation-and-commercialization";

const SourceCodeReviewPage = () => {
  return (
    <IPServices
      title="Source Code Review"
      content={[
        "Worried about your software's code? Our expert code review service offers a deep dive into its core. We can help with patent validation (making sure your code reflects your invention), security checks, and ensuring your software runs smoothly. Our detailed reports highlight areas for improvement and strengths, giving you the info needed to make informed decisions. We have a proven track record in code analysis, so you can trust us to safeguard your intellectual property and optimize your software's performance.",
      ]}
      otherServices={patentLitigationAndCommercialization}
    />
  );
};

export default SourceCodeReviewPage;
