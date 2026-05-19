import ServicePageLayout from "@/components/layout/ServicePageLayout";
import { CheckCircle, TrendingUp, Zap, Cpu, Layers, Code, Cloud, Database, Bot, Globe, Shield, Users, Settings, LineChart, LifeBuoy, RefreshCw, Repeat, Smartphone, Factory, Award, Rocket, Search } from "lucide-react";

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
  { title: "ABAP Development", desc: "Custom ABAP RAP development and Fiori apps.", icon: <Code className="w-8 h-8 text-orange-500" />, link: "/abap" },
  { title: "Application Dev", desc: "BTP cloud-native app development.", icon: <Settings className="w-8 h-8 text-orange-500" />, link: "/application-development" },
  { title: "Support", desc: "L1/L2/L3 support and AMS frameworks.", icon: <LifeBuoy className="w-8 h-8 text-orange-500" />, link: "/support-maintainance" },
  { title: "Integration", desc: "PI/PO/CPI middleware integration services.", icon: <Repeat className="w-8 h-8 text-orange-500" />, link: "/integration" },
  { title: "Training", desc: "Corporate training and user enablement workshops.", icon: <Users className="w-8 h-8 text-orange-500" />, link: "/training" },
  { title: "Testing", desc: "Automated test scripts and performance testing.", icon: <CheckCircle className="w-8 h-8 text-orange-500" />, link: "/testing" },
];

function Upgrade() {
  return (
    <ServicePageLayout
      title="SAP Upgrade Services"
      subtitle="Modernize your SAP landscape with seamless technical and functional upgrades that drive performance and innovation."
      breadcrumbs={[
        { name: "Services", path: "/services" },
        { name: "SAP Support", path: "/services/sap-support" },
        { name: "Upgrade Services", path: "/services/sap-upgrades" },
      ]}
      backgroundImage="/Services/upgrade.jpeg"
      processTitle="Delivering Impact-Driven SAP Upgrades for Sustainable Growth"
      processDescription="Our proven upgrade methodology ensures minimal downtime and maximum functional value for your enterprise."
      processSteps={[
        { title: "Assessment & Planning", description: "Analyze current SAP landscape (ECC, S/4HANA, BW, CRM). Use SAP Readiness Check tools to assess impact and create a phased upgrade roadmap aligned with business goals.", icon: <Search className="w-5 h-5" /> },
        { title: "Technical Upgrade", description: "Execute technical upgrades using SAP Software Update Manager (SUM). Manage system copies, database upgrades (HANA/Oracle), and application of latest SP stacks and kernel patches.", icon: <Settings className="w-5 h-5" /> },
        { title: "Functional Upgrade", description: "Identify process optimization opportunities and activate new features. Enhance Fiori UI and provide comprehensive testing support (Regression, Integration, UAT).", icon: <Zap className="w-5 h-5" /> },
        { title: "Custom Code Remediation", description: "Analyze and adapt custom developments for version compatibility. Use SAP Migration tools for S/4HANA adaptation and refactor code for performance optimization.", icon: <Code className="w-5 h-5" /> },
        { title: "Data Management", description: "Implement archiving strategies to manage data volume before migration. Perform rigorous data consistency checks to ensure integrity post-upgrade.", icon: <Database className="w-5 h-5" /> },
        { title: "Training & Change Management", description: "Enable key users on new features and support organizational adoption. Provide multi-format training guides and manage hands-on enablement sessions.", icon: <Users className="w-5 h-5" /> },
        { title: "Post-Upgrade Support", description: "Provide immediate hypercare support post-go-live. Ensure long-term stability with performance monitoring and ongoing Application Management Services (AMS).", icon: <LifeBuoy className="w-5 h-5" /> },
      ]}
      statsTitle="Measurable Business Impact"
      stats={[
        { value: "50%", label: "Enhanced System Performance", icon: <Zap className="w-6 h-6" /> },
        { value: "60%", label: "System Uptime Improvement", icon: <Shield className="w-6 h-6" /> },
        { value: "70%", label: "Reduction in Resolution Time", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "24/7", label: "Global Hypercare Support", icon: <Globe className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="Future-Ready SAP Capabilities, Today"
      capabilitiesDescription="We leverage the latest technologies to build intelligent, scalable, and resilient enterprise solutions."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServices={relatedServices}
    />
  );
}

export default Upgrade;
