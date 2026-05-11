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
 UserCheck,
 HeartHandshake
} from "lucide-react";

// Data Structures
const advisoryServices = [
 {
 title: "HR Transformation Consulting",
 icon: <Users className="w-8 h-8 text-orange-600" />,
 items: ["Align HR strategy with business goals"],
 },
 {
 title: "Readiness Assessment",
 icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />,
 items: ["Evaluate current systems", "Cloud HR transition planning"],
 },
 {
 title: "Roadmap Design",
 icon: <Map className="w-8 h-8 text-orange-600" />,
 items: ["Phased implementation planning", "SuccessFactors module roadmap"],
 },
];

const implementationServices = [
 "Employee Central (Core HR)",
 "Recruiting Management & Marketing",
 "Onboarding",
 "Performance & Goals Management",
 "Learning Management System (LMS)",
 "Succession & Development",
 "Compensation Management",
 "Workforce Analytics & Planning",
];

const integrationServices = [
 {
 title: "SAP S/4HANA Integration",
 icon: <Layers className="w-6 h-6" />,
 desc: "Seamless connection via SAP BTP or SAP CPI.",
 },
 {
 title: "Third-party Integrations",
 icon: <Globe className="w-6 h-6" />,
 desc: "Integration with payroll, benefits, and external providers.",
 },
 {
 title: "API-based Integrations",
 icon: <Code2 className="w-6 h-6" />,
 desc: "Custom connections using standard API frameworks.",
 },
];

const supportServices = [
 {
 title: "Hypercare Support",
 desc: "Intensive support post go-live ensuring stability.",
 },
 {
 title: "Application Management Services (AMS)",
 desc: "Ticket-based and SLA-driven support model.",
 },
 {
 title: "Release Management",
 desc: "Continuous updates and testing for biannual SAP releases.",
 },
];

const trainingServices = [
 {
 title: "End User Training",
 icon: <GraduationCap className="w-6 h-6" />,
 items: ["Role-based training", "Quick guides & videos", "LMS integration"],
 },
 {
 title: "Change Management Support",
 icon: <HeartHandshake className="w-6 h-6" />,
 items: ["Communication plans", "Stakeholder alignment", "Training adoption"],
 },
];

const enhancementServices = [
 {
 title: "Process Automation",
 icon: <Settings className="w-8 h-8 text-orange-600" />,
 desc: "Using SAP Build Process Automation or BTP Workflow.",
 },
 {
 title: "Custom UI Enhancements",
 icon: <Layout className="w-8 h-8 text-orange-600" />,
 desc: "Fiori-based extensions or BTP UI5 apps.",
 },
 {
 title: "Analytics Dashboards",
 icon: <BarChart className="w-8 h-8 text-orange-600" />,
 desc: "Tailored dashboards via People Analytics.",
 },
];

const migrationServices = [
 "HCM to SuccessFactors Migration Strategy",
 "Hybrid Deployment Planning",
 "Phased Rollout across Geographies or Business Units",
];






const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];
const endToEndServices = ["Cloud & On-Prem Expertise", "Innovation-Driven", "Change Management & Training", "Value Realization & Continuous Improvement", "License Advisory & Optimization", "Security & Compliance"];
const techTrends = ["Application Development", "Data & Analytics", "Automation", "Integration", "ABAP", "SAC", "FIORI", "RPA", "CPI", "AI"];

const SuccessFactors = () => {
 return (
 <SolutionPageLayout
      title="Transform HR Experience"
      subtitle="Streamline workforce management and elevate employee experience with intelligent cloud-based HCM solutions."
      breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: "SAP HXM", path: "/solutions/sap-hxm" }, { name: "SuccessFactors", path: "/solutions/successfactors" }]}
      backgroundImage="/Solutions/successfactors.png"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-600 pt-2">SAP Growth</span></>}
      impactDescription="We empower enterprises with future-ready SAP SuccessFactors solutions, ensuring seamless transformation, operational excellence, and long-term value creation."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
 {/* Hero Section */}

 {/* SECTION 2: Advisory & Roadmap Services */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <div className="mb-12">
 <h2 className="text-base font-bold text-slate-900">
 Advisory & Roadmap Services
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
 <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
 <div className="lg:w-1/3 sticky top-24 self-start">
 <h2 className="text-base font-bold text-slate-900 mb-6">
 Implementation Services
 </h2>
 <p className="text-slate-600 text-lg leading-relaxed">
 Expert deployment across the full SuccessFactors suite, ensuring seamless adoption and maximum ROI.
 </p>
 </div>
 <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
 {implementationServices.map((item, i) => (
 <div
 key={i}
 className="flex items-center gap-4 p-6 border border-slate-200 rounded-xl bg-white hover:border-orange-200 transition-colors duration-300"
 >
 <div className="flex-shrink-0">
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

 {/* SECTION 4: Integration Services */}
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

 {/* SECTION 5: Post-Go-Live Support & AMS */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-6xl mx-auto">
 <div className="bg-white border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="md:w-2/3">
 <div className="flex items-center gap-3 mb-4">
 <LifeBuoy className="text-orange-600 w-8 h-8" />
 <h2 className="text-base font-bold text-slate-900">
 Post-Go-Live Support & AMS
 </h2>
 </div>
 <ul className="space-y-4 mb-6">
 {supportServices.map((service, i) => (
 <li key={i} className="flex flex-col gap-1 text-slate-600">
 <span className="font-semibold text-slate-800 flex items-center gap-2">
 <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
 {service.title}
 </span>
 <span className="text-sm pl-4">{service.desc}</span>
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

 {/* SECTION 6: Training & Change Management */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Training & Change Management
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {trainingServices.map((service, i) => (
 <div key={i} className="p-8 border border-slate-200 rounded-xl hover:border-orange-500 transition-all duration-300">
 <div className="flex items-center gap-4 mb-6">
 <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
 {service.icon}
 </div>
 <h3 className="text-base font-bold text-slate-900">
 {service.title}
 </h3>
 </div>
 <ul className="space-y-3">
 {service.items.map((item, j) => (
 <li key={j} className="flex items-center gap-3 text-slate-600">
 <CheckCircle2 className="w-5 h-5 text-green-500" />
 {item}
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 7: Enhancement & Optimization */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Enhancement & Optimization
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {enhancementServices.map((item, i) => (
 <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform border-t-2 border-orange-400">
 <div className="mb-4 text-orange-600">
 {item.icon}
 </div>
 <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
 <p className="text-slate-600">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* SECTION 8: Migration to SuccessFactors */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
 <div className="md:w-1/2">
 <h2 className="text-base font-bold text-slate-900 mb-6">
 Migration to SuccessFactors
 </h2>
 <div className="space-y-4">
 {migrationServices.map((item, i) => (
 <div
 key={i}
 className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-orange-500"
 >
 <span className="text-slate-700 font-medium">{item}</span>
 </div>
 ))}
 </div>
 </div>
 <div className="md:w-1/2 flex justify-center">
 <div className="w-72 h-72 bg-orange-50 rounded-full flex items-center justify-center relative">
 <RefreshCw className="w-24 h-24 text-orange-400" />
 <div className="absolute top-0 right-0 p-4 bg-white rounded-full shadow-lg">
 <UserCheck className="w-8 h-8 text-orange-600" />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* SECTION 12: Elevate, Innovate, and Thrive with SAP */}
    </SolutionPageLayout>
 );
};

export default SuccessFactors;

