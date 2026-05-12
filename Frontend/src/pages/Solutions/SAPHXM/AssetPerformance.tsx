import React from "react";
import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import {
 Activity,
 ClipboardCheck,
 Settings,
 Layers,
 Database,
 BarChart,
 Users,
 LifeBuoy,
 Globe,
 Rocket,
 ShieldCheck,
 Briefcase,
 Zap,
 CheckCircle2,
 LineChart,
 Target,
 Wrench
} from "lucide-react";

// Data Structures
const apmStrategy = [
 {
 title: "Assess Maturity",
 icon: <ClipboardCheck className="w-8 h-8 text-orange-600" />,
 items: ["Assess current asset management maturity", "Gap analysis against best practices"],
 },
 {
 title: "Define Goals",
 icon: <Target className="w-8 h-8 text-orange-600" />,
 items: ["Define business goals and KPIs", "Align with corporate strategy"],
 },
 {
 title: "Rollout Plan",
 icon: <Rocket className="w-8 h-8 text-orange-600" />,
 items: ["Develop phased SAP APM rollout", "Roadmap for digital transformation"],
 },
];

const implementationIntegration = [
 {
 title: "Module Configuration",
 desc: "Configure Asset Strategy, Risk & Criticality, and Reliability-Centered Maintenance.",
 },
 {
 title: "System Integration",
 desc: "Seamless integration with SAP EAM/Plant Maintenance and IoT platforms.",
 },
 {
 title: "Connectivity",
 desc: "Set up connectivity to sensors, historians, and external systems.",
 },
];

const dataPreparation = [
 {
 title: "Data Cleansing",
 icon: <Database className="w-6 h-6" />,
 desc: "Cleanse and structure asset master data for accuracy.",
 },
 {
 title: "Hierarchy & Criticality",
 icon: <Layers className="w-6 h-6" />,
 desc: "Develop robust equipment hierarchies and criticality assessments.",
 },
 {
 title: "Governance",
 icon: <ShieldCheck className="w-6 h-6" />,
 desc: "Establish governance processes for continuous data quality.",
 },
];

const predictiveAnalytics = [
 {
 title: "Predictive Models",
 icon: (
 <Activity className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Build models for failure detection and performance optimization.",
 },
 {
 title: "AI Recommendations",
 icon: (
 <Zap className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Use machine learning and AI to generate actionable insights.",
 },
 {
 title: "Real-Time Optimization",
 icon: (
 <BarChart className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Dashboards and reports for real-time performance tracking.",
 },
];

const changeManagementAndSupport = [
 "Stakeholder engagement and training",
 "User adoption plans and communication strategies",
 "Role-based training for planners and engineers",
 "Hypercare and post-go-live support",
 "Periodic performance reviews",
 "Continuous refinement of asset strategies"
];






const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];
const endToEndServices = ["Cloud & On-Prem Expertise", "Innovation-Driven", "Change Management & Training", "Value Realization & Continuous Improvement", "License Advisory & Optimization", "Security & Compliance"];
const techTrends = ["Application Development", "Data & Analytics", "Automation", "Integration", "ABAP", "SAC", "FIORI", "RPA", "CPI", "AI"];

const AssetPerformance = () => {
 return (
 <SolutionPageLayout
      title="Asset Performance Management"
      subtitle="Delivering Impact-Driven SAP Implementations for Sustainable Growth."
      breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: "SAP HXM", path: "/solutions/successfactors" }, { name: "Asset Performance", path: "/solutions/asset-performance-management" }]}
      backgroundImage="/Solutions/service.jpeg"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-600 pt-2">SAP Growth</span></>}
      impactDescription="Maximize the health and performance of your critical assets with SAP APM. Leverage predictive insights to reduce downtime and optimize maintenance strategies."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
 {/* Hero Section */}

 {/* SECTION 2: Strategy & Roadmap */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <div className="mb-12">
 <h2 className="text-base font-bold text-slate-900">
 APM Strategy & Roadmap
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {apmStrategy.map((card, i) => (
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

 {/* SECTION 3: Implementation & Integration */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-5xl mx-auto">
 <div className="mb-16 text-center">
 <h2 className="text-base font-bold text-slate-900 flex items-center justify-center gap-3">
 <Settings className="text-orange-600" /> Implementation & Integration
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {implementationIntegration.map((step, i) => (
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

 {/* SECTION 4: Predictive Analytics (Split Layout) */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
 <div className="md:w-1/2">
 <h2 className="text-base font-bold text-slate-900 mb-6">
 Predictive Analytics & Insights
 </h2>
 <div className="space-y-6">
 {predictiveAnalytics.map((group, i) => (
 <div key={i}>
 <h3 className="font-semibold text-lg text-slate-800 mb-2 flex items-center gap-2">
 {group.icon}
 {group.title}
 </h3>
 <p className="text-slate-600 pl-7 border-l-2 border-orange-200 ml-2">
 {group.desc}
 </p>
 </div>
 ))}
 </div>
 </div>
 <div className="md:w-1/2 flex justify-center">
 <div className="w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center relative overflow-hidden">
 <div className="absolute inset-0 bg-orange-200/50 transform -rotate-12 translate-x-10 translate-y-10"></div>
 <LineChart className="w-24 h-24 text-orange-600 relative z-10" />
 </div>
 </div>
 </div>
 </section>

 {/* SECTION 5: Data Preparation & Governance */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Data Preparation & Governance
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {dataPreparation.map((card, i) => (
 <div
 key={i}
 className="group h-full p-8 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-300 flex flex-col items-center text-center"
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

 {/* SECTION 6: Change Management & Support (List w/ Spinner) */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-6xl mx-auto">
 <div className="bg-slate-50 border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="md:w-2/3">
 <div className="flex items-center gap-3 mb-4">
 <Users className="text-orange-600 w-8 h-8" />
 <h2 className="text-base font-bold text-slate-900">
 Change Management & Support
 </h2>
 </div>
 <ul className="space-y-3 mb-6">
 {changeManagementAndSupport.map((service, i) => (
 <li key={i} className="flex items-center gap-3 text-slate-600">
 <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
 {service}
 </li>
 ))}
 </ul>
 </div>
 <div className="md:w-1/3 flex justify-center">
 <div className="hidden md:block w-32 h-32 border-4 border-dashed border-orange-200 rounded-full flex items-center justify-center animate-spin-slow">
 <LifeBuoy className="w-12 h-12 text-orange-300" />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* SECTION 10: Call to Action */}
    </SolutionPageLayout>
 );
};

export default AssetPerformance;

