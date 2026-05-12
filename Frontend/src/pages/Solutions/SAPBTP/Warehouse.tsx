import React from "react";
import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import {
 Warehouse as WarehouseIcon,
 ClipboardCheck,
 Settings,
 Layers,
 ScanBarcode,
 Truck,
 Box,
 BarChart,
 Smartphone,
 Globe,
 Rocket,
 ShieldCheck,
 Briefcase,
 Zap,
 CheckCircle2,
 Wrench,
 GraduationCap,
 Map,
} from "lucide-react";

// Data Structures
const advisoryServices = [
 {
 title: "Assessment & Strategy",
 icon: <ClipboardCheck className="w-8 h-8 text-orange-600" />,
 items: ["Warehouse process assessment", "Gap analysis & readiness checks"],
 },
 {
 title: "Roadmap Creation",
 icon: <Map className="w-8 h-8 text-orange-600" />, // Using alias Map below if needed or just standard Map icon
 items: ["Migration strategies (WM to EWM)", "Greenfield vs. Brownfield planning"],
 },
 {
 title: "Fit-Gap Analysis",
 icon: <BarChart className="w-8 h-8 text-orange-600" />,
 items: ["Embedded vs. Decentralized EWM", "Architecture recommendations"],
 },
];

const implementationServices = [
 {
 title: "End-to-End Implementation",
 desc: "Full lifecycle support for SAP EWM greenfield or brownfield projects.",
 },
 {
 title: "Configuration",
 desc: "Customizing storage types, bins, sections, and activity areas.",
 },
 {
 title: "ERP Integration",
 desc: "Seamless integration with SAP MM, SD, PP, and QM modules.",
 },
];

const integrationServices = [
 {
 title: "Core Systems",
 icon: <Layers className="w-6 h-6" />,
 desc: "Integration with SAP S/4HANA or SAP ECC.",
 },
 {
 title: "Automation & hardware",
 icon: <ScanBarcode className="w-6 h-6" />,
 desc: "Material Flow Systems (MFS), RFID, and barcode scanning.",
 },
 {
 title: "Logistics Modules",
 icon: <Truck className="w-6 h-6" />,
 desc: "Connectivity with Transportation Management (TM) and Yard Logistics.",
 },
];

const advancedFunctionalities = [
 {
 title: "Warehouse Operations",
 icon: (
 <Settings className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Slotting, rearrangement, wave management, and labor management.",
 },
 {
 title: "Inventory Processes",
 icon: (
 <Box className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Cross-docking, VAS, kitting, batch handling, and serial numbers.",
 },
 {
 title: "Handling Units",
 icon: (
 <Box className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Comprehensive Handling Unit Management (HUM) for packing control.",
 },
];

const customDevAndSupport = [
 "RF framework and mobile UI enhancements",
 "Fiori-based warehouse apps",
 "Custom reports and productivity dashboards",
 "Integration with non-SAP systems (WMS, MES)",
 "Key user and end-user training",
 "Hypercare support and continuous improvement"
];








const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];
const endToEndServices = ["Cloud & On-Prem Expertise", "Innovation-Driven", "Change Management & Training", "Value Realization & Continuous Improvement", "License Advisory & Optimization", "Security & Compliance"];
const techTrends = ["Application Development", "Data & Analytics", "Automation", "Integration", "ABAP", "SAC", "FIORI", "RPA", "CPI", "AI"];

const Warehouse = () => {
 return (
 <SolutionPageLayout
      title="Extended Warehouse Management"
      subtitle="Delivering Impact-Driven SAP Implementations for Sustainable Growth."
      breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: "SAP BTP", path: "/solutions/sap-btp" }, { name: "Warehouse Management", path: "/solutions/extended-warehouse-management" }]}
      backgroundImage="/Solutions/erp-public-cloud.png"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-600 pt-2">SAP Growth</span></>}
      impactDescription="Maximize efficiency and visibility with SAP Extended Warehouse Management (EWM). From advisory to implementation and optimization, we transform your warehousing operations."
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
 <Settings className="text-orange-600" /> EWM Implementation
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
 <WarehouseIcon className="w-24 h-24 text-orange-600 relative z-10" />
 </div>
 </div>
 </div>
 </section>

 {/* SECTION 5: Advanced Functionalities */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Advanced Capabilities
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {advancedFunctionalities.map((service, i) => (
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

 {/* SECTION 6: Custom Dev & Support (List w/ Spinner) */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-6xl mx-auto">
 <div className="bg-slate-50 border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="md:w-2/3">
 <div className="flex items-center gap-3 mb-4">
 <Wrench className="text-orange-600 w-8 h-8" />
 <h2 className="text-base font-bold text-slate-900">
 Custom Development & Optimization
 </h2>
 </div>
 <ul className="space-y-3 mb-6">
 {customDevAndSupport.map((service, i) => (
 <li key={i} className="flex items-center gap-3 text-slate-600">
 <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
 {service}
 </li>
 ))}
 </ul>
 </div>
 <div className="md:w-1/3 flex justify-center">
 <div className="hidden md:block w-32 h-32 border-4 border-dashed border-orange-200 rounded-full flex items-center justify-center animate-spin-slow">
 <Smartphone className="w-12 h-12 text-orange-300" />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* SECTION 10: Call to Action */}
    </SolutionPageLayout>
 );
};

export default Warehouse;

