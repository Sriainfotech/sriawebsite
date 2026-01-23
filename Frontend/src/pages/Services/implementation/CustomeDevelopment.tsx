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
    Database,
    Users,
    Settings,
    Cloud,
    Monitor,
    Server,
    Activity,
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

function CustomDevelopment() {
    const tabsData2 = [
        {
            icon: <BarChart2 className="w-10 h-10 text-white" />,
            heading: "Enhanced Operational Efficiency",
            description:
                "Streamline business operations by automating repetitive tasks and optimizing workflows for maximum productivity.",
        },
        {
            icon: <Settings className="w-10 h-10 text-white" />,
            heading: "Reduced Manual Workflows",
            description:
                "Minimize human error and manual intervention by digitizing and automating complex business processes.",
        },
        {
            icon: <Users className="w-10 h-10 text-white" />,
            heading: "Higher User Adoption",
            description:
                "Custom-built interfaces and features ensure the system is intuitive and aligned with user needs, driving adoption.",
        },
        {
            icon: <Rocket className="w-10 h-10 text-white" />,
            heading: "Faster Business Processes",
            description:
                "Accelerate decision-making and execution with tailored applications that fit your exact business speed.",
        },
        {
            icon: <Shield className="w-10 h-10 text-white" />,
            heading: "Better Alignment with Requirements",
            description:
                "Ensure your ERP perfectly matches your unique operational needs rather than forcing you to adapt to standard software.",
        },
        {
            icon: <Cloud className="w-10 h-10 text-white" />,
            heading: "Seamless Extension of Odoo",
            description:
                "Easily extend existing Odoo modules with custom functionality without disrupting core operations.",
        },
    ];

    const tabsData = [
        {
            icon: <Cloud className="w-10 h-10 text-black" />,
            heading: "Odoo Cloud Deployment",
            description:
                "Seamlessly host your Odoo ERP on the cloud for improved performance, scalability, and reduced infrastructure costs.",
        },
        {
            icon: <Settings className="w-10 h-10 text-black" />,
            heading: "Custom App Development",
            description:
                "Build powerful Odoo applications tailored to automate processes, extend functionality, and support unique business needs.",
        },
        {
            icon: <Server className="w-10 h-10 text-black" />,
            heading: "Odoo Managed Services",
            description:
                "End-to-end configuration, monitoring, and maintenance of your Odoo ERP for reliable, uninterrupted operations.",
        },
    ];

    const sampleSolutions = [
        {
            title: "Custom Module Development",
            heading: "Custom Module Development",
            description:
                "Build new Odoo modules from scratch to match unique business use cases.",
            points: [
                "Tailored to unique use cases",
                "Built from scratch",
                "Seamless integration",
                "Scalable design",
            ],
        },
        {
            title: "Workflow Automation",
            heading: "Workflow Automation Solutions",
            description:
                "Automate approvals, reporting, multi-step processes, and task management.",
            points: [
                "Approval workflows",
                "Automated reporting",
                "Multi-step process automation",
                "Task management",
            ],
        },
        {
            title: "UI/UX Customization",
            heading: "UI/UX Customization",
            description:
                "Create intuitive interfaces and screens tailored to your users.",
            points: [
                "User-centric design",
                "Intuitive interfaces",
                "Custom dashboards",
                "Enhanced usability",
            ],
        },
        {
            title: "Third-Party Integrations",
            heading: "Third-Party API Integrations",
            description:
                "Connect external systems such as payment gateways, CRM, accounting tools, e-commerce apps, and more.",
            points: [
                "Payment gateways",
                "CRM & Accounting tools",
                "E-commerce apps",
                "External APIs",
            ],
        },
        {
            title: "Industry-Specific Apps",
            heading: "Industry-Specific Apps",
            description:
                "Develop apps for manufacturing, logistics, healthcare, retail, services, and more.",
            points: [
                "Manufacturing solutions",
                "Logistics & Retail",
                "Healthcare applications",
                "Service industry tools",
            ],
        },
        {
            title: "Performance Optimization",
            heading: "Performance Optimization",
            description:
                "Improve speed, load times, and efficiency of custom apps.",
            points: [
                "Faster load times",
                "Efficient code",
                "Database optimization",
                "System stability",
            ],
        },
    ];

    const productData = [
        {
            title: "Data Analytics",
            description:
                "Comprehensive data analysis solutions that transform raw data into actionable insights using modern analytics tools and techniques, enabling informed decision-making and business growth.",
            link: "/additionalServices/dataanalytics"
        }
    ];


    const faqs = [
        {
            question: "What is Odoo ERP and why should my business consider it?",
            answer:
                "Odoo is a modern suite of integrated business apps helping you manage everything—from CRM and sales, to HR, accounting, inventory, and manufacturing—in a single easy-to-use platform. Its modular nature makes it a flexible fit for businesses of all sizes.",
        },
        {
            question: "How customizable is Odoo for unique business needs?",
            answer:
                "Odoo is extremely customizable—from workflows and reports, to building entire new modules with Odoo Studio. You can adapt it precisely to your business, integrating new features as you grow.",
        },
        {
            question: "Is Odoo suitable for both small businesses and enterprises?",
            answer:
                "Yes! Odoo scales from startups to global enterprises, offering both free Community and advanced Enterprise editions, with a vast range of plug-and-play modules.",
        },
        {
            question: "What deployment options does Odoo support?",
            answer:
                "Odoo supports fully cloud-hosted options, on-premise hosting, and hybrid setups, allowing maximum flexibility based on your business and IT resources.",
        },
        {
            question:
                "How easy is it to migrate data and train users on Odoo?",
            answer:
                "Odoo offers tools for seamless data import/export, and the interface is intuitive for end-users. We provide comprehensive training and support to ensure your team is productive from day one.",
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
        "Resources",
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
            title: "Tailor-Made Business Apps",
            description:
                "We build fully customized Odoo apps aligned to your process flow, operational needs, and industry requirements.",
        },
        {
            title: "Seamless Odoo Integration",
            description:
                "Integrate new modules with existing Odoo setups for a smooth and unified workflow.",
        },
        {
            title: "Scalable Architecture",
            description:
                "All custom apps are designed to grow with your business without requiring major redesign.",
        },
        {
            title: "Improved Productivity & Automation",
            description:
                "Reduce manual tasks and enhance operational speed with custom-built automation features.",
        },
    ];

    return (
        <div className="w-full relative overflow-x-hidden lg:overflow-x-visible">
            <div className="scroll-smooth w-full relative ">
                {/* <Navigation enableScrollEffect={true} /> */}

                <PageHeader
                    title="Odoo Custom App Development"
                    subtitle="We build tailored Odoo applications with custom features and seamless integrations to support your unique business workflows."
                    breadcrumbs={[
                        { name: "Services", path: "/services" },
                        { name: "Implementation", path: "/services/implementation" },
                        { name: "Custom Development", path: "/services/custom-development" },
                    ]}
                    backgroundImage="/odoo-app.png"
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
                                        mainDescription="Explore our wide range of custom Odoo development services designed to meet your business needs."
                                    // ctaText="Get a Consultation"
                                    /> */}
                                    <h2 className="text-3xl font-bold mb-4">Explore our wide range of offerings</h2>
                                    <p className="mb-8 text-gray-600">Explore our wide range of custom Odoo development services designed to meet your business needs.</p>
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
                                        Resourceful insights of Odoo Custom Development
                                    </h2>

                                    <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
                                        {/* <StatCardStable
                                        percentage="40%"
                                        description="Operational efficiency improvement through workflow automation after Odoo deployment."
                                        />

                                        <StatCardStable
                                        percentage="30%"
                                        description="Reduction in operational costs achieved through streamlined and automated processes."
                                        />

                                        <StatCardStable
                                        percentage="35%"
                                        description="Faster decision-making enabled by real-time reporting and advanced analytics compared to legacy systems."
                                        /> */}
                                        <div className="p-6 bg-gray-50 rounded-lg text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">40%</div>
                                            <p>Operational efficiency improvement through workflow automation after Odoo deployment.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-lg text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">30%</div>
                                            <p>Reduction in operational costs achieved through streamlined and automated processes.</p>
                                        </div>
                                        <div className="p-6 bg-gray-50 rounded-lg text-center">
                                            <div className="text-4xl font-bold text-primary mb-2">35%</div>
                                            <p>Faster decision-making enabled by real-time reporting and advanced analytics compared to legacy systems.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="services" className="mt-20 w-full scroll-mt-24">
                                <div className="max-w-[1400px] w-full px-4 mx-auto">
                                    {/* <TabSection headingText="Success with Intelligent Customization"
                                        tabs={tabsData} /> */}
                                    <h2 className="text-3xl font-bold mb-8">Success with Intelligent Customization</h2>
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
                                    tabSectionHeading="Key Benefits of Custom App Development"
                                    tabs={tabsData2}
                                /> */}
                                <h2 className="text-3xl font-bold mb-8">Key Benefits of Custom App Development</h2>
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
                                <div className="p-8">
                                    <h2 className="text-3xl font-bold text-white mb-8">Success Stories</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {customerStories.map((story, idx) => (
                                            <div key={idx} className="bg-gray-900 p-6 rounded-lg">
                                                <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                                                <Link to={story.readMoreLink} className="text-primary hover:underline">Read More</Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>{" "}
                            <section id="partners" className="max-w-[1400px]">
                                <div className="max-w-[1400px] w-full mx-auto ">
                                    {/* <PartnersCarousel /> */}
                                    <div className="p-8 text-center bg-gray-50">
                                        <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
                                        <p>Partner logos carousel placeholder</p>
                                    </div>
                                </div>
                            </section>{" "}
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

export default CustomDevelopment;
