import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import ProductLayout from "@/components/layout/ProductLayout";
import {
    Brain,
    ShieldCheck,
    Zap,
    Layers,
    Search,
    CheckCircle,
    BarChart,
    FileText,
    Settings,
    RefreshCw,
    Clock,
    TrendingUp,
    Cpu,
    Database,
    Layout,
    Lock,
} from "lucide-react";

const AutoExtract = () => {
    const overviewData = {
        title: "What is Auto Extract?",
        description: "Auto Extract uses advanced AI to automate data extraction from documents like invoices and forms. It streamlines processing with real-time validation and analytics, ensuring accuracy, security, and seamless integration into your enterprise ecosystem.",
        image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454642/sria/autoextract/product.png",
        highlights: [
            {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Automation",
                description: "Smart algorithms that learn and adapt to your document structures over time.",
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Enterprise Security",
                description: "Bank-grade encryption and secure data handling for sensitive information.",
            },
            {
                icon: <Layers className="w-6 h-6" />,
                title: "Seamless Integration",
                description: "Effortlessly connects with your existing ERP, CRM, and business platforms.",
            },
        ],
    };

    const coreCapabilitiesData = {
        title: "Core Capabilities",
        capabilities: [
            {
                icon: <Search className="w-8 h-8" />,
                title: "Smart Extraction",
                description: "Accurately identify and extract key data from various document types automatically.",
            },
            {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Real-Time Validation",
                description: "Validate data instantly, detect errors, and reduce manual corrections on the fly.",
            },
            {
                icon: <Zap className="w-8 h-8" />,
                title: "AI-Driven Automation",
                description: "Automate repetitive tasks and gain insights through advanced pattern detection.",
            },
        ],
    };

    const keyFeaturesData = {
        title: "Key Features",
        features: [
            { icon: <RefreshCw className="w-5 h-5" />, title: "Automated Processing" },
            { icon: <Brain className="w-5 h-5" />, title: "Smart Learning" },
            { icon: <ShieldCheck className="w-5 h-5" />, title: "Error-Free Processing" },
            { icon: <Settings className="w-5 h-5" />, title: "Custom Workflows" },
            { icon: <Zap className="w-5 h-5" />, title: "Instant Validation" },
            { icon: <Lock className="w-5 h-5" />, title: "Data Security" },
            { icon: <Cpu className="w-5 h-5" />, title: "AI Integration" },
            { icon: <BarChart className="w-5 h-5" />, title: "Analytics" },
        ],
    };

    const featureDeepDiveData = {
        sections: [
            {
                title: "Automated Processing",
                description: "Process large volumes of documents automatically, saving time and reducing operational costs significantly. Our system handles the heavy lifting, allowing your team to focus on high-value tasks.",
                image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454632/sria/autoextract/automated.png",
            },
            {
                title: "Smart Learning",
                description: "The system adapts to new document structures, improving efficiency over time. It learns from every interaction, becoming more accurate and faster with each document processed.",
                image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454645/sria/autoextract/smart.png",
                reverse: true,
            },
            {
                title: "Error-Free Processing",
                description: "Minimize manual entry to ensure high data integrity and consistency. Our AI cross-references data points to ensure that what is extracted is 100% accurate.",
                image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454638/sria/autoextract/error.png",
            },
            {
                title: "Custom Workflows",
                description: "Design workflows that fit your specific document handling needs. Whether it's multi-level approval or specific data routing, Auto Extract adapts to you.",
                image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454636/sria/autoextract/custom.png",
                reverse: true,
            },
            {
                title: "Instant Validation",
                description: "Validate and correct data in real-time for faster, reliable results. Catch discrepancies before they enter your system, maintaining a clean database.",
                image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454640/sria/autoextract/instant.png",
            },
        ],
    };

    const insightsData = {
        title: "Insights That Define Value",
        stats: [
            { value: "30%", label: "Reduction in processing time" },
            { value: "45%", label: "Improvement in accuracy" },
            { value: "60%", label: "Increase in efficiency" },
        ],
    };

    const benefitsData = {
        title: "Unlock Powerful Benefits",
        checklist: [
            "Enterprise-grade security and compliance",
            "Real-time analytics and reporting dashboards",
            "Seamless integration with SAP and other ERPs",
            "Reduced operational costs and manual errors",
            "Scalable architecture for growing businesses",
            "Improved data accessibility and searchability",
        ],
        illustration: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454634/sria/autoextract/benefits.png",
    };

    const faqsData = [
        {
            question: "What is Auto Extract and who can use it?",
            answer: "Auto Extract is an intelligent document processing solution designed for businesses of all sizes to automate data extraction from unstructured or semi-structured documents like invoices, receipts, and forms.",
        },
        {
            question: "Does Auto Extract support multiple document formats?",
            answer: "Yes, Auto Extract supports PDFs, scanned images, spreadsheets, and text files, ensuring seamless data extraction across formats.",
        },
        {
            question: "Can Auto Extract handle complex layouts?",
            answer: "Absolutely. Auto Extract uses advanced AI algorithms to interpret tables, columns, and nested fields in complex document structures.",
        },
        {
            question: "Can Auto Extract be integrated into existing systems?",
            answer: "Yes, Auto Extract provides APIs and connectors to integrate with ERP, CRM, and other business platforms effortlessly.",
        },
    ];

    const ctaData = {
        title: "Transform document processing with Auto Extract.",
        buttonText: "Request a Demo",
    };

    const otherProductsData = {
        title: "Explore Other Products",
        products: [
            {
                title: "NxDesk",
                description: "Smart ticketing system designed to streamline issue tracking across teams and projects.",
                link: "/products/nxdesk",
                icon: <Layout className="w-6 h-6" />,
            },
            {
                title: "Nxify",
                description: "Unified platform for automating employee financials, payroll, attendance, and HR workflows.",
                link: "/products/nxify",
                icon: <Database className="w-6 h-6" />,
            },
            {
                title: "Jatayu",
                description: "From billing and accounting to complaints, meetings, and documents — everything in one place.",
                link: "/products/jatayu",
                icon: <FileText className="w-6 h-6" />,
            },
            {
                title: "Gate Check",
                description: "Digitize maintenance, visitor management, compliance, and sustainability across multiple sites.",
                link: "/products/gatecheck",
                icon: <ShieldCheck className="w-6 h-6" />,
            },
        ],
    };

    return (
        <>
            <PageHeader
                title="Auto Extract"
                subtitle="Auto Extract is an AI-powered platform that automatically extracts data from invoices, receipts, and forms, improving accuracy, reducing manual effort, and securely integrating with existing workflows."
                breadcrumbs={[
                    { name: "Products", path: "/products" },
                    { name: "Auto Extract", path: "/products/auto-extract" },
                ]}
                backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454630/sria/autoextract/auto-hero.png"
            />
            <ProductLayout
                overview={overviewData}
                coreCapabilities={coreCapabilitiesData}
                keyFeatures={keyFeaturesData}
                featureDeepDive={featureDeepDiveData}
                insights={insightsData}
                benefits={benefitsData}
                faqs={faqsData}
                cta={ctaData}
                otherProducts={otherProductsData}
            />
        </>
    );
};

export default AutoExtract;

