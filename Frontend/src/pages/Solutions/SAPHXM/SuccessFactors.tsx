import React from "react";
import { Link } from "react-router-dom";
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

const faqs = [
  {
    question: "What is SAP SuccessFactors?",
    answer:
      "SAP SuccessFactors is a comprehensive suite of cloud-based Human Capital Management (HCM) solutions designed to help organizations effectively manage their workforce.",
  },
  {
    question: "What services do you offer for SuccessFactors?",
    answer:
      "We offer end-to-end services including Advisory & Roadmap, Implementation, Integration, Post-Go-Live Support (AMS), and Training & Change Management.",
  },
  {
    question: "Can you help with migration from legacy systems?",
    answer:
      "Yes, we specialize in HCM to SuccessFactors migration strategies, hybrid deployment planning, and phased rollouts across geographies.",
  },
  {
    question: "What is included in Post-Go-Live Support?",
    answer:
      "Our support includes Hypercare, ticket-based Application Management Services (AMS), and Release Management for continuous updates.",
  },
  {
    question: "Do you offer custom enhancements?",
    answer:
      "Yes, we provide process automation using SAP Build, custom UI enhancements with Fiori/UI5, and tailored analytics dashboards.",
  },
];

const tabs = [
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: "End-to-End SAP Services",
    description:
      "From planning to execution, we cover every aspect of your SAP journey.",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "Industry Expertise",
    description:
      "Deep knowledge across various sectors to tailor solutions for your specific needs.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Certified SAP Professionals",
    description:
      "A team of highly skilled and certified experts dedicated to your success.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Rapid Deployment",
    description:
      "Accelerated implementation methodologies to get you up and running faster.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Cloud & On-Prem Expertise",
    description:
      "Seamless integration and management of hybrid environments.",
  },
  {
    icon: <Globe className="w-10 h-10 text-green-500" />,
    title: "Global Delivery Model",
    description:
      "Flexible delivery options ensuring 24/7 support and execution.",
  },
  {
    icon: <Shield className="w-10 h-10 text-red-500" />,
    title: "Security & Compliance",
    description:
      "Ensuring your data is secure and compliant with industry standards.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Value Realization",
    description:
      "Focusing on tangible business outcomes and ROI.",
  },
];

const features = [
  {
    title: "Application Development",
    description:
      "Building robust applications to extend SAP capabilities with ABAP and custom development.",
    image: "/Solutions/buildapps.png",
  },
  {
    title: "Data & Analytics",
    description:
      "Empowering decisions with SAP Analytics Cloud (SAC) for comprehensive business insights.",
    image: "/DATA ANALYTICS.png",
  },
  {
    title: "Automation & AI",
    description:
      "Streamlining operations with RPA, AI, and intelligent automation technologies.",
    image: "/Services/automation.png",
  },
  {
    title: "Integration Services",
    description:
      "Seamless connectivity using SAP CPI and BTP for a unified business landscape.",
    image: "/Solutions/cpi.png",
  },
  {
    title: "Fiori User Experience",
    description:
      "Enhancing user engagement with custom Fiori-based extensions and modern UI.",
    image: "/Services/FIORI.webp",
  },
];

const sampleSolutions = [
  {
    title: "Advisory",
    heading: "Advisory & Roadmap Services",
    description:
      "Align HR strategy with business goals.",
    points: [
      "HR Transformation Consulting",
      "Readiness Assessment",
      "Roadmap Design",
      "Phased Implementation Planning",
    ],
  },
  {
    title: "Implementation",
    heading: "Implementation Services",
    description:
      "Expert deployment of modules.",
    points: [
      "Employee Central (Core HR)",
      "Recruiting & Onboarding",
      "Performance & Goals",
      "Learning Management (LMS)",
    ],
  },
  {
    title: "Integration",
    heading: "Integration Services",
    description:
      "Connect your HR landscape.",
    points: [
      "SAP S/4HANA integration",
      "Third-party payroll/benefits",
      "API-based integrations",
      "SAP BTP & CPI",
    ],
  },
  {
    title: "Support",
    heading: "Post-Go-Live Support & AMS",
    description:
      "Ensuring stability after launch.",
    points: [
      "Hypercare Support",
      "Application Management (AMS)",
      "Release Management",
      "SLA-driven Support",
    ],
  },
  {
    title: "Training",
    heading: "Training & Change Mgmt",
    description:
      "Empower your workforce.",
    points: [
      "Role-based End User Training",
      "Change Management Support",
      "Communication Plans",
      "Adoption Monitoring",
    ],
  },
  {
    title: "Enhancement",
    heading: "Enhancement & Optimization",
    description:
      "Maximize value with extensions.",
    points: [
      "Process Automation",
      "Custom UI Enhancements",
      "Analytics Dashboards",
      "Migration Strategy",
    ],
  },
];

const menuItems = [
  "Overview",
  "Features",
  "Insights",
  "Benefits",
  "Find Your Answers",
  "Other Products",
  // "Resources",
];


const sapData = {
  heading: "Delivering Impact-Driven SAP Implementations",
  description:
    "Your Trusted Partner in SAP Transformation. Our SAP SuccessFactors services are tailored to meet the unique needs of your organization, ensuring seamless implementation, optimization, and continuous support.",
  imageUrl: "/Solutions/successfactors.png",
  imageAlt: "SAP SuccessFactors Visualization",
  items: [
    {
      title: "Advisory & Roadmap",
      highlight: "Strategic Alignment",
      description:
        "Align HR strategy with business goals and design a phased implementation roadmap.",
    },
    {
      title: "Implementation",
      highlight: "Core HR & Talent",
      description:
        "Deploy Employee Central, Recruiting, Onboarding, Performance, and LMS modules.",
    },
    {
      title: "Integration",
      highlight: "Seamless Connectivity",
      description:
        "Integrate with SAP S/4HANA and third-party systems via SAP BTP and CPI.",
    },
  ],
};

const customerStories = [
  {
    id: 1,
    image: "/partners/ivc-logo.png",
    title: "IVC Consulting Strengthens Global SAP Delivery with Strategic Partnership",
    readMoreLink: "/partners/ivc-solutions",
  },
  {
    id: 2,
    image: "/customerStories/patil.jpg",
    title: "Patil Drives Operational Excellence with End-to-End SAP, AMS & OCR Automation",
    readMoreLink: "/patil",
  },
  {
    id: 3,
    image: "/customerStories/7hills.jpg",
    title: "7Hills Restaurant Transforms Guest Experience with Custom Digital Platform",
    readMoreLink: "/hills",
  },
  {
    id: 4,
    image: "/customerStories/pharma.jpg",
    title: "LVK Pharma Goes Digital with Odoo CRM, Eliminates Manual Processes",
    readMoreLink: "/Lvk",
  },
];

const insights = {
  heading: "Elevate, Innovate, and Thrive with SAP",
  description:
    "Ready to Grow Your Business? Explore our comprehensive range of services from implementation to support.",
  ctaText: "Contact Us",
  ctaLink: "/contactus",
  solutions: [
    { title: "Rise with SAP", href: "/solutions/rise-with-sap" },
    { title: "SAP S/4HANA", href: "/solutions/sap-s4hana" },
  ],
};

const insightsData = [
  {
    title: "Future of Human Experience Management",
    imageUrl: "/images/successfactors-future.jpg",
    imageAlt: "HXM Future",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
  },
  {
    title: "AI in Talent Management",
    imageUrl: "/images/successfactors-ai.jpg",
    imageAlt: "AI in HR",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Building a Learning Culture",
    imageUrl: "/images/successfactors-learning.jpg",
    imageAlt: "Learning Development",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

function SuccessFactors() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      <PageHeader
        title="Transform HR Experience"
        subtitle="Streamline workforce management and elevate employee experience with intelligent cloud-based HCM solutions."
        breadcrumbs={[
          { name: "Solutions", path: "/solutions" },
          { name: "SAP HXM", path: "/solutions/sap-hxm" },
          { name: "SuccessFactors", path: "/solutions/successfactors" },
        ]}
        backgroundImage="/Solutions/successfactors.png"
      />


      {/* Main Content - Responsive Layout */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto mt-4 lg:px-8">
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
            <div className="bg-white">
              {/* <InfoSection {...sapData} /> */}
              <h2 className="text-3xl font-bold mb-4">{sapData.heading}</h2>
              <p className="mb-8 text-gray-600">{sapData.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sapData.items.map((item, idx) => (
                  <div key={idx} className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm font-semibold text-primary mb-2">{item.highlight}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
            <div className="flex justify-center">
              {/* <ConsultationTabsSection
                solutions={sampleSolutions}
                mainHeading="Delivering Impact-Driven SAP Implementations for Sustainable Growth"
                mainDescription="Our services cover the entire lifecycle from advisory and roadmap design to implementation, integration, and post-go-live support."
              // ctaText="Get a Consultation"
              /> */}
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-4">Delivering Impact-Driven SAP Implementations for Sustainable Growth</h2>
                <p className="mb-8 text-gray-600">Our services cover the entire lifecycle from advisory and roadmap design to implementation, integration, and post-go-live support.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sampleSolutions.map((sol, idx) => (
                    <div key={idx} className="p-6 border rounded-lg">
                      <h3 className="text-xl font-bold mb-2">{sol.heading}</h3>
                      <p className="text-gray-600 mb-4">{sol.description}</p>
                      <ul className="list-disc pl-5">
                        {sol.points.map((pt, i) => (
                          <li key={i} className="text-sm text-gray-500">{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="insights" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Insights that define value
            </h2>

            {/* Stats Cards - Responsive Grid */}
            <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
              {/* <StatCardStable
                percentage="100%"
                description="Commitment to Sustainable Growth"
              />
              <StatCardStable
                percentage="24/7"
                description="Support with Application Management Services"
              />
              <StatCardStable
                percentage="10+"
                description="Years of Experience Helping Companies"
              /> */}
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p>Commitment to Sustainable Growth</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p>Support with Application Management Services</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p>Years of Experience Helping Companies</p>
              </div>
            </div>

            {/* CTA Section - Responsive */}
            <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
              <h1 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
                Our innovative technologies empower financial institutions to streamline operations, enhance customer experiences, and drive growth.
              </h1>
              <div className="p-4 lg:p-10 w-full lg:w-auto flex justify-center lg:justify-end">
                <Link to="/contactus" className="bg-white text-black px-6 py-3 rounded-lg inline-block">
                  Request a Demo
                </Link>
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
                Drive Innovation and Excellence with the Latest Tech Trends. We empower your business with Application Development, Data & Analytics, Automation, and AI.
              </p>
            </div>
            <section className="my-8 sm:my-10 w-full">
              {/* <FeatureTabs features={features} /> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feat, idx) => (
                  <div key={idx} className="p-6 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                    <p className="text-gray-600">{feat.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>

          {/* Insights Section */}

          {/* Benefits Section */}
          <section id="benefits" className="mt-16 sm:mt-20 w-full scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl w-full lg:w-3/4 font-semibold">
              Unlock powerful benefits
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
              Your Trusted Partner in SAP Transformation. We bring industry expertise, certified professionals, and a global delivery model to ensure your success.
            </p>

            {/* Benefits Grid - Responsive */}
            <div className="max-w-7xl mx-auto py-8 sm:py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                {tabs.map((tab, idx) => (
                  // <InfoTab key={idx} {...tab} />
                  <div key={idx} className="p-6 border rounded-lg">
                    <div className="mb-4">{tab.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{tab.title}</h3>
                    <p className="text-gray-600">{tab.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="mt-16 sm:mt-20 w-full scroll-mt-24 text-black">
            {/* <CustomerStories stories={customerStories} theme="light" /> */}
            {/* <div className="p-8 bg-gray-50 rounded-lg">
              <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {customerStories.map((story, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                    <Link to={story.readMoreLink} className="text-primary hover:underline">Read More</Link>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Consultation Section */}
          {/* FAQ Section */}
          <section
            id="find-your-answers"
            className="mt-16 sm:mt-20 w-full scroll-mt-24"
          >
            {/* <FAQSection faqs={faqs} /> */}
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-4 border rounded-lg">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
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
                  Empowering global trade for businesses
                </h1>
                <div className="flex-shrink-0">
                  <Link to="/contactus" className="bg-white text-black px-6 py-3 rounded-lg inline-block">
                    Request a Demo
                  </Link>
                </div>
              </div>

              {/* Paragraph */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                Ready to Transform Your Business? Join hundreds of successful companies who have modernized their operations with our SAP solutions.
              </p>
            </div>
          </section>

          {/* Resources Section */}

          {/* <InsightsSection insights={insightsData} /> */}


          <section id="other-products" className="mt-12 sm:mt-16 scroll-mt-24">
            {/* <RelatedSolutions {...insights} /> */}
            <h2 className="text-3xl font-bold mb-8">{insights.heading}</h2>
            <p className="mb-8 text-gray-600">{insights.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.solutions.map((sol, idx) => (
                <Link key={idx} to={sol.href} className="p-6 border rounded-lg hover:border-primary block">
                  <h3 className="text-xl font-bold">{sol.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Certifications Section - Responsive */}
      <div className="p-4 lg:p-8 rounded-lg mt-8">

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

export default SuccessFactors;
