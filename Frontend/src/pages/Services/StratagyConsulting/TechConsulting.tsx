import ServicePageLayout from "@/components/layout/ServicePageLayout";
import {
  Cpu, Layers, Cloud, Database, Shield, Network, Search, ClipboardList,
  Award, Rocket, Globe, LifeBuoy, Compass, Code, Server, ShieldCheck,
} from "lucide-react";

const capabilities = [
  { title: "Architecture Assessment", description: "An independent review of your current systems, integrations and technical debt before you commit to a new platform.", icon: <Layers className="w-6 h-6" /> },
  { title: "Platform Evaluation", description: "Structured comparison of SAP, Odoo, cloud and hybrid options against your actual technical requirements.", icon: <Cloud className="w-6 h-6" /> },
  { title: "Integration Strategy", description: "A plan for how new and existing systems will exchange data, avoiding one-off point-to-point integrations.", icon: <Network className="w-6 h-6" /> },
  { title: "Data & Security Planning", description: "Data governance, access control and security requirements defined before implementation, not after.", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Modernization Roadmap", description: "A sequenced plan for retiring legacy systems and migrating to modern, supportable architecture.", icon: <Server className="w-6 h-6" /> },
  { title: "Technical Governance Setup", description: "Standards and review checkpoints so implementation stays aligned with the architecture decisions made here.", icon: <Award className="w-6 h-6" /> },
];

const techTrends = [
  { name: "SAP BTP", icon: <Cloud className="w-4 h-4" /> },
  { name: "S/4HANA", icon: <Database className="w-4 h-4" /> },
  { name: "Odoo", icon: <Globe className="w-4 h-4" /> },
  { name: "Integration Architecture", icon: <Network className="w-4 h-4" /> },
  { name: "Cloud Migration", icon: <Cpu className="w-4 h-4" /> },
  { name: "Custom Development", icon: <Code className="w-4 h-4" /> },
];

const relatedServices = [
  { title: "Business Strategy Consulting", desc: "Set the commercial roadmap alongside the technical one.", icon: <Compass className="w-8 h-8 text-orange-500" />, link: "/services/strategy-consulting/business" },
  { title: "Process Strategy Consulting", desc: "Redesign processes to fit the target architecture.", icon: <Compass className="w-8 h-8 text-orange-500" />, link: "/services/strategy-consulting/process" },
  { title: "SAP BTP Solutions", desc: "Build on the architecture decisions made here.", icon: <Cloud className="w-8 h-8 text-orange-500" />, link: "/solutions/btp" },
  { title: "SAP Integration Services", desc: "Implement the integration strategy across systems.", icon: <Network className="w-8 h-8 text-orange-500" />, link: "/services/sap-integration" },
];

function TechConsulting() {
  return (
    <ServicePageLayout
      title="Technology Strategy Consulting"
      subtitle="Plan platform, architecture and modernization decisions before implementation locks them in — reducing rework and technical debt down the line."
      breadcrumbs={[
        { name: "Services", path: "/services" },
        { name: "Strategy Consulting", path: "/services/strategy-consulting" },
        { name: "Technology Strategy", path: "/services/strategy-consulting/tech" },
      ]}
      backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Services/upgrade.jpg?tr=f-auto,q-auto,w-1600"
      processTitle="Who This Is For, and What You Get"
      processDescription="Built for CIOs, IT leaders and technical architects who need an independent view of platform and architecture options before committing budget. Most engagements run 3-6 weeks depending on landscape complexity."
      processSteps={[
        { title: "Landscape Discovery", description: "1-2 weeks. Inventory current systems, integrations, custom code and technical debt across your SAP, Odoo or hybrid landscape.", icon: <Search className="w-5 h-5" /> },
        { title: "Architecture Assessment", description: "Evaluate current architecture against scalability, security and maintainability requirements.", icon: <Layers className="w-5 h-5" /> },
        { title: "Platform & Options Evaluation", description: "1-2 weeks. Compare platform, cloud and hybrid options on technical fit, not just vendor marketing claims.", icon: <Cloud className="w-5 h-5" /> },
        { title: "Integration & Data Strategy", description: "Define how systems will connect and how data governance and security will be handled going forward.", icon: <Network className="w-5 h-5" /> },
        { title: "Modernization Roadmap", description: "Sequence the technical roadmap so legacy systems are retired in a controlled, low-risk order.", icon: <Server className="w-5 h-5" /> },
        { title: "Handover to Delivery", description: "Package the architecture decisions and roadmap for the implementation team — internal or Sria Infotech's own delivery practice.", icon: <ClipboardList className="w-5 h-5" /> },
      ]}
      statsTitle="What This Engagement Delivers"
      stats={[
        { value: "3-6 wks", label: "Typical Engagement Duration", icon: <LifeBuoy className="w-6 h-6" /> },
        { value: "1", label: "Documented Architecture Roadmap", icon: <Award className="w-6 h-6" /> },
        { value: "10+", label: "Years of SAP & Odoo Delivery Experience", icon: <Globe className="w-6 h-6" /> },
        { value: "100%", label: "Independent of Any Single Vendor", icon: <Shield className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="What's Included"
      capabilitiesDescription="A technology strategy engagement is scoped around your architecture decisions — these are the building blocks we draw on."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServicesTitle="Where This Leads Next"
      relatedServicesDescription="Once the architecture and roadmap are set, these are the natural next steps."
      relatedServices={relatedServices}
    />
  );
}

export default TechConsulting;
