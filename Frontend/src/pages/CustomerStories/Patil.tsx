import CustomerStoryLayout from "@/components/layout/CustomerStoryLayout";

const Patil = () => (
  <CustomerStoryLayout
    hero={{
      image: "https://res.cloudinary.com/dmxfdt7ub/image/upload/f_auto,q_auto/v1779454693/sria/customerStories/patil.jpg",
      category: "Enterprise IT & Financial Services",
      title: "Patil Drives Operational Excellence with End-to-End SAP, AMS & OCR Automation",
      tag: "SAP · AMS · OCR · Fund Management",
      datePublished: "August 8, 2025",
    }}
    images={{
      overview:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      challenge: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
      impact:    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80",
    }}
    overview={{
      text: "Patil, a leading enterprise group, needed a robust digital foundation to scale operations across business units. Their existing systems were siloed, with manual processes for handling documents, fund allocation, and service support. We partnered with Patil to implement a tailored tech stack, ensuring visibility, automation, and long-term sustainability.",
      industry: "Enterprise IT & Financial Services",
      region: "India",
      companySize: "500+ employees",
    }}
    challenges={{
      title: "Business Challenges",
      items: [
        "Fragmented software landscape with no centralized monitoring of applications.",
        "Manual entry of financial and operational data from PDF documents.",
        "Inefficient fund tracking and delayed reporting across departments.",
        "SAP systems under-configured and lacked standardized rollout practices.",
        "Lack of proactive maintenance and downtime tracking for core systems.",
      ],
    }}
    solutions={{
      title: "Innovative Solutions",
      introText: "We designed and executed a complete digital transformation journey for Patil, combining enterprise-grade tools with modern automation techniques.",
      items: [
        {
          label: "We Delivered",
          description: "Comprehensive AMS (Application Management Services) to stabilize and support their business-critical applications with proactive monitoring.",
          image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=700&q=80",
        },
        {
          label: "We Built",
          description: "A custom Fund Management solution tailored to Patil's multi-department structure, enabling real-time allocation and tracking.",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80",
        },
        {
          label: "We Configured",
          description: "SAP modules in collaboration with Apna Tech to ensure scalability, standardization, and audit-readiness ahead of rollout.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
        },
        {
          label: "We Automated",
          description: "PDF OCR workflows to extract key data from scanned documents — instantly syncing with internal systems and reducing manual load.",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
        },
      ],
    }}
    businessImpact={{
      title: "Business Impact",
      items: [
        {
          title: "Operational Agility",
          description: "With AMS in place, Patil's systems now run with minimal downtime, proactive monitoring, and dedicated escalation handling.",
        },
        {
          title: "Automated Document Handling",
          description: "OCR integration now processes hundreds of financial and compliance documents daily — no more manual retyping.",
        },
        {
          title: "Optimized Fund Management",
          description: "Finance teams now manage fund distribution and tracking through visual dashboards with real-time updates.",
        },
        {
          title: "SAP Modernization",
          description: "Patil's SAP environment was fully configured and aligned to business processes for a seamless rollout phase.",
        },
        {
          title: "Faster Decision-Making",
          description: "Cross-team visibility and unified data access allow faster approvals and data-driven planning.",
        },
        {
          title: "Scalable Digital Foundation",
          description: "With all systems cloud-ready and connected, Patil is set for future expansion and process automation.",
        },
      ],
    }}
    impactStats={{
      title: "Impact That Matters",
      items: [
        {
          percentage: "75%",
          description: "Reduction in manual data handling through automated PDF-to-system workflows using OCR.",
        },
        {
          percentage: "60%",
          description: "Improved visibility and transparency across fund management lifecycle with real-time dashboards.",
        },
        {
          percentage: "90%",
          description: "Stability and uptime achieved across business apps via AMS and SAP support rollout.",
        },
      ],
    }}
  />
);

export default Patil;
