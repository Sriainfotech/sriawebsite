import React from "react";
import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import {
 Truck,
 PackageCheck,
 Factory,
 BarChart,
 Layers,
 Settings,
 Database,
 Globe,
 Rocket,
 ShieldCheck,
 Briefcase,
 Zap,
 MonitorSmartphone,
 ScanBarcode,
 Container,
 Layout,
 ClipboardList,
 Map,
} from "lucide-react";

// Data Structures
const inboundLogistics = [
 {
 title: "ASN & Integration",
 icon: <Truck className="w-8 h-8 text-orange-600" />,
 items: ["SAP Ariba, EDI, or IDocs for ASN", "Automated GR via SAP EWM or S/4HANA MM"],
 },
 {
 title: "Quality Management",
 icon: <PackageCheck className="w-8 h-8 text-orange-600" />,
 items: ["QM inspection lots integration", "Raw materials quality checks"],
 },
 {
 title: "Warehouse Optimization",
 icon: <Layout className="w-8 h-8 text-orange-600" />,
 items: ["Bin determination via putaway rules", "Real-time stock updates & traceability"],
 },
];

const internalLogistics = [
 {
 title: "Production Integration",
 desc: "Seamless integration between SAP PP and SAP EWM / WM.",
 },
 {
 title: "JIT/JIS & Kanban",
 desc: "Support for Kitting, Kanban, and Just-in-Time/Sequence processes.",
 },
 {
 title: "Shop Floor Updates",
 desc: "Real-time updates via RF devices, Fiori apps, or SAP MII.",
 },
 {
 title: "Tracking",
 desc: "Comprehensive batch & serial number tracking throughout production.",
 },
];

const outboundLogistics = [
 {
 title: "Order Fulfillment",
 icon: (
 <ClipboardList className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "Production order confirmation, automatic goods receipt, and delivery creation.",
 },
 {
 title: "Transportation Mgmt",
 icon: (
 <Map className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
 ),
 desc: "SAP TM integration for route and freight planning.",
 },
];

const warehouseManagement = [
 {
 title: "Storage Control",
 desc: "Layout-oriented storage control and wave management.",
 },
 {
 title: "Mobile Execution",
 desc: "RF framework and Fiori-based warehouse apps for mobility.",
 },
 {
 title: "Automation (MFS)",
 desc: "Integration with conveyors and AGVs via Material Flow System.",
 },
];

const integrationAnalytics = [
 {
 title: "Manufacturing Integration",
 icon: <Factory className="w-6 h-6" />,
 desc: "Real-time production/logistics data exchange and paperless shop floor.",
 },
 {
 title: "Analytics & KPIs",
 icon: <BarChart className="w-6 h-6" />,
 desc: "Inventory tracking, warehouse performance, and custom dashboards.",
 },
 {
 title: "S/4HANA Capabilities",
 icon: <Database className="w-6 h-6" />,
 desc: "Real-time inventory availability and simplified role-based access.",
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

const Logistics = () => {
 return (
 <SolutionPageLayout
      title="Manufacturing Logistics"
      subtitle="Delivering Impact-Driven SAP Implementations for Sustainable Growth."
      breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: "SAP CRM", path: "/solutions/business" }, { name: "Logistics", path: "/solutions/manufacturing-logistics" }]}
      backgroundImage="/Solutions/financial.png"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-600 pt-2">SAP Growth</span></>}
      impactDescription="We empower businesses to streamline supply chains, optimize warehouse operations, and ensure seamless integration between production and logistics."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
 {/* Hero Section */}

 {/* SECTION 2: Inbound Logistics */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <div className="mb-12">
 <h2 className="text-base font-bold text-slate-900">
 Inbound Logistics
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {inboundLogistics.map((card, i) => (
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

 {/* SECTION 3: Internal Logistics & Production Integration */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-6xl mx-auto">
 <div className="mb-16 text-center">
 <h2 className="text-base font-bold text-slate-900 flex items-center justify-center gap-3">
 <Container className="text-orange-600" /> Internal Logistics & Production
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {internalLogistics.map((step, i) => (
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

 {/* SECTION 4: Outbound Logistics */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Outbound Logistics
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {outboundLogistics.map((service, i) => (
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

 {/* SECTION 5: Warehouse Management (EWM) */}
 <section className="section-padding px-6 lg:px-12 bg-slate-50">
 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
 <div className="md:w-1/2">
 <h2 className="text-base font-bold text-slate-900 mb-6">
 Warehouse Management (EWM)
 </h2>
 <div className="space-y-6">
 {warehouseManagement.map((group, i) => (
 <div key={i}>
 <h3 className="font-semibold text-lg text-slate-800 mb-2 flex items-center gap-2">
 <ScanBarcode className="text-orange-500 w-5 h-5" />
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

 {/* SECTION 6: Integration & Analytics */}
 <section className="section-padding px-6 lg:px-12 bg-white">
 <div className="max-w-7xl mx-auto">
 <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
 Integration & Analytics
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {integrationAnalytics.map((card, i) => (
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

 {/* SECTION 10: Call to Action */}
    </SolutionPageLayout>
 );
};

export default Logistics;

