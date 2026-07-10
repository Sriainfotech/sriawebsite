import React from "react";
import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import {
  Truck,
  FileText,
  MapPin,
  CreditCard,
  Calendar,
  Users,
  Layers,
  BarChart,
  Globe,
  Rocket,
  ShieldCheck,
  Briefcase,
  Zap,
  CheckCircle2,
  Receipt,
  Map,
  Link
} from "lucide-react";

// Data Structures
const freightCollaboration = [
  {
    title: "Tendering & Booking",
    icon: <Truck className="w-8 h-8 text-orange-600" />,
    items: ["Automate freight tendering", "Get competitive quotes", "Confirm bookings faster"],
  },
  {
    title: "Document Sharing",
    icon: <FileText className="w-8 h-8 text-orange-600" />,
    items: ["Share transport orders", "Exchange delivery notes", "Manage shipment docs"],
  },
  {
    title: "Visibility & POD",
    icon: <MapPin className="w-8 h-8 text-orange-600" />,
    items: ["Real-time shipment status", "Digital POD submissions", "Exception alerts"],
  },
];

const freightSettlement = [
  {
    title: "Automated Invoicing",
    desc: "Match freight orders with carrier invoices for quick and accurate billing.",
  },
  {
    title: "Dispute Management",
    desc: "Built-in tools for handling discrepancies or claims on freight costs.",
  },
];

const trackAndTrace = [
  {
    title: "End-to-End Monitoring",
    desc: "Monitor shipments across all modes: road, ocean, air, and rail.",
  },
  {
    title: "Milestone Tracking",
    desc: "Real-time geofencing and alerts for disruptions or delays.",
  },
  {
    title: "Global Integration",
    desc: "Seamless connection with SAP Global Track and Trace.",
  },
];

const integrationServices = [
  {
    title: "SAP S/4HANA",
    icon: <Layers className="w-6 h-6" />,
    desc: "Native integration with Transportation Management (TM) and EWM.",
  },
  {
    title: "SAP ECC",
    icon: <Link className="w-6 h-6" />,
    desc: "Connectivity via middleware (SAP PI/PO/CPI).",
  },
  {
    title: "Global Track & Trace",
    icon: <Globe className="w-6 h-6" />,
    desc: "Unified tracking across the entire supply chain.",
  },
];

const collaborationFeatures = [
  "Real-time communication with carriers",
  "Carrier performance metrics & scorecards",
  "SLA tracking and monitoring",
  "Dock appointment scheduling",
  "Reduced bottlenecks at receiving docks"
];






const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];
const endToEndServices = ["Cloud & On-Prem Expertise", "Innovation-Driven", "Change Management & Training", "Value Realization & Continuous Improvement", "License Advisory & Optimization", "Security & Compliance"];
const techTrends = ["Application Development", "Data & Analytics", "Automation", "Integration", "ABAP", "SAC", "FIORI", "RPA", "CPI", "AI"];

const Business = () => {
  return (
    <SolutionPageLayout
      title="SAP Business Network"
      subtitle="Delivering Impact-Driven SAP Implementations for Sustainable Growth."
      breadcrumbs={[{ name: "Solutions", path: "/solutions" }, { name: "SAP CRM", path: "/solutions/business" }, { name: "Business Network", path: "/solutions/business" }]}
      backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Solutions/business-hero.jpg?tr=f-auto,q-auto"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-600 pt-2">SAP Growth</span></>}
      impactDescription="Streamline logistics collaboration, enhance freight settlement accuracy, and gain real-time global visibility with SAP Business Network."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
      {/* Hero Section */}

      {/* SECTION 2: Freight Collaboration */}
      <section className="section-padding px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-base font-bold text-slate-900">
              Freight Collaboration
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freightCollaboration.map((card, i) => (
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

      {/* SECTION 3: Freight Settlement */}
      <section className="section-padding px-6 lg:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-base font-bold text-slate-900 flex items-center justify-center gap-3">
              <Receipt className="text-orange-600" /> Freight Settlement
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freightSettlement.map((step, i) => (
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

      {/* SECTION 4: Track & Trace (Split Layout) */}
      <section className="section-padding px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-base font-bold text-slate-900 mb-6">
              Global Track & Trace
            </h2>
            <div className="space-y-6">
              {trackAndTrace.map((group, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-lg text-slate-800 mb-2 flex items-center gap-2">
                    <Map className="text-orange-500 w-5 h-5" />
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
              <Globe className="w-24 h-24 text-orange-600 relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Integration Services */}
      <section className="section-padding px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
            Integration Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {integrationServices.map((card, i) => (
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

      {/* SECTION 6: Collaboration & Optimization (List w/ Spinner) */}
      <section className="section-padding px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-orange-600 w-8 h-8" />
                <h2 className="text-base font-bold text-slate-900">
                  Carrier Collaboration & Optimization
                </h2>
              </div>
              <ul className="space-y-3 mb-6">
                {collaborationFeatures.map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="hidden md:block w-32 h-32 border-4 border-dashed border-orange-200 rounded-full flex items-center justify-center animate-spin-slow">
                <Calendar className="w-12 h-12 text-orange-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Call to Action */}
    </SolutionPageLayout>
  );
};

export default Business;

