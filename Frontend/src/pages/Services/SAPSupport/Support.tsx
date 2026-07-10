import ServicePageLayout from "@/components/layout/ServicePageLayout";
import { CheckCircle, TrendingUp, Zap, Cpu, Layers, Code, Cloud, Database, Bot, Globe, Shield, Users, Settings, LineChart, LifeBuoy, RefreshCw, Repeat, Smartphone, Factory, Award, Rocket, FileText, Wrench } from "lucide-react";

const capabilities = [
  { title: "End-to-End SAP Services", description: "Implementation, migration, support, and optimization across SAP S/4HANA, ECC, BTP, and Industry Cloud.", icon: <Layers className="w-6 h-6" /> },
  { title: "Industry Expertise", description: "Deep domain knowledge in manufacturing, oil & gas, healthcare, retail, and public sector.", icon: <Factory className="w-6 h-6" /> },
  { title: "Certified SAP Professionals", description: "Team of certified consultants with cross-functional and technical expertise.", icon: <Award className="w-6 h-6" /> },
  { title: "Rapid Deployment & Methodologies", description: "Accelerated delivery using SAP Activate, best practices, and agile frameworks.", icon: <Rocket className="w-6 h-6" /> },
  { title: "Cloud & On-Prem Expertise", description: "Proven capabilities in SAP S/4HANA Cloud (Public & Private), RISE with SAP, and on-premise transformations.", icon: <Cloud className="w-6 h-6" /> },
  { title: "Innovation-Driven", description: "Leveraging AI/ML, IoT, and mobility within SAP BTP to deliver intelligent enterprise solutions.", icon: <Zap className="w-6 h-6" /> },
  { title: "Global Delivery Model", description: "Onsite-offshore hybrid delivery with 24x7 support and managed services.", icon: <Globe className="w-6 h-6" /> },
];
const techTrends = [
  { name: "Application Development", icon: <Code className="w-4 h-4" /> }, { name: "Data & Analytics", icon: <LineChart className="w-4 h-4" /> },
  { name: "Automation", icon: <Bot className="w-4 h-4" /> }, { name: "Integration", icon: <Repeat className="w-4 h-4" /> },
  { name: "ABAP", icon: <Code className="w-4 h-4" /> }, { name: "SAC", icon: <LineChart className="w-4 h-4" /> },
  { name: "FIORI", icon: <Smartphone className="w-4 h-4" /> }, { name: "RPA", icon: <Bot className="w-4 h-4" /> },
  { name: "CPI", icon: <Cloud className="w-4 h-4" /> }, { name: "AI", icon: <Cpu className="w-4 h-4" /> },
];
const relatedServices = [
  { title: "Implementation", desc: "End-to-end greenfield & brownfield implementations.", icon: <Layers className="w-8 h-8 text-orange-500" />, link: "/implement" },
  { title: "Rollouts", desc: "Global template rollouts to new geographies.", icon: <Globe className="w-8 h-8 text-orange-500" />, link: "/rollouts" },
  { title: "Migrations", desc: "Safe migration to S/4HANA from ECC or non-SAP.", icon: <RefreshCw className="w-8 h-8 text-orange-500" />, link: "/migrations" },
  { title: "Upgrades", desc: "Technical upgrades and EHP installation.", icon: <TrendingUp className="w-8 h-8 text-orange-500" />, link: "/upgrades" },
  { title: "ABAP Development", desc: "Custom ABAP RAP development and Fiori apps.", icon: <Code className="w-8 h-8 text-orange-500" />, link: "/abap" },
  { title: "Application Dev", desc: "BTP cloud-native app development.", icon: <Settings className="w-8 h-8 text-orange-500" />, link: "/application-development" },
  { title: "Integration", desc: "PI/PO/CPI middleware integration services.", icon: <Repeat className="w-8 h-8 text-orange-500" />, link: "/integration" },
  { title: "Training", desc: "Corporate training and user enablement workshops.", icon: <Users className="w-8 h-8 text-orange-500" />, link: "/training" },
  { title: "Testing", desc: "Automated test scripts and performance testing.", icon: <CheckCircle className="w-8 h-8 text-orange-500" />, link: "/testing" },
];

function Support() {
  return (
    <ServicePageLayout
      title="SAP Support & Maintenance"
      subtitle="Ensure business continuity and peak performance with our reliable, SLA-driven SAP Application Management Services (AMS)."
      breadcrumbs={[
        { name: "Services", path: "/services" },
        { name: "SAP Support", path: "/services/sap-support" },
        { name: "Support & Maintenance", path: "/services/sap-support-maintenance" },
      ]}
      backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Services/support.jpg?tr=f-auto,q-auto"
      processTitle="Delivering Impact-Driven SAP Support for Business Continuity"
      processDescription="Our comprehensive support framework ensures your SAP landscape remains stable, compliant, and optimized for growth."
      processSteps={[
        { title: "Application Support", description: "Incident management (L1, L2, L3 support), bug fixing, troubleshooting, user query handling, and month-end/quarter-end support activities.", icon: <Users className="w-5 h-5" /> },
        { title: "System Maintenance", description: "SAP system health checks, performance tuning, transport management, and patch/OSS Note implementation for system stability.", icon: <Wrench className="w-5 h-5" /> },
        { title: "Enhancement & Change Management", description: "Small enhancements, configuration changes, and functional improvements based on user feedback and reporting requirements.", icon: <Settings className="w-5 h-5" /> },
        { title: "SAP Basis Support", description: "User and role management, system monitoring, job scheduling, kernel upgrades, and regular system patches.", icon: <Database className="w-5 h-5" /> },
        { title: "Integration Support", description: "Middleware monitoring (PI/PO/CPI) and support for integrations with third-party systems (CRM, PLM, HRMS, etc.).", icon: <Repeat className="w-5 h-5" /> },
        { title: "Upgrades & Legal Compliance", description: "SAP version upgrades (Support Pack / Enhancement Pack) and country-specific legal changes (GST, VAT, e-invoicing).", icon: <Shield className="w-5 h-5" /> },
        { title: "Reporting & Governance", description: "Monthly service reports (incidents, SLA compliance) and quarterly service review meetings with roadmap alignment.", icon: <FileText className="w-5 h-5" /> },
        { title: "Training & Optimization", description: "End-user knowledge transfer, system audit reviews, and cloud hosting management for S/4HANA Private Cloud.", icon: <Award className="w-5 h-5" /> },
      ]}
      statsTitle="Efficient AMS Governance"
      stats={[
        { value: "99.9%", label: "System Availability", icon: <Zap className="w-6 h-6" /> },
        { value: "24/7", label: "Expert Global Support", icon: <Globe className="w-6 h-6" /> },
        { value: "SLA", label: "Guaranteed Response", icon: <Shield className="w-6 h-6" /> },
        { value: "40%", label: "TCO Reduction", icon: <TrendingUp className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="Future-Ready SAP Capabilities, Today"
      capabilitiesDescription="We leverage the latest technologies to build intelligent, scalable, and resilient enterprise solutions."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServices={relatedServices}
    />
  );
}

export default Support;
