import React from "react";
import PageHeader from "@/components/layout/PageHeader";

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

// import FAQSection from "@/components/FAQSection";

// import ProductRange from "@/components/ProductRange";
// import Resource from "@/components/Resource";
// import WorldMap from "@/components/aboutus/WorldMap";
// import BeautifulParallaxTailwind from "@/components/BeautifulParallaxTailwind";
// import Footer from "@/components/Footer";
// import StatCardStable from "@/components/StatCardStable";
import { Link } from "react-router-dom";

const productData = [
    {
        title: "Auto Extract",
        description:
            "AI-powered platform that automates data extraction from documents, invoices, receipts, and forms with accuracy and speed.",
        link: "/products/autoextract",
    },
    {
        title: "NxDesk",
        description:
            "Smart ticketing system designed to streamline issue tracking across teams and projects.",
        link: "/products/nxdesk"
    },
    {
        title: "Nxify",
        description:
            "Unified platform for automating employee financials, payroll, attendance, and HR workflows.",
        link: "/products/nxify"
    },
    {
        title: "Gate Check",
        description:
            "It digitizes maintenance, visitor management, compliance, and sustainability across multiple sites with actionable insights.", link: "/products/gatecheck"
    },

];

const features = [
    {
        title: "Billing & Payments",
        description:
            "Automate billing, track dues, and enable secure resident payments effortlessly.",
        image: "/big/Centralized Billing & Payments.png",
    },
    {
        title: "Smart Accounting",
        description:
            "Simplify accounting with auto-reconciliations, expense tracking, and financial reports.",
        image: "/big/Smart Accounting.png",
    },
    {
        title: "Complaint Tracking",
        description:
            "Raise, track, and resolve issues easily with real-time updates.",
        image: "/big/Complaint Management.png",
    },
    {
        title: "Meeting Manager",
        description:
            "Plan meetings, share agendas, and record minutes with automated reminders.",
        image: "/big/Meeting Scheduler & Minutes.png",
    },
    {
        title: "Document Hub",
        description:
            "Securely store and share bylaws, invoices, and notices in one place.",
        image: "/big/Document Hub.png",
    },
    {
        title: "Resident Directory",
        description:
            "Maintain an up-to-date directory with contact and emergency details.",
        image: "/big/Resident Directory.png",
    },
    {
        title: "Polls & Notices",
        description:
            "Engage residents with instant polls and community announcements.",
        image: "/big/Polls & Notices.png",
    },
];


const faqs = [
    {
        question: "Is Jatayu free to use?",
        answer: "Jatayu App is offered under flexible pricing based on society size and requirements.",
    },
    {
        question: "Can I download bills and receipts?",
        answer: "Yes, but currently download functionality has issues and is under active development.",
    },
    {
        question: "How do I raise a complaint?",
        answer: "Navigate to the 'Raise Ticket' section in the app and submit your complaint.",
    },
    {
        question: "Are payment details secure?",
        answer: "Yes, we use secure gateways and data encryption to ensure all transactions are safe.",
    },
    {
        question: "Can multiple societies use Jatayu ?",
        answer: "Yes, each society gets its own setup and administrative controls.",
    },
];

const tabs = [
    {
        icon: <Star className="w-10 h-10 text-yellow-500" />,
        title: "Billing Manager",
        description:
            "Generate bills, track dues, and manage payments efficiently.",
    },
    {
        icon: <Globe className="w-10 h-10 text-blue-500" />,
        title: "Accounting",
        description:
            "Manage income, expenses, and vouchers with complete transparency.",
    },
    {
        icon: <Shield className="w-10 h-10 text-green-500" />,
        title: "Helpdesk",
        description:
            "Centralized dashboard for raising and resolving complaints.",
    },
    {
        icon: <Rocket className="w-10 h-10 text-purple-500" />,
        title: "User Roles",
        description:
            "Secure access control with role-based permissions for all users.",
    },
    {
        icon: <BarChart2 className="w-10 h-10 text-pink-500" />,
        title: "Reports",
        description:
            "Detailed summaries of income, expenses, and receipts.",
    },
    {
        icon: <Database className="w-10 h-10 text-orange-500" />,
        title: "Documents",
        description:
            "Upload and organize essential building and user documents.",
    },
    {
        icon: <Users className="w-10 h-10 text-red-500" />,
        title: "Staff Management",
        description:
            "Monitor daily helper activity and track staff attendance.",
    },
    {
        icon: <Settings className="w-10 h-10 text-gray-500" />,
        title: "Event Tracker",
        description:
            "Organize events and meetings with participation tracking.",
    },
];

const menuItems = [
    "Overview",
    "Features",
    "Insights",
    "Benefits",
    "Find Your Answers",
    "Other Products",

];

function Jatayu() {
    return (
        <div className="min-h-screen">
            {/* <Navigation /> */}

            <PageHeader
                title="Jatayu - Building Guardian"
                subtitle="Simplify society operations with Jatayu. Manage billing, accounting, complaints, and meetings—all in one place."
                breadcrumbs={[
                    { name: "Products", path: "/products" },
                    { name: "Jatayu", path: "/products/jatayu" },
                ]}
                backgroundImage="/jatayu.png"
            />


            {/* Main Content - Responsive Layout */}
            <div className="flex flex-col lg:flex-row w-full max-w-[1450px] mx-auto mt-4 lg:px-8">
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
                        <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Why Jatayu?
                        </h1>
                        <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
                            Jatayu is a comprehensive platform for residential communities. It streamlines billing, accounting, and complaints, improving transparency and communication between residents and management.
                        </p>
                    </section>

                    {/* Features Section */}
                    <section id="features" className="mt-12 sm:mt-16 scroll-mt-24">
                        <div className="flex justify-center">
                            <div className="flex flex-col sm:flex-row gap-6 max-w-7xl w-full justify-center">
                                {/* <FeatureCard ... /> */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 border rounded-lg">
                                        <h3 className="text-xl font-bold mb-2">Centralized Billing</h3>
                                        <p>Handle dues, payments, and receipts in one place.</p>
                                    </div>
                                    <div className="p-6 border rounded-lg">
                                        <h3 className="text-xl font-bold mb-2">Real-time Tracking</h3>
                                        <p>Keep tabs on reports, events, complaints, and attendance instantly.</p>
                                    </div>
                                    <div className="p-6 border rounded-lg">
                                        <h3 className="text-xl font-bold mb-2">Role-Based Access</h3>
                                        <p>Secure society access based on roles like Admin, Resident, and Staff.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Features Section */}
                    <section id="key-features" className="mt-16 sm:mt-20 scroll-mt-24">
                        <div className="w-full lg:w-3/4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                                Key features
                            </h2>
                            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500">
                                Jatayu simplifies everyday operations with its powerful tools — from billing and tickets to meetings, staff, and reports.
                            </p>
                        </div>
                        <section className="my-8 sm:my-10 w-full">
                            {/* <FeatureTabs features={features} /> */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="p-6 border rounded-lg">
                                        <h3 className="font-bold">{feature.title}</h3>
                                        <p className="text-base text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </section>

                    {/* Insights Section */}
                    <section id="insights" className="mt-16 sm:mt-20 w-full scroll-mt-24">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                            Insights that define value
                        </h2>

                        {/* Stats Cards - Responsive Grid */}
                        <div className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 bg-white">
                            {/* <StatCardStable ... /> */}
                            <div className="p-6 bg-gray-50 rounded-lg text-center">
                                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                                <p>Reduction in manual billing and accounting tasks through automated society management workflows.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg text-center">
                                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                                <p>Improvement in resident satisfaction with transparent billing, real-time complaint tracking, and instant updates.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg text-center">
                                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                                <p>Faster resolution of resident complaints and maintenance requests with centralized tracking.</p>
                            </div>
                        </div>
                    </section>
                    {/* Benefits Section */}
                    <section id="benefits" className="mt-16 sm:mt-20 w-full scroll-mt-24">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl w-full lg:w-3/4 font-semibold">
                            Unlock powerful benefits
                        </h2>
                        <p className="mt-4 text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 text-gray-500">
                            From boosting transparency to automating routine tasks, Jatayu helps your community run better every day.
                        </p>

                        {/* Benefits Grid - Responsive */}
                        <div className="max-w-7xl mx-auto py-8 sm:py-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                                {tabs.map((tab, idx) => (
                                    <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                                        <div className="mb-4">{tab.icon}</div>
                                        <h3 className="text-xl font-bold mb-2">{tab.title}</h3>
                                        <p className="text-gray-600">{tab.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section
                        id="find-your-answers"
                        className="mt-16 sm:mt-20 w-full scroll-mt-24"
                    >
                        {/* <FAQSection faqs={faqs} /> */}
                        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border-b pb-4">
                                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
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
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                                    Simplifying Community & Society Operations
                                </h1>
                                <div className="flex-shrink-0">
                                    <Link to={"/contactus"} className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                        Request a Demo
                                    </Link>
                                </div>
                            </div>

                            {/* Paragraph */}
                            <p className="mt-6 text-base sm:text-lg lg:text-xl w-full lg:w-3/4 text-white leading-relaxed">
                                Streamline society operations with Jatayu. Manage billing, accounting, complaints, and meetings in one platform for complete transparency and efficiency.
                            </p>
                        </div>
                    </section>

                    {/* Other Products Section */}
                    <section id="other-products" className="mt-16 sm:mt-20 scroll-mt-24">
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

                    {/* Resources Section */}
                    {/* <section id="resources" className="mt-12 sm:mt-16 scroll-mt-24">
                        <Resource
                            heading="Explore Our Resources"
                            paragraph="Helpful tools and insights for your export-import operations"
                     products={[
                {
                  title: "User Guide",
                  description: "Step-by-step instructions to use each module of Jatayu.",
                  image: "/images/user-guide.jpg",
                  link:"/"
                },
              ]}
                        />
                    </section> */}
                </div>
            </div>

            {/* Certifications Section - Responsive */}
            <div className="p-8 relative  bg-white z-10">

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

export default Jatayu;
