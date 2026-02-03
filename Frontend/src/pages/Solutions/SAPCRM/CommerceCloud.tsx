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
  GraduationCap,
  Cpu,
  PieChart,
  Map,
  UserCheck,
  HeartHandshake,
  ShoppingCart,
  MonitorSmartphone,
  CreditCard
} from "lucide-react";

// Data Structures
const assessmentServices = [
  {
    title: "Business Process Analysis",
    icon: <BarChart className="w-8 h-8 text-orange-600" />,
    items: ["Workflow optimization", "Commerce strategy alignment"],
  },
  {
    title: "Fit-Gap Analysis",
    icon: <Settings className="w-8 h-8 text-orange-600" />,
    items: ["Feature comparison", "Customization scoping"],
  },
  {
    title: "Roadmap Creation",
    icon: <Map className="w-8 h-8 text-orange-600" />,
    items: ["Phased rollout planning", "SAP system selection"],
  },
];

const designServices = [
  {
    title: "System Design",
    desc: "Detailed architecture based on business requirements.",
  },
  {
    title: "Module Configuration",
    desc: "Setup of SAP S/4HANA, FICO, MM, and commerce modules.",
  },
  {
    title: "Integration Planning",
    desc: "Blueprint for connecting existing and third-party systems.",
  },
];

const migrationServices = [
  {
    title: "Data Preparation",
    icon: (
      <Database className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
    ),
    desc: "Cleansing and formatting data for accuracy.",
  },
  {
    title: "Secure Migration",
    icon: (
      <RefreshCw className="w-12 h-12 mx-auto text-slate-400 group-hover:text-orange-200 mb-6 transition-colors" />
    ),
    desc: "Safe transfer of legacy data to the new environment.",
  },
];

const trainingServices = [
  {
    title: "User Training",
    items: ["Comprehensive user programs", "Knowledge transfer sessions"],
  },
  {
    title: "Change Management",
    items: ["Adoption strategies", "User documentation development"],
  },
];

const testingServices = [
  {
    title: "Testing Phases",
    icon: <FileCheck className="w-6 h-6" />,
    desc: "Unit, integration, and user acceptance testing (UAT).",
  },
  {
    title: "Optimization",
    icon: <Zap className="w-6 h-6" />,
    desc: "System performance tuning and issue resolution.",
  },
];

const supportServices = [
  "Deployment planning and execution",
  "Real-time monitoring during go-live",
  "Ongoing support and maintenance services",
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

const CommerceCloud = () => {
  return (
    <div className="bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <PageHeader
        title="Personalized Commerce Experiences"
        subtitle="Create seamless, scalable, and secure digital shopping journeys with SAP Commerce Cloud."
        breadcrumbs={[
          { name: "Solutions", path: "/solutions" },
          { name: "SAP CRM", path: "/solutions/sap-crm" },
          { name: "Commerce Cloud", path: "/solutions/commerce-cloud" },
        ]}
        backgroundImage="/Solutions/commerce.webp"
        bottomWaveColor="fill-gray-50"
      />

      {/* SECTION 1: Impact-Driven Header */}
      <section className="relative w-full py-24 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-orange-50/30 animate-fade-in">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Impact-Driven <br />
              <span className="text-orange-600 pt-2">SAP Growth</span> <br />
            </h1>
            <div className="h-1 w-24 bg-orange-600 mt-8 mb-6 rounded-full" />
          </div>
          <div className="lg:w-1/3">
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              We help organizations build scalable, secure, and personalized commerce experiences, ensuring seamless integration and long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Assessment & Planning */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Assessment and Planning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assessmentServices.map((card, i) => (
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

      {/* SECTION 3: System Design & Configuration */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              System Design and Configuration
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designServices.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Data Migration & Integration */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Data Migration and Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {migrationServices.map((service, i) => (
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

      {/* SECTION 5: Training & Change Management */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Training and Change Management
            </h2>
            <div className="space-y-6">
              {trainingServices.map((group, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-lg text-slate-800 mb-2">{group.title}</h3>
                  <ul className="pl-4 space-y-1 border-l-2 border-orange-200">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-slate-600 pl-2">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-orange-200/50 transform rotate-12 translate-x-10 translate-y-10"></div>
              <GraduationCap className="w-24 h-24 text-orange-600 relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Testing & QA */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Testing and Quality Assurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testingServices.map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 transition-colors">
                <div className="p-4 bg-white rounded-full text-orange-600 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Go-Live & Support */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-l-4 border-orange-600 rounded-r-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <LifeBuoy className="text-orange-600 w-8 h-8" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Go-Live and Post-Implementation Support
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
              <div className="hidden md:block w-32 h-32 border-4 border-dashed border-orange-200 rounded-full flex items-center justify-center animate-pulse-glow">
                <Rocket className="w-12 h-12 text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Your Trusted Partner in SAP Transformation */}
      <section className="py-20 px-6 lg:px-12 bg-white">
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

      {/* SECTION 9: End-to-End SAP Services */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            End-to-End SAP Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {endToEndServices.map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border-l-2 border-transparent hover:border-orange-500 transition-all"
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <span className="text-slate-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Drive Innovation and Excellence with Latest Tech Trends */}
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

      {/* SECTION 11: Elevate, Innovate, and Thrive with SAP */}
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

export default CommerceCloud;
