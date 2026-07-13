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
  { title: "ABAP Development", desc: "Custom ABAP RAP development and Fiori apps.", icon: <Code className="w-8 h-8 text-orange-500" />, link: "/abap" },
  { title: "Support", desc: "L1/L2/L3 support and AMS frameworks.", icon: <LifeBuoy className="w-8 h-8 text-orange-500" />, link: "/support-maintainance" },
  { title: "Integration", desc: "PI/PO/CPI middleware integration services.", icon: <Repeat className="w-8 h-8 text-orange-500" />, link: "/integration" },
  { title: "Training", desc: "Corporate training and user enablement workshops.", icon: <Users className="w-8 h-8 text-orange-500" />, link: "/training" },
  { title: "Testing", desc: "Automated test scripts and performance testing.", icon: <CheckCircle className="w-8 h-8 text-orange-500" />, link: "/testing" },
];

function Application() {
  return (
    <ServicePageLayout
      title="SAP Application Development"
      subtitle="Build powerful, scalable SAP applications on BTP and S/4HANA that drive innovation, efficiency, and seamless user experiences."
      breadcrumbs={[
        { name: "Services", path: "/services" },
        { name: "SAP Support", path: "/services/sap-support" },
        { name: "Application Development", path: "/services/sap-application-development" },
      ]}
      backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Services/application.jpg?tr=f-auto,q-auto,w-2000"
      processTitle="Delivering Scalable SAP Applications for Modern Enterprises"
      processDescription="From Fiori UX to cloud-native BTP apps, we design and build solutions that keep pace with your business."
      processSteps={[
        { title: "Custom Application Development", description: "Build bespoke SAP applications tailored to your business requirements using SAP BTP for cloud-based innovation and seamless integration.", icon: <Code className="w-5 h-5" /> },
        { title: "SAP Fiori and UX Enhancements", description: "Develop intuitive, user-friendly interfaces with SAP Fiori. Modernize user experiences to improve productivity across all devices.", icon: <Smartphone className="w-5 h-5" /> },
        { title: "Extensions and Integrations", description: "Extend core SAP functionalities with custom extensions. Integrate SAP systems with third-party tools for a unified ecosystem.", icon: <Repeat className="w-5 h-5" /> },
        { title: "SAP S/4HANA Enablement", description: "Design and build applications optimized for SAP S/4HANA. Leverage in-memory computing capabilities for real-time insights.", icon: <Zap className="w-5 h-5" /> },
        { title: "Mobile Solutions", description: "Develop mobile applications to access SAP functionalities on the go. Ensure secure, responsive, and high-performance mobile experiences.", icon: <Globe className="w-5 h-5" /> },
        { title: "Analytics and Reporting", description: "Build custom analytics dashboards and reports. Integrate SAP Analytics Cloud for advanced data visualization and strategic decision-making.", icon: <LineChart className="w-5 h-5" /> },
      ]}
      statsTitle="Measurable Business Impact"
      stats={[
        { value: "50%+", label: "Enhanced UX Efficiency", icon: <Zap className="w-6 h-6" /> },
        { value: "100%", label: "BTP Security Compliance", icon: <Shield className="w-6 h-6" /> },
        { value: "35%", label: "Reduction in Dev Cycle", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "24/7", label: "Global Technical Support", icon: <Globe className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="Future-Ready SAP Capabilities, Today"
      capabilitiesDescription="We leverage the latest technologies to build intelligent, scalable, and resilient enterprise solutions."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServices={relatedServices}
    />
  );
}

export default Application;
