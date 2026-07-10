import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import ProductLayout from "@/components/layout/ProductLayout";
import {
 Brain,
 Activity,
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
 Wifi,
 Map,
 ClipboardCheck,
 AlertTriangle,
} from "lucide-react";

const GateCheck = () => {
 const overviewData = {
 title: "What is GateCheck?",
 description: "GateCheck is a smart facility platform integrating IoT, cloud, and mobility. It digitizes maintenance, visitor management, and compliance across multiple sites, providing actionable insights for better facility management.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/gatecheck/product.jpg?tr=f-auto,q-auto",
 highlights: [
 {
 icon: <Wifi className="w-6 h-6" />,
 title: "IoT Monitoring",
 description: "Real-time visibility into facility conditions using smart sensors and connected devices.",
 },
 {
 icon: <ShieldCheck className="w-6 h-6" />,
 title: "Digital Compliance",
 description: "Streamline checklists and audits to ensure regulatory safety standards are met.",
 },
 {
 icon: <Activity className="w-6 h-6" />,
 title: "Predictive Maintenance",
 description: "Automated alerts and insights to reduce downtime and optimize asset health.",
 },
 ],
 };

 const coreCapabilitiesData = {
 title: "Core Capabilities",
 capabilities: [
 {
 icon: <Map className="w-8 h-8" />,
 title: "Digital Logs",
 description: "QR/NFC-based logging of facility operations and real-time geofencing for staff tracking.",
 },
 {
 icon: <TrendingUp className="w-8 h-8" />,
 title: "AI-Driven Analytics",
 description: "Predictive maintenance insights and real-time risk detection using machine learning.",
 },
 {
 icon: <Layout className="w-8 h-8" />,
 title: "Mobile Dashboards",
 description: "Access critical dashboards and alerts from anywhere on any device in real-time.",
 },
 ],
 };

 const keyFeaturesData = {
 title: "Key Features",
 features: [
 { icon: <Wifi className="w-5 h-5" />, title: "IoT Monitoring" },
 { icon: <TrendingUp className="w-5 h-5" />, title: "Predictive Maintenance" },
 { icon: <ClipboardCheck className="w-5 h-5" />, title: "Digital Compliance" },
 { icon: <AlertTriangle className="w-5 h-5" />, title: "Incident Management" },
 { icon: <Database className="w-5 h-5" />, title: "Asset Tracking" },
 { icon: <Layout className="w-5 h-5" />, title: "Custom Dashboards" },
 { icon: <Lock className="w-5 h-5" />, title: "Cloud Access" },
 { icon: <BarChart className="w-5 h-5" />, title: "Sustainability Check" },
 ],
 };

 const featureDeepDiveData = {
 sections: [
 {
 title: "IoT-Enabled Monitoring",
 description: "Real-time visibility into facility conditions using smart sensors. Monitor temperature, humidity, energy consumption, and more from a single interface.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/gatecheck/fe1.jpg?tr=f-auto,q-auto",
 },
 {
 title: "Predictive Maintenance",
 description: "Automated alerts and insights to reduce downtime and optimize asset health. Catch potential failures before they happen and schedule maintenance proactively.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/gatecheck/fe2.jpg?tr=f-auto,q-auto",
 reverse: true,
 },
 {
 title: "Compliance & Audits",
 description: "Streamline checklists and audits to ensure regulatory safety standards. Digital documentation makes audits faster and more reliable.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/gatecheck/fe3.jpg?tr=f-auto,q-auto",
 },
 {
 title: "Incident Reporting",
 description: "Efficiently log, track, and resolve incidents with automated workflows. Ensure that every issue is addressed promptly and documented correctly.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/gatecheck/fe4.jpg?tr=f-auto,q-auto",
 reverse: true,
 },
 {
 title: "Role-Based Dashboards",
 description: "Custom dashboards for admins, supervisors, and operators. Get the information you need, tailored to your specific role and responsibilities.",
 image: "https://ik.imagekit.io/hps6th7vy/sria/gatecheck/fe5.jpg?tr=f-auto,q-auto",
 },
 ],
 };

 const insightsData = {
 title: "Insights That Define Value",
 stats: [
 { value: "65%", label: "Reduction in maintenance costs" },
 { value: "80%", label: "Improvement in compliance rates" },
 { value: "90%", label: "Faster incident response" },
 ],
 };

 const benefitsData = {
 title: "Unlock Powerful Benefits",
 checklist: [
 "Real-time visibility across multiple locations",
 "Automated compliance tracking and reporting",
 "Reduced operational risk and downtime",
 "Improved asset lifecycle management",
 "Data-driven decision making with AI insights",
 "Mobile-first approach for field teams",
 ],
 illustration: "https://ik.imagekit.io/hps6th7vy/sria/gatecheck/benefits.jpg?tr=f-auto,q-auto",
 };

 const faqsData = [
 {
 question: "Is hardware mandatory?",
 answer: "No, GateCheck supports both IoT-based and manual operations, allowing you to scale as needed.",
 },
 {
 question: "Can I integrate it with my BMS or ERP?",
 answer: "Yes, it supports robust API integrations for seamless connectivity with your existing systems.",
 },
 {
 question: "Is there a mobile app?",
 answer: "Yes, available for both Android and iOS with offline sync options for field operations.",
 },
 {
 question: "Does it support multi-location access?",
 answer: "Yes, the system is designed for multi-campus or multi-building setups with centralized control.",
 },
 ];

 const ctaData = {
 title: "Digitize your facility operations with GateCheck.",
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
 title: "Jatayu",
 description: "From billing and accounting to complaints, meetings, and documents — everything in one place.",
 link: "/products/jatayu",
 icon: <FileText className="w-6 h-6" />,
 },
 ],
 };

 return (
 <>
 <PageHeader
 title="GateCheck Platform"
 subtitle="Digitize facility operations with GateCheck—an IoT-based cloud platform for smart maintenance, compliance, and monitoring."
 breadcrumbs={[
 { name: "Products", path: "/products" },
 { name: "GateCheck", path: "/products/gatecheck" },
 ]}
 backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/gatecheck/gatecheck-hero.jpg?tr=f-auto,q-auto"
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

export default GateCheck;

