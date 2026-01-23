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
  Cloud,
  Monitor,
  Server,
  Activity,
} from "lucide-react";

function Abap() {
  const tabsData2 = [
    {
      icon: <Cloud className="w-10 h-10 text-white" />,
      heading: "Development Efficiency",
      description:
        "Accelerate RAP project delivery with reusable components and model-driven development.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-white" />,
      heading: "Technical Expertise",
      description:
        "Deep ABAP RAP expertise for building scalable and secure applications.",
    },
    {
      icon: <Server className="w-10 h-10 text-white" />,
      heading: "Scalability",
      description:
        "Design RAP applications that grow with evolving business needs.",
    },
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      heading: "Secure Architecture",
      description:
        "Robust security measures and compliance with SAP best practices.",
    },
    {
      icon: <Settings className="w-10 h-10 text-white" />,
      heading: "Easy Upgrades",
      description:
        "Enhance RAP applications and adapt to future SAP releases with minimal rework.",
    },
    {
      icon: <Activity className="w-10 h-10 text-white" />,
      heading: "Performance Monitoring",
      description:
        "Monitor RAP application performance for stability and speed.",
    },
  ];
  const tabsData = [
    {
      icon: <Cloud className="w-10 h-10 text-black" />,
      heading: "Cloud-Ready Development",
      description:
        "Build and deploy ABAP RAP applications on SAP BTP or on-premise environments.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-black" />,
      heading: "Enhanced UX",
      description:
        "Deliver intuitive SAP Fiori-based interfaces with advanced UI integration.",
    },
    {
      icon: <Server className="w-10 h-10 text-black" />,
      heading: "Application Lifecycle",
      description:
        "Manage the complete lifecycle of ABAP RAP applications with scalable architecture.",
    },
  ];
  const sampleSolutions = [
    {
      title: "Custom ABAP Development",
      heading: "Tailored Solutions for Your Business",
      description:
        "Design and develop custom ABAP applications to automate processes and address complex business requirements.",
      points: [
        "End-to-end ABAP application lifecycle support.",
        "User-friendly interfaces and reports.",
        "Integration with SAP and non-SAP systems.",
        "Optimized performance for high-volume data processing.",
      ],
    },
    {
      title: "ABAP Code Optimization",
      heading: "Boost System Performance",
      description:
        "Improve runtime efficiency by optimizing existing ABAP code and database queries.",
      points: [
        "Identify and remove performance bottlenecks.",
        "Implement best coding practices.",
        "Reduce database load with optimized queries.",
        "Enhance transaction speed and stability.",
      ],
    },
    {
      title: "ABAP on HANA Migration",
      heading: "Modernize Your SAP Landscape",
      description:
        "Upgrade legacy ABAP code to fully leverage SAP HANA's in-memory computing capabilities.",
      points: [
        "Code pushdown techniques for faster execution.",
        "Use of CDS Views for advanced reporting.",
        "Compatibility checks and adjustments.",
        "Performance tuning for HANA environments.",
      ],
    },
    {
      title: "Workflow and Report Automation",
      heading: "Streamline Business Processes",
      description:
        "Develop automated workflows, smart forms, and interactive reports using ABAP.",
      points: [
        "Custom SmartForms and Adobe Forms.",
        "Automated report generation.",
        "Workflow design and deployment.",
        "Integration with Fiori/UI5 applications.",
      ],
    },
    {
      title: "ABAP Debugging & Troubleshooting",
      heading: "Resolve Issues Quickly",
      description:
        "Identify, analyze, and fix issues in ABAP programs to ensure smooth system operation.",
      points: [
        "Advanced debugging techniques.",
        "Root cause analysis of functional errors.",
        "Performance and memory usage checks.",
        "Continuous improvement suggestions.",
      ],
    },
    {
      title: "ABAP Training & Knowledge Transfer",
      heading: "Empower Your Team",
      description:
        "Provide in-depth ABAP training to your in-house teams for long-term system management.",
      points: [
        "Beginner to advanced ABAP courses.",
        "Hands-on coding sessions.",
        "Real project-based learning.",
        "Ongoing mentorship and support.",
      ],
    },
  ];
  const faqs = [
    {
      question:
        "What is ABAP RESTful Application Programming Model and how does it benefit development?",
      answer:
        "The ABAP RESTful Application Programming Model (RAP) is the modern development model for building cloud-ready, upgrade-stable, and intrinsically SAP HANA-optimized Fiori applications and Web APIs on SAP S/4HANA and SAP BTP.",
    },
    {
      question:
        "How does RAP improve upon traditional ABAP development approaches?",
      answer:
        "RAP standardizes the development of OData services and Fiori apps, offering a unified programming model that handles data modeling, business logic, and UI services efficiently, unlike older fragmented approaches.",
    },
    {
      question:
        "What are the key components required for developing a RAP application?",
      answer:
        "Key components include Core Data Services (CDS) for data modeling, Behavior Definitions for business logic, Service Definitions to expose data, and Service Bindings to define the protocol (e.g., OData V2/V4).",
    },
    {
      question:
        "How does RAP integrate with SAP Fiori Elements and modern UI frameworks?",
      answer:
        "RAP is designed to work seamlessly with SAP Fiori Elements, allowing developers to create rich UIs with minimal frontend coding by using annotations directly in the CDS views.",
    },
    {
      question:
        "Can existing ABAP applications be migrated to use the RAP framework?",
      answer:
        "Yes, existing ABAP applications can be modernized to leverage RAP capabilities. This involves creating CDS views over existing data models, implementing behavior definitions, and exposing services through the RAP framework while maintaining business logic integrity.",
    },
  ];

  // <FAQSection faqs={faqs} />;

  const tabs = [
    {
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      title: "Premium Features",
      description: "Access Exclusive Tools: Leverage intelligent tools for maximum SAP system performance and uptime.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Global Reach",
      description: "Global Collaboration: Seamlessly connect with clients and teams worldwide through centralized SAP support.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Secure",
      description: "Enterprise-Grade Security: Ensure data protection with continuous monitoring and SAP-compliant security protocols.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
      title: "Fast Deployment",
      description: "Faster Project Launches: Minimize delays with expertly managed SAP application support and rapid rollout services.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
      title: "Analytics",
      description: "Insight-Driven Decision Making: Analyze user behavior and application metrics to drive business growth.",
    },
    {
      icon: <Database className="w-10 h-10 text-orange-500" />,
      title: "Data Management",
      description: "Seamless Data Management: Organize, maintain, and optimize SAP data through structured AMS support.",
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Team Collaboration",
      description: "Real-Time Coordination: Enable synchronous collaboration across departments and geographies.",
    },
    {
      icon: <Settings className="w-10 h-10 text-gray-500" />,
      title: "Custom Settings",
      description: "Tailored SAP Experiences: Customize AMS strategies to match your organization's goals and workflows.",
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
      title: "SAP Fiori Development Services",
      description:
        "Design and customization of SAP Fiori applications to deliver intuitive, role-based, and mobile-friendly user experiences across the SAP S/4HANA ecosystem.",
      link: "/fioridevelop"
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
      title: "SAP BASIS Support Services",
      description:
        "Foundational administration and technical operations for SAP environments—including system installation, configuration, performance tuning, updates, security, and infrastructure management.",
      link: "/migrations"
    }
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
      title: "Optimized Performance",
      description:
        "Enhance response times through expert ABAP code optimization.",
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate ABAP programs with SAP modules and third-party systems.",
    },
    {
      title: "Custom Logic",
      description:
        "Build tailored ABAP solutions for unique business workflows.",
    },
    {
      title: "Future-Ready",
      description:
        "Leverage ABAP on HANA capabilities for faster applications.",
    },
  ];

  return (
    <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
      <div className="scroll-smooth w-full relative ">
        {/* <Navigation enableScrollEffect={true} /> */}

        <PageHeader
          title="ABAP RAP Development Services"
          subtitle="Sria Infotech enables rapid development of modern, scalable, cloud-ready, and on-premise SAP applications using ABAP RAP."
          breadcrumbs={[
            { name: "Services", path: "/services" },
            { name: "SAP Support", path: "/services/sap-support" },
            { name: "ABAP", path: "/services/abap" },
          ]}
          backgroundImage="/Services/abap.png"
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
                    mainDescription="End-to-end RAP-based application development for SAP S/4HANA Cloud and on-premise. Custom OData V4 service creation for optimized data exchange."
                  // ctaText="Get a Consultation"
                  /> */}
                  <h2 className="text-3xl font-bold mb-4">Explore our wide range of offerings</h2>
                  <p className="mb-8 text-gray-600">End-to-end RAP-based application development for SAP S/4HANA Cloud and on-premise. Custom OData V4 service creation for optimized data exchange.</p>
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
                    Resourceful insights of ABAP RESTfull Application Services
                  </h2>

                  <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
                    {/* <StatCardStable ... /> */}
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">25%</div>
                      <p>Best practices for designing RAP applications with clean separation of concerns.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">20%</div>
                      <p>Advantages of OData V4 in RAP for lightweight and efficient data access</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg text-center">
                      <div className="text-4xl font-bold text-primary mb-2">20%</div>
                      <p>Security considerations when building RAP-based service.</p>
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
                  tabSectionHeading="Key benefits of SAP ABAP RESTfull Application Services"
                  tabs={tabsData2}
                /> */}
                <h2 className="text-3xl font-bold mb-8">Key benefits of SAP ABAP RESTfull Application Services</h2>
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

export default Abap;
