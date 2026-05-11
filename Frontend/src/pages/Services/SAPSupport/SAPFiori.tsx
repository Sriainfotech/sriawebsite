import ServicePageLayout from "@/components/layout/ServicePageLayout";
import { CheckCircle, TrendingUp, Zap, Cpu, Layers, Code, Cloud, Database, Bot, Globe, Shield, Users, Settings, LineChart, LifeBuoy, RefreshCw, Repeat, Smartphone, Factory, Award, Rocket, Layout } from "lucide-react";

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
  { title: "Support", desc: "L1/L2/L3 support and AMS frameworks.", icon: <LifeBuoy className="w-8 h-8 text-orange-500" />, link: "/support-maintainance" },
  { title: "Integration", desc: "PI/PO/CPI middleware integration services.", icon: <Repeat className="w-8 h-8 text-orange-500" />, link: "/integration" },
  { title: "Training", desc: "Corporate training and user enablement workshops.", icon: <Users className="w-8 h-8 text-orange-500" />, link: "/training" },
  { title: "Application Dev", desc: "BTP cloud-native app development.", icon: <Settings className="w-8 h-8 text-orange-500" />, link: "/application-development" },
];

function SAPFiori() {
  return (
    <ServicePageLayout
      title="SAP Fiori Development Services"
      subtitle="Sria Infotech builds intuitive, responsive, role-based SAP Fiori apps that simplify processes and enhance productivity."
      breadcrumbs={[
        { name: "Services", path: "/services" },
        { name: "SAP Support", path: "/services/sap-support" },
        { name: "SAP Fiori", path: "/services/sap-fiori" },
      ]}
      backgroundImage="/Services/fiori.png"
      processTitle="Modernizing Enterprise UX with Intuitive Fiori Solutions"
      processDescription="From custom app design to seamless backend integration, we deliver role-based dashboards that users love."
      processSteps={[
        { title: "Customized UI/UX Design", description: "Deliver intuitive and modern SAP user interfaces tailored to business needs with Fiori theme customization and persona-based roles.", icon: <Layout className="w-5 h-5" /> },
        { title: "SAP Fiori App Development", description: "Build custom SAP Fiori applications using SAPUI5 framework, MVC architecture, and secure OData service integration.", icon: <Code className="w-5 h-5" /> },
        { title: "Fiori Launchpad Configuration", description: "Organize apps with tile-based layouts, role-based catalogs, and single sign-on (SSO) for centralized access.", icon: <Settings className="w-5 h-5" /> },
        { title: "Integration with SAP Backend", description: "Securely connect Fiori apps to SAP ECC/S4HANA using OData service development and SAP Gateway configuration.", icon: <Repeat className="w-5 h-5" /> },
        { title: "Performance Optimization", description: "Boost application efficiency through lazy loading, UI rendering optimization, and efficient data binding.", icon: <Zap className="w-5 h-5" /> },
        { title: "Migration to Fiori 3.0", description: "Seamless migration of legacy applications to the latest Fiori standards, including Horizon theme and Fiori Elements.", icon: <RefreshCw className="w-5 h-5" /> },
      ]}
      statsTitle="User Experience Impact Metrics"
      stats={[
        { value: "40%", label: "Improved User Productivity", icon: <Zap className="w-6 h-6" /> },
        { value: "60%", label: "Process Completion Speed", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "50%", label: "Enhanced User Adoption", icon: <Users className="w-6 h-6" /> },
        { value: "100%", label: "Mobile-First UX", icon: <Smartphone className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="Future-Ready SAP Capabilities, Today"
      capabilitiesDescription="We leverage the latest technologies to build intelligent, scalable, and resilient enterprise solutions."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServices={relatedServices}
    />
  );
}

export default SAPFiori;
