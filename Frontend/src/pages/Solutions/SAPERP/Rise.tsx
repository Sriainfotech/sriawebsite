import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import { CheckCircle2, Briefcase, Globe, ShieldCheck, Rocket, Users, Factory, Settings, BarChart, TrendingUp, Cloud, Layers, Code2, LifeBuoy, Zap } from "lucide-react";

const advisoryServices = [
  { title: "Strategic Analysis", icon: <BarChart className="w-8 h-8 text-orange-600" />, items: ["Readiness checks", "Current landscape analysis"] },
  { title: "Financial Evaluation", icon: <TrendingUp className="w-8 h-8 text-orange-600" />, items: ["Total cost of ownership (TCO)", "ROI forecasting"] },
  { title: "Cloud Strategy", icon: <Cloud className="w-8 h-8 text-orange-600" />, items: ["Cloud vs On-premise decision", "Architecture consulting"] },
];

const planningSteps = [
  { title: "Business Transformation Planning", desc: "Defining the strategic vision and roadmap." },
  { title: "Migration Strategy", desc: "Crafting the optimal path for cloud architecture design." },
  { title: "Value-Driven Roadmaps", desc: "Ensuring every step delivers measurable business value." },
];

const implementationServices = [
  "SAP S/4HANA Cloud deployment (public/private)",
  "Data migration using SAP tools (e.g., SAP Data Migration Cockpit)",
  "Process redesign using Signavio and BPI tools",
];

const integrationServices = [
  { title: "SAP Integration Suite", icon: <Layers className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-600 mb-6 transition-colors" />, desc: "Integration with third-party systems via SAP Integration Suite for a unified landscape." },
  { title: "Custom Extensions via SAP BTP", icon: <Code2 className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-600 mb-6 transition-colors" />, desc: "Extend core capabilities while keeping the digital core clean." },
];

const changeManagementPoints = [
  "End-user training and enablement",
  "Organizational change management",
  "Business role redesign and testing support",
];

const supportServices = [
  { title: "Post-go-live Support", icon: <LifeBuoy className="w-6 h-6" /> },
  { title: "Continuous Innovation", icon: <Zap className="w-6 h-6" /> },
  { title: "Managed Services", icon: <Settings className="w-6 h-6" /> },
];

const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];

const endToEndServices = [
  "Cloud & On-Prem Expertise", "Innovation-Driven", "Change Management & Training",
  "Value Realization & Continuous Improvement", "License Advisory & Optimization", "Security & Compliance",
];

const techTrends = ["Application Development", "Data & Analytics", "Automation", "Integration", "ABAP", "SAC", "FIORI", "RPA", "CPI", "AI"];

const Rise = () => {
  return (
    <SolutionPageLayout
      title="Accelerate with RISE"
      subtitle="RISE with SAP is a comprehensive transformation offering that enables seamless migration to SAP cloud solutions and helps businesses become intelligent enterprises."
      breadcrumbs={[
        { name: "Solutions", path: "/solutions" },
        { name: "SAP ERP", path: "/solutions/sap-erp" },
        { name: "RISE with SAP", path: "/solutions/rise-with-sap" },
      ]}
      backgroundImage="/Solutions/s4hana.png"
      impactHeading={<>Impact-Driven <br /><span className="text-orange-500">SAP Growth</span></>}
      impactDescription="We empower enterprises with future-ready SAP solutions, ensuring seamless transformation, operational excellence, and long-term value creation."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
      {/* Advisory & Assessment */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-10">Advisory & Assessment Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisoryServices.map((card, i) => (
              <div key={i} className="group p-7 bg-slate-50 hover:bg-white border border-slate-100 hover:border-orange-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-5 p-3 bg-orange-50 w-fit rounded-xl group-hover:bg-orange-100 transition-colors duration-300">{card.icon}</div>
                <h3 className="text-base font-semibold mb-3 text-slate-900">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="text-slate-600 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning & Roadmapping */}
      <section className="py-16 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-12 text-center">RISE with SAP Planning & Roadmapping</h2>
          <div className="relative border-l-2 border-orange-200 ml-6 md:ml-12 space-y-10 max-w-3xl mx-auto">
            {planningSteps.map((step, i) => (
              <div key={i} className="relative pl-10 group">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-orange-500 group-hover:scale-125 transition-transform duration-300" />
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 hover:border-orange-100 transition-all">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Services */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Implementation Services</h2>
            <p className="text-slate-500 leading-relaxed text-sm">Seamlessly deploy SAP S/4HANA Cloud with our expert-led methodologies, ensuring data integrity and process optimization.</p>
          </div>
          <div className="lg:w-2/3 space-y-4">
            {implementationServices.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-slate-100 rounded-xl hover:border-orange-200 hover:bg-orange-50/30 transition-all bg-slate-50/50">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Services */}
      <section className="py-16 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-10 text-center">Integration Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {integrationServices.map((service, i) => (
              <div key={i} className="group h-full p-8 border border-slate-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center bg-white">
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Change Management */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-52 h-52 bg-orange-50 rounded-full flex items-center justify-center border-4 border-orange-100">
              <Users className="w-20 h-20 text-orange-500" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Change Management & Training</h2>
            <ul className="space-y-4">
              {changeManagementPoints.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Support & Optimization */}
      <section className="py-16 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-10">Support & Optimization</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {supportServices.map((card, i) => (
              <div key={i} className="group h-full p-7 border border-slate-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all bg-white flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-slate-100 rounded-2xl text-slate-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-all duration-300 [&_svg]:w-6 [&_svg]:h-6">{card.icon}</div>
                <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISE Migration Factory */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="text-orange-600 w-7 h-7" />
                <h2 className="text-lg font-bold text-slate-900">RISE Migration Factory</h2>
              </div>
              <p className="text-slate-600 text-sm mb-5">Factory model for mass migration — suitable for large clients or multiple subsidiaries.</p>
              <div className="flex gap-3">
                <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">Scalable</span>
                <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">Repeatable</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-28 h-28 rounded-full border-4 border-dashed border-orange-200 flex items-center justify-center">
                <Settings className="w-10 h-10 text-orange-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SolutionPageLayout>
  );
};

export default Rise;
