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

function SAPFiori() {
  const tabsData2 = [
    {
      icon: <Cloud className="w-10 h-10 text-white" />,
      heading: "Boosted User Productivity",
      description:
        "Simplified role-based apps help employees perform tasks faster and with greater accuracy.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-white" />,
      heading: "Consistent Cross-Device Experience",
      description:
        "Fiori apps work seamlessly across desktops, tablets, and smartphones with the same interface quality.",
    },
    {
      icon: <Server className="w-10 h-10 text-white" />,
      heading: "Faster Decision-Making",
      description:
        "Real-time data access through Fiori apps supports quicker and more informed business decisions.",
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      heading: "Seamless System Integration",
      description:
        "Integrate with both SAP and non-SAP systems for unified workflows and data accessibility.",
    },
    {
      icon: <Settings className="w-10 h-10 text-white" />,
      heading: "Brand-Aligned Design",
      description:
        "Maintain consistent corporate branding across all Fiori applications for a professional look.",
    },
    {
      icon: <Activity className="w-10 h-10 text-white" />,
      heading: "Future-Ready Scalability",
      description:
        "Fiori solutions are designed to scale easily as your business evolves and grows.",
    },
  ];
  const tabsData = [
    {
      icon: <Cloud className="w-10 h-10 text-black" />,
      heading: "Custom Fiori App Development",
      description:
        "Develop tailored Fiori applications that align with your specific business processes and requirements.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-black" />,
      heading: "Fiori App Extensions",
      description:
        "Enhance and extend standard SAP Fiori applications to deliver advanced features and capabilities.",
    },
    {
      icon: <Server className="w-10 h-10 text-black" />,
      heading: "UI/UX Optimization",
      description:
        "Create visually appealing and easy-to-use interfaces that improve user satisfaction and efficiency.",
    },
  ];
  const sampleSolutions = [
    {
      title: "Customized UI/UX Design",
      heading: "User Experience Reimagined",
      description: "Deliver intuitive and modern SAP user interfaces tailored to business needs.",
      points: [
        "Fiori theme customization",
        "Persona-based role design",
        "Simplified workflows",
        "Accessibility support"
      ]
    },
    {
      title: "SAP Fiori App Development",
      heading: "Accelerate App Delivery",
      description: "Build custom SAP Fiori applications using SAPUI5 framework.",
      points: [
        "Reusable UI components",
        "MVC architecture",
        "OData service integration",
        "Device adaptability"
      ]
    },
    {
      title: "Fiori Launchpad Configuration",
      heading: "Centralized App Access",
      description: "Organize apps with Fiori Launchpad and provide unified navigation.",
      points: [
        "Tile-based layout",
        "Role-based catalogs & groups",
        "SSO and authentication setup",
        "Notifications and workflows"
      ]
    },
    {
      title: "Integration with SAP Backend",
      heading: "Smart Business Connectivity",
      description: "Connect Fiori apps to SAP ECC/S4HANA backend using secure APIs.",
      points: [
        "OData service development",
        "SAP Gateway configuration",
        "Error handling & logging",
        "End-to-end testing"
      ]
    },
    {
      title: "Fiori Performance Optimization",
      heading: "Boost Application Efficiency",
      description: "Ensure fast and responsive apps through performance tuning.",
      points: [
        "Lazy loading implementation",
        "UI rendering optimization",
        "Payload minimization",
        "Efficient data binding"
      ]
    },
    {
      title: "Migration to Fiori 3.0",
      heading: "Upgrade with Confidence",
      description: "Seamless migration of legacy applications to the latest Fiori standards.",
      points: [
        "Fiori Elements usage",
        "Horizon theme support",
        "Adaptation projects",
        "Visual harmonization"
      ]
    }
  ];

  const productData = [
    {
      title: "Managed Services",
      description:
        "Ongoing, proactive management and support of IT infrastructure, applications, or business processes by a third-party provider—offered under subscription or usage-based models to improve reliability, reduce costs, and align IT with business goals.",
      link: "/support-maintainance"
    },
    {
      title: "AMS",
      description:
        "Application Management Services provide continuous maintenance, enhancement, and support for enterprise applications—ensuring optimal performance, adaptability, and alignment with business requirements.",
      link: "/upgrades"
    },
    {
      title: "SAP S/4HANA Implementation Services",
      description:
        "Comprehensive support for deploying SAP S/4HANA—including planning, deployment (greenfield, brownfield, or selective transition), data migration, system integration, and go-live execution to transform business operations.",
      link: "/implement"
    },
    {
      title: "SAP S/4HANA Consulting Services",
      description:
        "Expert advisory for strategic planning, ERP landscape assessment, migration strategy, system optimization, process redesign, and tailored implementation to maximize the benefits of an SAP S/4HANA deployment.",
      link: "/rollouts"
    },
    {
      title: "SAP Business Technology Platform",
      description:
        "A unified multi-cloud platform integrating data management, analytics, application development, integration, automation, and AI—enabling businesses to build, extend, and run intelligent enterprise applications.",
      link: "/integration"
    },
    {
      title: "SAP Custom Development and Enhancement",
      description:
        "Tailored development and extension of SAP systems—using ABAP, SAP UI5, APIs, and other technologies—to create custom functionalities, interfaces, and integrations aligned with unique business needs.",
      link: "/application-development"
    },
    {
      title: "ABAP RESTful Application Programming Model Service",
      description:
        "Development of modern, scalable business applications on SAP S/4HANA using the ABAP RESTful Application Programming Model (RAP), enabling RESTful services, clean architecture, and maintainable code.",
      link: "/abap"
    },
    {
      title: "SAP BASIS Support Services",
      description:
        "Foundational administration and technical operations for SAP environments—including system installation, configuration, performance tuning, updates, security, and infrastructure management.",
      link: "/migrations"
    }
  ];

  const faqs = [
    {
      question:
        "What is SAP Fiori and how does it benefit my business?",
      answer:
        "SAP Fiori is a design system that provides a consistent, intuitive, and responsive user experience across all SAP applications, improving user productivity and adoption.",
    },
    {
      question:
        "Can SAP Fiori apps run on mobile devices?",
      answer:
        "Yes, SAP Fiori apps are designed with a mobile-first approach, ensuring they work seamlessly on desktops, tablets, and smartphones.",
    },
    {
      question:
        "Do you provide custom Fiori app development?",
      answer:
        "Yes, we develop custom Fiori applications tailored to your specific business processes using SAPUI5 and Fiori Elements.",
    },
    {
      question:
        "How does Fiori integrate with SAP S/4HANA?",
      answer:
        "Fiori is the native user interface for SAP S/4HANA, providing direct access to system functions and real-time analytics through a modern dashboard.",
    },
    {
      question:
        "Can we extend standard SAP Fiori apps?",
      answer:
        "Yes, standard Fiori apps can be extended and customized to meet unique business requirements while maintaining upgrade compatibility.",
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
    "Services",
    "Benefits",
    "Success Stories",
    "Partners",
    "Related services",
    // "Resources",
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
      title: "User-Centric Design",
      description: "Create intuitive and visually appealing SAP applications.",
    },
    {
      title: "Cross-Platform Compatibility",
      description: "Access Fiori apps across devices with responsive layouts.",
    },
    {
      title: "Faster Development",
      description: "Leverage SAPUI5 and reusable components for rapid delivery.",
    },
    {
      title: "Seamless Integration",
      description: "Integrate with SAP S/4HANA, Gateway, and third-party systems.",
    },
  ];

  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        {/* <Navigation enableScrollEffect={true} /> */}

        <PageHeader
          title="SAP Fiori Development Services"
          subtitle="Sria Infotech builds intuitive, responsive, role-based SAP Fiori apps that simplify processes and enhance productivity."
          breadcrumbs={[
            { name: "Services", path: "/services" },
            { name: "SAP Support", path: "/services/sap-support" },
            { name: "SAP Fiori", path: "/services/sap-fiori" },
          ]}
          backgroundImage="/Services/fiori.png"
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
                    mainHeading="Explore our wide range of offerings"
                    mainDescription="From custom app design to seamless integration with SAP S/4HANA, our Fiori development services include UI/UX optimization, role-based dashboards, mobile-friendly solutions, workflow automation, and performance tuning."
                  // ctaText="Get a Consultation"
                  /> */}
                  <h2 className="text-3xl font-bold mb-4">Explore our wide range of offerings</h2>
                  <p className="mb-8 text-gray-600">From custom app design to seamless integration with SAP S/4HANA, our Fiori development services include UI/UX optimization, role-based dashboards, mobile-friendly solutions, workflow automation, and performance tuning.</p>
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
                    Resourceful insights of SAP Fiori Development Services
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
                    {/* <StatCardStable ... /> */}
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">40%</div>
                      <p>SAP Fiori development improve user productivity</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">60%</div>
                      <p>Reduce process completion time 50% and enhance user adoption rates</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">60%</div>
                      <p>Custom Fiori apps deliver simplified workflows</p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="services" className="mt-20 w-full scroll-mt-24">
                <div className="max-w-[1400px] w-full px-4 mx-auto">
                  {/* <TabSection headingText="SAP services to support your cloud operations"
                    tabs={tabsData} /> */}
                  <h2 className="text-3xl font-bold mb-8">SAP services to support your cloud operations</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tabsData.map((tab, idx) => (
                      <div key={idx} className="p-6 border rounded-lg">
                        <div className="mb-4">{tab.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{tab.heading}</h3>
                        <p className="text-gray-600">{tab.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section
                id="benefits"
                className="mt-20 max-w-[1400px] scroll-mt-24"
              >
                {/* <TopSectionWithTabs
                  tabSectionHeading="Key benefits of SAP Fiori Development Services"
                  tabs={tabsData2}
                /> */}
                <h2 className="text-3xl font-bold mb-8">Key benefits of SAP Fiori Development Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tabsData2.map((tab, idx) => (
                    <div key={idx} className="p-6 border rounded-lg bg-gray-900 text-white">
                      <div className="mb-4">{tab.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{tab.heading}</h3>
                      <p className="text-gray-300">{tab.description}</p>
                    </div>
                  ))}
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

export default SAPFiori;
