// import BusinessImpact from "@/components/BusinessImpact";
// import Footer from "@/components/Footer";
// import ImpactStats from "@/components/ImpactStats";
// import InnovativeSolutions from "@/components/InnovativeSolutions";
// import Navigation from "@/components/Navigation";
// import StoriesHero from "@/components/StoriesHero";
// import StorySection from "@/components/StorySection";
import React from "react";
import { Link } from "react-router-dom";

function IVCSolutions() {
    const impactItems = [
        {
            percentage: "500+",
            description:
                "Successful SAP implementations across Asia Pacific region, serving diverse industries.",
        },
        {
            percentage: "20+",
            description:
                "Years of SAP expertise and partnership, delivering enterprise solutions with proven results.",
        },
        {
            percentage: "100%",
            description:
                "Commitment to client success through professional implementation, training, and ongoing support.",
        },
    ];

    return (
        <div className="w-full min-h-screen">
            {/* <Navigation /> */}
            <div className="w-full h-full flex sticky top-0">
                {/* <StoriesHero
                    imageSrc="/partners/ivc-logo.png"
                    imageAlt="IVC Solutions - SAP Gold Partner"
                    category="Joint Venture Partner"
                    title="IVC Solutions: Strategic SAP Partnership Driving Digital Transformation"
                    tag="SAP Gold Partner • Joint Venture • Enterprise Solutions"
                    datePublished="Partnership Established 2020"
                /> */}
                <div className="w-full bg-gray-100 p-12 text-center">
                    <img src="/partners/ivc-logo.png" alt="IVC Solutions" className="mx-auto h-24 mb-4 object-contain" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Joint Venture Partner</span>
                    <h1 className="text-4xl font-bold mt-4 mb-2">IVC Solutions: Strategic SAP Partnership Driving Digital Transformation</h1>
                    <p className="text-gray-600">SAP Gold Partner • Joint Venture • Enterprise Solutions</p>
                    <p className="text-gray-500 text-sm mt-2">Partnership Established 2020</p>
                </div>
            </div>

            {/* <StorySection
                overviewTitle="Partnership Overview"
                overviewText="IVC Solutions is an authorized SAP Gold Partner and well-established business solutions provider with comprehensive service coverage spanning Mainland China, Hong Kong, Macau, Taiwan, and other Asia Pacific countries. Through our strategic joint venture, Sria Infotech and IVC Solutions combine expertise to deliver world-class SAP implementations, enterprise resource planning, and digital transformation solutions to clients across the region."
                industry="Enterprise Software & SAP Solutions"
                region="Asia Pacific (China, Hong Kong, Macau, Taiwan)"
                companySize="200+ SAP Consultants & Experts"
                challengesTitle="Market Challenges We Address Together"
                challenges={[
                    "Complex SAP implementations requiring deep technical expertise and industry knowledge.",
                    "Need for localized SAP solutions tailored to Asia Pacific business requirements.",
                    "Growing demand for cloud-based ERP and digital transformation services.",
                    "Shortage of certified SAP professionals and implementation partners in the region.",
                    "Integration challenges between legacy systems and modern SAP S/4HANA platforms.",
                ]}
            /> */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Partnership Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">IVC Solutions is an authorized SAP Gold Partner and well-established business solutions provider with comprehensive service coverage spanning Mainland China, Hong Kong, Macau, Taiwan, and other Asia Pacific countries. Through our strategic joint venture, Sria Infotech and IVC Solutions combine expertise to deliver world-class SAP implementations, enterprise resource planning, and digital transformation solutions to clients across the region.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-900">Industry</h3>
                        <p className="text-gray-600">Enterprise Software & SAP Solutions</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-900">Region</h3>
                        <p className="text-gray-600">Asia Pacific (China, Hong Kong, Macau, Taiwan)</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-900">Company Size</h3>
                        <p className="text-gray-600">200+ SAP Consultants & Experts</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">Market Challenges We Address Together</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Complex SAP implementations requiring deep technical expertise and industry knowledge.</li>
                        <li>Need for localized SAP solutions tailored to Asia Pacific business requirements.</li>
                        <li>Growing demand for cloud-based ERP and digital transformation services.</li>
                        <li>Shortage of certified SAP professionals and implementation partners in the region.</li>
                        <li>Integration challenges between legacy systems and modern SAP S/4HANA platforms.</li>
                    </ul>
                </div>
            </div>

            {/* <InnovativeSolutions
                title="Joint Solutions & Capabilities"
                introText="Our partnership with IVC Solutions creates a powerful synergy, combining Sria Infotech's innovation-driven approach with IVC's deep SAP expertise to deliver comprehensive enterprise solutions."
                ctaText="Explore our SAP solutions"
                solutions={[
                    {
                        label: "SAP Gold Partner Expertise",
                        description:
                            "Access to certified SAP consultants, proven implementation methodologies, and comprehensive training programs for SAP S/4HANA, Business One, and ByDesign platforms.",
                    },
                    {
                        label: "Regional Market Coverage",
                        description:
                            "Combined delivery capabilities across India and Asia Pacific markets, providing localized support and understanding of regional business practices and compliance requirements.",
                    },
                    {
                        label: "Industry-Specific Solutions",
                        description:
                            "Tailored SAP implementations for wholesale & distribution, retail, manufacturing, food & beverage, logistics, and professional services industries.",
                    },
                    {
                        label: "End-to-End Implementation",
                        description:
                            "Complete project lifecycle support from initial consultation and system design through implementation, data migration, user training, and post-go-live support.",
                    },
                ]}
            /> */}
            <div className="bg-gray-900 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Joint Solutions & Capabilities</h2>
                    <p className="text-lg text-gray-300 mb-12">Our partnership with IVC Solutions creates a powerful synergy, combining Sria Infotech's innovation-driven approach with IVC's deep SAP expertise to deliver comprehensive enterprise solutions.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                label: "SAP Gold Partner Expertise",
                                description: "Access to certified SAP consultants, proven implementation methodologies, and comprehensive training programs for SAP S/4HANA, Business One, and ByDesign platforms.",
                            },
                            {
                                label: "Regional Market Coverage",
                                description: "Combined delivery capabilities across India and Asia Pacific markets, providing localized support and understanding of regional business practices and compliance requirements.",
                            },
                            {
                                label: "Industry-Specific Solutions",
                                description: "Tailored SAP implementations for wholesale & distribution, retail, manufacturing, food & beverage, logistics, and professional services industries.",
                            },
                            {
                                label: "End-to-End Implementation",
                                description: "Complete project lifecycle support from initial consultation and system design through implementation, data migration, user training, and post-go-live support.",
                            },
                        ].map((sol, idx) => (
                            <div key={idx} className="border border-gray-700 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-2">{sol.label}</h3>
                                <p className="text-gray-400">{sol.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <BusinessImpact
                sectionTitle="Partnership Benefits"
                bgImage="https://www.accely.com/wp-content/uploads/2024/05/Customer-Benefits.webp"
                items={[
                    {
                        title: "SAP Gold Partner Status",
                        description:
                            "Direct access to SAP's latest technologies, training resources, and partner programs, ensuring clients receive cutting-edge solutions and best practices.",
                    },
                    {
                        title: "Comprehensive ERP Solutions",
                        description:
                            "Full suite of SAP products including S/4HANA, Business One, ByDesign, with modules for finance, supply chain, HR, and business intelligence.",
                    },
                    {
                        title: "Geographic Expansion",
                        description:
                            "Extended market reach across Asia Pacific and India, enabling seamless multi-country implementations and regional support coverage.",
                    },
                    {
                        title: "Enhanced R&D Collaboration",
                        description:
                            "Joint innovation initiatives combining IVC's SAP expertise with Sria's custom development capabilities for unique client requirements.",
                    },
                    {
                        title: "Professional Services",
                        description:
                            "Certified consultants providing implementation, customization, integration, training, and managed services with proven track records.",
                    },
                    {
                        title: "Industry Best Practices",
                        description:
                            "Deep industry knowledge and pre-configured solutions for faster deployments with lower risk and higher ROI for clients.",
                    },
                ]}
            /> */}
            <div className="py-16 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Partnership Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "SAP Gold Partner Status",
                            description: "Direct access to SAP's latest technologies, training resources, and partner programs, ensuring clients receive cutting-edge solutions and best practices.",
                        },
                        {
                            title: "Comprehensive ERP Solutions",
                            description: "Full suite of SAP products including S/4HANA, Business One, ByDesign, with modules for finance, supply chain, HR, and business intelligence.",
                        },
                        {
                            title: "Geographic Expansion",
                            description: "Extended market reach across Asia Pacific and India, enabling seamless multi-country implementations and regional support coverage.",
                        },
                        {
                            title: "Enhanced R&D Collaboration",
                            description: "Joint innovation initiatives combining IVC's SAP expertise with Sria's custom development capabilities for unique client requirements.",
                        },
                        {
                            title: "Professional Services",
                            description: "Certified consultants providing implementation, customization, integration, training, and managed services with proven track records.",
                        },
                        {
                            title: "Industry Best Practices",
                            description: "Deep industry knowledge and pre-configured solutions for faster deployments with lower risk and higher ROI for clients.",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-white shadow rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* <ImpactStats title="Partnership Impact" items={impactItems} /> */}
            <div className="bg-primary text-white py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Partnership Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {impactItems.map((item, idx) => (
                            <div key={idx}>
                                <div className="text-5xl font-bold mb-2">{item.percentage}</div>
                                <p className="text-lg opacity-90">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Solutions Portfolio Section */}
            <div className="w-full bg-gray-50 py-16 px-6 lg:px-10 relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                        Solution Portfolio
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        Through our partnership with IVC Solutions, we offer a comprehensive range of SAP and enterprise solutions
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "SAP S/4HANA",
                                description: "Next-generation ERP platform with real-time analytics, AI capabilities, and cloud deployment options.",
                            },
                            {
                                title: "Accounting & Finance",
                                description: "Comprehensive financial management, reporting, and compliance solutions for enterprise organizations.",
                            },
                            {
                                title: "Supply Chain Management",
                                description: "End-to-end SCM solutions for procurement, inventory, warehouse, and logistics management.",
                            },
                            {
                                title: "Human Resources (HRIS)",
                                description: "Complete HR management including payroll, talent management, and employee self-service portals.",
                            },
                            {
                                title: "Business Intelligence",
                                description: "Advanced analytics, reporting, and data visualization tools for data-driven decision making.",
                            },
                            {
                                title: "Cloud Solutions",
                                description: "Cloud-based ERP deployments, migrations, and managed services for scalability and flexibility.",
                            },
                        ].map((solution, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full relative z-10 bg-black">
                <div className="max-w-[1400px] w-full mx-auto">
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
}

export default IVCSolutions;
