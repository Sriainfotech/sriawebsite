import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import ProductLayout from "@/components/layout/ProductLayout";
import {
    Brain,
    Building2,
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
    Users,
    CreditCard,
    MessageSquare,
    Calendar,
} from "lucide-react";

const Jatayu = () => {
    const overviewData = {
        title: "Why Jatayu?",
        description: "Jatayu is a comprehensive platform for residential communities. It streamlines billing, accounting, and complaints, improving transparency and communication between residents and management.",
        highlights: [
            {
                icon: <CreditCard className="w-6 h-6" />,
                title: "Centralized Billing",
                description: "Handle dues, payments, and receipts in one place with automated invoicing.",
            },
            {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Real-time Tracking",
                description: "Keep tabs on reports, events, complaints, and attendance instantly.",
            },
            {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Role-Based Access",
                description: "Secure society access based on roles like Admin, Resident, and Staff.",
            },
        ],
    };

    const coreCapabilitiesData = {
        title: "Core Capabilities",
        capabilities: [
            {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Billing Manager",
                description: "Generate bills, track dues, and manage payments efficiently with automated reminders.",
            },
            {
                icon: <Database className="w-8 h-8" />,
                title: "Smart Accounting",
                description: "Manage income, expenses, and vouchers with complete transparency and real-time reports.",
            },
            {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Helpdesk",
                description: "Centralized dashboard for raising and resolving complaints with real-time updates.",
            },
        ],
    };

    const keyFeaturesData = {
        title: "Key Features",
        features: [
            { icon: <CreditCard className="w-5 h-5" />, title: "Billing & Payments" },
            { icon: <Database className="w-5 h-5" />, title: "Smart Accounting" },
            { icon: <MessageSquare className="w-5 h-5" />, title: "Complaint Tracking" },
            { icon: <Calendar className="w-5 h-5" />, title: "Meeting Manager" },
            { icon: <FileText className="w-5 h-5" />, title: "Document Hub" },
            { icon: <Users className="w-5 h-5" />, title: "Resident Directory" },
            { icon: <BarChart className="w-5 h-5" />, title: "Polls & Notices" },
            { icon: <Users className="w-5 h-5" />, title: "Staff Management" },
        ],
    };

    const featureDeepDiveData = {
        sections: [
            {
                title: "Billing & Payments",
                description: "Automate billing, track dues, and enable secure resident payments effortlessly. Our system ensures that every transaction is recorded and transparent.",
                image: "/big/Centralized Billing & Payments.png",
            },
            {
                title: "Smart Accounting",
                description: "Simplify accounting with auto-reconciliations, expense tracking, and financial reports. Get a clear picture of your society's financial health at any time.",
                image: "/big/Smart Accounting.png",
                reverse: true,
            },
            {
                title: "Complaint Tracking",
                description: "Raise, track, and resolve issues easily with real-time updates. Residents can track the progress of their complaints from their mobile devices.",
                image: "/big/Complaint Management.png",
            },
            {
                title: "Meeting Manager",
                description: "Plan meetings, share agendas, and record minutes with automated reminders. Ensure that every resident is informed and engaged.",
                image: "/big/Meeting Scheduler & Minutes.png",
                reverse: true,
            },
            {
                title: "Document Hub",
                description: "Securely store and share bylaws, invoices, and notices in one place. Access important documents anytime, anywhere.",
                image: "/big/Document Hub.png",
            },
        ],
    };

    const insightsData = {
        title: "Insights That Define Value",
        stats: [
            { value: "80%", label: "Reduction in manual tasks" },
            { value: "95%", label: "Improvement in satisfaction" },
            { value: "70%", label: "Faster issue resolution" },
        ],
    };

    const benefitsData = {
        title: "Unlock Powerful Benefits",
        checklist: [
            "Transparent and automated financial management",
            "Improved communication between residents and management",
            "Centralized repository for all society documents",
            "Efficient tracking of staff and daily helpers",
            "Secure and role-based access for all users",
            "Real-time alerts and notifications for community events",
        ],
        illustration: "/big/Resident Directory.png",
    };

    const faqsData = [
        {
            question: "What is Jatayu and who can use it?",
            answer: "Jatayu is a comprehensive platform for residential communities to simplify society operations. Manage billing, accounting, complaints, and meetings—all in one place.",
        },
        {
            question: "Can I download bills and receipts?",
            answer: "Yes, you can download bills and receipts directly from the app for your records.",
        },
        {
            question: "How do I raise a complaint?",
            answer: "Navigate to the 'Raise Ticket' section in the app and submit your complaint with relevant details.",
        },
        {
            question: "Are payment details secure?",
            answer: "Yes, we use secure gateways and data encryption to ensure all transactions are safe and protected.",
        },
    ];

    const ctaData = {
        title: "Simplify your community operations with Jatayu.",
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
                title: "Nxify",
                description: "Unified platform for automating employee financials, payroll, attendance, and HR workflows.",
                link: "/products/nxify",
                icon: <Database className="w-6 h-6" />,
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
                title="Jatayu - Building Guardian"
                subtitle="Simplify society operations with Jatayu. Manage billing, accounting, complaints, and meetings—all in one place."
                breadcrumbs={[
                    { name: "Products", path: "/products" },
                    { name: "Jatayu", path: "/products/jatayu" },
                ]}
                backgroundImage="/jatayu.png"
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

export default Jatayu;
