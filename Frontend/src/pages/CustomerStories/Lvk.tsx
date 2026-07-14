import CustomerStoryLayout from "@/components/layout/CustomerStoryLayout";

const Lvk = () => (
  <CustomerStoryLayout
    hero={{
      image: "https://ik.imagekit.io/hps6th7vy/sria/customerStories/pharma.jpg?tr=f-auto,q-auto,w-2000",
      category: "Pharmaceuticals",
      title: "LVK Pharma Goes Digital with Odoo CRM, Eliminates Manual Processes",
      tag: "CRM Implementation · Odoo",
      datePublished: "August 5, 2025",
    }}
    images={{
      overview:  "https://images.unsplash.com/photo-1576671081837-49000212a2ad?w=900&q=80",
      challenge: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80",
      impact:    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1400&q=80",
    }}
    overview={{
      text: "LVK Pharma, a growing pharmaceutical company based in Uppal, Hyderabad, relied entirely on paper-based operations. As customer engagement and data management became more complex, they needed a reliable CRM system to bring structure and speed to their workflows.",
      industry: "Pharmaceuticals",
      region: "Uppal, Hyderabad",
      companySize: "100+ employees",
    }}
    challenges={{
      title: "Business Challenges",
      items: [
        "Customer details and follow-ups were tracked on paper, leading to lost or missed opportunities.",
        "No visibility into the sales pipeline or team performance.",
        "Data duplication and inconsistent communication across departments.",
        "Lack of structured reporting made business planning difficult.",
        "Manual processes slowed down lead nurturing and delayed responses.",
      ],
    }}
    solutions={{
      title: "Innovative Solutions",
      introText: "We worked closely with LVK Pharma to implement Odoo CRM and modernize their sales and customer engagement processes.",
      items: [
        {
          label: "We Analyzed",
          description: "Current workflows and mapped pain points in their paper-based processes to identify the right digital solutions.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
        },
        {
          label: "We Implemented",
          description: "Odoo CRM with modules tailored for pharmaceutical sales, including lead tracking, contact management, and activity scheduling.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80",
        },
        {
          label: "We Trained",
          description: "The internal sales and support teams on CRM usage, ensuring quick adoption and a smooth transition from paper to digital.",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
        },
        {
          label: "We Automated",
          description: "Email templates, reminders, and reporting dashboards to eliminate repetitive tasks and bring real-time visibility across the team.",
          image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
        },
      ],
    }}
    businessImpact={{
      title: "Business Impact",
      items: [
        {
          title: "Digitized Sales Process",
          description: "From initial inquiry to final deal, every stage is now tracked within Odoo CRM, improving consistency and accountability.",
        },
        {
          title: "Centralized Customer Data",
          description: "All customer interactions are now stored in one place, accessible by all departments instantly.",
        },
        {
          title: "Increased Productivity",
          description: "Sales reps now focus more on clients instead of administrative tasks, boosting output across the team.",
        },
        {
          title: "Better Forecasting",
          description: "Automated reports allow leadership to make quicker and more informed business decisions.",
        },
        {
          title: "Smooth Transition",
          description: "The team adapted quickly thanks to intuitive UI, step-by-step training, and ongoing support from Sria.",
        },
        {
          title: "Paperless Operations",
          description: "LVK Pharma successfully eliminated its dependency on paper-based systems, going fully digital.",
        },
      ],
    }}
    impactStats={{
      title: "Impact That Matters",
      items: [
        {
          percentage: "90%",
          description: "Reduction in paperwork and manual recordkeeping after CRM implementation.",
        },
        {
          percentage: "60%",
          description: "Improved lead conversion rate through automated follow-ups and sales pipeline tracking.",
        },
        {
          percentage: "3x",
          description: "Faster customer response times with centralized data and communication history.",
        },
      ],
    }}
  />
);

export default Lvk;
