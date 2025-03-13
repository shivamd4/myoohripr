import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WhyUsPage from "./pages/About Us/WhyUsPage";
import ContactPage from "./pages/ContactPage";
import PatentDraftingPage from "./pages/IP Services/Patent Prosecution/PatentDraftingPage";
import OfficeActionResponsePage from "./pages/IP Services/Patent Prosecution/OfficeActionResponsePage";
import PatentFilingServicesPage from "./pages/IP Services/Patent Prosecution/PatentFilingServicesPage";
import PatentabilitySearchPage from "./pages/IP Services/Patent Searches/PatentabilitySearchPage";
import StateOfArtSearchPage from "./pages/IP Services/Patent Searches/StateOfArtSearchPage";
import ChemicalStructureSearchPage from "./pages/IP Services/Patent Searches/ChemicalStructureSearchpage";
import PatentValidityAndInvaliditySearchPage from "./pages/IP Services/Patent Searches/PatentValidityAndInvaliditySearchPage";
import FreedomToOperateSearchPage from "./pages/IP Services/Patent Searches/FreedomToOperateSearchPage";
import DesignPatentDrawingsPage from "./pages/IP Services/Patent Prosecution/DesignPatentDrawingsPage";
import PatentLandspaceAndWhiteSpaceAnalysisPage from "./pages/IP Services/Patent Searches/PatentLandspaceAndWhiteSpaceAnalysisPage";
import InfringementSearchPage from "./pages/IP Services/Patent Searches/InfringementSearchPage";
import DomainsPage from "./pages/DomainsPage";
import IndianPatentApplicationDraftingPage from "./pages/IP Services/Indian Patent/IndianPatentApplicationDraftingPage";
import DesignPatentApplicationPage from "./pages/IP Services/Indian Patent/DesignPatentApplicationPage";
import OppositionSearchesPage from "./pages/IP Services/Indian Patent/OppositionSearchesPage";
import LicensingAndLitigationSupportPage from "./pages/IP Services/Indian Patent/LicensingAndLitigationSupportPage";
import IndiaEntryStrategyPage from "./pages/IP Services/Indian Patent/IndiaEntryStrategyPage";
import PatentPortfolioRankingPage from "./pages/IP Services/Patent Litigation and Commercialization/PatentPortfolioRankingPage";
import EouChartsPage from "./pages/IP Services/Patent Litigation and Commercialization/EouChartsPage";
import PatentDueDiligencePage from "./pages/IP Services/Patent Litigation and Commercialization/PatentDueDiligencePage";
import LicensingSupportPage from "./pages/IP Services/Patent Litigation and Commercialization/LicensingSupportPage";
import MarketResearchDamageStudyPage from "./pages/IP Services/Patent Litigation and Commercialization/MarketResearchDamageStudy";
import InfringementContentionsPage from "./pages/IP Services/Patent Litigation and Commercialization/InfringementContentionsPage";
import SourceCodeReviewPage from "./pages/IP Services/Patent Litigation and Commercialization/SourceCodeReviewPage";
import PatentProofreadingPage from "./pages/IP Services/Patent Management/PatentProofreadingPage";
import RemotePatentDocketingPage from "./pages/IP Services/Patent Management/RemotePatentDocketingPage";
import PatentTranslationsPage from "./pages/IP Services/Patent Management/PatentTranslationsPage";
import FileHistoryAnalysisPage from "./pages/IP Services/Patent Management/FileHistoryAnalysisPage";
import IdsManagementPage from "./pages/IP Services/Patent Management/IdsManagementPage";
import DataVerificationPage from "./pages/IP Services/Patent Management/DataVerificationPage";
import TrademarkFilingPage from "./pages/IP Services/Trademark/TrademarkFilingPage";
import TrademarkPortfolioAnalysisPage from "./pages/IP Services/Trademark/TrademarkPortfolioAnalysisPage";
import TrademarkMonitoringPage from "./pages/IP Services/Trademark/TrademrkMonitoringPage";
import TrademarkSearchPage from "./pages/IP Services/Trademark/TrademarkSearchPage";
import TrademarkRegistrationPage from "./pages/IP Services/Trademark/TrademarkRegistrationPage";
import TrademarkOppositionPage from "./pages/IP Services/Trademark/TrademarkOppositionPage";
import TrademarkRenewalPage from "./pages/IP Services/Trademark/TrademarkRenewal";
import TrademarkLitigationEnforcementPage from "./pages/IP Services/Trademark/TrademarkLitigationEnforcementPage";
import CopyrightRegistrationPage from "./pages/IP Services/Copyright and Design/CopyrightRegistrationPage";
import DesignRegistrationPage from "./pages/IP Services/Copyright and Design/DesignRegistrationPage";
import ContractDraftingAndCreationPage from "./pages/Legal Support/Contract Lifecycle Management/ContractDraftingAndCreationPage";
import ContractNegotiationAndReviewPage from "./pages/Legal Support/Contract Lifecycle Management/ContractNegotiationAndReviewPage";
import ContractExecutionAndManagementPage from "./pages/Legal Support/Contract Lifecycle Management/ContractExecutionAndManagementPage";
import ContractComplianceAndMonitoringPage from "./pages/Legal Support/Contract Lifecycle Management/ContractComplianceAndMonitoringPage";
import ContractRemovalAndOptimizationPage from "./pages/Legal Support/Contract Lifecycle Management/ContractRemovalAndOptimizationPage";
import LegalDocumentDraftingPage from "./pages/Legal Support/Legal Documentation Service/LegalDocumentDraftingPage";
import DraftingOfLegalNoticePage from "./pages/Legal Support/Legal Documentation Service/DraftingOfLegalNoticePage";
import CommercialLitigationPage from "./pages/Legal Support/Legal Documentation Service/CommercialLitigationPage";
import CommercialLawAdvisoryPage from "./pages/Legal Support/Legal Documentation Service/CommericalLawAdvisoryPage";
import TrademarkDocketingPage from "./pages/Legal Support/Paralegal Support/TrademarkDocketingPage";
import ProsecutionSupportPage from "./pages/Legal Support/Paralegal Support/ProsecutionSupportPage";
import OurTeamPage from "./pages/About Us/OurTeamPage";
import WhoWeArePage from "./pages/About Us/WhoWeArePage";
import CareersPage from "./pages/About Us/CareersPage";
import ToIPLawFirmsPage from "./pages/Solutions/ToIPLawFirmsPage";
import ToTechnologyOrganizationsPage from "./pages/Solutions/ToTechnologyOrganizationsPage";
import ToCollegesAndUniversitiesPage from "./pages/Solutions/ToCollegesAndUniversitiesPage";
import ToIPConsultingFirmsPage from "./pages/Solutions/ToIPConsultingFirmsPage";
import ToStartupsPage from "./pages/Solutions/ToStartupsPage";
import ToIndiviualLawyersPage from "./pages/Solutions/ToIndiviualLawyersPage";
import ToResearchersPage from "./pages/Solutions/ToResearchersPage";
import SequenceListingPage from "./pages/IP Services/Patent Prosecution/SequenceListingPage";
import BiologicalSequenceSearch from "./pages/IP Services/Patent Searches/BiologicalSequenceSearch";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/contact-us" Component={ContactPage} />
      <Route path="/domains" Component={DomainsPage} />

      {/* About Us */}
      <Route path="/our-team" Component={OurTeamPage} />
      <Route path="/why-us" Component={WhyUsPage} />
      <Route path="/who-we-are" Component={WhoWeArePage} />
      <Route path="/careers" Component={CareersPage} />

      {/* Patent Prosecution  */}
      <Route path="/patent-drafting" Component={PatentDraftingPage} />
      <Route
        path="/office-action-response"
        Component={OfficeActionResponsePage}
      />
      <Route
        path="/patent-filing-services"
        Component={PatentFilingServicesPage}
      />
      <Route
        path="/design-patent-drawings"
        Component={DesignPatentDrawingsPage}
      />

      {/* Indian Patent  */}
      <Route
        path="/indian-patent-application-drafting"
        Component={IndianPatentApplicationDraftingPage}
      />
      <Route
        path="/design-patent-application"
        Component={DesignPatentApplicationPage}
      />
      <Route path="/opposition-searches" Component={OppositionSearchesPage} />
      <Route
        path="/licensing-and-litigation-support"
        Component={LicensingAndLitigationSupportPage}
      />
      <Route path="/india-entry-strategy" Component={IndiaEntryStrategyPage} />

      {/* Patent Litigation and Commercialization  */}
      <Route
        path="/patent-portfolio-ranking"
        Component={PatentPortfolioRankingPage}
      />
      <Route path="/eou-charts" Component={EouChartsPage} />
      <Route path="/patent-due-diligence" Component={PatentDueDiligencePage} />
      <Route path="/licensing-support" Component={LicensingSupportPage} />
      <Route
        path="/market-research-damage-study"
        Component={MarketResearchDamageStudyPage}
      />
      <Route
        path="/infringement-contentions"
        Component={InfringementContentionsPage}
      />
      <Route path="/source-code-review" Component={SourceCodeReviewPage} />

      {/* Patent Searches  */}
      <Route path="/patentability-search" Component={PatentabilitySearchPage} />
      <Route path="/state-of-art-search" Component={StateOfArtSearchPage} />
      <Route
        path="/chemical-structure-search"
        Component={ChemicalStructureSearchPage}
      />
      <Route
        path="/patent-validity-and-invalidity-search"
        Component={PatentValidityAndInvaliditySearchPage}
      />
      <Route
        path="/freedom-to-operate-search"
        Component={FreedomToOperateSearchPage}
      />
      <Route
        path="/patent-landspace-and-white-space-analysis"
        Component={PatentLandspaceAndWhiteSpaceAnalysisPage}
      />
      <Route path="/infringement-search" Component={InfringementSearchPage} />
      <Route path="/sequence-listing" Component={SequenceListingPage} />
      <Route
        path="/biological-sequence-search"
        Component={BiologicalSequenceSearch}
      />

      {/* Patent Management */}
      <Route path="/patent-proofreading" Component={PatentProofreadingPage} />
      <Route
        path="/remote-patent-docketing"
        Component={RemotePatentDocketingPage}
      />
      <Route path="/patent-translations" Component={PatentTranslationsPage} />
      <Route
        path="/file-history-analysis"
        Component={FileHistoryAnalysisPage}
      />
      <Route path="/ids-management" Component={IdsManagementPage} />
      <Route path="/data-verification" Component={DataVerificationPage} />

      {/* Trademark */}
      <Route path="/trademark-filing" Component={TrademarkFilingPage} />
      <Route
        path="/trademark-portfolio-analysis"
        Component={TrademarkPortfolioAnalysisPage}
      />
      <Route path="/trademark-monitoring" Component={TrademarkMonitoringPage} />
      <Route path="/trademark-search" Component={TrademarkSearchPage} />
      <Route
        path="/trademark-registration"
        Component={TrademarkRegistrationPage}
      />
      <Route path="/trademark-opposition" Component={TrademarkOppositionPage} />
      <Route path="/trademark-renewal" Component={TrademarkRenewalPage} />
      <Route
        path="/trademark-litigation-enforcement"
        Component={TrademarkLitigationEnforcementPage}
      />

      {/* Copyright and Design */}
      <Route
        path="/copyright-registration"
        Component={CopyrightRegistrationPage}
      />
      <Route path="/design-registration" Component={DesignRegistrationPage} />

      {/* Contract Lifecycle Management */}
      <Route
        path="/contract-drafting-and-creation"
        Component={ContractDraftingAndCreationPage}
      />
      <Route
        path="/contract-negotiation-and-review"
        Component={ContractNegotiationAndReviewPage}
      />
      <Route
        path="/contract-execution-and-management"
        Component={ContractExecutionAndManagementPage}
      />
      <Route
        path="/contract-compliance-and-monitoring"
        Component={ContractComplianceAndMonitoringPage}
      />
      <Route
        path="/contract-removal-and-optimization"
        Component={ContractRemovalAndOptimizationPage}
      />

      {/* Legal Documentation Service */}
      <Route
        path="/legal-document-drafting"
        Component={LegalDocumentDraftingPage}
      />
      <Route
        path="/drafting-of-legal-notice"
        Component={DraftingOfLegalNoticePage}
      />
      <Route
        path="/commercial-litigation"
        Component={CommercialLitigationPage}
      />
      <Route
        path="/commercial-law-advisory"
        Component={CommercialLawAdvisoryPage}
      />

      {/* Paralegal Support */}
      <Route path="/trademark-docketing" Component={TrademarkDocketingPage} />
      <Route path="/prosecution-support" Component={ProsecutionSupportPage} />

      {/* Solutions */}
      <Route path="/to-ip-lawfirms" Component={ToIPLawFirmsPage} />
      <Route
        path="/to-technology-organizations"
        Component={ToTechnologyOrganizationsPage}
      />
      <Route
        path="/to-colleges-and-universities"
        Component={ToCollegesAndUniversitiesPage}
      />
      <Route
        path="/to-ip-consulting-firms"
        Component={ToIPConsultingFirmsPage}
      />
      <Route path="/to-startups" Component={ToStartupsPage} />
      <Route path="/to-indiviual-lawyers" Component={ToIndiviualLawyersPage} />
      <Route path="/to-researchers" Component={ToResearchersPage} />
    </Routes>
  );
};

export default App;
