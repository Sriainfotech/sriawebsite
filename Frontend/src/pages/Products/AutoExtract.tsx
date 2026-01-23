import React from "react";
import PageHeader from "@/components/layout/PageHeader";

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

import { Link } from "react-router-dom";

const productData = [
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
    link: "/products/nxify",
  },
  {
    title: "Jatayu",
    description:
      "From billing and accounting to complaints, meetings, and documents — everything in one place.",
    link: "/products/jatayu",
  },
  {
    title: "Gate Check",
    description:
      "It digitizes maintenance, visitor management, compliance, and sustainability across multiple sites with actionable insights.",
    link: "/products/gatecheck",
  },
];

const faqs = [
  {
    question: "What is Auto Extract and who can use it?",
    answer:
      "Auto Extract is an intelligent document processing solution designed for businesses of all sizes to automate data extraction from unstructured or semi-structured documents like invoices, receipts, and forms.",
  },
  {
    question: "Does Auto Extract support multiple document formats?",
    answer:
      "Yes, Auto Extract supports PDFs, scanned images, spreadsheets, and text files, ensuring seamless data extraction across formats.",
  },
  {
    question: "Can Auto Extract handle complex layouts?",
    answer:
      "Absolutely. Auto Extract uses advanced AI algorithms to interpret tables, columns, and nested fields in complex document structures.",
  },
  {
    question: "Can Auto Extract be integrated into existing systems?",
    answer:
      "Yes, Auto Extract provides APIs and connectors to integrate with ERP, CRM, and other business platforms effortlessly.",
  },
];


const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Smart Extraction",
    description:
      "Accurately identify and extract key data from various document types automatically.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Multi-Format Ready",
    description:
      "Seamlessly process PDFs, images, spreadsheets, and more without manual effort.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Secure Processing",
    description:
      "Protect sensitive data with enterprise-grade encryption and access controls.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "AI-Powered",
    description:
      "Utilize machine learning models that improve accuracy with every document processed.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Insightful Analytics",
    description:
      "Gain actionable insights from extracted data through intuitive dashboards.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Easy Integration",
    description:
      "Connect effortlessly with your existing ERP and CRM systems via robust APIs.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Team Collaboration",
    description:
      "Enable teams to validate and process data efficiently with role-based workflows.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Custom Rules",
    description:
      "Tailor extraction templates to match your specific business documents and needs.",
  },
];

const features = [
  {
    title: "Automated Processing",
    description:
      "Process large volumes of documents automatically, saving time and reducing costs.",
    image: "/autoextract/automated-document-processing.png",
  },
  {
    title: "Smart Learning",
    description:
      "The system adapts to new document structures, improving efficiency over time.",
    image: "/autoextract/template-learning.jpg",
  },
  {
    title: "Error Free",
    description:
      "Minimize manual entry to ensure high data integrity and consistency.",
    image: "/autoextract/error-reduction.jpg",
  },
  {
    title: "Custom Workflows",
    description:
      "Design workflows that fit your specific document handling needs.",
    image: "/autoextract/custom-workflows.png",
  },
  {
    title: "Instant Validation",
    description:
      "Validate and correct data in real-time for faster, reliable results.",
    image: "/autoextract/real-time-validation.png",
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

function AutoExtract() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      <PageHeader
        title="Auto Extract"
        subtitle="Auto Extract is an AI-powered platform that automatically extracts data from invoices, receipts, and forms, improving accuracy, reducing manual effort, and securely integrating with existing workflows."
        breadcrumbs={[
          { name: "Products", path: "/products" },
          { name: "Auto Extract", path: "/products/auto-extract" },
        ]}
        backgroundImage="/auto.png"
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
              What is Auto Extract?
            </h1>
            <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Auto Extract uses AI to automate data extraction from documents like invoices and forms. It streamlines processing with real-time validation and analytics, ensuring accuracy, security, and seamless integration.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-6 max-w-7xl w-full justify-center">
                {/* <FeatureCard ... /> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Smart Extraction</h3>
                    <p>Automatically identify document types and extract key fields with high accuracy.</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Real-Time Validation</h3>
                    <p>Validate data instantly, detect errors, and reduce manual corrections.</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">AI-Driven Automation</h3>
                    <p>Automate repetitive tasks and gain insights through analytics and pattern detection.</p>
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
                Automated Processing, Smart Learning, Real-Time Validation, Custom Workflows, Data Security, AI Integration, Analytics, Multi-Format Support
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
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <p>Reduction in data processing time within the first three months of deployment.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">45%</div>
                <p>Improvement in data extraction accuracy with AI-assisted validation.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <p>Increase in operational efficiency through automated workflows and real-time monitoring.</p>
              </div>
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Transform document processing with Auto Extract. Efficiently extract data, minimize manual effort, and ensure accuracy and security across all workflows.
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
              Auto Extract automates document processing for faster, more accurate results. Achieve improved collaboration and secure operations with our unified platform.
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
                  Simplifying Support Operations for Modern Teams
                </h1>
                <div className="flex-shrink-0">
                  <Link to={"/contactus"} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Request a Demo
                  </Link>
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Effortlessly extract and validate data with Auto Extract. Streamline workflows and ensure accuracy, empowering your team to focus on what matters most.
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

export default AutoExtract;
