import Solutions from "@/components/Solutions";

const ToTechnologyOrganizationsPage = () => {
  const content = [
    "Services -Technology Landscapes & Insights, White space analysis, FTO, Infringement Analysis, Rapid Novelty Searches, and IP Admin Services. Our firm has a decade of experience in handling technologies of varying complexities and performs comprehensive strategical property analysis.",
    "We combine information on changing industries, technologies, strategies with our in-depth understanding of IP to supply complete IP Lifecycle services starting from IP Creation, IP Prosecution to IP Monetization, IP Litigation, and IP Management. Strategically regulating TP with business plays an important role in the success of every technology company.",
    "Technology companies should create, protect, maintain and manage the property to remain before competitors to border an IP strategy that’s aligned to the business goals, it’s vital to get actionable intelligence by performing tedious analysis on thousands of technical documents including patents.",
    "Performing such tedious IP analysis is becoming more complex and demands a substantial amount of time and resources. We provide our services to Technology Giants, Medium & Small Enterprise also as Startups, and help to grow their businesses with IP assets.",
  ];

  const servicesList = [
    "Set your IP approaches straightened according to your business goals",
    "Compare your competitors IP activities",
    "Accomplish your IP portfolio to maximize Business value",
    "Develop IP trails worldwide",
    "Explore and Analyze upcoming technologies",
  ];
  return (
    <Solutions
      title="To Technology Organizations"
      content={content}
      tagline="Intellectual property asserts are the growth of a company business and guarding them is the first step of success of a company."
      image="/solutions/to-technology-organizations.png"
      secondaryPara="We provide Technology Organizations IP-Technology-Business Insights quickly and comprehensively so that you can:"
      servicesList={servicesList}
    />
  );
};

export default ToTechnologyOrganizationsPage;
