import React from "react";
import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import {
 BarChart,
 Settings,
 ShieldCheck,
 CheckCircle2,
 Users,
 ShoppingCart,
 FileText,
 Search,
 Zap,
 Layers,
 LifeBuoy,
 Briefcase,
 Globe,
 Rocket,
 Code2,
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
 UserCheck,
 HeartHandshake,
 MonitorSmartphone,
 CreditCard,
 Plane,
 Receipt,
 FileSpreadsheet,
 Truck
} from "lucide-react";

// Data Structures
const implementationServices = [
 {
 title: "Assessment & Strategy",
 icon: <BarChart className="w-8 h-8 text-orange-600" />,
 items: ["Business case development", "Spend analysis & opportunity assessment"],
 },
 {
 title: "Solution Design & Config",
 icon: <Settings className="w-8 h-8 text-orange-600" />,
 items: ["Guided buying setup", "Catalog management", "Integration Strategy"],
 },
 {
 title: "Testing & Deployment",
 icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />,
 items: ["User acceptance testing (UAT)", "Cutover and go-live support"],
 },
];

const procurementModules = [
 {
 title: "Buying & Invoicing",
 desc: "Streamline the procurement process from requisition to payment.",
 },
 {
 title: "Sourcing & Contracts",
 desc: "Manage sourcing events and contract lifecycles efficiently.",
 },
 {
 title: "Supplier Lifecycle",
 desc: "Manage supplier information, performance, and risk (SLP).",
 },
 {
 title: "Spend Analysis",
 desc: "Gain visibility into spend data to drive savings and compliance.",
 },
];

const optimizationServices = [
 {
 title: "Process Optimization",
 icon: (
 <RefreshCw className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Workflow automation, approval optimization, and tail-spend management.",
 },
 {
 title: "Sourcing Best Practices",
 icon: (
 <ShoppingCart className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Category-specific sourcing strategies to maximize value.",
 },
];

const enablementServices = [
 {
 title: "Supplier Training",
 desc: "Onboarding and training programs for Ariba Network suppliers.",
 },
 {
 title: "Communication",
 desc: "Templates and campaigns to drive supplier connectivity and engagement.",
 },
 {
 title: "Change Management",
 desc: "End-user training, materials, and change impact assessments.",
 },
];

const integrationServices = [
 {
 title: "SAP S/4HANA Integration",
 icon: <Layers className="w-6 h-6" />,
 desc: "Seamless integration via CIG or SAP CPI for unified processes.",
 },
 {
 title: "Data Synchronization",
 icon: <Database className="w-6 h-6" />,
 desc: "Master and transactional data sync for accuracy.",
 },
 {
 title: "Tax & Payments",
 icon: <CreditCard className="w-6 h-6" />,
 desc: "Integration with tax engines (Vertex, Avalara) and payment gateways.",
 },
];

const supportServices = [
 "Post-go-live application support",
 "Supplier onboarding and enablement",
 "System performance monitoring & troubleshooting",
 "Regular release management and updates",
 "Contract compliance monitoring"
];






const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];
const endToEndServices = ["Cloud & On-Prem Expertise", "Innovation-Driven", "Change Management & Training", "Value Realization & Continuous Improvement", "License Advisory & Optimization", "Security & Compliance"];
const techTrends = ["Application Development", "Data & Analytics", "Automation", "Integration", "ABAP", "SAC", "FIORI", "RPA", "CPI", "AI"];

const Ariba = () => {
 return (
 <SolutionPageLayout
      title="Intelligent Spend Management"
      subtitle="Digitize and optimize your procurement and supply chain with SAP Ariba."
      breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: "SAP Analytics Cloud", path: "/solutions/sap-analytics-cloud" }, { name: "Ariba", path: "/solutions/ariba" }]}
      backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Solutions/ariba-hero.jpg?tr=f-auto,q-auto"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-600 pt-2">SAP Growth</span></>}
      impactDescription="We deliver impact-driven SAP implementations for sustainable growth, optimizing your procurement processes and enhancing supplier collaboration."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
 {/* Hero Section */}

 {/* SECTION 2: Assessment & Strategy (Previously Implementation & Consulting) */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <div className="mb-12">
 <h2 className="text-base font-bold text-slate-900">
 Assessment & Strategy
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {implementationServices.map((card, i) => (
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

 {/* SECTION 3: Procurement Modules (Previously Travel Management) */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-6xl mx-auto">
 <div className="mb-16 text-center">
 <h2 className="text-base font-bold text-slate-900 flex items-center justify-center gap-3">
 <ShoppingCart className="text-orange-600" /> Procurement Implementation
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {procurementModules.map((step, i) => (
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

 {/* SECTION 4: Procurement Optimization (Previously Expense Management) */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Procurement Process Optimization
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {optimizationServices.map((service, i) => (
 <div
 key={i}
 className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-orange-600 hover:ring-1 hover:ring-orange-600 transition-all duration-300 group text-center"
 >
 {service.icon}
 <h3 className="text-base font-bold mb-3">{service.title}</h3>
 <p className="text-slate-600">{service.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 5: Supplier Enablement & Training (Previously Invoice Management) */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
 <div className="md:w-1/2">
 <h2 className="text-base font-bold text-slate-900 mb-6">
 Supplier Enablement & Training
 </h2>
 <div className="space-y-6">
 {enablementServices.map((group, i) => (
 <div key={i}>
 <h3 className="font-semibold text-lg text-slate-800 mb-2 flex items-center gap-2">
 <UserCheck className="text-orange-500 w-5 h-5" />
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
 <Truck className="w-24 h-24 text-orange-600 relative z-10" />
 </div>
 </div>
 </div>
 </section>

 {/* SECTION 6: Integration Services */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
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

 {/* SECTION 7: Ongoing Support (Previously Support) */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-6xl mx-auto">
 <div className="bg-white border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="md:w-2/3">
 <div className="flex items-center gap-3 mb-4">
 <LifeBuoy className="text-orange-600 w-8 h-8" />
 <h2 className="text-base font-bold text-slate-900">
 Support & Managed Services
 </h2>
 </div>
 <ul className="space-y-3 mb-6">
 {supportServices.map((service, i) => (
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

 {/* SECTION 11: Call to Action */}
    </SolutionPageLayout>
 );
};

export default Ariba;

