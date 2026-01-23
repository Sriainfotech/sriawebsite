import React from "react";
import PageHeader from "@/components/layout/PageHeader";

// import FeatureCard from "@/components/FeatureCard";
// import HighlightCard from "@/components/HighlightCard";
// import ImageOverlay from "@/components/ImageOverlay";
// import Navigation from "@/components/Navigation";
// import Requesademobtn from "@/components/Requesademobtn";
// import FAQSection from "@/components/FAQSection";
// import FeatureTabs from "@/components/FeatureTabs";
// import InfoTab from "@/components/InfoTab";
// import ProductRange from "@/components/ProductRange";
// import Resource from "@/components/Resource";
// import SidebarMenu from "@/components/SidebarMenu";
// import StatCard from "@/components/StatCard";
import { Link } from "react-router-dom";
import {
  Star,
  Globe,
  Shield,
  Rocket,
  BarChart2,
  Activity,
  Database,
  Users,
  Settings,
  Cloud,
  Monitor,
  Server,
} from "lucide-react";
// import Footer from "@/components/Footer";
// import ConsultationTabsSection from "@/components/services/ConsultationTabsSection";
// import StatCardStable from "@/components/StatCardStable";
// import TabSection from "@/components/services/TabSection";
// import Section from "@/components/services/PartnersCarousel";

// import ParallaxScrollingComponent from "@/components/services/ParallaxScrollingComponent";
// import TopSectionWithTabs from "@/components/services/TopSectionWithTabs";

// import PartnersCarousel from "@/components/services/PartnersCarousel";
// import { CustomerStories } from "@/components/CustomerStoriesTestimonials";

function Integration() {
  const tabsData2 = [
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      heading: "End-to-End SAP Services",
      description:
        "Implementation, migration, support, and optimization across SAP S/4HANA, ECC, BTP, and Industry Cloud.",
    },
    {
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      heading: "Industry Expertise",
      description:
        "Deep domain knowledge in manufacturing, oil & gas, healthcare, retail, and public sector.",
    },
    {
      icon: <Settings className="w-10 h-10 text-gray-500" />,
      heading: "Certified SAP Professionals",
      description:
        "Team of certified consultants with cross-functional and technical expertise.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
      heading: "Rapid Deployment",
      description:
        "Accelerated delivery using SAP Activate, best practices, and agile frameworks.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-orange-500" />,
      heading: "Cloud & On-Prem Expertise",
      description:
        "Proven capabilities in SAP S/4HANA Cloud (Public & Private), RISE with SAP, and on-premise transformations.",
    },
    {
      icon: <Activity className="w-10 h-10 text-green-500" />,
      heading: "Innovation-Driven",
      description:
        "Leveraging AI/ML, IoT, and mobility within SAP BTP to deliver intelligent enterprise solutions.",
    },
    {
      icon: <Globe className="w-10 h-10 text-red-500" />,
      heading: "Global Delivery Model",
      description:
        "Onsite-offshore hybrid delivery with 24x7 support and managed services.",
    },
  ];
  const tabsData = [
    {
      icon: <Cloud className="w-10 h-10 text-black" />,
      heading: "Cloud Integration Services",
      description:
        "Seamlessly connect SAP and non-SAP systems, enabling smooth data flow and unified business processes.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-black" />,
      heading: "Data Management & Analytics",
      description:
        "Leverage advanced analytics and secure data management to drive intelligent decision-making.",
    },
    {
      icon: <Server className="w-10 h-10 text-black" />,
      heading: "Application Development & Extensions",
      description:
        "Build, customize, and extend applications on SAP BTP to meet evolving business needs.",
    },
  ];
  const sampleSolutions = [
    {
      title: "Strategy",
      heading: "Integration Strategy & Assessment",
      description:
        "Define your integration roadmap.",
      points: [
        "Landscape assessment",
        "Architecture planning",
        "Technology selection",
        "Governance framework",
      ],
    },
    {
      title: "BTP & Cloud",
      heading: "SAP BTP & Cloud Integration",
      description:
        "Connect cloud and on-premise apps.",
      points: [
        "SAP Integration Suite",
        "Cloud connector setup",
        "iFlow development",
        "API management",
      ],
    },
    {
      title: "Migration",
      heading: "SAP PI/PO and CPI Migration",
      description:
        "Modernize your integration middleware.",
      points: [
        "Migration assessment",
        "Interface redesign",
        "Testing & validation",
        "Go-live support",
      ],
    },
    {
      title: "API Mgmt",
      heading: "API Management & Development",
      description:
        "Secure and manage your APIs.",
      points: [
        "API design & development",
        "Security policies",
        "Traffic management",
        "Developer portal",
      ],
    },
    {
      title: "Non-SAP",
      heading: "Integration with Non-SAP Systems",
      description:
        "Connect diverse enterprise systems.",
      points: [
        "Salesforce integration",
        "Third-party ERPs",
        "Legacy systems",
        "B2B integration",
      ],
    },
    {
      title: "IoT & Event",
      heading: "IoT & Event-Driven Integration",
      description:
        "Real-time data processing.",
      points: [
        "IoT sensor integration",
        "Event mesh setup",
        "Real-time alerts",
        "Automated actions",
      ],
    },
    {
      title: "S/4HANA",
      heading: "SAP S/4HANA Integration",
      description:
        "Seamless core ERP connectivity.",
      points: [
        "Side-by-side extensions",
        "In-app extensibility",
        "Data replication",
        "Process orchestration",
      ],
    },
    {
      title: "Support",
      heading: "Monitoring, Support & Maintenance",
      description:
        "Ensure integration reliability.",
      points: [
        "24/7 monitoring",
        "Error handling",
        "Performance tuning",
        "Interface updates",
      ],
    },
  ];

  const features = [
    {
      title: "Application Development",
      description:
        "Building robust applications to extend SAP capabilities.",
      image: "/Solutions/buildapps.png",
    },
    {
      title: "Data & Analytics",
      description:
        "Empowering decisions with SAP Analytics Cloud (SAC).",
      image: "/DATA ANALYTICS.png",
    },
    {
      title: "Automation",
      description:
        "Streamlining operations with RPA and intelligent automation.",
      image: "/Services/automation.png",
    },
    {
      title: "Integration",
      description:
        "Seamless connectivity using SAP CPI and BTP.",
      image: "/Solutions/cpi.png",
    },
    {
      title: "ABAP",
      description:
        "Advanced ABAP development for custom requirements.",
      image: "/Services/ABAP.jpg",
    },
    {
      title: "SAC",
      description:
        "Strategic planning and analytics with SAP Analytics Cloud.",
      image: "/Services/SAC.webp",
    },
    {
      title: "FIORI",
      description:
        "Modern user experience with SAP Fiori.",
      image: "/Services/FIORI.webp",
    },
    {
      title: "RPA",
      description:
        "Robotic Process Automation for efficiency.",
      image: "/Services/RPA.jpg",
    },
    {
      title: "CPI",
      description:
        "Cloud Platform Integration for hybrid landscapes.",
      image: "/Services/CPI.webp",
    },
    {
      title: "AI",
      description:
        "Artificial Intelligence for intelligent enterprise solutions.",
      image: "/Services/AI.jpg",
    },
  ];

  const productData = [
    {
      title: "Implementation",
      description:
        "Comprehensive SAP implementation services tailored to your business needs.",
      link: "/implement"
    },
    {
      title: "Rollouts",
      description:
        "Global rollout strategies to expand your SAP footprint efficiently.",
      link: "/rollouts"
    },
    {
      title: "Training",
      description:
        "Empower your workforce with specialized SAP training programs.",
      link: "/training"
    },
    {
      title: "Migrations",
      description:
        "Seamless migration to SAP S/4HANA and cloud platforms.",
      link: "/migrations"
    },
    {
      title: "Upgrades",
      description:
        "Keep your SAP landscape up-to-date with our upgrade services.",
      link: "/upgrades"
    },
    {
      title: "Development",
      description:
        "Custom development to extend and enhance your SAP solutions.",
      link: "/application-development"
    },
    {
      title: "Support",
      description:
        "24/7 support and maintenance for uninterrupted operations.",
      link: "/support-maintainance"
    },
    {
      title: "Integration",
      description:
        "Connect your SAP and non-SAP systems for a unified landscape.",
      link: "/integration"
    },
    {
      title: "Testing",
      description:
        "Rigorous testing services to ensure system reliability and performance.",
      link: "/testing"
    }
  ];

  const faqs = [
    {
      question:
        "What is SAP Business Technology Platform (BTP)?",
      answer:
        "SAP BTP is a unified platform that brings together application development, automation, data and analytics, integration, and AI capabilities in one environment.",
    },
    {
      question:
        "How does SAP BTP support innovation?",
      answer:
        "It provides a flexible cloud environment where businesses can build new applications, extend existing SAP solutions, and integrate diverse systems quickly.",
    },
    {
      question:
        "Can I use SAP BTP for non-SAP integrations?",
      answer:
        "Yes, SAP BTP Integration Suite offers pre-built connectors and open APIs to seamlessly integrate SAP systems with third-party applications and data sources.",
    },
    {
      question:
        "What are the key components of SAP BTP?",
      answer:
        "Key components include the SAP Integration Suite, SAP Extension Suite, SAP Analytics Cloud, and SAP HANA Cloud for data management.",
    },
    {
      question:
        "Is SAP BTP suitable for hybrid landscapes?",
      answer:
        "Absolutely. SAP BTP is designed to operate across on-premise, cloud, and hybrid environments, ensuring consistent governance and performance.",
    },
  ];

  // <FAQSection faqs={faqs} />;

  const tabs = [
    {
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      title: "Premium Features",
      description: "Access exclusive tools designed for optimal performance.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Global Reach",
      description: "Connect with clients and teams across the world.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Secure",
      description: "Top-notch security ensures your data is always safe.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
      title: "Fast Deployment",
      description: "Launch your projects quickly and efficiently.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
      title: "Analytics",
      description: "Gain insights into user behavior and engagement.",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      title: "Data Management",
      description: "Organize and maintain your data seamlessly.",
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Team Collaboration",
      description: "Coordinate with your team in real time.",
    },
    {
      icon: <Settings className="w-10 h-10 text-gray-500" />,
      title: "Custom Settings",
      description: "Tailor the experience to your business needs.",
    },
  ];

  const menuItems = [
    "Offerings",
    "Insights",
    "Benefits",
    "Tech Trends",
    "Success Stories",
    "Partners",
    "Related services",
  ];
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

  const highlightData = [
    {
      title: "Unified Integration",
      description:
        "Easily connect applications, data, and business processes across hybrid and cloud environments.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain real-time insights and make data-driven decisions with SAP BTP’s analytics tools.",
    },
    {
      title: "Extensibility",
      description:
        "Build and extend SAP and third-party applications with low-code/no-code capabilities.",
    },
    {
      title: "Security & Compliance",
      description:
        "Ensure enterprise-grade security, identity management, and regulatory compliance.",
    },
  ];
  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        {/* <Navigation enableScrollEffect={true} /> */}

        <PageHeader
          title="SAP BTP Integration Services"
          subtitle="Sria Infotech delivers seamless integrations that ensure data consistency, improve efficiency, and enable real-time decision-making."
          breadcrumbs={[
            { name: "Services", path: "/services" },
            { name: "SAP Support", path: "/services/sap-support" },
            { name: "SAP Business", path: "/services/sap-business" },
          ]}
          backgroundImage="/Services/business.png"
        />


        {/* Main Content */}
        <div className=" relative  sticky top-0 z-20   bg-white ">
          <div className="  flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto ">
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

            <div className="w-full lg:w-5/6 min-h-screen p-2">
              {/* Overview */}
              {/* Offerings Section */}
              <section id="offerings" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  {/* <ConsultationTabsSection
                    solutions={sampleSolutions}
                    mainHeading="Delivering Impact-Driven SAP Implementations for Sustainable Growth"
                    mainDescription="Select a step to learn more about our comprehensive integration process."
                  // ctaText="Get a Consultation"
                  /> */}
                  <h2 className="text-3xl font-bold mb-4">Delivering Impact-Driven SAP Implementations for Sustainable Growth</h2>
                  <p className="mb-8 text-gray-600">Select a step to learn more about our comprehensive integration process.</p>
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
              </section>
              {/* Insights Section */}
              <section id="insights" className="scroll-mt-24 py-16 bg-white">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <h2 className="text-3xl sm:text-[47px] font-semibold mb-8">
                    Resourceful insights of SAP Business Technology
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
                    {/* <StatCardStable ... /> */}
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">40%</div>
                      <p>SAP BTP accelerate application development</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">50%</div>
                      <p>Improve data-driven decision-making</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">50%</div>
                      <p>Enhanced scalability, security, and cross-platform compatibility</p>
                    </div>
                  </div>
                </div>
              </section>
              <div className="hidden"></div>
              <section
                id="benefits"
                className="mt-20 max-w-[1400px] scroll-mt-24"
              >
                {/* <TopSectionWithTabs
                  tabSectionHeading="Future-Ready SAP Capabilities, Today"
                  tabs={tabsData2}
                /> */}
                <h2 className="text-3xl font-bold mb-8">Future-Ready SAP Capabilities, Today</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tabsData2.map((tab, idx) => (
                    <div key={idx} className="p-6 border rounded-lg bg-gray-900 text-white">
                      <div className="mb-4">{tab.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{tab.heading}</h3>
                      <p className="text-gray-300">{tab.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section id="tech-trends" className="mt-20 max-w-[1400px] scroll-mt-24">
                <h2 className="text-3xl sm:text-[47px] font-semibold mb-8 px-4">
                  Drive Innovation with Latest Tech
                </h2>
                <div className="py-8 sm:py-10 px-4">
                  {/* <FeatureTabs features={features} /> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                      <div key={idx} className="p-4 border rounded-lg">
                        <h3 className="font-bold">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>{" "}
              <section
                id="success-stories"
                className=" max-w-[1400px] px-2  w-full pb-10 bg-black "
              >
                {/* <CustomerStories stories={customerStories} /> */}
                {/* <div className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Success Stories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {customerStories.map((story, idx) => (
                      <div key={idx} className="bg-gray-900 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                        <Link to={story.readMoreLink} className="text-primary hover:underline">Read More</Link>
                      </div>
                    ))}
                  </div>
                </div> */}
              </section>{" "}
              {/* <section id="partners" className="max-w-[1400px]">
                <div className="max-w-[1400px] w-full mx-auto "> */}
              {/* <PartnersCarousel /> */}
              {/* <div className="p-8 text-center bg-gray-50">
                    <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
                    <p>Partner logos carousel placeholder</p>
                  </div>
                </div>
              </section>{" "} */}
              <section
                id="partners-parallax"
                className="mt-20 hidden lg:block scroll-mt-24"
              >
                {/* <ParallaxScrollingComponent /> */}
              </section>
              <section id="related-services" className="mt-20 scroll-mt-24">
                {/* <ProductRange ... /> */}
                <h2 className="text-3xl font-bold mb-8">Elevate, Innovate, and Thrive with SAP</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {productData.map((product, idx) => (
                    <Link key={idx} to={product.link} className="p-6 border rounded-lg hover:border-primary transition-colors block">
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
              <section id="resources" className="mt-10 scroll-mt-24">
                {/* <Resource ... /> */}
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-lg mt-8">

      </div>
      <div>
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
    </div>
  );
}

export default Integration;
