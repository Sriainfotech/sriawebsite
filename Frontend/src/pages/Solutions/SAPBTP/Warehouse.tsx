import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/layout/PageHeader";

import {
  Shield,
  Lock,
  Settings,
  Database,
  Users,
  CheckCircle,
  Server,
  Cloud,
  BarChart2,
  Globe,
  Rocket,
  Star,
} from "lucide-react";

const faqs = [
  {
    question: "What is SAP EWM?",
    answer:
      "SAP Extended Warehouse Management (EWM) is a powerful solution for managing high-volume warehouse operations and complex supply chain logistics.",
  },
  {
    question: "What is the difference between WM and EWM?",
    answer:
      "EWM offers advanced features like slotting, kitting, cross-docking, and labor management, which are not available in standard SAP WM.",
  },
  {
    question: "Can EWM be integrated with automation systems?",
    answer:
      "Yes, EWM integrates seamlessly with Material Flow Systems (MFS), RFID, and automated storage and retrieval systems (AS/RS).",
  },
  {
    question: "Is EWM available on S/4HANA?",
    answer:
      "Yes, EWM is available as an embedded application in S/4HANA or as a decentralized standalone instance.",
  },
  {
    question: "Does EWM support labor management?",
    answer:
      "Absolutely. It includes comprehensive labor management capabilities to plan, measure, and optimize workforce productivity.",
  },
];
const tabs = [
  {
    icon: <Star className="w-10 h-10 text-yellow-500" />,
    title: "End-to-End SAP Services",
    description:
      "From planning to execution, we cover every aspect of your SAP journey.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Industry Expertise",
    description:
      "Deep knowledge across various sectors to tailor solutions for your specific needs.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Security & Compliance",
    description:
      "Ensuring your data is secure and compliant with industry standards.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: "Rapid Deployment",
    description:
      "Accelerated implementation methodologies to get you up and running faster.",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
    title: "Value Realization",
    description:
      "Focusing on tangible business outcomes and ROI.",
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: "Cloud & On-Prem Expertise",
    description:
      "Seamless integration and management of hybrid environments.",
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Change Management & Training",
    description:
      "Guiding your team through transitions for smooth adoption.",
  },
  {
    icon: <Settings className="w-10 h-10 text-gray-500" />,
    title: "Certified Professionals",
    description:
      "A team of highly skilled and certified experts dedicated to your success.",
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
    heading: "Advisory & Assessment",
    description:
      "Plan your EWM journey.",
    points: [
      "Process assessment",
      "Gap analysis",
      "Readiness checks",
      "Roadmap creation",
    ],
  },
  {
    title: "Implementation",
    heading: "EWM Implementation",
    description:
      "End-to-end setup and config.",
    points: [
      "Greenfield/Brownfield",
      "Embedded/Decentralized",
      "Warehouse structure",
      "ERP integration",
    ],
  },
  {
    title: "Integration",
    heading: "Integration Services",
    description:
      "Connect systems and hardware.",
    points: [
      "MFS automation",
      "RFID/Barcode scanning",
      "Transportation Management",
      "Yard Logistics",
    ],
  },
  {
    title: "Advanced",
    heading: "Advanced Functionalities",
    description:
      "Optimize complex processes.",
    points: [
      "Slotting & rearrangement",
      "Wave management",
      "Cross-docking & VAS",
      "Handling Unit Management",
    ],
  },
  {
    title: "Custom",
    heading: "Custom Developments",
    description:
      "Tailored warehouse solutions.",
    points: [
      "RF framework enhancements",
      "Fiori apps",
      "Custom reports",
      "Non-SAP integration",
    ],
  },
  {
    title: "Support",
    heading: "Support & Optimization",
    description:
      "Ensure continuous improvement.",
    points: [
      "Hypercare support",
      "KPI monitoring",
      "Process automation",
      "Performance tuning",
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
    "Your Trusted Partner in SAP Transformation. We help organizations optimize their warehouse operations for greater efficiency and accuracy.",
  imageUrl: "/Solutions/buildapps.webp",
  imageAlt: "SAP Extended Warehouse Management",
  items: [
    {
      title: "Advisory Services",
      highlight: "Strategic Planning",
      description:
        "Expert assessment and roadmap creation for your EWM implementation or migration.",
    },
    {
      title: "EWM Implementation",
      highlight: "End-to-End Setup",
      description:
        "Comprehensive configuration of embedded or decentralized EWM tailored to your needs.",
    },
    {
      title: "Integration Services",
      highlight: "Seamless Connectivity",
      description:
        "Integration with automation systems, RFID, and other logistics modules.",
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
    title: "Private Cloud for Regulated Industries",
    imageUrl: "/images/private-cloud-health.jpg",
    imageAlt: "Private Cloud in Healthcare",
    gradientFrom: "from-green-600",
    gradientTo: "to-green-800",
  },
  {
    title: "Hybrid Cloud Strategies",
    imageUrl: "/images/hybrid-cloud.jpg",
    imageAlt: "Hybrid Cloud",
    gradientFrom: "from-teal-600",
    gradientTo: "to-cyan-700",
  },
  {
    title: "Data Sovereignty in Private Cloud",
    imageUrl: "/images/private-cloud-security.jpg",
    imageAlt: "Secure Private Cloud",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
  },
];

function Warehouse() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      <PageHeader
        title="SAP EWM Optimization"
        subtitle="Improve inventory accuracy and enhance supply chain efficiency with advanced warehouse management."
        breadcrumbs={[
          { name: "Solutions", path: "/solutions" },
          { name: "SAP BTP", path: "/solutions/sap-btp" },
          { name: "Build Apps", path: "/solutions/build-apps" },
        ]}
        backgroundImage="/Solutions/buildapps.png"
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
                mainDescription="Our services cover the entire warehouse management lifecycle from advisory and implementation to integration and support."
              // ctaText="Get a Consultation"
              /> */}
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-4">Delivering Impact-Driven SAP Implementations for Sustainable Growth</h2>
                <p className="mb-8 text-gray-600">Our services cover the entire warehouse management lifecycle from advisory and implementation to integration and support.</p>
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
            {/* <Resource
              heading="Explore Our Resources"
              paragraph="Helpful tools and insights for your export-import operations"
              products={[
              {
    title: "Private Cloud Implementation Guide",
    description:
      "Step-by-step best practices for deploying a secure Private Cloud.",
    image: "/images/private-cloud-guide.jpg",
    link:""
  },
  {
    title: "Case Study: Banking Industry",
    description:
      "How a leading bank ensured compliance and security with Private Cloud.",
    image: "/images/private-cloud-case.jpg",
    link:""
  },

              ]}
            /> */}
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

export default Warehouse;
