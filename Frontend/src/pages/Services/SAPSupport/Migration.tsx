import ServicePageLayout from "@/components/layout/ServicePageLayout";
import { CheckCircle, TrendingUp, Zap, Cpu, Layers, Code, Cloud, Database, Bot, Globe, Shield, Users, Settings, LineChart, LifeBuoy, RefreshCw, Repeat, Smartphone, Factory, Award, Rocket, Target } from "lucide-react";

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
  { title: "Upgrades", desc: "Technical upgrades and EHP installation.", icon: <TrendingUp className="w-8 h-8 text-orange-500" />, link: "/upgrades" },
  { title: "ABAP Development", desc: "Custom ABAP RAP development and Fiori apps.", icon: <Code className="w-8 h-8 text-orange-500" />, link: "/abap" },
  { title: "Application Dev", desc: "BTP cloud-native app development.", icon: <Settings className="w-8 h-8 text-orange-500" />, link: "/application-development" },
  { title: "Support", desc: "L1/L2/L3 support and AMS frameworks.", icon: <LifeBuoy className="w-8 h-8 text-orange-500" />, link: "/support-maintainance" },
  { title: "Integration", desc: "PI/PO/CPI middleware integration services.", icon: <Repeat className="w-8 h-8 text-orange-500" />, link: "/integration" },
  { title: "Training", desc: "Corporate training and user enablement workshops.", icon: <Users className="w-8 h-8 text-orange-500" />, link: "/training" },
  { title: "Testing", desc: "Automated test scripts and performance testing.", icon: <CheckCircle className="w-8 h-8 text-orange-500" />, link: "/testing" },
];

function Migration() {
  return (
    <ServicePageLayout
      title="Safe & Efficient SAP Migration"
      subtitle="Sria Infotech ensures smooth, low-risk migration from legacy systems to SAP's advanced environment."
      breadcrumbs={[
        { name: "Services", path: "/services" },
        { name: "SAP Support", path: "/services/sap-support" },
        { name: "Migration Services", path: "/services/sap-migration" },
      ]}
      backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455220/sria/Services/migration.jpg"
      processTitle="Delivering Impact-Driven SAP Migrations for Sustainable Growth"
      processDescription="Our proven methodology ensures a risk-free, on-time, and on-budget transformation journey."
      processSteps={[
        { title: "Comprehensive Assessment", description: "Detailed analysis of your existing systems and processes. Identification of potential risks and mitigation strategies.", icon: <Target className="w-5 h-5" /> },
        { title: "Migration Planning", description: "Customized roadmap for a seamless transition. Resource allocation and timeline management.", icon: <Target className="w-5 h-5" /> },
        { title: "Data Migration and Validation", description: "Data extraction, transformation, and loading (ETL). Rigorous testing to ensure data accuracy and completeness.", icon: <Database className="w-5 h-5" /> },
        { title: "System Configuration", description: "Configuration of SAP systems to meet business requirements. Integration with third-party applications and systems.", icon: <Settings className="w-5 h-5" /> },
        { title: "User Training and Change Management", description: "Tailored training programs for end-users and IT staff. Change management strategies to ensure user adoption.", icon: <Users className="w-5 h-5" /> },
        { title: "Post-Migration Support", description: "Ongoing monitoring and optimization. Dedicated support to address any issues post-go-live.", icon: <LifeBuoy className="w-5 h-5" /> },
      ]}
      statsTitle="Measurable Business Impact"
      stats={[
        { value: "40%", label: "Faster Migration Cycles", icon: <Zap className="w-6 h-6" /> },
        { value: "100%", label: "Data Integrity & Security", icon: <Shield className="w-6 h-6" /> },
        { value: "30%", label: "Reduction in Rollout Costs", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "24/7", label: "Global Support Coverage", icon: <Globe className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="Future-Ready SAP Capabilities, Today"
      capabilitiesDescription="We leverage the latest technologies to build intelligent, scalable, and resilient enterprise solutions."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServices={relatedServices}
    />
  );
}

export default Migration;
