import ServicePageLayout from "@/components/layout/ServicePageLayout";
import {
  Target, Compass, Map, LineChart, Users, Award, Rocket, Globe,
  Search, ClipboardList, Presentation, TrendingUp, Shield, LifeBuoy,
  Building2, Handshake,
} from "lucide-react";

const capabilities = [
  { title: "Transformation Roadmapping", description: "A phased, business-led roadmap that sequences technology investment around commercial priorities, not the other way round.", icon: <Map className="w-6 h-6" /> },
  { title: "Business Case Development", description: "Quantified cost, benefit and risk analysis to help leadership commit to a platform or program with confidence.", icon: <LineChart className="w-6 h-6" /> },
  { title: "Operating Model Design", description: "Clear definition of how teams, roles and decision rights should change to get value from a new platform.", icon: <Building2 className="w-6 h-6" /> },
  { title: "Stakeholder Alignment", description: "Structured workshops that surface competing priorities early and build consensus before implementation starts.", icon: <Handshake className="w-6 h-6" /> },
  { title: "Vendor & Platform Selection", description: "Independent evaluation of SAP, Odoo and other platform options against your actual requirements.", icon: <Search className="w-6 h-6" /> },
  { title: "Benefits Realization Tracking", description: "A framework for measuring whether the transformation actually delivers the outcomes it was built for.", icon: <Award className="w-6 h-6" /> },
];

const techTrends = [
  { name: "Digital Transformation", icon: <Rocket className="w-4 h-4" /> },
  { name: "Operating Models", icon: <Building2 className="w-4 h-4" /> },
  { name: "SAP", icon: <Globe className="w-4 h-4" /> },
  { name: "Odoo", icon: <Globe className="w-4 h-4" /> },
  { name: "Change Management", icon: <Users className="w-4 h-4" /> },
  { name: "Benefits Realization", icon: <TrendingUp className="w-4 h-4" /> },
];

const relatedServices = [
  { title: "Process Strategy Consulting", desc: "Streamline operations ahead of any technology implementation.", icon: <ClipboardList className="w-8 h-8 text-orange-500" />, link: "/services/strategy-consulting/process" },
  { title: "Technology Strategy Consulting", desc: "Plan platform, architecture and modernization decisions.", icon: <Compass className="w-8 h-8 text-orange-500" />, link: "/services/strategy-consulting/tech" },
  { title: "SAP S/4HANA Implementation", desc: "End-to-end implementation once the roadmap is set.", icon: <Rocket className="w-8 h-8 text-orange-500" />, link: "/services/sap-s4hana-implementation" },
  { title: "Odoo Implementation", desc: "ERP implementation services for growing businesses.", icon: <Globe className="w-8 h-8 text-orange-500" />, link: "/services/odoo-implementation" },
];

function BusinessConsulting() {
  return (
    <ServicePageLayout
      title="Business Strategy Consulting"
      subtitle="Define a transformation roadmap for your business before you commit to a platform, a vendor, or a budget."
      breadcrumbs={[
        { name: "Services" },
        { name: "Strategy Consulting" },
        { name: "Business Strategy", path: "/services/strategy-consulting/business" },
      ]}
      backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Services/upgrade.jpg?tr=f-auto,q-auto,w-1600"
      processTitle="Who This Is For, and What You Get"
      processDescription="Built for business and operations leaders who need a clear, board-ready case for transformation before engineering work begins. Most engagements run 3-6 weeks depending on scope."
      processSteps={[
        { title: "Discovery & Stakeholder Interviews", description: "1-2 weeks. Understand current operations, pain points and commercial priorities directly from the people who run the business day to day.", icon: <Search className="w-5 h-5" /> },
        { title: "Current-State Assessment", description: "Map existing processes, systems and decision-making bottlenecks against your stated goals.", icon: <ClipboardList className="w-5 h-5" /> },
        { title: "Roadmap & Business Case", description: "1-2 weeks. Build a phased transformation roadmap with a quantified business case leadership can act on.", icon: <Map className="w-5 h-5" /> },
        { title: "Stakeholder Workshops", description: "Present findings and options to leadership, resolve open questions, and align on the path forward.", icon: <Presentation className="w-5 h-5" /> },
        { title: "Handover to Delivery", description: "Package the roadmap and business case for the implementation team — internal or Sria Infotech's own delivery practice.", icon: <Target className="w-5 h-5" /> },
        { title: "Benefits Tracking Setup", description: "Define the metrics that will prove the transformation worked, before the project starts.", icon: <TrendingUp className="w-5 h-5" /> },
      ]}
      statsTitle="What This Engagement Delivers"
      stats={[
        { value: "3-6 wks", label: "Typical Engagement Duration", icon: <LifeBuoy className="w-6 h-6" /> },
        { value: "1", label: "Board-Ready Business Case", icon: <Award className="w-6 h-6" /> },
        // PENDING REAL DATA — "10+ years" disagreed with other pages sitewide
        // during a consistency audit; restore once a confirmed figure exists.
        // { value: "10+", label: "Years of SAP & Odoo Delivery Experience", icon: <Globe className="w-6 h-6" /> },
        { value: "100%", label: "Independent of Any Single Vendor", icon: <Shield className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="What's Included"
      capabilitiesDescription="A business strategy engagement is scoped around your decision, not a fixed template — these are the building blocks we draw on."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServicesTitle="Where This Leads Next"
      relatedServicesDescription="Once the roadmap and business case are set, these are the natural next steps."
      relatedServices={relatedServices}
    />
  );
}

export default BusinessConsulting;
