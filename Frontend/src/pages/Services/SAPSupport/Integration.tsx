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
  { title: "Implementation", desc: "End-to-end greenfield & brownfield implementations.", icon: <Layers className="w-8 h-8 text-orange-500" />, link: "/implement" },
  { title: "Rollouts", desc: "Global template rollouts to new geographies.", icon: <Globe className="w-8 h-8 text-orange-500" />, link: "/rollouts" },
  { title: "Migrations", desc: "Safe migration to S/4HANA from ECC or non-SAP.", icon: <RefreshCw className="w-8 h-8 text-orange-500" />, link: "/migrations" },
  { title: "Upgrades", desc: "Technical upgrades and EHP installation.", icon: <TrendingUp className="w-8 h-8 text-orange-500" />, link: "/upgrades" },
  { title: "ABAP Development", desc: "Custom ABAP RAP development and Fiori apps.", icon: <Code className="w-8 h-8 text-orange-500" />, link: "/abap" },
  { title: "Support", desc: "L1/L2/L3 support and AMS frameworks.", icon: <LifeBuoy className="w-8 h-8 text-orange-500" />, link: "/support-maintainance" },
  { title: "Application Dev", desc: "BTP cloud-native app development.", icon: <Settings className="w-8 h-8 text-orange-500" />, link: "/application-development" },
  { title: "Training", desc: "Corporate training and user enablement workshops.", icon: <Users className="w-8 h-8 text-orange-500" />, link: "/training" },
  { title: "Testing", desc: "Automated test scripts and performance testing.", icon: <CheckCircle className="w-8 h-8 text-orange-500" />, link: "/testing" },
];

function Integration() {
  return (
    <ServicePageLayout
      title="SAP BTP & Hybrid Integration"
      subtitle="Unify your enterprise landscape with seamless connectivity across SAP, non-SAP, cloud, and on-premise systems."
      breadcrumbs={[
        { name: "Services", path: "/services" },
        { name: "SAP Support", path: "/services/sap-support" },
        { name: "Integration Services", path: "/services/sap-integration" },
      ]}
      backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455203/sria/Services/business.png"
      processTitle="Delivering Seamless Integration Across Your Enterprise Landscape"
      processDescription="We leverage modern middleware and API-first strategies to build a resilient, connected intelligent enterprise."
      processSteps={[
        { title: "Integration Strategy & Assessment", description: "Evaluate existing landscape and integration architecture. Define roadmap aligned with business goals and assess readiness for SAP BTP adoption.", icon: <Target className="w-5 h-5" /> },
        { title: "SAP BTP & Cloud Integration", description: "SAP Integration Suite implementation including Cloud Integration, API Management, and Event Mesh. Real-time and batch scenarios with B2B EDI/AS2 integration.", icon: <Cloud className="w-5 h-5" /> },
        { title: "SAP PI/PO and CPI Migration", description: "Migrate legacy SAP PI/PO scenarios to SAP Cloud Integration (CPI). Convert message mappings, interface designs, and RFC/BAPI calls.", icon: <RefreshCw className="w-5 h-5" /> },
        { title: "API Management & Development", description: "Develop and publish REST/SOAP APIs via SAP API Management. Secure with OAuth/SAML and govern usage with throttling and analytics.", icon: <Code className="w-5 h-5" /> },
        { title: "Integration with Non-SAP Systems", description: "Connect with Salesforce, MS Dynamics, Magento, Shopify, and more. Middleware support for Boomi, MuleSoft, and Informatica.", icon: <Globe className="w-5 h-5" /> },
        { title: "IoT & Event-Driven Integration", description: "Connect IoT devices and industrial systems to SAP via Event Mesh. Trigger SAP workflows based on real-time IoT data streams.", icon: <Zap className="w-5 h-5" /> },
        { title: "SAP S/4HANA Integration", description: "Core Data Services (CDS), OData, and BAPI integrations. Embedded analytics and Fiori app connectivity with side-by-side extensions.", icon: <Repeat className="w-5 h-5" /> },
        { title: "Monitoring, Support & Maintenance", description: "Proactive monitoring using SAP Solution Manager or BTP tools. SLA-based support and ongoing optimization.", icon: <LifeBuoy className="w-5 h-5" /> },
      ]}
      statsTitle="Measurable Business Impact"
      stats={[
        { value: "60%", label: "Faster Integration Setup", icon: <Zap className="w-6 h-6" /> },
        { value: "99.9%", label: "Interface Uptime", icon: <Shield className="w-6 h-6" /> },
        { value: "45%", label: "TCO Reduction", icon: <TrendingUp className="w-6 h-6" /> },
        { value: "500+", label: "Pre-built Connectors", icon: <Globe className="w-6 h-6" /> },
      ]}
      capabilitiesTitle="Future-Ready SAP Capabilities, Today"
      capabilitiesDescription="We leverage the latest technologies to build intelligent, scalable, and resilient enterprise solutions."
      capabilities={capabilities}
      techTrends={techTrends}
      relatedServices={relatedServices}
    />
  );
}

export default Integration;
