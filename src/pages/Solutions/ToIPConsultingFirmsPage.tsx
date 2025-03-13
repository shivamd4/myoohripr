import Solutions from "@/components/Solutions";

const ToIPConsultingFirmsPage = () => {
  const content = [
    "We provide our help and assistance to otherIP consulting firms/companies in managing their IP projects, and to produce a variety of patent and technology analytical reports. We are here to make the patent and technology information research and analysis effortless for other firms.",
    "We have experience working with different IP consulting firms to giving them our expert services in requirements. Our team members have liaisoning with multiple IP firms and well-maintained relationships with top companies. We provide several types of supports to companies.",
  ];
  const servicesList = [
    "Backend technological support in all kinds of searching and report preparation.",
    "Help to strive more domains and different expertise",
    "Domain-based expert searching",
    "Report formation and result selection",
    "Database assistance",
  ];
  return (
    <Solutions
      title="To IP Consulting Firms"
      content={content}
      tagline="We provide our expertise to other IP firms related to client requirements."
      image="/solutions/to-ip-consulting-firms.png"
      servicesList={servicesList}
    />
  );
};

export default ToIPConsultingFirmsPage;
