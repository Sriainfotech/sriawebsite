import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import ProductLayout from "@/components/layout/ProductLayout";
import {
 Brain,
 MessageSquare,
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
 Inbox,
 Share2,
 BookOpen,
} from "lucide-react";

const NxDesk = () => {
 const overviewData = {
 title: "What is NxDesk?",
 description: "NxDesk is a smart issue tracking system for streamlined ticket management. It enables SLA tracking, project categorization, real-time updates, and multi-role access with AI-powered tools for quick resolutions.",
 image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
 highlights: [
 {
 icon: <MessageSquare className="w-6 h-6" />,
 title: "Smart Ticketing",
 description: "Track and manage issues from creation to resolution with full transparency.",
 },
 {
 icon: <Clock className="w-6 h-6" />,
 title: "SLA Monitoring",
 description: "Ensure timely resolution and compliance with real-time SLA enforcement.",
 },
 {
 icon: <Zap className="w-6 h-6" />,
 title: "AI-Enhanced Support",
 description: "Automate tasks and get intelligent suggestions for faster issue resolution.",
 },
 ],
 };

 const coreCapabilitiesData = {
 title: "Core Capabilities",
 capabilities: [
 {
 icon: <Inbox className="w-8 h-8" />,
 title: "Ticket Management",
 description: "Track and monitor tickets across lifecycle stages with full transparency and audit trails.",
 },
 {
 icon: <TrendingUp className="w-8 h-8" />,
 title: "SLA Tracking",
 description: "Enforce deadlines and reduce delays with real-time SLA monitoring and escalations.",
 },
 {
 icon: <BookOpen className="w-8 h-8" />,
 title: "Knowledge Base",
 description: "Store and reuse solution articles linked to resolved tickets for faster future fixes.",
 },
 ],
 };

 const keyFeaturesData = {
 title: "Key Features",
 features: [
 { icon: <Inbox className="w-5 h-5" />, title: "Unified Ticket Inbox" },
 { icon: <RefreshCw className="w-5 h-5" />, title: "Automated Workflows" },
 { icon: <Zap className="w-5 h-5" />, title: "AI-Powered Suggestions" },
 { icon: <Layout className="w-5 h-5" />, title: "Custom Dashboards" },
 { icon: <Users className="w-5 h-5" />, title: "Team Collaboration" },
 { icon: <ShieldCheck className="w-5 h-5" />, title: "Multi-Role Access" },
 { icon: <Search className="w-5 h-5" />, title: "Advanced Search" },
 { icon: <Settings className="w-5 h-5" />, title: "Project Grouping" },
 ],
 };

 const featureDeepDiveData = {
 sections: [
 {
 title: "Unified Ticket Inbox",
 description: "Centralize support channels into one smart inbox for streamlined management. No more jumping between tools to respond to customers.",
 image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
 },
 {
 title: "Automated Workflows",
 description: "Save time with rule-based routing, auto-responses, and SLA tracking. Let the system handle the routine tasks while you focus on complex issues.",
 image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
 reverse: true,
 },
 {
 title: "AI-Powered Suggestions",
 description: "Auto-suggest solutions and categorize tickets to reduce resolution times. Our AI analyzes past tickets to provide the best possible answers.",
 image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
 },
 {
 title: "Customizable Dashboards",
 description: "Track metrics and team performance in real-time with drag-and-drop widgets. Stay on top of your support KPIs with ease.",
 image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
 reverse: true,
 },
 {
 title: "Collaborative Ticketing",
 description: "Share internal notes, tag teammates, and resolve complex issues faster. Collaboration is built into the heart of the ticketing process.",
 image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
 },
 ],
 };

 const insightsData = {
 title: "Insights That Define Value",
 stats: [
 { value: "60%", label: "Reduction in resolution time" },
 { value: "85%", label: "Improvement in SLA compliance" },
 { value: "75%", label: "Increase in team productivity" },
 ],
 };

 const benefitsData = {
 title: "Unlock Powerful Benefits",
 checklist: [
 "Streamlined issue tracking and management",
 "Real-time visibility into support operations",
 "Improved customer satisfaction with faster fixes",
 "Centralized knowledge base for team learning",
 "Scalable support for growing organizations",
 "AI-driven automation for routine tasks",
 ],
 illustration: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
 };

 const faqsData = [
 {
 question: "What is NxDesk and who can use it?",
 answer: "NxDesk is an intelligent ticketing and issue management system designed for teams, support staff, and project-based departments to streamline ticket tracking and resolution.",
 },
 {
 question: "Does NxDesk support SLA tracking?",
 answer: "Yes, NxDesk includes real-time SLA enforcement based on ticket priority, with automatic escalation and deadline tracking.",
 },
 {
 question: "Can multiple roles access NxDesk?",
 answer: "Absolutely. Roles like Admin, Developer, Requestor, Manager, and Dispatcher can be configured with specific permissions.",
 },
 {
 question: "Is AI integrated into NxDesk?",
 answer: "Yes, NxDesk uses AI to answer contextual queries and supports ticket creation via voice/video and auto-assignment.",
 },
 ];

 const ctaData = {
 title: "Streamline your support operations with NxDesk.",
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
 title="NxDesk"
 subtitle="Smart ticketing system for streamlined issue tracking. Features SLA monitoring, multi-role access, real-time updates, and AI-powered support."
 breadcrumbs={[
 { name: "Products", path: "/products" },
 { name: "NxDesk", path: "/products/nxdesk" },
 ]}
 backgroundImage="/Nxdesk/mockup.png"
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

export default NxDesk;

