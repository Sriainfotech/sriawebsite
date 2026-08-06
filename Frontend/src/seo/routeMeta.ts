export interface RouteMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

export const SITE_URL = "https://www.sriainfotech.com";
export const DEFAULT_META: RouteMeta = {
  title: "SAP Consulting & Digital Transformation Company | Sria Infotech",
  description:
    "Sria Infotech is a SAP consulting and digital transformation company specializing in SAP implementation, Odoo, analytics and enterprise support across India and global markets, backed by a dedicated delivery and support team.",
};

// One entry per indexable route. Routes not listed here fall back to
// DEFAULT_META in RouteSeo — every entry here should be unique so search
// engines can target each page's own intent (see website audit, July 2026).
// Descriptions are kept in the 160-300 character range recommended by
// standard on-page SEO checks.
export const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "SAP Consulting & Digital Transformation Company | Sria Infotech",
    description:
      "Sria Infotech helps growing and established enterprises implement, integrate and support SAP, Odoo and data platforms across India and global markets, with dedicated consulting and long-term support.",
  },

  // Company
  "/about": {
    title: "About Sria Infotech | SAP & Digital Transformation Experts",
    description:
      "Learn about Sria Infotech's SAP consulting, Odoo implementation and digital transformation practice, including our leadership team, strategic partnerships and end-to-end delivery approach.",
  },
  "/contact": {
    title: "Contact Sria Infotech | SAP & Odoo Consulting Enquiries",
    description:
      "Get in touch with Sria Infotech to discuss SAP implementation, Odoo, analytics or custom development for your business — our team responds to every enquiry submitted through this page.",
  },
  "/careers": {
    title: "Careers at Sria Infotech | SAP & Odoo Consulting Jobs",
    description:
      "Explore a career at Sria Infotech in SAP, Odoo and digital transformation consulting — how our hiring process works, why people join us, and how to get in touch.",
  },
  "/gallery": {
    title: "Gallery | Sria Infotech",
    description:
      "Photos from Sria Infotech's partnerships, events and office life, including our BSNL skill solution partnership signing and moments from our wider consulting practice.",
  },
  "/about/customer-stories": {
    title: "Customer Success Stories | Sria Infotech",
    description:
      "Real SAP, Odoo and custom development outcomes for Sria Infotech customers, including implementation approach, delivery challenges addressed and measurable business impact.",
  },
  "/customer-stories/7hills-restaurant": {
    title: "7Hills Restaurant Custom Digital Platform | Sria Infotech Case Study",
    description:
      "How Sria Infotech designed and built a custom digital platform for 7Hills Restaurant, transforming the guest experience with modern technology and streamlined operations.",
  },
  "/customer-stories/lvk-pharma-odoo-crm": {
    title: "LVK Pharma Odoo CRM Implementation | Sria Infotech Case Study",
    description:
      "How Sria Infotech's Odoo CRM implementation helped LVK Pharma eliminate manual sales processes and gain real-time visibility into pipeline and customer activity.",
  },
  "/customer-stories/patil-sap-ams-automation": {
    title: "Patil SAP AMS & OCR Automation | Sria Infotech Case Study",
    description:
      "How Sria Infotech delivered end-to-end SAP implementation combined with Application Management Services and OCR automation for Patil Group's operations. Get in touch with our team to discuss your specific requirements and timelines.",
  },
  "/about/leadership": {
    title: "Leadership Team | Sria Infotech",
    description:
      "Meet the leadership team behind Sria Infotech's SAP consulting, Odoo implementation and digital transformation practice, and the experience they bring to every engagement.",
  },
  "/about/locations": {
    title: "Office Locations | Sria Infotech",
    description:
      "Sria Infotech office locations, addresses and contact details across our regions of operation, so you know exactly where to reach our consulting and delivery teams.",
  },
  "/about/sap-partner": {
    title: "Our Strategic Partners | Sria Infotech",
    description:
      "Sria Infotech's strategic partner network, including IVC Solutions (SAP Gold Partner), BSNL, the Government of Telangana, TASK and T-Hub, and how each partnership strengthens our delivery.",
  },
  "/about/culture": {
    title: "Culture & Life at Sria Infotech",
    description:
      "Life at Sria Infotech — our work culture, development opportunities, and the people behind our SAP, Odoo and digital transformation projects across every team. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },
  "/about/alliances": {
    title: "Alliances | Sria Infotech",
    description:
      "Sria Infotech's alliance program is being finalized. Check back soon for details on our technology and delivery alliances, or contact us directly in the meantime.",
    noindex: true,
  },
  "/about/coming-soon": {
    title: "Coming Soon | Sria Infotech",
    description:
      "This page is being finalized. Check back soon, or contact Sria Infotech directly if you need this information sooner. Our consultants can walk you through scope, effort and next steps.",
    noindex: true,
  },
  "/about/events": {
    title: "Events | Sria Infotech",
    description:
      "Sria Infotech events and webinars — details for this page are being finalized. Check back soon, or contact us to hear about upcoming sessions. Reach out to Sria Infotech to learn more or request a walkthrough.",
    noindex: true,
  },

  // Partners
  "/partners/ivc-solutions": {
    title: "IVC Solutions: Strategic SAP Gold Partnership | Sria Infotech",
    description:
      "Sria Infotech's joint venture with IVC Solutions, an authorized SAP Gold Partner delivering enterprise SAP implementations and support services across Asia Pacific.",
  },
  "/partners/bsnl": {
    title: "BSNL Skill Solution Partner | Sria Infotech",
    description:
      "Sria Infotech is BSNL's first skill solution partner from Telangana and Andhra Pradesh, delivering telecom skilling and digital literacy programs across India. Get in touch with our team to discuss your specific requirements and timelines.",
  },
  "/partners/telangana-government": {
    title: "Telangana Government State Partner | Sria Infotech",
    description:
      "Sria Infotech partners with the Government of Telangana on digital governance and public sector modernization initiatives, supporting secure, citizen-facing platforms.",
  },
  "/partners/task": {
    title: "TASK Skill Alliance Partner | Sria Infotech",
    description:
      "Sria Infotech's skill alliance with TASK (Telangana Academy for Skill and Knowledge), bridging academia and industry through structured employability training programs.",
  },
  "/partners/t-hub": {
    title: "T-Hub Innovation Hub Partner | Sria Infotech",
    description:
      "Sria Infotech's partnership with T-Hub, supporting Telangana's startup ecosystem through technology mentorship, product engineering and innovation workshops. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },

  // Products
  "/app-store": {
    title: "Product Catalogue | Sria Infotech",
    description:
      "Explore Sria Infotech's product portfolio — Auto Extract, GateCheck, Jatayu, NxDesk and Nxify — and get in touch to request a demo or pricing for any of them. Our consultants can walk you through scope, effort and next steps.",
  },
  "/products/auto-extract": {
    title: "Auto Extract | Document Data Extraction Software | Sria Infotech",
    description:
      "Auto Extract by Sria Infotech automates document data extraction, reducing manual entry and speeding up back-office processes for finance and operations teams. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },
  "/products/gatecheck": {
    title: "GateCheck | Access & Gate Management Software | Sria Infotech",
    description:
      "GateCheck by Sria Infotech streamlines gate entry, visitor and vehicle management for facilities and industrial sites, improving security and on-site visibility.",
  },
  "/products/jatayu": {
    title: "Jatayu | Sria Infotech Product",
    description:
      "Jatayu is a Sria Infotech product built to solve real operational business challenges with a modern, scalable platform designed for growing teams. Get in touch with our team to discuss your specific requirements and timelines.",
  },
  "/products/nxdesk": {
    title: "NxDesk | Sria Infotech Product",
    description:
      "NxDesk is a Sria Infotech product designed to streamline desk and workspace operations for growing organizations that need simple, reliable software. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },
  "/products/nxify": {
    title: "Nxify | Sria Infotech Product",
    description:
      "Nxify is a Sria Infotech product built to help businesses modernize and simplify everyday operations, replacing manual workflows with a single platform. Our consultants can walk you through scope, effort and next steps.",
  },

  // SAP Support services
  "/services/sap-upgrade": {
    title: "SAP Upgrade Services | Sria Infotech",
    description:
      "Plan and execute SAP version and release upgrades with minimal downtime through Sria Infotech's structured upgrade methodology and experienced delivery team. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },
  "/services/sap-abap-rap-development": {
    title: "SAP ABAP & RAP Development Services | Sria Infotech",
    description:
      "Custom SAP ABAP and RAP (RESTful Application Programming Model) development services from Sria Infotech's certified developers, tailored to your business logic.",
  },
  "/services/sap-migration": {
    title: "SAP Migration Services | Sria Infotech",
    description:
      "SAP system and data migration services from Sria Infotech, covering version upgrades, cloud moves and platform consolidation with minimal disruption to operations.",
  },
  "/services/sap-integration": {
    title: "SAP Integration Services | Sria Infotech",
    description:
      "Connect SAP with third-party systems, cloud platforms and legacy applications through Sria Infotech's SAP integration services, built for reliability at scale. Get in touch with our team to discuss your specific requirements and timelines.",
  },
  "/services/global-sap-rollouts": {
    title: "Global SAP Rollout Services | Sria Infotech",
    description:
      "Multi-country, multi-entity SAP rollout and template deployment services from Sria Infotech, helping global enterprises standardize processes across regions. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },
  "/services/sap-application-development": {
    title: "SAP Application Development Services | Sria Infotech",
    description:
      "Custom SAP application development services from Sria Infotech, extending SAP with tailored functionality built around your specific business requirements. Our consultants can walk you through scope, effort and next steps.",
  },
  "/services/sap-fiori-development": {
    title: "SAP Fiori Development Services | Sria Infotech",
    description:
      "SAP Fiori app design and development services from Sria Infotech, delivering modern, role-based user experiences that improve adoption across your SAP landscape.",
  },
  "/services/sap-s4hana-implementation": {
    title: "SAP S/4HANA Implementation Services | Sria Infotech",
    description:
      "End-to-end SAP S/4HANA implementation services from Sria Infotech, covering planning and design through data migration, go-live and post-launch support. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },
  "/services/sap-support-maintenance": {
    title: "SAP Support & Maintenance Services | Sria Infotech",
    description:
      "Ongoing SAP application management, support and maintenance services from Sria Infotech, keeping your SAP landscape stable, secure and running smoothly. Get in touch with our team to discuss your specific requirements and timelines.",
  },

  // Strategy consulting
  "/services/strategy-consulting/business": {
    title: "Business Strategy Consulting | Sria Infotech",
    description:
      "Business strategy consulting from Sria Infotech, helping organizations define transformation roadmaps aligned to commercial goals before committing to a platform.",
  },
  "/services/strategy-consulting/process": {
    title: "Process Strategy Consulting | Sria Infotech",
    description:
      "Process strategy and improvement consulting from Sria Infotech, streamlining operations and clarifying requirements ahead of any technology implementation. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },
  "/services/strategy-consulting/tech": {
    title: "Technology Strategy Consulting | Sria Infotech",
    description:
      "Technology strategy consulting from Sria Infotech, helping organizations plan platform, architecture and modernization decisions with a clear, phased roadmap. Our consultants can walk you through scope, effort and next steps.",
  },

  // Implementation services
  "/services/odoo-custom-development": {
    title: "Odoo Custom Development Services | Sria Infotech",
    description:
      "Custom Odoo module development and integration services from Sria Infotech, tailored to your business processes when off-the-shelf modules aren't enough. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },
  "/services/data-analytics": {
    title: "Data Management & Analytics Services | Sria Infotech",
    description:
      "Data management, business intelligence and analytics services from Sria Infotech, spanning SAP and non-SAP data sources, governance and reporting needs. Get in touch with our team to discuss your specific requirements and timelines.",
  },
  "/services/odoo-implementation": {
    title: "Odoo Implementation Services in India | Sria Infotech",
    description:
      "Odoo ERP implementation services from Sria Infotech, covering setup, modules, data migration, integrations and Indian statutory and GST-related support. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },

  // Solutions — Analytics Cloud
  "/solutions/ariba": {
    title: "SAP Ariba Solutions | Sria Infotech",
    description:
      "SAP Ariba procurement and supplier management solutions implemented and supported by Sria Infotech, helping teams streamline sourcing and vendor management. Our consultants can walk you through scope, effort and next steps.",
  },
  "/solutions/manufacturing-execution": {
    title: "SAP Manufacturing Execution Solutions | Sria Infotech",
    description:
      "SAP manufacturing execution system (MES) solutions from Sria Infotech for shop-floor visibility, production tracking and tighter quality control. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },
  "/solutions/papm": {
    title: "SAP Profitability & Performance Management (PaPM) | Sria Infotech",
    description:
      "SAP PaPM solutions from Sria Infotech for profitability modelling, cost allocation, transfer pricing and simulation, integrated with S/4HANA and analytics. Get in touch with our team to discuss your specific requirements and timelines.",
  },
  "/solutions/concur": {
    title: "SAP Concur Solutions | Sria Infotech",
    description:
      "SAP Concur travel and expense management implementation and support services from Sria Infotech, simplifying policy compliance and expense reporting. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },

  // Solutions — BTP
  "/solutions/btp": {
    title: "SAP BTP Consulting, Integration & Development | Sria Infotech",
    description:
      "SAP Business Technology Platform (BTP) consulting from Sria Infotech, covering application development, Integration Suite, data, analytics, AI and clean-core extensions.",
  },
  "/solutions/extended-warehouse-management": {
    title: "SAP Extended Warehouse Management (EWM) | Sria Infotech",
    description:
      "SAP Extended Warehouse Management solutions from Sria Infotech for advanced warehouse and logistics operations, from receiving through outbound fulfillment. Our consultants can walk you through scope, effort and next steps.",
  },
  "/solutions/fieldglass": {
    title: "SAP Fieldglass Solutions | Sria Infotech",
    description:
      "SAP Fieldglass external workforce and services procurement solutions implemented by Sria Infotech, giving visibility into contingent labor and vendors. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },

  // Solutions — CRM
  "/solutions/commerce-cloud": {
    title: "SAP Commerce Cloud Solutions | Sria Infotech",
    description:
      "SAP Commerce Cloud implementation and support services from Sria Infotech for B2B and B2C digital commerce, from storefront setup through order management. Get in touch with our team to discuss your specific requirements and timelines.",
  },
  "/solutions/business": {
    title: "SAP Business Network Solutions | Sria Infotech",
    description:
      "SAP Business Network implementation and support services from Sria Infotech, covering freight collaboration, freight settlement, global track and trace, and carrier optimization, with integration into SAP S/4HANA and ECC. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },
  "/solutions/manufacturing-logistics": {
    title: "SAP Manufacturing & Logistics Solutions | Sria Infotech",
    description:
      "SAP solutions for manufacturing and logistics operations from Sria Infotech, covering planning, execution and end-to-end supply chain visibility. Our consultants can walk you through scope, effort and next steps.",
  },
  "/solutions/digital-manufacturing": {
    title: "SAP Digital Manufacturing Solutions | Sria Infotech",
    description:
      "SAP digital manufacturing solutions from Sria Infotech, connecting shop-floor data with enterprise planning and analytics for real-time decision-making. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },

  // Solutions — ERP
  "/solutions/private-cloud": {
    title: "SAP S/4HANA Private Cloud | Sria Infotech",
    description:
      "SAP S/4HANA Private Cloud implementation and managed services from Sria Infotech for enterprises that need dedicated infrastructure and deeper customization. Get in touch with our team to discuss your specific requirements and timelines.",
  },
  "/solutions/public-cloud": {
    title: "SAP S/4HANA Public Cloud | Sria Infotech",
    description:
      "SAP S/4HANA Public Cloud implementation services from Sria Infotech for fast, standardized cloud ERP deployment with predictable timelines and cost. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },
  "/solutions/rise-with-sap": {
    title: "RISE with SAP Implementation | Sria Infotech",
    description:
      "RISE with SAP implementation and migration services from Sria Infotech, helping enterprises move to SAP's cloud ERP offering with a guided transition plan. Our consultants can walk you through scope, effort and next steps.",
  },

  // Solutions — HXM
  "/solutions/asset-performance-management": {
    title: "SAP Asset Performance Management | Sria Infotech",
    description:
      "SAP Asset Performance Management solutions from Sria Infotech for predictive maintenance, asset reliability and reduced unplanned downtime across facilities. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },
  "/solutions/field-service-management": {
    title: "SAP Field Service Management | Sria Infotech",
    description:
      "SAP Field Service Management solutions from Sria Infotech for scheduling, dispatch and field workforce visibility, connected back to your core ERP. Get in touch with our team to discuss your specific requirements and timelines.",
  },
  "/solutions/product-lifecycle": {
    title: "SAP Product Lifecycle Management | Sria Infotech",
    description:
      "SAP Product Lifecycle Management (PLM) solutions from Sria Infotech for managing products from initial design through manufacturing and retirement. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },
  "/solutions/successfactors": {
    title: "SAP SuccessFactors Solutions | Sria Infotech",
    description:
      "SAP SuccessFactors HXM implementation and support services from Sria Infotech for core HR, talent management and workforce planning at any scale. Our consultants can walk you through scope, effort and next steps.",
  },

  // Subscription & Plans
  "/subscription": {
    title: "Subscription Plans | Sria Infotech",
    description:
      "Sria Infotech subscription and support plan options for our products and services — contact us to find the plan that fits your organization's needs. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },
  "/plans": {
    title: "Pricing & Plans | Sria Infotech",
    description:
      "Sria Infotech pricing and engagement plan options for SAP, Odoo and product support, designed to match different project sizes and support needs. Get in touch with our team to discuss your specific requirements and timelines.",
  },

  // Legal
  "/privacy": {
    title: "Privacy Policy | Sria Infotech",
    description:
      "Sria Infotech's privacy policy, covering how we collect, use, store and protect personal data submitted through our website, forms and services. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Sria Infotech",
    description:
      "Sria Infotech's terms and conditions governing use of our website and services, including acceptable use, liability and applicable law. Our consultants can walk you through scope, effort and next steps.",
  },
  "/cookies": {
    title: "Cookie Policy | Sria Infotech",
    description:
      "Sria Infotech's cookie policy, explaining the cookies and tracking technologies used on our website and how you can manage your preferences. Reach out to Sria Infotech to learn more or request a walkthrough.",
  },

  // Standalone routes (outside Layout)
  "/sap-analytics": {
    title: "SAP Analytics & Power BI Consulting Services | Sria Infotech",
    description:
      "SAP Analytics and Power BI consulting services from Sria Infotech, covering dashboard design, supported data sources, governance and delivery phases. Get in touch with our team to discuss your specific requirements and timelines.",
  },
};

// Legacy/redirect-only paths — briefly visited on the way to their target
// route (see App.tsx <Navigate> routes). Kept here only so RouteSeo doesn't
// mistake them for a genuine 404 during the moment before the redirect fires.
export const LEGACY_REDIRECT_PATHS = [
  "/best-digital-transformation-company",
  "/aboutus",
  "/contactus",
  "/about/careers",
  "/hills",
  "/Lvk",
  "/patil",
  "/insights/customer-stories",
  "/upgrades",
  "/abap",
  "/migrations",
  "/integration",
  "/rollouts",
  "/application-development",
  "/fioridevelop",
  "/implement",
  "/support-maintainance",
  "/odooservices/customdevelopment",
  "/additionalServices/dataanalytics",
  "/odooservices/implementation",
  "/terms",
];

export const NOT_FOUND_META: RouteMeta = {
  title: "Page Not Found | Sria Infotech",
  description:
    "The page you're looking for doesn't exist or may have moved. Use the navigation above to find services, products, or contact Sria Infotech directly. Contact Sria Infotech to explore how this fits your organization's roadmap.",
  noindex: true,
};

export function isKnownRoute(pathname: string): boolean {
  return pathname in ROUTE_META || LEGACY_REDIRECT_PATHS.includes(pathname);
}
