import Solutions from "@/components/Solutions";

const ToCollegesAndUniversitiesPage = () => {
  const content = [
    "College students always have new inventions and some futuristic ideas. We provide our support to Colleges and Universities Patent Monetization Services, Licensing Support Services, Patent Searches, and Technology whitespace analysis. Make your Technology Transfer wing more productive with insights and support from us. We help university departments in patenting and also monetizing their IP assets.",
    "Even though the patenting activities in Academia are extremely minimal, there has been increased specialization in patenting academic inventions and licensing them to technology companies which reciprocally fetches revenue for academia.",
    "While Colleges and Universities are working to seek out solutions to problems as they arise, it might only be righteous if all of their inventions are patented and monetized. It’s well understood that patenting for academia has got to be done at a budget rate and that we clearly understand that and that we assist you to secure your patents in a cost-effective way.",
  ];
  const servicesList = [
    "Assist in cost-effective ways (initial assistance is completely free)",
    "Patent invention and help inventors to prepare the prototype",
    "Guide students for upcoming startup ventures",
  ];
  return (
    <Solutions
      title="To Colleges and Universities"
      content={content}
      tagline="Universities and academies are still behind in patenting their inventions and monetizing their patents, although they have innovative ideas and futuristic inventions"
      image="/solutions/to-colleges-and-universities.png"
      servicesList={servicesList}
    />
  );
};

export default ToCollegesAndUniversitiesPage;
