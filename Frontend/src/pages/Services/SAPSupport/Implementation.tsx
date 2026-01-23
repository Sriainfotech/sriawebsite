import React from "react";
import PageHeader from "@/components/layout/PageHeader";

import { Link } from "react-router-dom";
import {
  Star,
  Globe,
  Shield,
  Rocket,
  BarChart2,
  Database,
  Users,
  Settings,
  Activity,
  Cloud,
  Monitor,
  Server,
} from "lucide-react";

function Implementation() {
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
      heading: "Strategic Planning",
      description:
        "Ensure a risk-free implementation with our comprehensive S/4HANA planning and strategy services.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-black" />,
      heading: "System Optimization",
      description:
        "Maximize system performance and efficiency with our tailored configuration and optimization.",
    },
    {
      icon: <Server className="w-10 h-10 text-black" />,
      heading: "Migration Support",
      description:
        "Achieve seamless adoption with our expert data migration, testing, and go-live support.",
    },
  ];
  const sampleSolutions = [
    {
      title: "Assessment",
      heading: "Assessment and Planning",
      description:
        "Strategic roadmap and readiness check.",
      points: [
        "Business process analysis",
        "Fit-gap analysis",
        "Roadmap creation",
        "Readiness assessment",
      ],
    },
    {
      title: "Design",
      heading: "System Design & Config",
      description:
        "Blueprint and architecture design.",
      points: [
        "Solution architecture",
        "Module configuration",
        "Customization design",
        "Integration planning",
      ],
    },
    {
      title: "Migration",
      heading: "Data Migration & Integration",
      description:
        "Secure transfer of legacy data.",
      points: [
        "Data cleansing",
        "Migration execution",
        "Validation & reconciliation",
        "System integration",
      ],
    },
    {
      title: "Training",
      heading: "Training & Change Mgmt",
      description:
        "User enablement and adoption.",
      points: [
        "End-user training",
        "Change management",
        "Documentation",
        "Knowledge transfer",
      ],
    },
    {
      title: "Testing",
      heading: "Testing & QA",
      description:
        "Comprehensive QA and UAT.",
      points: [
        "Unit testing",
        "Integration testing",
        "User acceptance testing",
        "Performance testing",
      ],
    },
    {
      title: "Support",
      heading: "Go-Live & Support",
      description:
        "Smooth deployment and hypercare.",
      points: [
        "Cutover planning",
        "Go-live execution",
        "Hypercare support",
        "Post-implementation review",
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
        "What does your SAP Implementation Service cover?",
      answer:
        "Our services cover the entire lifecycle, including project planning, system configuration, data migration, testing, user training, and post-go-live support.",
    },
    {
      question:
        "How long does a typical SAP S/4HANA implementation take?",
      answer:
        "The timeline varies based on project scope and complexity, but typical implementations range from 6 to 12 months using our accelerated methodologies.",
    },
    {
      question:
        "Do you support both Greenfield and Brownfield implementations?",
      answer:
        "Yes, we support Greenfield (new implementation), Brownfield (system conversion), and Selective Data Transition approaches tailored to your business needs.",
    },
    {
      question:
        "How do you ensure a smooth data migration?",
      answer:
        "We use proven tools and methodologies to cleanse, validate, and migrate your data securely, ensuring integrity and minimal downtime during the transition.",
    },
    {
      question:
        "What kind of support is provided after go-live?",
      answer:
        "We offer comprehensive hypercare support immediately after go-live, followed by flexible Application Management Services (AMS) for ongoing maintenance and optimization.",
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
      title: "Real-Time Insights",
      description:
        "Make faster decisions with instant access to real-time data analytics.",
    },
    {
      title: "Lean Architecture",
      description:
        "Simplify your IT landscape with a streamlined and efficient data model.",
    },
    {
      title: "Accelerated Speed",
      description:
        "Boost process execution speed with advanced in-memory computing.",
    },
    {
      title: "Scalable Foundation",
      description:
        "Build a future-ready platform that grows with your digital transformation.",
    },
  ];

  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        {/* <Navigation enableScrollEffect={true} /> */}

        <PageHeader
          title="Fast-Track SAP S/4HANA Implementation"
          subtitle="We deliver tailored SAP implementations aligned to your business goals, ensuring a smooth transition and maximum value."
          breadcrumbs={[
            { name: "Services", path: "/services" },
            { name: "SAP Support", path: "/services/sap-support" },
            { name: "SAP Implementation", path: "/services/sap-implementation" },
          ]}
          backgroundImage="/Solutions/sap-implemeentation.png"
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
                    mainDescription="Select a step to learn more about our comprehensive implementation process."
                  // ctaText="Get a Consultation"
                  /> */}
                  <h2 className="text-3xl font-bold mb-4">Delivering Impact-Driven SAP Implementations for Sustainable Growth</h2>
                  <p className="mb-8 text-gray-600">Select a step to learn more about our comprehensive implementation process.</p>
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
                    Resourceful insights of SAP Implementation Services
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
                    {/* <StatCardStable ... /> */}
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">50%</div>
                      <p>Reduce process cycle times.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">60%</div>
                      <p>Improve real-time reporting accuracy.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">45%</div>
                      <p>Enhance operational efficiency</p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="services" className="mt-20 w-full scroll-mt-24">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  <div className="hidden"></div>
                </div>
              </section>
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

export default Implementation;
