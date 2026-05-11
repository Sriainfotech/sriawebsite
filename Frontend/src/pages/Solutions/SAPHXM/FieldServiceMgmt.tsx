import React from "react";
import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import {
 Wrench,
 ClipboardCheck,
 Settings,
 Layers,
 Smartphone,
 BarChart,
 Users,
 Calendar,
 Globe,
 Rocket,
 ShieldCheck,
 Briefcase,
 Zap,
 CheckCircle2,
 MapPin,
 MessageSquare,
 GraduationCap
} from "lucide-react";

// Data Structures
const advisoryServices = [
 {
 title: "Readiness Assessment",
 icon: <ClipboardCheck className="w-8 h-8 text-orange-600" />,
 items: ["FSM readiness assessment", "Business process evaluation & mapping"],
 },
 {
 title: "Fit-Gap Analysis",
 icon: <BarChart className="w-8 h-8 text-orange-600" />,
 items: ["Analysis with current systems (ERP, CRM)", "ROI analysis & business case prep"],
 },
 {
 title: "Process Optimization",
 icon: <MapPin className="w-8 h-8 text-orange-600" />,
 items: ["Field operations mapping", "Dispatching & mobile workforce optimization"],
 },
];

const implementationServices = [
 {
 title: "System Config",
 desc: "FSM system configuration, master data setup (equipment, customers, workforce).",
 },
 {
 title: "Workflow Design",
 desc: "Service call execution, feedback loops, and billing workflows.",
 },
 {
 title: "Smart Scheduling",
 desc: "AI-based dynamic scheduling & dispatching optimization.",
 },
];

const integrationServices = [
 {
 title: "Backend Integration",
 icon: <Settings className="w-6 h-6" />,
 desc: "Seamless integration with SAP S/4HANA (PM/CS) or ECC.",
 },
 {
 title: "CRM Connectivity",
 icon: <Users className="w-6 h-6" />,
 desc: "Connects with Sales Cloud, Service Cloud, and Salesforce.",
 },
 {
 title: "Mobile & HR",
 icon: <Smartphone className="w-6 h-6" />,
 desc: "Integration with mobile apps (iOS/Android) and HR systems.",
 },
];

const customDevelopment = [
 {
 title: "UI & Mobile Enhancements",
 icon: (
 <Smartphone className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Custom UI, offline mobile functionality, and app enhancements.",
 },
 {
 title: "Reporting & KPIs",
 icon: (
 <BarChart className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Development of specific reports, KPI tracking, and dashboards.",
 },
 {
 title: "BTP Extensions",
 icon: (
 <Layers className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Building powerful extensions using SAP Business Technology Platform.",
 },
];

const supportAndTraining = [
 "End-user training (technicians, dispatchers)",
 "Train-the-trainer programs",
 "Change management strategy & execution",
 "Post-go-live hypercare support",
 "Ongoing Application Management Services (AMS)",
 "System health checks & performance tuning"
];






const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];
const endToEndServices = ["Cloud & On-Prem Expertise", "Innovation-Driven", "Change Management & Training", "Value Realization & Continuous Improvement", "License Advisory & Optimization", "Security & Compliance"];
const techTrends = ["Application Development", "Data & Analytics", "Automation", "Integration", "ABAP", "SAC", "FIORI", "RPA", "CPI", "AI"];

const FieldServiceMgmt = () => {
 return (
 <SolutionPageLayout
      title="Field Service Management"
      subtitle="Delivering Impact-Driven SAP Implementations for Sustainable Growth."
      breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: "SAP HXM", path: "/solutions/successfactors" }, { name: "Field Service", path: "/solutions/field-service-management" }]}
      backgroundImage="/Solutions/financial.png"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-600 pt-2">SAP Growth</span></>}
      impactDescription="Empower your mobile workforce and optimize field operations with SAP FSM. Enhance customer satisfaction through smarter dispatching and real-time connectivity."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
 {/* Hero Section */}

 {/* SECTION 2: Advisory & Assessment */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <div className="mb-12">
 <h2 className="text-base font-bold text-slate-900">
 Advisory & Assessment Services
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

 {/* SECTION 3: Implementation Services */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-5xl mx-auto">
 <div className="mb-16 text-center">
 <h2 className="text-base font-bold text-slate-900 flex items-center justify-center gap-3">
 <Wrench className="text-orange-600" /> Implementation & Setup
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {implementationServices.map((step, i) => (
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

 {/* SECTION 4: Integration Services (Split Layout) */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
 <div className="md:w-1/2">
 <h2 className="text-base font-bold text-slate-900 mb-6">
 Integration Services
 </h2>
 <div className="space-y-6">
 {integrationServices.map((group, i) => (
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
 <Users className="w-24 h-24 text-orange-600 relative z-10" />
 </div>
 </div>
 </div>
 </section>

 {/* SECTION 5: Custom Development */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Custom Development & Extensions
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {customDevelopment.map((card, i) => (
 <div
 key={i}
 className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-600 hover:ring-1 hover:ring-orange-600 transition-all duration-300 group text-center"
 >
 {card.icon}
 <h3 className="text-base font-bold mb-3">{card.title}</h3>
 <p className="text-slate-600">{card.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 6: Training & Support (List w/ Spinner) */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-6xl mx-auto">
 <div className="bg-slate-50 border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="md:w-2/3">
 <div className="flex items-center gap-3 mb-4">
 <GraduationCap className="text-orange-600 w-8 h-8" />
 <h2 className="text-base font-bold text-slate-900">
 Training & Continuous Support
 </h2>
 </div>
 <ul className="space-y-3 mb-6">
 {supportAndTraining.map((service, i) => (
 <li key={i} className="flex items-center gap-3 text-slate-600">
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

 {/* SECTION 10: Call to Action */}
    </SolutionPageLayout>
 );
};

export default FieldServiceMgmt;

