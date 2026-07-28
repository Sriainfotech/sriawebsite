import SolutionPageLayout from "@/components/layout/SolutionPageLayout";
import {
  BarChart,
  Calculator,
  GitBranch,
  Layers,
  LineChart,
  Briefcase,
  ShieldCheck,
  Globe,
  Rocket,
  LifeBuoy,
  Settings,
  Database,
  Share2,
  TrendingUp,
} from "lucide-react";

// Data Structures
const modellingServices = [
  {
    title: "Profitability Modelling",
    icon: <BarChart className="w-8 h-8 text-orange-600" />,
    items: ["Multi-dimensional profitability views", "Product, customer & channel margins"],
  },
  {
    title: "Cost Allocation",
    icon: <Calculator className="w-8 h-8 text-orange-600" />,
    items: ["Flexible allocation rules & drivers", "Activity-based costing support"],
  },
  {
    title: "Transfer Pricing",
    icon: <GitBranch className="w-8 h-8 text-orange-600" />,
    items: ["Intercompany pricing calculations", "Compliant, auditable pricing logic"],
  },
];

const simulationServices = [
  {
    title: "What-If Simulation",
    desc: "Model pricing, cost and volume scenarios before they hit the P&L.",
  },
  {
    title: "Driver-Based Planning",
    desc: "Build rolling forecasts on the same logic used for actuals.",
  },
  {
    title: "Scenario Comparison",
    desc: "Compare simulated outcomes side by side to support decisions.",
  },
];

const analyticsServices = [
  {
    title: "S/4HANA Integration",
    icon: (
      <Database className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
    ),
    desc: "Read live financial and operational data directly from S/4HANA.",
  },
  {
    title: "Analytics & Reporting",
    icon: (
      <LineChart className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
    ),
    desc: "Connect PaPM results to SAP Analytics Cloud dashboards and reports.",
  },
];

const planningServices = [
  {
    title: "Integrated Business Planning",
    desc: "Align profitability plans with sales, operations and finance planning cycles.",
  },
  {
    title: "Rolling Forecasts",
    desc: "Refresh forecasts on demand as actuals and drivers change.",
  },
  {
    title: "Management Reporting",
    desc: "Give finance and business leaders a shared, auditable view of margins.",
  },
];

const supportServices = [
  "Post-Go-Live Support",
  "Model & Rule Enhancements",
  "User Adoption & Training Programs",
];

const trustedPartnerFeatures = [
  { icon: <Briefcase className="w-8 h-8" />, label: "Industry Expertise" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "Certified Professionals" },
  { icon: <Globe className="w-8 h-8" />, label: "Global Delivery Model" },
  { icon: <Rocket className="w-8 h-8" />, label: "Rapid Deployment" },
];
const endToEndServices = [
  "Model Design & Build",
  "Cost Allocation Rules",
  "Transfer Pricing Setup",
  "Simulation & What-If Analysis",
  "S/4HANA & SAC Integration",
  "Ongoing Support & Optimization",
];
const techTrends = ["SAP PaPM", "S/4HANA", "SAP Analytics Cloud", "BPC", "Group Reporting", "BTP", "AI-Driven Forecasting"];

const PaPM = () => {
  return (
    <SolutionPageLayout
      title="SAP Profitability & Performance Management"
      subtitle="Model profitability, allocate costs and simulate decisions with SAP PaPM, integrated with S/4HANA and analytics."
      breadcrumbs={[
        { name: "Solutions", path: "/solutions" },
        { name: "SAP Analytics Cloud", path: "/solutions/sap-analytics-cloud" },
        { name: "PaPM", path: "/solutions/papm" },
      ]}
      backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Solutions/papm.png?tr=f-auto,q-auto,w-1600"
      impactHeading={
        <>
          Profitability Insight, <br />
          <span className="text-orange-600 pt-2">Built for Decisions</span>
        </>
      }
      impactDescription="We help finance and business teams model profitability, allocate costs and simulate pricing or volume changes with SAP PaPM — connected directly to S/4HANA and analytics."
      trustedFeatures={trustedPartnerFeatures}
      endToEndServices={endToEndServices}
      techTrends={techTrends}
    >
      {/* SECTION 2: Modelling & Allocation */}
      <section className="section-padding px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-base font-bold text-slate-900">
              Profitability Modelling & Cost Allocation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modellingServices.map((card, i) => (
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

      {/* SECTION 3: Simulation & Planning */}
      <section className="section-padding px-6 lg:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-base font-bold text-slate-900 flex items-center justify-center gap-3">
              <TrendingUp className="text-orange-600" /> Simulation & Driver-Based Planning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {simulationServices.map((step, i) => (
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

      {/* SECTION 4: S/4HANA & Analytics Integration */}
      <section className="section-padding px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-base font-bold text-slate-900 mb-12 text-center">
            S/4HANA & Analytics Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsServices.map((service, i) => (
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

      {/* SECTION 5: Planning & Reporting */}
      <section className="section-padding px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-base font-bold text-slate-900 mb-6">
              Planning & Management Reporting
            </h2>
            <div className="space-y-6">
              {planningServices.map((group, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-lg text-slate-800 mb-2 flex items-center gap-2">
                    <Share2 className="text-orange-500 w-5 h-5" />
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
              <Layers className="w-24 h-24 text-orange-600 relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Ongoing Support & Optimization */}
      <section className="section-padding px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <LifeBuoy className="text-orange-600 w-8 h-8" />
                <h2 className="text-base font-bold text-slate-900">
                  Ongoing Support & Optimization
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
    </SolutionPageLayout>
  );
};

export default PaPM;
