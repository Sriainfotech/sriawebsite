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
 question: "What is SAP Manufacturing Logistics?",
 answer:
 "It refers to the integration of manufacturing (SAP PP/ME) with logistics (SAP EWM/TM) to ensure seamless material flow from procurement to production and delivery.",
 },
 {
 question: "How does SAP EWM support production?",
 answer:
 "SAP EWM manages production supply areas (PSA), staging, and consumption of materials directly at the work center, ensuring timely availability.",
 },
 {
 question: "What is the role of SAP TM in this process?",
 answer:
 "SAP Transportation Management (TM) plans and optimizes the physical movement of finished goods, integrating with EWM for efficient loading and shipping.",
 },
 {
 question: "Can we track serial numbers and batches?",
 answer:
 "Yes, SAP solutions provide full traceability for batches and serial numbers throughout the entire supply chain lifecycle.",
 },
 {
 question: "Is S/4HANA required for these capabilities?",
 answer:
 "While S/4HANA offers the most integrated experience (Embedded EWM/TM), many capabilities can also be deployed with SAP ECC and decentralized EWM.",
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

const sampleSolutions = [
 {
 title: "Inbound",
 heading: "Inbound Logistics",
 description:
 "Streamline material receipt and putaway.",
 points: [
 "ASN via SAP Ariba/EDI",
 "Automated GR via EWM",
 "QM inspection integration",
 "Real-time stock updates",
 ],
 },
 {
 title: "Production",
 heading: "Internal Logistics & Production",
 description:
 "Seamlessly supply production lines.",
 points: [
 "PP-EWM integration",
 "Kitting & Kanban",
 "Delivery-based staging",
 "RF & Fiori execution",
 ],
 },
 {
 title: "Outbound",
 heading: "Outbound Logistics",
 description:
 "Optimize shipping and delivery.",
 points: [
 "Production confirmation",
 "SAP TM integration",
 "Picking, packing, loading",
 "Real-time tracking",
 ],
 },
 {
 title: "Warehouse",
 heading: "Warehouse Management",
 description:
 "Advanced control with SAP EWM.",
 points: [
 "Wave management",
 "RF framework & Fiori",
 "MFS/AGV integration",
 "Layout-oriented storage",
 ],
 },
 {
 title: "Execution",
 heading: "Manufacturing Execution Integration",
 description:
 "Connect shop floor to top floor.",
 points: [
 "Real-time data exchange",
 "Paperless shop floor",
 "Track & trace",
 "Machine integration",
 ],
 },
 {
 title: "Analytics",
 heading: "Analytics and Reporting",
 description:
 "Gain actionable insights.",
 points: [
 "Inventory KPIs",
 "Warehouse performance",
 "Custom dashboards",
 "S/4HANA real-time data",
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
 "Your Trusted Partner in SAP Transformation. We help organizations optimize their supply chain and manufacturing logistics for maximum efficiency.",
 imageUrl: "https://ik.imagekit.io/hps6th7vy/sria/Solutions/papm-sap.png?tr=f-auto,q-auto,w-2000",
 imageAlt: "SAP Manufacturing Logistics",
 items: [
 {
 title: "Inbound Logistics",
 highlight: "Efficient Receipt",
 description:
 "Automated GR, QM inspection, and bin determination using SAP EWM.",
 },
 {
 title: "Internal Logistics",
 highlight: "Production Supply",
 description:
 "Integration between SAP PP and EWM for seamless kitting and staging.",
 },
 {
 title: "Outbound Logistics",
 highlight: "Optimized Shipping",
 description:
 "Integrated packing, loading, and transportation planning with SAP TM.",
 },
 ],
};

const customerStories = [
 {
 id: 1,
 image: "https://ik.imagekit.io/hps6th7vy/sria/partners/ivc-logo.png?tr=f-auto,q-auto,w-2000",
 title: "IVC Consulting Strengthens Global SAP Delivery with Strategic Partnership",
 readMoreLink: "/partners/ivc-solutions",
 },
 {
 id: 2,
 image: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/patil.jpg?tr=f-auto,q-auto,w-2000",
 title: "Patil Drives Operational Excellence with End-to-End SAP, AMS & OCR Automation",
 readMoreLink: "/patil",
 },
 {
 id: 3,
 image: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/7hills.jpg?tr=f-auto,q-auto,w-2000",
 title: "7Hills Restaurant Transforms Guest Experience with Custom Digital Platform",
 readMoreLink: "/hills",
 },
 {
 id: 4,
 image: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/pharma.jpg?tr=f-auto,q-auto,w-2000",
 title: "LVK Pharma Goes Digital with Odoo CRM, Eliminates Manual Processes",
 readMoreLink: "/Lvk",
 },
];

const insights = {
 heading: "Elevate, Innovate, and Thrive with SAP",
 description:
 "Explore our comprehensive range of services from implementation to support.",
 ctaText: "Contact Us",
 ctaLink: "/contactus",
 solutions: [
 { title: "Rise with SAP", href: "/solutions/rise-with-sap" },
 { title: "SAP S/4HANA", href: "/solutions/sap-s4hana" },
 ],
};

const features = [
 {
 title: "Application Development",
 description:
 "Building robust applications to extend SAP capabilities with ABAP and custom development.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/Solutions/buildapps.png?tr=f-auto,q-auto,w-2000",
 },
 {
 title: "Data & Analytics",
 description:
 "Empowering decisions with SAP Analytics Cloud (SAC) for comprehensive business insights.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/DATA%20ANALYTICS.png?tr=f-auto,q-auto,w-2000",
 },
 {
 title: "Automation & AI",
 description:
 "Streamlining operations with RPA, AI, and intelligent automation technologies.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/Services/automation.png?tr=f-auto,q-auto,w-2000",
 },
 {
 title: "Integration Services",
 description:
 "Seamless connectivity using SAP CPI and BTP for a unified business landscape.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/Solutions/cpi.png?tr=f-auto,q-auto,w-2000",
 },
 {
 title: "Fiori User Experience",
 description:
 "Enhancing user engagement with custom Fiori-based extensions and modern UI.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/Services/fiori.png?tr=f-auto,q-auto,w-2000",
 },
];
const insightsData = [
 {
 title: "Profitability Analysis Best Practices",
 imageUrl: "/images/profitability-analysis.jpg",
 imageAlt: "Profitability Analysis",
 gradientFrom: "from-blue-600",
 gradientTo: "to-blue-800",
 },
 {
 title: "Performance Management Excellence",
 imageUrl: "/images/performance-management.jpg",
 imageAlt: "Performance Management",
 gradientFrom: "from-teal-600",
 gradientTo: "to-cyan-700",
 },
 {
 title: "Advanced Planning and Forecasting",
 imageUrl: "/images/planning-forecasting.jpg",
 imageAlt: "Planning and Forecasting",
 gradientFrom: "from-purple-600",
 gradientTo: "to-indigo-700",
 },
];

function SAPFinancialMgmt() {
 return (
 <div className="min-h-screen">
 {/* <Navigation /> */}

 <PageHeader
 title="Streamline Manufacturing & Logistics with SAP"
 subtitle="Enable efficient production and seamless supply chain operations with integrated SAP solutions."
 breadcrumbs={[
 { name: "Solutions", path: "/solutions" },
 { name: "SAP Analytics Cloud", path: "/solutions/sap-analytics-cloud" },
 { name: "PaPM", path: "/solutions/papm" },
 ]}
 backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Solutions/papm.png?tr=f-auto,q-auto,w-2000"
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
 mainDescription="Our services cover the entire logistics lifecycle from inbound receipt to internal production supply and outbound delivery."
 // ctaText="Get a Consultation"
 /> */}
 <div className="w-full">
 <h2 className="text-base font-bold mb-4">Delivering Impact-Driven SAP Implementations for Sustainable Growth</h2>
 <p className="mb-8 text-gray-600">Our services cover the entire logistics lifecycle from inbound receipt to internal production supply and outbound delivery.</p>
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
 <h2 className="text-white text-xl sm:text-2xl md:text-[27px] p-4 lg:p-10 w-full lg:w-3/4 leading-relaxed">
 Our innovative technologies empower financial institutions to streamline operations, enhance customer experiences, and drive growth.
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
 Drive Innovation and Excellence with the Latest Tech Trends. We empower your business with Application Development, Data & Analytics, Automation, and AI.
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
 Your Trusted Partner in SAP Transformation. We bring industry expertise, certified professionals, and a global delivery model to ensure your success.
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
 Empowering global trade for businesses
 </h2>
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

export default SAPFinancialMgmt;

