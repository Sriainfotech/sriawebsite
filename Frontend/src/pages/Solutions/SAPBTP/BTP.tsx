import React from "react";
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
} from "lucide-react";

// import FAQSection from "@/components/FAQSection";

// import ProductRange from "@/components/ProductRange";
// import Resource from "@/components/Resource";
// import WorldMap from "@/components/aboutus/WorldMap";
// import BeautifulParallaxTailwind from "@/components/BeautifulParallaxTailwind";
// import Footer from "@/components/Footer";
// import StatCardStable from "@/components/StatCardStable";
// import InfoSection from "@/components/InfoSection";
// import ConsultationTabsSection from "@/components/services/ConsultationTabsSection";
// import { CustomerStories } from "@/components/CustomerStoriesTestimonials";
// import InsightsSection from "@/components/InsightsSection";
// import RelatedSolutions from "@/components/RelatedSolutions";


const faqs = [
 {
 question: "What types of apps can I build with SAP Build Apps?",
 answer: "You can build mobile, web, and internal business process apps without writing code.",
 },
 {
 question: "Is SAP Build Apps suitable for non-developers?",
 answer: "Yes, it's built for business users and developers to collaborate effectively.",
 },
 {
 question: "Does SAP Build Apps support backend integration?",
 answer: "Yes, it integrates with SAP and non-SAP systems using connectors and REST APIs.",
 },
];
const tabs = [
 {
 icon: <Shield className="w-10 h-10 text-green-600" />,
 title: "Enhanced Security",
 description: "Dedicated environment ensuring data confidentiality and safety.",
 },
 {
 icon: <Lock className="w-10 h-10 text-red-500" />,
 title: "Regulatory Compliance",
 description: "Meet strict standards like GDPR, HIPAA for sensitive data.",
 },
 {
 icon: <Settings className="w-10 h-10 text-gray-500" />,
 title: "Customizable Architecture",
 description: "Tailor infrastructure to match specific organizational needs.",
 },
 {
 icon: <Database className="w-10 h-10 text-orange-500" />,
 title: "Data Sovereignty",
 description: "Keep data within your jurisdiction for compliance and security.",
 },
 {
 icon: <Users className="w-10 h-10 text-blue-500" />,
 title: "Hybrid Cloud Integration",
 description: "Connect with public clouds for flexibility and scalability.",
 },
 {
 icon: <CheckCircle className="w-10 h-10 text-purple-500" />,
 title: "High Reliability",
 description: "Dedicated resources ensure consistent and predictable performance.",
 },
 {
 icon: <Server className="w-10 h-10 text-teal-500" />,
 title: "Dedicated Infrastructure",
 description: "Complete control over your own cloud hardware and software.",
 },
 {
 icon: <Cloud className="w-10 h-10 text-indigo-500" />,
 title: "Automation & Orchestration",
 description: "Streamline operations with advanced automation tools.",
 },
];

const sampleSolutions = [
 {
 title: "Private Cloud Overview",
 heading: "What is Private Cloud?",
 description:
 "A dedicated cloud environment for a single organization ensuring security, performance, and compliance.",
 points: [
 "Ideal for sensitive data and critical workloads.",
 "Provides full infrastructure control.",
 "Supports hybrid cloud strategies.",
 ],
 },
 {
 title: "Enhanced Security & Compliance",
 heading: "Enterprise-Grade Security",
 description:
 "Advanced security measures and compliance frameworks tailored for your organization's specific requirements.",
 points: [
 "Multi-layered security architecture with encryption.",
 "Dedicated firewalls and intrusion detection systems.",
 "Compliance with industry standards (SOC 2, HIPAA, PCI-DSS).",
 "Regular security audits and vulnerability assessments.",
 ],
 },
 {
 title: "Scalable Infrastructure",
 heading: "Flexible Resource Management",
 description:
 "Dynamic scaling capabilities that adapt to your business needs while maintaining optimal performance.",
 points: [
 "Auto-scaling based on demand patterns.",
 "Resource allocation optimization.",
 "Load balancing for high availability.",
 "Performance monitoring and analytics.",
 ],
 },
 {
 title: "Data Governance & Control",
 heading: "Complete Data Sovereignty",
 description:
 "Maintain full control over your data location, access policies, and governance frameworks.",
 points: [
 "Data residency controls and geographic restrictions.",
 "Granular access management and role-based permissions.",
 "Automated backup and disaster recovery solutions.",
 "Data lifecycle management policies.",
 ],
 },
 {
 title: "Integration Capabilities",
 heading: "Seamless Connectivity",
 description:
 "Comprehensive integration options to connect with existing systems and third-party applications.",
 points: [
 "API-first architecture for easy integrations.",
 "Hybrid cloud connectivity options.",
 "Legacy system integration support.",
 "Real-time data synchronization.",
 ],
 },
 {
 title: "Performance Optimization",
 heading: "Superior Performance",
 description:
 "Dedicated resources and optimized infrastructure ensuring consistent high performance for critical applications.",
 points: [
 "Dedicated computing resources with no resource sharing.",
 "Low-latency network connections.",
 "SSD storage with high IOPS performance.",
 "24/7 performance monitoring and optimization.",
 ],
 },
 {
 title: "Key Features",
 heading: "Why Choose Private Cloud?",
 description:
 "Dedicated infrastructure, advanced security, customization, and hybrid integration.",
 points: [
 "Dedicated hardware and network resources.",
 "Regulatory compliance support.",
 "Full customization to meet business needs.",
 ],
 },
 // Add more items as needed
];

const menuItems = [
 "Overview",
 "Features",
 "Insights",
 "Benefits",
 "Find Your Answers",
 "Other Products",
 "Resources",
];

const sapData = {
 heading: "What is SAP BTP Build Apps?",
 description:
 "SAP Build Apps is a no-code/low-code platform within SAP BTP that enables users to rapidly build enterprise-ready applications without needing deep development expertise.",
 imageUrl: "/Solutions/BTP-BuildApps-Banner.png",
 imageAlt: "SAP BTP Build Apps Visual",
 items: [
 {
 title: "Visual Development",
 description: "Use drag-and-drop tools to build applications faster without writing code.",
 },
 {
 title: "Enterprise Integration",
 description: "Connect easily with SAP S/4HANA, SAP SuccessFactors, and 3rd-party APIs.",
 },
 {
 title: "Reusable Logic",
 description: "Reuse custom components and logic blocks across multiple applications.",
 },
 ],
};
const customerStories = [
 {
 id: 1,
 image:
 "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
 title: "Transforming Business Operations With Innovative Solutions",
 readMoreLink: "#",
 },
 {
 id: 2,
 image:
 "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
 title: "Digital Innovation Success Through Strategic Partnership",
 readMoreLink: "#",
 },
 {
 id: 3,
 image:
 "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
 title: "Scaling New Heights in Technology Excellence",
 readMoreLink: "#",
 },
];

const insights = {
 heading: "Explore Private Cloud Opportunities",
 description:
 "Private Cloud is essential for businesses seeking maximum control, security, and compliance. It ensures data sovereignty and tailored infrastructure for mission-critical applications.",
 ctaText: "Talk to an Expert",
 ctaLink: "/contactus",
 solutions: [
 { title: "Private Cloud Services", href: "/solutions/private-cloud" },
 { title: "Hybrid Cloud Solutions", href: "/solutions/hybrid-cloud" },
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
const features = [
 {
 title: "Centralized Financial Management",
 description:
 "Gain real-time insights into financial performance, cash flow, and reporting with a unified finance platform.",
 image: "/S4HANA/finance.png",
 },
 {
 title: "Smart Procurement & Sourcing",
 description:
 "Streamline supplier collaboration, automate procurement processes, and optimize purchasing strategies.",
 image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455135/sria/S4HANA/procurement.png",
 },
 {
 title: "Integrated Logistics & Supply Chain",
 description:
 "Enhance supply chain visibility, warehouse management, and logistics with live data integration.",
 image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455134/sria/S4HANA/logistics.png",
 },
 {
 title: "Predictive Analytics & Reporting",
 description:
 "Utilize embedded analytics and predictive intelligence to make proactive business decisions.",
 image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455128/sria/S4HANA/analytics.png",
 },
 {
 title: "Simplified User Experience",
 description:
 "Empower users with an intuitive, role-based interface through SAP Fiori and mobile-ready dashboards.",
 image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455132/sria/S4HANA/fiori.png",
 },
];

function BTP() {
 return (
 <div className="min-h-screen">
 {/* <Navigation /> */}

 <PageHeader
 title="SAP Business Technology Platform (BTP)"
 subtitle="Accelerate innovation with SAP BTP—a unified platform for data management, analytics, application development, integration, and AI capabilities to build intelligent enterprise solutions."
 breadcrumbs={[
 { name: "Solutions", path: "/solutions" },
 { name: "SAP BTP", path: "/solutions/sap-btp" },
 ]}
 backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779455250/sria/Solutions/cpi.jpg"
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
 <h2 className="text-base font-bold mb-4">{sapData.heading}</h2>
 <p className="mb-8 text-gray-600">{sapData.description}</p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {sapData.items.map((item, idx) => (
 <div key={idx} className="p-6 border rounded-lg">
 <h3 className="text-base font-bold mb-2">{item.title}</h3>
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
 mainHeading="Explore our wide range of offerings"
 mainDescription="SAP Managed Services provide the full range of functional, technical, and cloud possibilities."
 // ctaText="Get a Consultation"
 /> */}
 <div className="w-full">
 <h2 className="text-base font-bold mb-4">Explore our wide range of offerings</h2>
 <p className="mb-8 text-gray-600">SAP Managed Services provide the full range of functional, technical, and cloud possibilities.</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {sampleSolutions.map((sol, idx) => (
 <div key={idx} className="p-6 border rounded-lg">
 <h3 className="text-base font-bold mb-2">{sol.heading}</h3>
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
 <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
 Insights that define value
 </h2>

 {/* Stats Cards - Responsive Grid */}
 <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
 {/* <StatCardStable
 percentage="40%"
 description="Faster application development with low-code/no-code tools and reusable components on SAP BTP."
 />
 <StatCardStable
 percentage="60%"
 description="Reduction in integration complexity through unified platform services and pre-built connectors."
 />
 <StatCardStable
 percentage="3x"
 description="Increase in innovation speed by leveraging AI, analytics, and automation capabilities."
 /> */}
 <div className="p-6 bg-gray-50 rounded-lg text-center">
 <div className="text-4xl font-bold text-primary mb-2">40%</div>
 <p>Faster application development with low-code/no-code tools and reusable components on SAP BTP.</p>
 </div>
 <div className="p-6 bg-gray-50 rounded-lg text-center">
 <div className="text-4xl font-bold text-primary mb-2">60%</div>
 <p>Reduction in integration complexity through unified platform services and pre-built connectors.</p>
 </div>
 <div className="p-6 bg-gray-50 rounded-lg text-center">
 <div className="text-4xl font-bold text-primary mb-2">3x</div>
 <p>Increase in innovation speed by leveraging AI, analytics, and automation capabilities.</p>
 </div>
 </div>

 {/* CTA Section - Responsive */}
 <div className="bg-black mt-8 sm:mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start rounded-lg overflow-hidden">
 <h2 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
 Accelerate digital transformation with SAP Business Technology Platform. Build, integrate, and extend intelligent applications with unified data, analytics, and AI capabilities.
 </h2>
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
 <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
 Key features
 </h2>
 <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500">
 SAP BTP provides comprehensive application development, data management, analytics, integration, and AI services to build and extend intelligent enterprise solutions.
 </p>
 </div>
 <section className="my-8 sm:my-10 w-full">
 {/* <FeatureTabs features={features} /> */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {features.map((feat, idx) => (
 <div key={idx} className="p-6 border rounded-lg">
 <h3 className="text-base font-bold mb-2">{feat.title}</h3>
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
 SAP BTP enhances business agility through integrated development tools, seamless data connectivity, embedded analytics, and AI-powered automation.
 </p>

 {/* Benefits Grid - Responsive */}
 <div className="max-w-7xl mx-auto py-8 sm:py-10">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
 {tabs.map((tab, idx) => (
 // <InfoTab key={idx} {...tab} />
 <div key={idx} className="p-6 border rounded-lg">
 <div className="mb-4">{tab.icon}</div>
 <h3 className="text-base font-bold mb-2">{tab.title}</h3>
 <p className="text-gray-600">{tab.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 <div className="mt-16 sm:mt-20 w-full scroll-mt-24 text-black">
 {/* <CustomerStories stories={customerStories} theme="light" /> */}
 {/* <div className="p-8 bg-gray-50 rounded-lg">
 <h2 className="text-xl font-bold mb-8">Success Stories</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {customerStories.map((story, idx) => (
 <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
 <h3 className="text-base font-bold mb-2">{story.title}</h3>
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
 <h2 className="text-xl font-bold mb-8">Frequently Asked Questions</h2>
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
 <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight">
 Empowering Innovation with SAP BTP
 </h2>
 <div className="flex-shrink-0">
 <Link to="/contactus" className="bg-white text-black px-6 py-3 rounded-lg inline-block">
 Request a Demo
 </Link>
 </div>
 </div>

 {/* Paragraph */}
 <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
 Transform your business with SAP Business Technology Platform. Build intelligent applications, integrate systems seamlessly, and leverage AI and analytics for data-driven decision-making.
 </p>
 </div>
 </section>

 {/* Resources Section */}

 {/* <InsightsSection insights={insightsData} />
 <RelatedSolutions {...insights} /> */}
 <section id="other-products" className="mt-12 sm:mt-16 scroll-mt-24">
 <h2 className="text-xl font-bold mb-8">{insights.heading}</h2>
 <p className="mb-8 text-gray-600">{insights.description}</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {insights.solutions.map((sol, idx) => (
 <Link key={idx} to={sol.href} className="p-6 border rounded-lg hover:border-primary block">
 <h3 className="text-xl font-bold">{sol.title}</h3>
 </Link>
 ))}
 </div>
 </section>

 <section id="resources" className="mt-12 sm:mt-16 scroll-mt-24">
 {/* <Resource
 heading="Explore Our Resources"
 paragraph="Helpful tools and insights for your export-import operations"
 products={[
 {
 title: "Private Cloud Implementation Guide",
 description:
 "Step-by-step best practices for deploying a secure Private Cloud.",
 image: "/images/private-cloud-guide.jpg",
 link: ""
 },
 {
 title: "Case Study: Banking Industry",
 description:
 "How a leading bank ensured compliance and security with Private Cloud.",
 image: "/images/private-cloud-case.jpg",
 link: ""
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

export default BTP;

