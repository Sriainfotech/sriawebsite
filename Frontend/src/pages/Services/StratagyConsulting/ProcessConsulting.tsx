import ServicePageLayout from "@/components/layout/ServicePageLayout";
import {
  ClipboardList, Workflow, GitBranch, Search, Gauge, Users, Award,
  Rocket, Globe, Shield, LifeBuoy, Building2, Compass, ListChecks,
  RefreshCw,
} from "lucide-react";

const capabilities = [
  { title: "Process Discovery & Mapping", description: "Document how work actually happens today, not just how it's supposed to happen on paper.", icon: <Workflow className="w-6 h-6" /> },
  { title: "Gap & Bottleneck Analysis", description: "Identify where manual work, duplicate effort or handoff delays are costing time and money.", icon: <GitBranch className="w-6 h-6" /> },
  { title: "Process Redesign", description: "Streamlined, standardized workflows designed to be automated cleanly once a platform is chosen.", icon: <ListChecks className="w-6 h-6" /> },
  { title: "Requirements Definition", description: "Clear, testable process requirements that implementation teams can build against without guesswork.", icon: <ClipboardList className="w-6 h-6" /> },
  { title: "Standard Operating Procedures", description: "Documented procedures for the redesigned process, ready for training and change management.", icon: <Building2 className="w-6 h-6" /> },
  { title: "Continuous Improvement Setup", description: "A lightweight framework for revisiting and refining processes after go-live.", icon: <RefreshCw className="w-6 h-6" /> },
];

const techTrends = [
  { name: "Process Mining", icon: <Workflow className="w-4 h-4" /> },
  { name: "Lean & Six Sigma", icon: <Gauge className="w-4 h-4" /> },
  { name: "SAP", icon: <Globe className="w-4 h-4" /> },
  { name: "Odoo", icon: <Globe className="w-4 h-4" /> },
  { name: "Automation Readiness", icon: <Rocket className="w-4 h-4" /> },
  { name: "Change Management", icon: <Users className="w-4 h-4" /> },
];

const relatedServices = [
  { title: "Business Strategy Consulting", desc: "Set the commercial roadmap before redesigning processes.", icon: <Compass className="w-8 h-8 text-orange-500" />, link: "/services/strategy-consulting/business" },
  { title: "Technology Strategy Consulting", desc: "Plan the platform and architecture the new process will run on.", icon: <Compass className="w-8 h-8 text-orange-500" />, link: "/services/strategy-consulting/tech" },
  { title: "SAP S/4HANA Implementation", desc: "Build the redesigned process into SAP.", icon: <Rocket className="w-8 h-8 text-orange-500" />, link: "/services/sap-s4hana-implementation" },
  { title: "Odoo Custom Development", desc: "Automate the redesigned process in Odoo.", icon: <Globe className="w-8 h-8 text-orange-500" />, link: "/services/odoo-custom-development" },
];

function ProcessConsulting() {
  return (
    <ServicePageLayout
      title="Process Strategy Consulting"
      subtitle="Streamline and standardize how work actually gets done before you automate it — so implementation builds on a clean process, not a broken one."
      breadcrumbs={[
        { name: "Services" },
        { name: "Strategy Consulting" },
        { name: "Process Strategy", path: "/services/strategy-consulting/process" },
      ]}
      backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Services/upgrade.jpg?tr=f-auto,q-auto,w-1600"
      processTitle="Who This Is For, and What You Get"
      processDescription="Built for process owners, operations managers and COOs who need clean, standardized processes before a technology implementation starts. Most engagements run 2-5 weeks depending on scope."
      processSteps={[
        { title: "Process Discovery", description: "1-2 weeks. Shadow, interview and document how each process actually runs today across teams and locations.", icon: <Search className="w-5 h-5" /> },
        { title: "Bottleneck & Gap Analysis", description: "Identify manual steps, duplicate work and handoff delays that slow the business down or block automation.", icon: <GitBranch className="w-5 h-5" /> },
        { title: "Process Redesign", description: "1-2 weeks. Design the target-state process, sequenced for the platform that will eventually run it.", icon: <Workflow className="w-5 h-5" /> },
        { title: "Requirements Documentation", description: "Translate the redesigned process into requirements an implementation team can build against directly.", icon: <ClipboardList className="w-5 h-5" /> },
        { title: "Validation Workshops", description: "Walk the redesigned process past the people who'll actually use it, before it's locked in.", icon: <Users className="w-5 h-5" /> },
        { title: "Handover to Delivery", description: "Package requirements and SOPs for the implementation team — internal or Sria Infotech's own delivery practice.", icon: <Award className="w-5 h-5" /> },
      ]}
      statsTitle="What This Engagement Delivers"
      stats={[
        { value: "2-5 wks", label: "Typical Engagement Duration", icon: <LifeBuoy className="w-6 h-6" /> },
        { value: "1", label: "Documented Target-State Process", icon: <Award className="w-6 h-6" /> },
        // PENDING REAL DATA — "10+ years" disagreed with other pages sitewide
        // during a consistency audit; restore once a confirmed figure exists.
        // { value: "10+", label: "Years of SAP & Odoo Delivery Experience", icon: <Globe className="w-6 h-6" /> },
        { value: "100%", label: "Requirements Ready for Build", icon: <Shield className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="What's Included"
      capabilitiesDescription="A process strategy engagement is scoped around the specific processes you need fixed — these are the building blocks we draw on."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServicesTitle="Where This Leads Next"
      relatedServicesDescription="Once processes are redesigned and documented, these are the natural next steps."
      relatedServices={relatedServices}
      ctaText="Talk to a Process Consultant"
    />
  );
}

export default ProcessConsulting;
