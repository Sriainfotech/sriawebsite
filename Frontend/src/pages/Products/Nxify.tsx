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
    title: "Auto Extract",
    description:
      "AI-powered platform that automates data extraction from documents, invoices, receipts, and forms with accuracy and speed.",
    link: "/products/autoextract",
  },
  {
    title: "NxDesk",
    description:
      "Smart ticketing system designed to streamline issue tracking across teams and projects.",
    link: "/products/nxdesk",
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
    question: "What is Nxify?",
    answer:
      "Nxify is an AI-driven, modular platform that simplifies workflow automation, lead management, payroll, HR tasks, and EXIM operations for modern businesses.",
  },
  {
    question: "Who can use Nxify?",
    answer:
      "Anyone—from HR professionals, payroll managers, sales and marketing teams, to leadership and analytics teams—can benefit from Nxify’s structured and scalable features.",
  },
  {
    question: "Is Nxify customizable?",
    answer:
      "Yes. Nxify is designed with modular components that can be tailored to fit specific workflows, business rules, and user interface needs.",
  },
  {
    question: "Can Nxify integrate with other systems?",
    answer:
      "Absolutely. Nxify supports seamless API integration to connect with CRMs, ERPs, accounting software, and third-party tools.",
  },
  {
    question: "How is data secured on Nxify?",
    answer:
      "Nxify enforces secure, role-based access with encrypted data transfer and storage, ensuring sensitive information is always protected.",
  },
  {
    question: "What deployment options are available?",
    answer:
      "Nxify can be deployed on-premises or on the cloud, based on your organization’s infrastructure and preferences.",
  },
  {
    question: "Does Nxify support analytics and reporting?",
    answer:
      "Yes. Nxify provides real-time dashboards, insight cards, and drill-down analytics to help teams make informed decisions.",
  },
  {
    question: "Can users manage multiple modules from a single dashboard?",
    answer:
      "Yes. Nxify offers a unified interface where users can navigate and control all modules—such as payroll, attendance, IT declarations, etc.—from one central place.",
  },
  {
    question: "Is training provided for using Nxify?",
    answer:
      "Yes. Nxify includes onboarding support, documentation, and training sessions to help your team get started quickly.",
  },
  {
    question: "What support channels does Nxify offer?",
    answer:
      "Nxify provides email, chat, and ticket-based support. Premium users may also get dedicated account managers.",
  },
];

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Automated Payroll & Payslip Generation",
    description:
      "Configure salary structures, auto-generate payslips, and manage payroll revisions with ease, reducing manual intervention.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Integrated IT Declaration & Compliance",
    description:
      "Allow employees to declare investments, automate Form-16 and compliance reporting, and ensure statutory adherence.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Loans & Advances Management",
    description:
      "Simplify loan applications, disbursements, approvals, and deductions for employees, all with workflow automation.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Attendance & Leave Tracking",
    description:
      "Biometric, geotag, or software-based attendance logging with robust holiday, leave, and absence policy configuration.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Onboarding & Exit Workflows",
    description:
      "Structured joining and full-and-final settlement processes, with approval chains and auto-generated documentation.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Dashboard & Analytics",
    description:
      "Live dashboards give visibility into salary processing, approvals, compliance status, headcount, payroll trends, and more.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Secure Role-Based Access",
    description:
      "Control who can access, view, or update data—granular permissions for admins, HR, finance, and employees.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Customizable & API-Friendly",
    description:
      "Easily adapt Nxify to your specific salary policies, workflows, and connect with ERP/accounting systems like SAP, Tally, etc.",
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

const features = [
  {
    title: "Unified Employee Financials",
    description:
      "Manage salaries, reimbursements, loans, and advances from a single, streamlined platform with real-time visibility.",
    image: "/Nxify/Unified Employee Financials.png",
  },
  {
    title: "Automated Payroll Processing",
    description:
      "Run accurate and timely payrolls with automated calculations, statutory compliance, and direct bank transfers.",
    image: "/Nxify/Automated Payroll Processing.png",
  },
  {
    title: "Smart Attendance & Leave",
    description:
      "Track attendance, shifts, and leave balances with biometric integrations and employee self-service portals.",
    image: "/Nxify/Smart Attendance & Leave.png",
  },
  {
    title: "IT Declarations & Taxation",
    description:
      "Simplify income tax declarations and automate deductions with built-in compliance and real-time projections.",
    image: "/Nxify/IT Declarations & Taxation.png",
  },
  {
    title: "Workflow Automation",
    description:
      "Digitize approvals for expenses, leaves, onboarding, and more using custom rule-based workflows.",
    image: "/Nxify/Workflow Automation.png",
  },
  {
    title: "Role-Based Access Control",
    description:
      "Ensure data privacy and compliance with secure, role-specific access to HR and financial data.",
    image: "/Nxify/Role-Based Access Control.png",
  },
  {
    title: "Insightful Analytics",
    description:
      "Make informed decisions with dashboards and reports on payroll, workforce trends, and financial health.",
    image: "/Nxify/Insightful Analytics.png",
  },
];

function Nxify() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      <PageHeader
        title="Nxify"
        subtitle="Nxify is a unified platform for automating employee financials, payroll, attendance, and HR workflows. It streamlines salary, loans, IT declarations, and approvals with secure role-based access and real-time insights."
        breadcrumbs={[
          { name: "Products", path: "/products" },
          { name: "Nxify", path: "/products/nxify" },
        ]}
        backgroundImage="/nxify.png"
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
              Why Nxify?
            </h1>
            <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Nxify is a comprehensive cloud-based platform designed to simplify
              and automate employee financial operations, HR processes, and EXIM
              workflows. From payroll, IT declarations, and loans to attendance
              tracking, onboarding, and exit processes, Nxify unifies everything
              under one intelligent system with real-time dashboards and
              analytics.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-6 max-w-7xl w-full justify-center">
                {/* <FeatureCard ... /> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Automated Payroll</h3>
                    <p>Configure complex salary structures, generate payslips, and manage salary revisions with a few clicks.</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Integrated IT Declarations</h3>
                    <p>Let employees declare investments and download Form-16s, with compliance and ease.</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Loans & Advances Management</h3>
                    <p>Track employee loan applications, disbursements, and deductions with complete transparency.</p>
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
                Nxify's intelligent automation covers payroll, IT declarations,
                employee loans, attendance tracking, onboarding, exit processes,
                and seamless EXIM solutions—all integrated, customizable, and
                available anywhere via the cloud.
              </p>
            </div>
            <section className="my-8 sm:my-10 w-full">
              {/* <FeatureTabs features={features} /> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="p-4 border rounded-lg">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
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
            <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 bg-white">
              {/* <StatCardStable ... /> */}
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <p>Reduction in payroll processing time through automated salary calculations and compliance management.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <p>Improvement in HR efficiency by eliminating manual data entry and streamlining employee workflows.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p>Accuracy in payroll calculations with built-in compliance checks and automated tax deductions.</p>
              </div>
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-6 sm:mt-8 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-lg sm:text-xl md:text-2xl p-4 lg:p-8 w-full lg:w-3/4 leading-relaxed">
                Streamline your HR and payroll operations with Nxify — an
                all-in-one platform for employee financials, IT declarations,
                attendance, and compliance. Achieve complete control,
                transparency, and efficiency in workforce management.
              </h1>
              <Link
                to="/contactus"
                className="p-4 lg:p-8 w-full lg:w-auto flex justify-center lg:justify-end"
              >
                <div className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Request a Demo
                </div>
              </Link>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl w-full lg:w-3/4 font-semibold">
              Unlock powerful benefits
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Nxify enhances HR and financial management by automating
              repetitive tasks, ensuring real-time visibility, and delivering
              scalable, compliance-ready workflows for enterprises of any size.
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
                  Automating HR & Payroll for the Modern Workforce
                </h1>
                <Link to="/contactus" className="flex-shrink-0">
                  <div className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Request a Demo
                  </div>
                </Link>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Streamline employee financials, payroll, IT declarations, and HR
                operations with Nxify. Gain complete control, compliance, and
                clarity—while empowering your teams through automation and
                real-time insights.{" "}
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

          {/* Resources Section */}
          {/* <section id="resources" className="mt-12 sm:mt-16 scroll-mt-24">
                        <Resource
                            heading="Explore Our Resources"
                            paragraph="Helpful tools and insights for your export-import operations"
                     products={[
                {
                  title: "Nxify Product Brochure",
                  description: "Comprehensive overview of features, benefits, and real-world use cases. Download the PDF.",
                  image: "/images/brochure.jpg",
                  link:""
                },
              ]}
                        />
                    </section> */}
        </div>
      </div>

      {/* Certifications Section - Responsive */}
      <div className="p-8 relative  bg-white z-10">

      </div>

    </div>
  );
}

export default Nxify;
