import ServicePageLayout from "@/components/layout/ServicePageLayout";
import {
  CheckCircle, TrendingUp, Zap, Cpu, Layers, Code, Cloud,
  Database, Bot, Globe, Shield, Users, Settings, LineChart,
  LifeBuoy, RefreshCw, Repeat, Smartphone, Factory, Award, Rocket
} from "lucide-react";

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
  { name: "Application Development", icon: <Code className="w-4 h-4" /> },
  { name: "Data & Analytics", icon: <LineChart className="w-4 h-4" /> },
  { name: "Automation", icon: <Bot className="w-4 h-4" /> },
  { name: "Integration", icon: <Repeat className="w-4 h-4" /> },
  { name: "ABAP", icon: <Code className="w-4 h-4" /> },
  { name: "SAC", icon: <LineChart className="w-4 h-4" /> },
  { name: "FIORI", icon: <Smartphone className="w-4 h-4" /> },
  { name: "RPA", icon: <Bot className="w-4 h-4" /> },
  { name: "CPI", icon: <Cloud className="w-4 h-4" /> },
  { name: "AI", icon: <Cpu className="w-4 h-4" /> },
];

const relatedServices = [
  { title: "Implementation", desc: "End-to-end greenfield & brownfield implementations.", icon: <Layers className="w-8 h-8 text-orange-500" />, link: "/implement" },
  { title: "Rollouts", desc: "Global template rollouts to new geographies.", icon: <Globe className="w-8 h-8 text-orange-500" />, link: "/rollouts" },
  { title: "Migrations", desc: "Safe migration to S/4HANA from ECC or non-SAP.", icon: <RefreshCw className="w-8 h-8 text-orange-500" />, link: "/migrations" },
  { title: "Upgrades", desc: "Technical upgrades and EHP installation.", icon: <TrendingUp className="w-8 h-8 text-orange-500" />, link: "/upgrades" },
  { title: "Development", desc: "Custom RICEFW development and Fiori apps.", icon: <Code className="w-8 h-8 text-orange-500" />, link: "/application-development" },
  { title: "Support", desc: "L1/L2/L3 support and AMS frameworks.", icon: <LifeBuoy className="w-8 h-8 text-orange-500" />, link: "/support-maintainance" },
  { title: "Integration", desc: "PI/PO/CPI middleware integration services.", icon: <Repeat className="w-8 h-8 text-orange-500" />, link: "/integration" },
  { title: "Training", desc: "Corporate training and user enablement workshops.", icon: <Users className="w-8 h-8 text-orange-500" />, link: "/training" },
  { title: "Testing", desc: "Automated test scripts and performance testing.", icon: <CheckCircle className="w-8 h-8 text-orange-500" />, link: "/testing" },
];

function Abap() {
  return (
    <ServicePageLayout
      title="ABAP RAP Development Services"
      subtitle="Sria Infotech enables rapid development of modern, scalable, cloud-ready, and on-premise SAP applications using ABAP RAP."
      breadcrumbs={[
        { name: "Services", path: "/services" },
        { name: "SAP Support", path: "/services/sap-support" },
        { name: "ABAP Services", path: "/services/sap-abap" },
      ]}
      backgroundImage="/Services/abap.png"
      processTitle="Building Future-Proof SAP Applications with Clean Code & RAP"
      processDescription="We leverage modern ABAP development models to deliver high-performance, maintainable enterprise solutions."
      processSteps={[
        { title: "Custom ABAP Development", description: "Design and develop custom ABAP applications to automate processes and address complex business requirements with end-to-end lifecycle support.", icon: <Code className="w-5 h-5" /> },
        { title: "ABAP Code Optimization", description: "Boost system performance by identifying bottlenecks, implementing best coding practices, and optimizing database queries.", icon: <TrendingUp className="w-5 h-5" /> },
        { title: "ABAP on HANA Migration", description: "Modernize your legacy code using pushdown techniques, CDS Views, and performance tuning for in-memory computing.", icon: <Database className="w-5 h-5" /> },
        { title: "Workflow & Report Automation", description: "Streamline processes with custom SmartForms, Adobe Forms, automated report generation, and Fiori/UI5 integration.", icon: <Zap className="w-5 h-5" /> },
        { title: "Debugging & Troubleshooting", description: "Advanced root cause analysis, performance checks, and memory usage optimization to ensure smooth system operation.", icon: <Settings className="w-5 h-5" /> },
        { title: "Training & Knowledge Transfer", description: "Empower your team with beginner to advanced ABAP courses, hands-on coding sessions, and real project-based learning.", icon: <Users className="w-5 h-5" /> },
      ]}
      statsTitle="Development Excellence Metrics"
      stats={[
        { value: "25%", label: "Faster Delivery with RAP", icon: <Zap className="w-6 h-6" /> },
        { value: "20%", label: "OData V4 Efficiency", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "30%", label: "Performance Gain on HANA", icon: <Cpu className="w-6 h-6" /> },
        { value: "100%", label: "Upgrade-Stable Code", icon: <Shield className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="Future-Ready SAP Capabilities, Today"
      capabilitiesDescription="We leverage the latest technologies to build intelligent, scalable, and resilient enterprise solutions."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServices={relatedServices}
    />
  );
}

export default Abap;
