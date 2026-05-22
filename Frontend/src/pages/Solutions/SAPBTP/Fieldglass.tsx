import React from "react";
import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import {
 Users,
 Briefcase,
 FileText,
 DollarSign,
 BarChart,
 ShieldCheck,
 Globe,
 Rocket,
 Smartphone,
 Layers,
 Settings,
 UserCheck,
 Calendar,
 CheckCircle2,
 Lock,
} from "lucide-react";

// Data Structures
const contingentWorkforce = [
 {
 title: "Job Posting & Engagement",
 icon: <Briefcase className="w-8 h-8 text-orange-600" />,
 items: ["Job posting and supplier engagement", "Rate and role benchmarking"],
 },
 {
 title: "Time & Expense",
 icon: <Calendar className="w-8 h-8 text-orange-600" />,
 items: ["Time and expense tracking", "Streamlined approvals"],
 },
 {
 title: "Compliance Workflows",
 icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
 items: ["Compliance checks", "Onboarding workflows"],
 },
];

const servicesProcurement = [
 {
 title: "SOW Management",
 desc: "Creation and management of Statements of Work (SOWs) and deliverables.",
 },
 {
 title: "Milestone Tracking",
 desc: "Track milestones, budgets, and invoicing controls efficiently.",
 },
 {
 title: "Engagement Visibility",
 desc: "Complete visibility into resource allocation and project progress.",
 },
];

const directSourcing = [
 {
 title: "Talent Pools",
 desc: "Engage known freelancers and alumni to lower cost and time-to-fill.",
 },
 {
 title: "Platform Integration",
 desc: "Seamless integration with job boards and talent platforms.",
 },
];

const workerProfileManagement = [
 {
 title: "Centralized Profiles",
 icon: <UserCheck className="w-6 h-6" />,
 desc: "Maintain centralized worker profiles for total visibility.",
 },
 {
 title: "Credential Tracking",
 icon: <FileText className="w-6 h-6" />,
 desc: "Track credentials, certifications, and compliance documents.",
 },
 {
 title: "Access Management",
 icon: <Lock className="w-6 h-6" />,
 desc: "Manage system access and mitigate security risks.",
 },
];

const analyticsReporting = [
 {
 title: "Spend Analytics",
 icon: (
 <BarChart className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Detailed workforce spend analytics and forecasting.",
 },
 {
 title: "Supplier Performance",
 icon: (
 <Users className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Supplier performance metrics and rate card benchmarking.",
 },
 {
 title: "Compliance Reporting",
 icon: (
 <ShieldCheck className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Comprehensive compliance and audit reporting capabilities.",
 },
];

const supplierManagement = [
 "Supplier onboarding and performance tracking",
 "Rate negotiation and compliance management",
 "Tiered supplier strategies",
 "Automated compliance workflows",
 "Background checks and training verification",
 "Country-specific labor regulation adherence",
];

const mobileIntegration = [
 {
 title: "Mobile Capabilities",
 icon: <Smartphone className="w-8 h-8 text-orange-600" />,
 items: ["Mobile app for approvals", "Time and expense entry on-the-go"],
 },
 {
 title: "System Integration",
 icon: <Layers className="w-8 h-8 text-orange-600" />,
 items: ["Integrates with SAP S/4HANA & SuccessFactors", "Connects with Ariba & 3rd-party systems"],
 },
];






const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];
const endToEndServices = ["Cloud & On-Prem Expertise", "Innovation-Driven", "Change Management & Training", "Value Realization & Continuous Improvement", "License Advisory & Optimization", "Security & Compliance"];
const techTrends = ["Application Development", "Data & Analytics", "Automation", "Integration", "ABAP", "SAC", "FIORI", "RPA", "CPI", "AI"];

const Fieldglass = () => {
 return (
 <SolutionPageLayout
      title="Contingent Workforce Management"
      subtitle="Delivering Impact-Driven SAP Implementations for Sustainable Growth."
      breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: "SAP BTP", path: "/solutions/sap-btp" }, { name: "Fieldglass", path: "/solutions/fieldglass" }]}
      backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455257/sria/Solutions/field-hero.jpg"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-600 pt-2">SAP Growth</span></>}
      impactDescription="Optimize your external workforce management with SAP Fieldglass. Enhance visibility, ensure compliance, and drive cost savings."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
 {/* Hero Section */}

 {/* SECTION 2: Contingent Workforce Management */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <div className="mb-12">
 <h2 className="text-base font-bold text-slate-900">
 Contingent Workforce Management
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {contingentWorkforce.map((card, i) => (
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

 {/* SECTION 3: Services Procurement & Direct Sourcing */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-6xl mx-auto">
 <div className="mb-16 text-center">
 <h2 className="text-base font-bold text-slate-900 flex items-center justify-center gap-3">
 <DollarSign className="text-orange-600" /> Services Procurement & Direct Sourcing
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
 {servicesProcurement.map((step, i) => (
 <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-orange-500">
 <h3 className="text-base font-bold text-slate-900 mb-2">
 {step.title}
 </h3>
 <p className="text-slate-600">{step.desc}</p>
 </div>
 ))}
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {directSourcing.map((step, i) => (
 <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-slate-400">
 <h3 className="text-base font-bold text-slate-900 mb-2">
 {step.title}
 </h3>
 <p className="text-slate-600">{step.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 4: Worker Profile Management (Split Layout) */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
 <div className="md:w-1/2">
 <h2 className="text-base font-bold text-slate-900 mb-6">
 Worker Profile Management
 </h2>
 <div className="space-y-6">
 {workerProfileManagement.map((group, i) => (
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

 {/* SECTION 5: Analytics & Reporting */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Analytics & Reporting
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {analyticsReporting.map((service, i) => (
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

 {/* SECTION 6: Supplier & Compliance Management (List w/ Spinner) */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-6xl mx-auto">
 <div className="bg-slate-50 border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="md:w-2/3">
 <div className="flex items-center gap-3 mb-4">
 <ShieldCheck className="text-orange-600 w-8 h-8" />
 <h2 className="text-base font-bold text-slate-900">
 Supplier Management & Compliance
 </h2>
 </div>
 <ul className="space-y-3 mb-6">
 {supplierManagement.map((service, i) => (
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

 {/* SECTION 7: Mobile & Integration */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Mobile & Integration Capabilities
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {mobileIntegration.map((card, i) => (
 <div
 key={i}
 className="group p-8 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
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
 className="text-slate-600 text-sm flex items-center justify-center gap-2"
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

 {/* SECTION 11: Call to Action */}
    </SolutionPageLayout>
 );
};

export default Fieldglass;

