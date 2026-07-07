import ServicePageLayout from "@/components/layout/ServicePageLayout";
import {
  CheckCircle, TrendingUp, Zap, Cpu, Layers, Code, Cloud,
  Database, Bot, Globe, Shield, Users, Settings, LineChart,
  LifeBuoy, RefreshCw, Repeat, Smartphone, Factory, Award, Rocket, Target
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
  { title: "Rollouts", desc: "Global template rollouts to new geographies.", icon: <Globe className="w-8 h-8 text-orange-500" />, link: "/rollouts" },
  { title: "Migrations", desc: "Safe migration to S/4HANA from ECC or non-SAP.", icon: <RefreshCw className="w-8 h-8 text-orange-500" />, link: "/migrations" },
  { title: "Upgrades", desc: "Technical upgrades and EHP installation.", icon: <TrendingUp className="w-8 h-8 text-orange-500" />, link: "/upgrades" },
  { title: "ABAP Development", desc: "Custom ABAP RAP development and Fiori apps.", icon: <Code className="w-8 h-8 text-orange-500" />, link: "/abap" },
  { title: "Application Development", desc: "BTP cloud-native app development.", icon: <Layers className="w-8 h-8 text-orange-500" />, link: "/application-development" },
  { title: "Support", desc: "L1/L2/L3 support and AMS frameworks.", icon: <LifeBuoy className="w-8 h-8 text-orange-500" />, link: "/support-maintainance" },
  { title: "Integration", desc: "PI/PO/CPI middleware integration services.", icon: <Repeat className="w-8 h-8 text-orange-500" />, link: "/integration" },
  { title: "Training", desc: "Corporate training and user enablement workshops.", icon: <Users className="w-8 h-8 text-orange-500" />, link: "/training" },
  { title: "Testing", desc: "Automated test scripts and performance testing.", icon: <CheckCircle className="w-8 h-8 text-orange-500" />, link: "/testing" },
];

function Implementation() {
  return (
    <ServicePageLayout
      title="Fast-Track SAP S/4HANA Implementation"
      subtitle="We deliver tailored SAP implementations aligned to your business goals, ensuring a smooth transition and maximum value."
      breadcrumbs={[
        { name: "Services", path: "/services" },
        { name: "SAP Support", path: "/services/sap-support" },
        { name: "SAP Implementation", path: "/services/sap-implementation" },
      ]}
      backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779455218/sria/Services/implement-hero.jpg"
      processTitle="Delivering Impact-Driven SAP Implementations for Sustainable Growth"
      processDescription="Our proven methodology ensures a risk-free, on-time, and on-budget transformation journey."
      processSteps={[
        { title: "Assessment & Planning", description: "We analyze your landscape, define the roadmap, and conduct a fit-gap analysis to ensure a solid foundation.", icon: <Target className="w-5 h-5" /> },
        { title: "System Design", description: "Blueprint creation and module configuration tailored to your specific business processes and industry needs.", icon: <Settings className="w-5 h-5" /> },
        { title: "Migration & Integration", description: "Secure data cleansing, validation, and seamless migration from legacy systems with zero data loss.", icon: <Database className="w-5 h-5" /> },
        { title: "Training & Change", description: "Comprehensive end-user training and change management to ensure rapid adoption and minimal disruption.", icon: <Users className="w-5 h-5" /> },
        { title: "Testing & QA", description: "Rigorous unit, integration, and user acceptance testing to guarantee a bug-free go-live.", icon: <CheckCircle className="w-5 h-5" /> },
        { title: "Go-Live & Support", description: "Smooth cutover execution followed by hypercare support and continuous system optimization.", icon: <LifeBuoy className="w-5 h-5" /> },
      ]}
      statsTitle="Measurable Business Impact"
      stats={[
        { value: "40%", label: "Faster Implementation Cycles", icon: <Zap className="w-6 h-6" /> },
        { value: "100%", label: "Data Integrity & Security", icon: <Shield className="w-6 h-6" /> },
        { value: "30%", label: "Reduction in TCO", icon: <TrendingUp className="w-6 h-6" /> },
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

export default Implementation;
