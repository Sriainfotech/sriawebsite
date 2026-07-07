import React from "react";
import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import {
 BarChart,
 Cloud,
 CheckCircle2,
 Layers,
 Code2,
 Users,
 LifeBuoy,
 Zap,
 Settings,
 Factory,
 Globe,
 ShieldCheck,
 Briefcase,
 Rocket,
 TrendingUp,
 Database,
 Lock,
 Server,
 RefreshCw,
 Layout,
 FileCheck,
 GraduationCap,
 Cpu,
 PieChart,
 Map,
} from "lucide-react";

// Data Structures
const advisoryServices = [
 {
 title: "Fit-to-Standard",
 icon: <Users className="w-8 h-8 text-orange-600" />,
 items: ["Workshops", "Business process discovery and mapping"],
 },
 {
 title: "Readiness Check",
 icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />,
 items: ["Landscape assessment", "Cloud readiness evaluation"],
 },
];

const systemSetupServices = [
 {
 title: "Provisioning & Access",
 desc: "Tenant provisioning and system access setup.",
 },
 {
 title: "Identity Management",
 desc: "Identity and Access Management (IAM) configuration.",
 },
 {
 title: "Org & Master Data",
 desc: "Organizational structure and master data setup.",
 },
];

const configServices = [
 "Pre-configured best practices activation (SAP Best Practices Explorer)",
 "Country- and industry-specific configurations",
 "Business process scoping in SAP Central Business Configuration (CBC)",
];

const migrationServices = [
 {
 title: "Data Preparation",
 icon: (
 <Database className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-600 mb-6 transition-colors" />
 ),
 desc: "Data cleansing and transformation for accurate migration.",
 },
 {
 title: "Execution & Validation",
 icon: (
 <RefreshCw className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-600 mb-6 transition-colors" />
 ),
 desc: "Using SAP Migration Cockpit, validation, and reconciliation.",
 },
];

const integrationServices = [
 {
 title: "SAP BTP Integrations",
 icon: <Layers className="w-6 h-6" />,
 desc: "Seamless connection via SAP Integration Suite.",
 },
 {
 title: "Standard Connectivity",
 icon: <Globe className="w-6 h-6" />,
 desc: "Standard APIs and iFlows from SAP API Hub.",
 },
 {
 title: "Non-SAP Systems",
 icon: <Server className="w-6 h-6" />,
 desc: "Integration with CRM, PLM, and eCommerce platforms.",
 },
];

const amsServices = [
 "Incident and problem resolution",
 "Release and regression testing for quarterly upgrades",
 "SLA-driven support models",
];

const trainingServices = [
 {
 title: "User Enablement",
 items: ["End-user and super-user training", "Role-based documentation"],
 },
 {
 title: "eLearning",
 items: ["Custom eLearning modules", "Continuous learning paths"],
 },
];

const continuousImprovement = [
 {
 title: "KPI Monitoring",
 icon: <BarChart className="w-8 h-8 text-orange-600" />,
 desc: "Continuous monitoring and optimization of KPIs.",
 },
 {
 title: "Process Improvement",
 icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
 desc: "Business process improvement recommendations.",
 },
];

const analyticsServices = [
 "Embedded SAP Analytics Cloud dashboards",
 "Custom KPIs and real-time reporting",
];

const extensibilityServices = [
 {
 title: "In-App Extensibility",
 desc: "Custom fields, logic, and UI adjustments.",
 },
 {
 title: "Side-by-Side Extensions",
 desc: "Developments via SAP BTP (CAP, RAP).",
 },
];

const localizationServices = [
 "Country-specific legal and tax requirements",
 "E-invoicing and statutory reporting",
];






const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];
const endToEndServices = ["Cloud & On-Prem Expertise", "Innovation-Driven", "Change Management & Training", "Value Realization & Continuous Improvement", "License Advisory & Optimization", "Security & Compliance"];
const techTrends = ["Application Development", "Data & Analytics", "Automation", "Integration", "ABAP", "SAC", "FIORI", "RPA", "CPI", "AI"];

const PublicCloud = () => {
 return (
 <SolutionPageLayout
      title="Unlock Agility & Innovation"
      subtitle="SAP S/4HANA Public Cloud is a comprehensive, next-generation ERP solution designed for scalability, agility, and innovation."
      breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: "SAP ERP", path: "/solutions/sap-erp" }, { name: "Public Cloud", path: "/solutions/public-cloud" }]}
      backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779455283/sria/Solutions/public-hero.jpg"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-500 pt-2">SAP Growth</span></>}
      impactDescription="We empower enterprises with future-ready SAP solutions, ensuring seamless transformation, operational excellence, and long-term value creation."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
 {/* Hero Section */}

 {/* SECTION 2: Advisory & Readiness Assessment */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <div className="mb-12">
 <h2 className="text-base font-bold text-slate-900">
 Advisory & Readiness Assessment
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {advisoryServices.map((card, i) => (
 <div
 key={i}
 className="group p-8 bg-slate-50 hover:bg-white border border-slate-100 hover:border-orange-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
 >
 <div className="mb-6 p-3 bg-orange-50 w-fit rounded-lg group-hover:bg-orange-200 group-hover:text-white transition-colors duration-300">
 {card.icon}
 </div>
 <h3 className="text-base font-semibold mb-4 text-slate-900">
 {card.title}
 </h3>
 <ul className="space-y-2">
 {card.items.map((item, j) => (
 <li
 key={j}
 className="text-slate-600 text-sm flex items-center gap-2"
 >
 <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />{" "}
 {item}
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 3: Initial System Setup */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-5xl mx-auto">
 <div className="mb-16 text-center">
 <h2 className="text-base font-bold text-slate-900">
 Initial System Setup
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {systemSetupServices.map((step, i) => (
 <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-orange-500">
 <h3 className="text-base font-bold text-slate-900 mb-2">
 {step.title}
 </h3>
 <p className="text-slate-600">{step.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 4: Business Process Configuration */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
 <div className="lg:w-1/3 sticky top-24 self-start">
 <h2 className="text-base font-bold text-slate-900 mb-6">
 Business Process Configuration
 </h2>
 <p className="text-slate-600 text-lg leading-relaxed">
 Activate and configure best practices tailored to your specific industry needs.
 </p>
 </div>
 <div className="lg:w-2/3 space-y-6">
 {configServices.map((item, i) => (
 <div
 key={i}
 className="flex items-start gap-4 p-6 border border-slate-100 rounded-xl hover:border-orange-200 transition-colors duration-300 bg-slate-50/50"
 >
 <div className="mt-1 flex-shrink-0">
 <CheckCircle2 className="w-6 h-6 text-orange-600" />
 </div>
 <span className="text-lg text-slate-800 font-medium">
 {item}
 </span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 5: Data Migration */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Data Migration
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {migrationServices.map((service, i) => (
 <div
 key={i}
 className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-600 hover:ring-1 hover:ring-orange-600 transition-all duration-300 group text-center"
 >
 {service.icon}
 <h3 className="text-base font-bold mb-3">{service.title}</h3>
 <p className="text-slate-600">{service.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 6: Integration Services */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12">
 Integration Services
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {integrationServices.map((card, i) => (
 <div
 key={i}
 className="group h-full p-8 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-300 flex flex-col items-center text-center"
 >
 <div className="mb-4 p-3 bg-slate-100 rounded-full text-slate-600 group-hover:scale-110 group-hover:bg-orange-100 group-hover:text-orange-600 transition-all duration-300">
 {card.icon}
 </div>
 <h3 className="text-lg font-semibold text-slate-900">
 {card.title}
 </h3>
 <p className="text-slate-600 mt-2">{card.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 7: Application Management Services (AMS) */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-6xl mx-auto">
 <div className="bg-white border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="md:w-2/3">
 <div className="flex items-center gap-3 mb-4">
 <LifeBuoy className="text-orange-600 w-8 h-8" />
 <h2 className="text-base font-bold text-slate-900">
 Application Management Services (AMS)
 </h2>
 </div>
 <ul className="space-y-2 mb-6">
 {amsServices.map((service, i) => (
 <li key={i} className="flex items-center gap-2 text-slate-600">
 <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
 {service}
 </li>
 ))}
 </ul>
 </div>
 <div className="md:w-1/3 flex justify-center">
 <div className="hidden md:block w-32 h-32 border-4 border-dashed border-orange-200 rounded-full flex items-center justify-center animate-spin-slow">
 <Settings className="w-12 h-12 text-orange-300" />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* SECTION 8: User Training & Change Management */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
 <div className="md:w-1/2">
 <h2 className="text-base font-bold text-slate-900 mb-6">
 User Training & Change Management
 </h2>
 <div className="space-y-6">
 {trainingServices.map((group, i) => (
 <div key={i}>
 <h3 className="font-semibold text-lg text-slate-800 mb-2">{group.title}</h3>
 <ul className="pl-4 space-y-1 border-l-2 border-orange-200">
 {group.items.map((item, j) => (
 <li key={j} className="text-slate-600 pl-2">{item}</li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 <div className="md:w-1/2 flex justify-center">
 <div className="w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center relative overflow-hidden">
 <div className="absolute inset-0 bg-orange-200/50 transform -rotate-12 translate-x-10 translate-y-10"></div>
 <GraduationCap className="w-24 h-24 text-orange-600 relative z-10" />
 </div>
 </div>
 </div>
 </section>

 {/* SECTION 15: Elevate, Innovate, and Thrive with SAP */}
    </SolutionPageLayout>
 );
};

export default PublicCloud;

