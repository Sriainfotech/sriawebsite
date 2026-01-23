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
    question: "What is NxDesk and who can use it?",
    answer:
      "NxDesk is an intelligent ticketing and issue management system designed for teams, support staff, and project-based departments to streamline ticket tracking and resolution.",
  },
  {
    question: "Does NxDesk support SLA tracking?",
    answer:
      "Yes, NxDesk includes real-time SLA enforcement based on ticket priority, with automatic escalation and deadline tracking.",
  },
  {
    question: "Can multiple roles access NxDesk?",
    answer:
      "Absolutely. Roles like Admin, Developer, Requestor, Manager, and Dispatcher can be configured with specific permissions.",
  },
  {
    question: "Is AI integrated into NxDesk?",
    answer:
      "Yes, NxDesk uses AI to answer contextual queries and plans to support ticket creation via voice/video and auto-assignment.",
  },
  {
    question: "Can we integrate NxDesk into our existing tools?",
    answer:
      "Yes, NxDesk has a modular design and RESTful APIs that support easy integration into your existing systems.",
  },
];

const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Ticket Management",
    description:
      "Track and monitor tickets across lifecycle stages with full transparency.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "SLA Tracking",
    description:
      "Enforce deadlines and reduce delays with real-time SLA monitoring.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Knowledge Base",
    description:
      "Store and reuse solution articles linked to resolved tickets.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "AI Support",
    description:
      "AI answers queries and supports voice/video ticket creation.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Advanced Search",
    description:
      "Unified search across tickets, users, and articles with filters.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Multi-Role Access",
    description:
      "Role-based permissions for Admins, Developers, and Managers.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Real-Time Alerts",
    description:
      "Instant updates via dashboard or email to track issue progress.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Project Grouping",
    description:
      "Organize tickets by project with custom tagging and categories.",
  },
];

const features = [
  {
    title: "Unified Ticket Inbox",
    description:
      "Centralize support channels into one smart inbox for streamlined management.",
    image: "/Nxdesk/Unified Ticket Inbox.png  ",
  },
  {
    title: "Automated Workflows",
    description:
      "Save time with rule-based routing, auto-responses, and SLA tracking.",
    image: "/Nxdesk/Automated Workflows.png",
  },
  {
    title: "AI-Powered Suggestions",
    description:
      "Auto-suggest solutions and categorize tickets to reduce resolution times.",
    image: "/Nxdesk/AI-Powered Suggestions.png",
  },
  {
    title: "Custom Dashboards",
    description:
      "Track metrics and team performance in real-time with drag-and-drop widgets.",
    image: "/Nxdesk/Customizable Dashboards.png",
  },
  {
    title: "Team Collaboration",
    description:
      "Share internal notes, tag teammates, and resolve complex issues faster.",
    image: "/Nxdesk/Collaborative Ticketing.png  ",
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

function NxDesk() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="NxDesk"
        subtitle="Smart ticketing system for streamlined issue tracking. Features SLA monitoring, multi-role access, real-time updates, and AI-powered support."
        breadcrumbs={[
          { name: "Products", path: "/products" },
          { name: "NxDesk", path: "/products/nxdesk" },
        ]}
        backgroundImage="/nxdesk.png"
      />

      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1450px] mx-auto mt-4 lg:px-8">
        {/* Sidebar - Hidden on mobile, sticky on desktop */}
        <div className="hidden lg:block lg:w-1/6">
          <div className="sticky top-24">
            <div className="space-y-2">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="block text-gray-600 hover:text-primary"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-5/6 bg-white min-h-screen p-4 lg:p-6">
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-24">
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              What is NxDesk?
            </h1>
            <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              NxDesk is a smart issue tracking system for streamlined ticket
              management. It enables SLA tracking, project categorization,
              real-time updates, and multi-role access with AI-powered tools for
              quick resolutions.
            </p>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row gap-6 max-w-7xl w-full justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Smart Ticketing</h3>
                    <p>Track and manage issues from creation to resolution.</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">
                      Real-Time SLA Monitoring
                    </h3>
                    <p>Ensure timely resolution and compliance.</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">
                      AI-Enhanced Support
                    </h3>
                    <p>Automate tasks and get intelligent suggestions.</p>
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
                Ticket Management, SLA Tracking, Multi-Role Access, Project &
                Category Grouping, Knowledge Base, Advanced Search, Real-Time
                Notifications, AI Assistance
              </p>
            </div>
            <div className="my-8 sm:my-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="p-4 border rounded-lg">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Insights Section */}
          <section id="insights" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Insights that define value
            </h2>

            {/* Stats Cards - Responsive Grid */}
            <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 bg-white">
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <p>
                  Reduction in average ticket resolution time through automated
                  workflows and AI-powered suggestions.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <p>
                  Improvement in SLA compliance rates with real-time monitoring
                  and automated escalations.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">75%</div>
                <p>
                  Increase in team productivity by centralizing ticket
                  management and eliminating manual tracking.
                </p>
              </div>
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-6 sm:mt-8 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-lg sm:text-xl md:text-2xl p-4 lg:p-8 w-full lg:w-3/4 leading-relaxed">
                Streamline support operations with NxDesk. Gain complete control
                and efficiency in handling tickets and workflows.
              </h1>
              <div className="p-4 lg:p-8 w-full lg:w-auto flex justify-center lg:justify-end">
                <Link
                  to={"/contactus"}
                  className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
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
              NxDesk brings streamlined issue tracking, SLA compliance,
              efficient team collaboration, AI-powered automation, and
              centralized knowledge—all in one unified solution.
            </p>

            {/* Benefits Grid - Responsive */}
            <div className="max-w-7xl mx-auto py-8 sm:py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                {tabs.map((tab, idx) => (
                  <div
                    key={idx}
                    className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                  >
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
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
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
          <section id="empowering-trade" className="mt-16 sm:mt-20 scroll-mt-24">
            <div className="bg-black w-full p-4 lg:p-10 text-white rounded-lg">
              {/* Heading and button - Responsive Layout */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                  Simplifying Support Operations for Modern Teams
                </h1>
                <div className="flex-shrink-0">
                  <Link
                    to={"/contactus"}
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Manage customer queries, internal requests, and IT tickets with
                NxDesk. Automate workflows, gain real-time visibility, and
                deliver fast support from a unified platform.
              </p>
            </div>
          </section>

          {/* Other Products Section */}
          <section id="other-products" className="mt-16 sm:mt-20 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8">
              Explore other range of products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productData.map((product, idx) => (
                <Link
                  key={idx}
                  to={product.link}
                  className="p-6 border rounded-lg hover:border-primary transition-colors block"
                >
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NxDesk;
