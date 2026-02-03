import React from "react";
import PageHeader from "@/components/layout/PageHeader";
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
  GraduationCap
} from "lucide-react";

// Data Structures - Rephrased for Private Cloud Context
const advisoryServices = [
  {
    title: "Landscape Analysis",
    icon: <BarChart className="w-8 h-8 text-orange-600" />,
    items: ["Current ECC/ERP assessment", "Fit-gap analysis for S/4HANA"],
  },
  {
    title: "ROI & TCO Modeling",
    icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
    items: ["Cost benefit analysis", "Investment planning"],
  },
  {
    title: "Deployment Strategy",
    icon: <Cloud className="w-8 h-8 text-orange-600" />,
    items: ["PCE vs Public vs On-Prem", "Cloud architecture selection"],
  },
];

const migrationStrategies = [
  {
    title: "Greenfield Implementation",
    desc: "A fresh start implementation built from scratch for maximum optimization.",
  },
  {
    title: "Brownfield Conversion",
    desc: "System conversion preserving existing data and processes.",
  },
  {
    title: "Selective Data Transition",
    desc: "Hybrid approach migrating only relevant historical data.",
  },
];

const provisioningServices = [
  {
    title: "Environment Setup",
    icon: <Server className="w-8 h-8 text-orange-600" />,
    items: ["DEV, QAS, PRD Provisioning", "Landscape Sizing"],
  },
  {
    title: "Resilience Planning",
    icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
    items: ["HA/DR Configuration", "Backup Strategy"],
  },
];

const implementationServices = [
  "Business process reengineering using SAP Best Practices",
  "Activate methodology execution",
  "Integration with SAP & non-SAP systems (e.g., Salesforce, Teamcenter)",
  "Configuration & custom developments",
];

const dataMigrationServices = [
  {
    title: "Legacy Data Management",
    icon: (
      <Database className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-600 mb-6 transition-colors" />
    ),
    desc: "Cleansing, mapping, and transformation of legacy data assets.",
  },
  {
    title: "Migration Execution",
    icon: (
      <RefreshCw className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-600 mb-6 transition-colors" />
    ),
    desc: "Utilization of SAP Migration Cockpit and 3rd-party tools for secure transfer.",
  },
];

const extensibilityServices = [
  "In-app extensibility (using SAP Fiori / Key User tools)",
  "Side-by-side extensions using SAP BTP",
  "ABAP custom code remediation and adaptation",
];

const testingServices = [
  {
    title: "Test Execution",
    icon: <FileCheck className="w-6 h-6" />,
    items: ["Unit & Integration Testing", "UAT Support"],
  },
  {
    title: "Quality Assurance",
    icon: <Settings className="w-6 h-6" />,
    items: ["Test Automation", "Defect Tracking"],
  },
];

const changeManagementPoints = [
  "Key user and end-user training",
  "Role mapping and authorizations",
  "OCM strategy and enablement",
];

const supportServices = [
  {
    title: "Go-Live & Hypercare",
    icon: <Rocket className="w-6 h-6" />,
    desc: "Cutover planning, production monitoring, and stabilization.",
  },
  {
    title: "Managed Services / AMS",
    icon: <LifeBuoy className="w-6 h-6" />,
    desc: "Ongoing application management, basis support, and upgrades.",
  },
];

const trustedPartnerFeatures = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    label: "Industry Expertise",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    label: "Certified Professionals",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    label: "Global Delivery Model",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    label: "Rapid Deployment",
  },
];

const endToEndServices = [
  "Cloud & On-Prem Expertise",
  "Innovation-Driven",
  "Change Management & Training",
  "Value Realization & Continuous Improvement",
  "License Advisory & Optimization",
  "Security & Compliance",
];

const techTrends = [
  "Application Development",
  "Data & Analytics",
  "Automation",
  "Integration",
  "ABAP",
  "SAC",
  "FIORI",
  "RPA",
  "CPI",
  "AI",
];

const sapKeywords = [
  "Implementation",
  "Rollouts",
  "Training",
  "Migrations",
  "Upgrades",
  "Development",
  "Support",
  "Integration",
  "Testing",
];

const PrivateCloud = () => {
  return (
    <div className="bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <PageHeader
        title="Run Smarter with S/4HANA"
        subtitle="Enable secure, scalable, and adaptable ERP transformation on your terms with SAP S/4HANA Private Cloud Edition."
        breadcrumbs={[
          { name: "Solutions", path: "/solutions" },
          { name: "SAP ERP", path: "/solutions/sap-erp" },
          { name: "Private Cloud", path: "/solutions/private-cloud" },
        ]}
        backgroundImage="/Solutions/private.webp"
        bottomWaveColor="fill-gray-50"
      />

      {/* SECTION 1: Impact-Driven Header */}
      <section className="relative w-full py-24 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-orange-50/30 animate-fade-in">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Impact-Driven <br />
              <span className="text-orange-500 pt-2">SAP Growth</span> <br />
            </h1>
            <div className="h-1 w-24 bg-orange-500 mt-4 mb-6 rounded-full" />
          </div>
          <div className="lg:w-1/3">
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              We guide you through every step of your Private Cloud journey, from
              strategic advisory to robust implementation and ongoing optimization.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Advisory & Readiness Assessment */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Advisory & Readiness Assessment
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
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
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

      {/* SECTION 3: Greenfield / Brownfield / Selective */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Migration Strategies
            </h2>
            <p className="text-slate-600 mt-4">
              Choose the path that best fits your business needs.
            </p>
          </div>
          <div className="relative border-l-2 border-orange-200 ml-6 md:ml-12 space-y-12">
            {migrationStrategies.map((step, i) => (
              <div key={i} className="relative pl-12 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-orange-600 group-hover:scale-125 transition-transform duration-300" />
                <div className="bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: System Provisioning */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            System Provisioning & Landscape Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {provisioningServices.map((card, i) => (
              <div
                key={i}
                className="p-8 border border-slate-200 rounded-xl hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {card.items.map((item, j) => (
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

      {/* SECTION 5: Core Implementation Services */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 sticky top-24 self-start">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Core Implementation Services
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We execute with precision using the Activate methodology to ensure
              a smooth transition and robust system configuration.
            </p>
          </div>
          <div className="lg:w-2/3 space-y-6">
            {implementationServices.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 border border-slate-200 rounded-xl bg-white hover:border-orange-200 transition-colors duration-300"
              >
                <div className="mt-1 flex-shrink-0">
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

      {/* SECTION 6: Data Migration */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Data Migration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataMigrationServices.map((service, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-orange-600 hover:ring-1 hover:ring-orange-600 transition-all duration-300 group text-center"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Extensibility & Custom Development */}
      <section className="py-20 px-6 lg:px-12 bg-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Extensibility & Custom Development
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {extensibilityServices.map((item, i) => (
              <div
                key={i}
                className="bg-white px-8 py-6 rounded-full shadow-sm border border-orange-100 text-slate-800 font-medium flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <Code2 className="w-5 h-5 text-orange-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Testing & QA */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Testing & Quality Assurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingServices.map((service, i) => (
              <div key={i} className="p-6 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-3 mb-4 text-slate-900">
                  <div className="p-2 bg-slate-100 rounded-md text-orange-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <div className="pl-14">
                  <ul className="space-y-2 list-disc text-slate-600">
                    {service.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Change Management & Training */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-orange-200/50 transform rotate-45 translate-x-10 translate-y-10"></div>
              <GraduationCap className="w-24 h-24 text-orange-600 relative z-10" />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Training & Change Management
            </h2>
            <ul className="space-y-4">
              {changeManagementPoints.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 text-lg"
                >
                  <div className="w-2 h-2 bg-orange-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* SECTION 10: Support & Optimization */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Support & Optimization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportServices.map((card, i) => (
              <div
                key={i}
                className="group h-full p-8 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 bg-slate-100 rounded-full text-slate-600 group-hover:scale-110 group-hover:bg-orange-100 group-hover:text-orange-600 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Your Trusted Partner in SAP Transformation */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Your Trusted Partner in SAP Transformation
          </h2>
          <div className="h-0.5 w-16 bg-orange-600 mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {trustedPartnerFeatures.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="mb-4 text-slate-400 p-4 border border-slate-200 rounded-full hover:border-orange-500 hover:text-orange-600 transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="font-semibold text-slate-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: End-to-End SAP Services */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            End-to-End SAP Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {endToEndServices.map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg shadow-sm border-l-2 border-transparent hover:border-orange-500 transition-all"
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <span className="text-slate-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: Drive Innovation and Excellence with Latest Tech Trends */}
      <section className="py-20 px-6 lg:px-12 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Drive Innovation and Excellence with Latest Tech Trends
          </h2>
          <p className="text-slate-400 mb-12 text-lg">
            Our innovative technologies empower financial institutions to
            streamline operations, enhance customer experiences, and drive
            growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techTrends.map((tech, i) => (
              <span
                key={i}
                className="px-6 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium hover:bg-orange-600 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: Elevate, Innovate, and Thrive with SAP */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl ld:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Elevate, Innovate, and Thrive <br />
            <span className="text-orange-600">with SAP</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-500 font-medium mb-12">
            {sapKeywords.map((word, i) => (
              <span key={i} className="">
                {word}
              </span>
            ))}
          </div>
          <div className="mt-12 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Ready to Grow Your Business?
            </h3>
            <p className="text-orange-600 font-semibold cursor-pointer text-lg">
              Contact Us
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateCloud;
