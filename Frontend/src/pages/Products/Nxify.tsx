import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import ProductLayout from "@/components/layout/ProductLayout";
import {
    Brain,
    Users,
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
    CreditCard,
    Calendar,
    ClipboardList,
    Briefcase,
} from "lucide-react";

const Nxify = () => {
    const overviewData = {
        title: "Why Nxify?",
        description: "Nxify is a comprehensive cloud-based platform designed to simplify and automate employee financial operations, HR processes, and EXIM workflows. It unifies everything under one intelligent system with real-time dashboards and analytics.",
        image: "https://ik.imagekit.io/hps6th7vy/sria/Nxify/product.png?tr=f-auto,q-auto,w-2000",
        highlights: [
            {
                icon: <CreditCard className="w-6 h-6" />,
                title: "Automated Payroll",
                description: "Configure complex salary structures and generate payslips with a few clicks.",
            },
            {
                icon: <FileText className="w-6 h-6" />,
                title: "IT Declarations",
                description: "Streamline investment declarations and Form-16 generation with ease.",
            },
            {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Workflow Automation",
                description: "Digitize approvals for expenses, leaves, onboarding, and more.",
            },
        ],
    };

    const coreCapabilitiesData = {
        title: "Core Capabilities",
        capabilities: [
            {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Payroll Automation",
                description: "Run accurate and timely payrolls with automated calculations and statutory compliance.",
            },
            {
                icon: <Calendar className="w-8 h-8" />,
                title: "Attendance Tracking",
                description: "Biometric and geotag-based attendance logging with robust policy configuration.",
            },
            {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Insightful Analytics",
                description: "Live dashboards give visibility into payroll trends, compliance, and headcount.",
            },
        ],
    };

    const keyFeaturesData = {
        title: "Key Features",
        features: [
            { icon: <CreditCard className="w-5 h-5" />, title: "Unified Financials" },
            { icon: <RefreshCw className="w-5 h-5" />, title: "Payroll Processing" },
            { icon: <Calendar className="w-5 h-5" />, title: "Smart Attendance" },
            { icon: <FileText className="w-5 h-5" />, title: "IT & Taxation" },
            { icon: <Zap className="w-5 h-5" />, title: "Workflow Automation" },
            { icon: <Lock className="w-5 h-5" />, title: "Role-Based Access" },
            { icon: <BarChart className="w-5 h-5" />, title: "Insightful Analytics" },
            { icon: <Briefcase className="w-5 h-5" />, title: "Onboarding/Exit" },
        ],
    };

    const featureDeepDiveData = {
        sections: [
            {
                title: "Unified Employee Financials",
                description: "Manage salaries, reimbursements, loans, and advances from a single, streamlined platform with real-time visibility for both HR and employees.",
                image: "https://ik.imagekit.io/hps6th7vy/sria/Nxify/fe1.png?tr=f-auto,q-auto,w-2000",
            },
            {
                title: "Automated Payroll Processing",
                description: "Run accurate and timely payrolls with automated calculations, statutory compliance, and direct bank transfers. Reduce manual errors to zero.",
                image: "https://ik.imagekit.io/hps6th7vy/sria/Nxify/fe2.png?tr=f-auto,q-auto,w-2000",
                reverse: true,
            },
            {
                title: "Smart Attendance & Leave",
                description: "Track attendance, shifts, and leave balances with biometric integrations and employee self-service portals. Everything is synced in real-time.",
                image: "https://ik.imagekit.io/hps6th7vy/sria/Nxify/fe3.png?tr=f-auto,q-auto,w-2000",
            },
            {
                title: "IT Declarations & Taxation",
                description: "Simplify income tax declarations and automate deductions with built-in compliance and real-time projections for employees.",
                image: "https://ik.imagekit.io/hps6th7vy/sria/Nxify/fe4.png?tr=f-auto,q-auto,w-2000",
                reverse: true,
            },
            {
                title: "Workflow Automation",
                description: "Digitize approvals for expenses, leaves, onboarding, and more using custom rule-based workflows that fit your organization's structure.",
                image: "https://ik.imagekit.io/hps6th7vy/sria/Nxify/fe5.png?tr=f-auto,q-auto,w-2000",
            },
        ],
    };

    const insightsData = {
        title: "Insights That Define Value",
        stats: [
            { value: "70%", label: "Reduction in payroll time" },
            { value: "90%", label: "Improvement in HR efficiency" },
            { value: "100%", label: "Accuracy in calculations" },
        ],
    };

    const benefitsData = {
        title: "Unlock Powerful Benefits",
        checklist: [
            "Automated compliance with statutory regulations",
            "Real-time visibility into workforce financials",
            "Reduced administrative burden on HR teams",
            "Improved employee experience with self-service",
            "Scalable architecture for any organization size",
            "Secure, role-based access to sensitive data",
        ],
        illustration: "https://ik.imagekit.io/hps6th7vy/sria/Nxify/benefits.png?tr=f-auto,q-auto,w-2000",
    };

    const faqsData = [
        {
            question: "What is Nxify?",
            answer: "Nxify is an AI-driven, modular platform that simplifies workflow automation, lead management, payroll, HR tasks, and EXIM operations for modern businesses.",
        },
        {
            question: "Is Nxify customizable?",
            answer: "Yes. Nxify is designed with modular components that can be tailored to fit specific workflows, business rules, and user interface needs.",
        },
        {
            question: "Can Nxify integrate with other systems?",
            answer: "Absolutely. Nxify supports seamless API integration to connect with CRMs, ERPs, accounting software, and third-party tools.",
        },
        {
            question: "How is data secured on Nxify?",
            answer: "Nxify enforces secure, role-based access with encrypted data transfer and storage, ensuring sensitive information is always protected.",
        },
    ];

    const ctaData = {
        title: "Streamline your HR and payroll operations with Nxify.",
        buttonText: "Request a Demo",
    };

    const otherProductsData = {
        title: "Explore Other Products",
        products: [
            {
                title: "Auto Extract",
                description: "AI-powered platform that automates data extraction from documents, invoices, and forms.",
                link: "/products/autoextract",
                icon: <Brain className="w-6 h-6" />,
            },
            {
                title: "NxDesk",
                description: "Smart ticketing system designed to streamline issue tracking across teams and projects.",
                link: "/products/nxdesk",
                icon: <Layout className="w-6 h-6" />,
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
                title="Nxify"
                subtitle="Nxify is a unified platform for automating employee financials, payroll, attendance, and HR workflows. It streamlines salary, loans, IT declarations, and approvals with secure role-based access and real-time insights."
                breadcrumbs={[
                    { name: "Products", path: "/products" },
                    { name: "Nxify", path: "/products/nxify" },
                ]}
                backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/Nxify/nxify-hero.png?tr=f-auto,q-auto,w-2000"
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

export default Nxify;

