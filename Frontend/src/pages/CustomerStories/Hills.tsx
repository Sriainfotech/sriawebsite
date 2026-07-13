import CustomerStoryLayout from "@/components/layout/CustomerStoryLayout";

const Hills = () => (
  <CustomerStoryLayout
    hero={{
      image: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/7hills.jpg?tr=f-auto,q-auto,w-2000",
      category: "Hospitality & Food Service",
      title: "7Hills Restaurant Transforms Guest Experience with Website, POS & Inventory Integration",
      tag: "POS · Website · Inventory",
      datePublished: "August 1, 2025",
    }}
    images={{
      overview:  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
      challenge: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
      impact:    "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1400&q=80",
    }}
    overview={{
      text: "7Hills is a popular fine dining restaurant located in Belgium, known for its fusion cuisine and exceptional customer service. With growing demand and a vision to scale, they needed a streamlined way to manage reservations, customer orders, and inventory across multiple locations.",
      industry: "Hospitality",
      region: "Belgium",
      companySize: "50+ employees",
    }}
    challenges={{
      title: "Business Challenges",
      items: [
        "Manual reservation system leading to double bookings and miscommunication.",
        "No centralized system for order processing or transaction tracking.",
        "Inconsistent inventory tracking caused overstocking and last-minute shortages.",
        "Website lacked mobile optimization and online ordering capabilities.",
        "No visibility into daily operations, KPIs, or customer order trends.",
      ],
    }}
    solutions={{
      title: "Innovative Solutions",
      introText: "Our team partnered with 7Hills to design and deploy a tailored digital solution combining web presence, POS integration, and smart inventory management.",
      items: [
        {
          label: "We Built",
          description: "A responsive, modern website with online reservation and menu browsing features to boost digital visibility and improve guest convenience.",
          image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80",
        },
        {
          label: "We Integrated",
          description: "A cloud-based POS system to streamline table-side ordering, billing, and kitchen coordination for faster service and improved accuracy.",
          image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=700&q=80",
        },
        {
          label: "We Developed",
          description: "An inventory module that syncs with the POS and kitchen usage, giving real-time stock updates and waste tracking analytics.",
          image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=700&q=80",
        },
        {
          label: "We Automated",
          description: "Daily reporting dashboards to monitor bookings, revenue, order trends, and ingredient usage – accessible via mobile or desktop.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
        },
      ],
    }}
    businessImpact={{
      title: "Business Impact",
      items: [
        {
          title: "Faster Order Processing",
          description: "POS integration reduced the average table service time by 20%, boosting customer satisfaction and table turnover.",
        },
        {
          title: "Efficient Inventory Control",
          description: "Digitized stock management helped cut wastage by 20%, while auto-reorder thresholds ensured seamless kitchen operations.",
        },
        {
          title: "Enhanced Online Presence",
          description: "A professional website led to a 4x increase in online reservations and a notable boost in social media mentions.",
        },
        {
          title: "Real-Time Insights",
          description: "Automated reports empowered the management to track daily performance, customer behavior, and sales patterns effortlessly.",
        },
        {
          title: "Cost Savings",
          description: "Reduction in staffing hours for manual order entries and billing tasks, saving 15+ hours per week.",
        },
        {
          title: "Improved Accuracy",
          description: "Order mistakes and billing discrepancies dropped by 35% due to seamless POS integration.",
        },
      ],
    }}
    impactStats={{
      title: "Impact That Matters",
      items: [
        {
          percentage: "40%",
          description: "Reduction in manual order entry and billing errors through the integrated POS system.",
        },
        {
          percentage: "60%",
          description: "Improved inventory tracking accuracy, reducing food waste and enabling better stock forecasting.",
        },
        {
          percentage: "3x",
          description: "Faster table turnover and order processing with real-time POS syncing across devices.",
        },
      ],
    }}
  />
);

export default Hills;
