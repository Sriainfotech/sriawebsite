import React from "react";
import PageHeader from "@/components/layout/PageHeader";

// import Navigation from "@/components/Navigation";
// import TwoColumnLayout from "@/components/TwoColumnLayout";
// import LeftSection from "@/components/LeftSection";
// import RightSection from "@/components/RightSection";
// import Requesademobtn from "@/components/Requesademobtn";
// import SidebarMenu from "@/components/SidebarMenu";
// import FeatureCard from "@/components/FeatureCard";
// import FeatureTabs from "@/components/FeatureTabs";
// import StatCard from "@/components/StatCard";
// import InfoTab from "@/components/InfoTab";
import {
  Star,
  Globe,
  Shield,
  Rocket,
  BarChart2,
  Database,
  Users,
  Settings,
} from "lucide-react";

// import FAQSection from "@/components/FAQSection";

// import ProductRange from "@/components/ProductRange";
// import Resource from "@/components/Resource";
// import WorldMap from "@/components/aboutus/WorldMap";
// import BeautifulParallaxTailwind from "@/components/BeautifulParallaxTailwind";
// import Footer from "@/components/Footer";
// import StatCardStable from "@/components/StatCardStable";
import { Link } from "react-router-dom";

const productData = [
  {
    title: "Auto Extract",
    description:
      "AI-powered platform that automates data extraction from documents, invoices, receipts, and forms with accuracy and speed.",
    link: "/products/autoextract",
  },
  {
    title: "NxDesk",
    description:
      "Smart ticketing system designed to streamline issue tracking across teams and projects.",
    link: "/products/nxdesk"
  },
  {
    title: "Nxify",
    description:
      "Unified platform for automating employee financials, payroll, attendance, and HR workflows.",
    link: "/products/nxify"
  },
  {
    title: "Jatayu",
    description:
      "From billing and accounting to complaints, meetings, and documents — everything in one place.", link: "/products/jatayu"
  },

];

const features = [
  {
    title: "IoT Monitoring",
    description:
      "Real-time visibility into facility conditions using smart sensors.",
    image: "/gatecheck/IoT-Enabled Monitoring.png",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Automated alerts and insights to reduce downtime and optimize asset health.",
    image: "/gatecheck/Predictive Maintenance.png",
  },
  {
    title: "Digital Compliance",
    description:
      "Streamline checklists and audits to ensure regulatory safety standards.",
    image: "/gatecheck/Compliance & Audits.png",
  },
  {
    title: "Incident Management",
    description:
      "Efficiently log, track, and resolve incidents with automated workflows.",
    image: "/gatecheck/Incident Reporting.png",
  },
  {
    title: "Asset Tracking",
    description:
      "Real-time monitoring of assets and inventory to prevent misuse or shortages.",
    image: "/gatecheck/Asset & Inventory Tracking.png",
  },
  {
    title: "Custom Dashboards",
    description:
      "Role-specific dashboards for admins, supervisors, and operators.",
    image: "/gatecheck/Role-Based Dashboards.png",
  },
  {
    title: "Cloud Access",
    description:
      "Secure, scalable access to data and reports from any device, anywhere.",
    image: "/gatecheck/Cloud-Based Access.png",
  },
];


const faqs = [
  {
    question: "Is hardware mandatory?",
    answer: "No, gatecheck supports both IoT-based and manual operations.",
  },
  {
    question: "Can I integrate it with my BMS or ERP?",
    answer: "Yes, it supports API integrations for seamless connectivity.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes, available for both Android and iOS with offline sync options.",
  },
  {
    question: "Does it support multi-location access?",
    answer: "Yes, the system is designed for multi-campus or multi-building setups.",
  },
  {
    question: "What are the support hours?",
    answer: "Support is typically available 9AM–6PM IST, Monday to Saturday.",
  },
];
const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "DigilogCheck",
    description:
      "Geofenced QR/NFC logs for maintenance and housekeeping tracking.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "VisitorCheck",
    description:
      "Contactless visitor management with OTP/QR validation.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "ComplianceCheck",
    description:
      "Tools for fire safety, EHS compliance, and reporting.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "SustainabilityCheck",
    description:
      "Track energy, water, and waste metrics via live dashboards.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Helpdesk",
    description:
      "Role-based digital ticketing for efficient issue resolution.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "InventoryCheck",
    description:
      "Analytics for consumable tracking and automated reorder alerts.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "AI Analytics",
    description:
      "Predict failures and detect anomalies with machine learning.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Mobile Access",
    description:
      "Real-time tasks and alerts accessible via mobile app.",
  },
];

const menuItems = [
  "Overview",
  "Features",
  "Insights",
  "Benefits",
  "Find Your Answers",
  "Other Products",

];

function GateCheck() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      <PageHeader
        title="GateCheck Platform"
        subtitle="Digitize facility operations with GateCheck—an IoT-based cloud platform for smart maintenance, compliance, and monitoring."
        breadcrumbs={[
          { name: "Products", path: "/products" },
          { name: "GateCheck", path: "/products/gatecheck" },
        ]}
        backgroundImage="/gatecheck.png"
      />


      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1450px] mx-auto mt-4 lg:px-8">
        {/* Sidebar - Hidden on mobile, sticky on desktop */}
        <div className="hidden lg:block lg:w-1/6">
          <div className="sticky top-24">
            {/* <SidebarMenu menuItems={menuItems} /> */}
            <div className="space-y-2">
              {menuItems.map((item, idx) => (
                <a key={idx} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="block text-gray-600 hover:text-primary">{item}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-5/6 bg-white min-h-screen p-4 lg:p-6">
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-24">
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              What is GateCheck?
            </h1>
            <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              GateCheck is a smart facility platform integrating IoT, cloud, and mobility. It digitizes maintenance, visitor management, and compliance across multiple sites for actionable insights.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-6 max-w-7xl w-full justify-center">
                {/* <FeatureCard ... /> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Digital Logs</h3>
                    <p>QR/NFC-based logging of facility operations and real-time geofencing.</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">AI-Driven Analytics</h3>
                    <p>Predictive maintenance insights and real-time risk detection.</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Mobile Dashboards</h3>
                    <p>Access dashboards and alerts from anywhere on any device.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section id="key-features" className="mt-16 sm:mt-20 scroll-mt-24">
            <div className="w-full lg:w-3/4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Key features
              </h2>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500">
                Discover features designed to digitize operations, from visitor entry to sustainability metrics.
              </p>
            </div>
            <section className="my-8 sm:my-10 w-full">
              {/* <FeatureTabs features={features} /> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="p-6 border rounded-lg">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-base text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>

          {/* Insights Section */}
          <section id="insights" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Insights that define value
            </h2>

            {/* Stats Cards - Responsive Grid */}
            <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
              {/* <StatCardStable ... /> */}
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">65%</div>
                <p>Reduction in facility maintenance costs through predictive analytics and proactive issue detection.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p>Improvement in compliance audit success rates with automated checklists and digital documentation.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <p>Faster incident response times with real-time IoT monitoring and mobile alert notifications.</p>
              </div>
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Streamline facility operations with GateCheck—an IoT-powered platform for smart maintenance, compliance, and real-time monitoring. Achieve complete control and efficiency.
              </h1>
              <div className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end">
                <Link to={"/contactus"} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Request a Demo
                </Link>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl w-full lg:w-3/4 font-semibold">
              Unlock powerful benefits
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Transform facility management with automation, visibility, and compliance.
            </p>

            {/* Benefits Grid - Responsive */}
            <div className="max-w-7xl mx-auto py-8 sm:py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                {tabs.map((tab, idx) => (
                  <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                    <div className="mb-4">{tab.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{tab.title}</h3>
                    <p className="text-gray-600">{tab.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section
            id="find-your-answers"
            className="mt-16 sm:mt-20 w-full scroll-mt-24"
          >
            {/* <FAQSection faqs={faqs} /> */}
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b pb-4">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Empowering Trade Section */}
          <section
            id="empowering-trade"
            className="mt-16 sm:mt-20 scroll-mt-24"
          >
            <div className="bg-black w-full p-4 lg:p-10 text-white rounded-lg">
              {/* Heading and button - Responsive Layout */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                  Digitizing Facility Operations with Smart Monitoring
                </h1>
                <div className="flex-shrink-0">
                  <Link to={"/contactus"} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Request a Demo
                  </Link>
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Streamline facility operations with GateCheck—an IoT-powered cloud platform for predictive maintenance, compliance, and real-time monitoring. Achieve full visibility and control.
              </p>
            </div>
          </section>

          {/* Other Products Section */}
          <section id="other-products" className="mt-16 sm:mt-20 scroll-mt-24">
            {/* <ProductRange ... /> */}
            <h2 className="text-3xl font-bold mb-8">Explore other range of products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productData.map((product, idx) => (
                <Link key={idx} to={product.link} className="p-6 border rounded-lg hover:border-primary transition-colors block">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Certifications Section - Responsive */}
      <div className="p-8 relative  bg-white z-10">

      </div>

      <div className="w-full bg-black">
        {" "}
        {/* Full width container */}
        <div className="max-w-[1400px] w-full mx-auto">
          {" "}
          {/* Centered max width container */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default GateCheck;
