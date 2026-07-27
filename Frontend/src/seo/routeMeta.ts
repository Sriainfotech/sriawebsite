export interface RouteMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

export const SITE_URL = "https://www.sriainfotech.com";
export const DEFAULT_META: RouteMeta = {
  title: "SAP Consulting & Digital Transformation Company | Sria Infotech",
  description:
    "Sria Infotech is a SAP consulting and digital transformation company specializing in SAP implementation, Odoo, analytics and enterprise support across India and global markets.",
};

// One entry per indexable route. Routes not listed here fall back to
// DEFAULT_META in RouteSeo — every entry here should be unique so search
// engines can target each page's own intent (see website audit, July 2026).
export const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "SAP Consulting & Digital Transformation Company | Sria Infotech",
    description:
      "Sria Infotech helps growing and established enterprises implement, integrate and support SAP, Odoo and data platforms across India and global markets.",
  },

  // Company
  "/about": {
    title: "About Sria Infotech | SAP & Digital Transformation Experts",
    description:
      "Learn about Sria Infotech's SAP consulting, Odoo implementation and digital transformation practice, our leadership, partnerships and delivery approach.",
  },
  "/contact": {
    title: "Contact Sria Infotech | SAP & Odoo Consulting Enquiries",
    description:
      "Get in touch with Sria Infotech to discuss SAP implementation, Odoo, analytics or custom development for your business.",
  },
  "/careers": {
    title: "Careers at Sria Infotech | SAP & Odoo Consulting Jobs",
    description:
      "Careers at Sria Infotech. Openings for this page are being finalized — check back soon or contact us to register your interest.",
    noindex: true,
  },
  "/gallery": {
    title: "Gallery | Sria Infotech",
    description:
      "Photos from Sria Infotech's partnerships, events and office life, including our BSNL skill solution partnership signing.",
  },
  "/about/customer-stories": {
    title: "Customer Success Stories | Sria Infotech",
    description:
      "Real SAP, Odoo and custom development outcomes for Sria Infotech customers, including implementation results and measurable business impact.",
  },
  "/customer-stories/7hills-restaurant": {
    title: "7Hills Restaurant Custom Digital Platform | Sria Infotech Case Study",
    description:
      "How Sria Infotech built a custom digital platform for 7Hills Restaurant, transforming the guest experience with modern technology.",
  },
  "/customer-stories/lvk-pharma-odoo-crm": {
    title: "LVK Pharma Odoo CRM Implementation | Sria Infotech Case Study",
    description:
      "How Sria Infotech's Odoo CRM implementation helped LVK Pharma eliminate manual processes and gain real-time sales visibility.",
  },
  "/customer-stories/patil-sap-ams-automation": {
    title: "Patil SAP AMS & OCR Automation | Sria Infotech Case Study",
    description:
      "How Sria Infotech delivered end-to-end SAP implementation with Application Management Services and OCR automation for Patil Group.",
  },
  "/about/leadership": {
    title: "Leadership Team | Sria Infotech",
    description:
      "Meet the leadership team behind Sria Infotech's SAP consulting, Odoo implementation and digital transformation practice.",
  },
  "/about/locations": {
    title: "Office Locations | Sria Infotech",
    description:
      "Sria Infotech office locations, addresses and contact details across our regions of operation.",
  },
  "/about/sap-partner": {
    title: "Our Strategic Partners | Sria Infotech",
    description:
      "Sria Infotech's strategic partner network, including IVC Solutions (SAP Gold Partner), BSNL, the Government of Telangana, TASK and T-Hub.",
  },
  "/about/culture": {
    title: "Culture & Life at Sria Infotech",
    description:
      "Life at Sria Infotech — our work culture, development opportunities, and the people behind our SAP and digital transformation projects.",
  },
  "/about/alliances": {
    title: "Alliances | Sria Infotech",
    description: "Sria Infotech's alliance program — details coming soon.",
    noindex: true,
  },
  "/about/coming-soon": {
    title: "Coming Soon | Sria Infotech",
    description: "This page is being finalized. Check back soon.",
    noindex: true,
  },
  "/about/events": {
    title: "Events | Sria Infotech",
    description: "Sria Infotech events and webinars — details coming soon.",
    noindex: true,
  },

  // Partners
  "/partners/ivc-solutions": {
    title: "IVC Solutions: Strategic SAP Gold Partnership | Sria Infotech",
    description:
      "Sria Infotech's joint venture with IVC Solutions, an SAP Gold Partner delivering enterprise solutions across Asia Pacific.",
  },
  "/partners/bsnl": {
    title: "BSNL Skill Solution Partner | Sria Infotech",
    description:
      "Sria Infotech is BSNL's first skill solution partner from Telangana and Andhra Pradesh, delivering telecom skilling programs across India.",
  },
  "/partners/telangana-government": {
    title: "Telangana Government State Partner | Sria Infotech",
    description:
      "Sria Infotech partners with the Government of Telangana on digital governance and public sector modernization initiatives.",
  },
  "/partners/task": {
    title: "TASK Skill Alliance Partner | Sria Infotech",
    description:
      "Sria Infotech's skill alliance with TASK (Telangana Academy for Skill and Knowledge), bridging academia and industry through employability training.",
  },
  "/partners/t-hub": {
    title: "T-Hub Innovation Hub Partner | Sria Infotech",
    description:
      "Sria Infotech's partnership with T-Hub, supporting Telangana startups through technology mentorship and product engineering.",
  },

  // Products
  "/app-store": {
    title: "Product Catalogue | Sria Infotech",
    description:
      "Explore Sria Infotech's product portfolio — Auto Extract, GateCheck, Jatayu, NxDesk and Nxify.",
  },
  "/products/auto-extract": {
    title: "Auto Extract | Document Data Extraction Software | Sria Infotech",
    description:
      "Auto Extract by Sria Infotech automates document data extraction, reducing manual entry and speeding up back-office processes.",
  },
  "/products/gatecheck": {
    title: "GateCheck | Access & Gate Management Software | Sria Infotech",
    description:
      "GateCheck by Sria Infotech streamlines gate entry, visitor and vehicle management for facilities and industrial sites.",
  },
  "/products/jatayu": {
    title: "Jatayu | Sria Infotech Product",
    description:
      "Jatayu is a Sria Infotech product built to solve operational business challenges with a modern, scalable platform.",
  },
  "/products/nxdesk": {
    title: "NxDesk | Sria Infotech Product",
    description:
      "NxDesk is a Sria Infotech product designed to streamline desk and workspace operations for growing organizations.",
  },
  "/products/nxify": {
    title: "Nxify | Sria Infotech Product",
    description:
      "Nxify is a Sria Infotech product built to help businesses modernize and simplify everyday operations.",
  },

  // SAP Support services
  "/services/sap-upgrade": {
    title: "SAP Upgrade Services | Sria Infotech",
    description:
      "Plan and execute SAP version and release upgrades with minimal downtime through Sria Infotech's structured upgrade methodology.",
  },
  "/services/sap-abap-rap-development": {
    title: "SAP ABAP & RAP Development Services | Sria Infotech",
    description:
      "Custom SAP ABAP and RAP (RESTful Application Programming Model) development services from Sria Infotech's certified developers.",
  },
  "/services/sap-migration": {
    title: "SAP Migration Services | Sria Infotech",
    description:
      "SAP system and data migration services from Sria Infotech, covering version upgrades, cloud moves and platform consolidation.",
  },
  "/services/sap-integration": {
    title: "SAP Integration Services | Sria Infotech",
    description:
      "Connect SAP with third-party systems, cloud platforms and legacy applications through Sria Infotech's SAP integration services.",
  },
  "/services/global-sap-rollouts": {
    title: "Global SAP Rollout Services | Sria Infotech",
    description:
      "Multi-country, multi-entity SAP rollout and template deployment services from Sria Infotech for global enterprises.",
  },
  "/services/sap-application-development": {
    title: "SAP Application Development Services | Sria Infotech",
    description:
      "Custom SAP application development services from Sria Infotech, extending SAP with tailored functionality for your business.",
  },
  "/services/sap-fiori-development": {
    title: "SAP Fiori Development Services | Sria Infotech",
    description:
      "SAP Fiori app design and development services from Sria Infotech, delivering modern, role-based user experiences on SAP.",
  },
  "/services/sap-s4hana-implementation": {
    title: "SAP S/4HANA Implementation Services | Sria Infotech",
    description:
      "End-to-end SAP S/4HANA implementation services from Sria Infotech, from planning and design through go-live and support.",
  },
  "/services/sap-support-maintenance": {
    title: "SAP Support & Maintenance Services | Sria Infotech",
    description:
      "Ongoing SAP application management, support and maintenance services from Sria Infotech to keep your SAP landscape running smoothly.",
  },

  // Strategy consulting
  "/services/strategy-consulting/business": {
    title: "Business Strategy Consulting | Sria Infotech",
    description:
      "Business strategy consulting from Sria Infotech, helping organizations define transformation roadmaps aligned to commercial goals.",
  },
  "/services/strategy-consulting/process": {
    title: "Process Strategy Consulting | Sria Infotech",
    description:
      "Process strategy and improvement consulting from Sria Infotech, streamlining operations ahead of technology implementation.",
  },
  "/services/strategy-consulting/tech": {
    title: "Technology Strategy Consulting | Sria Infotech",
    description:
      "Technology strategy consulting from Sria Infotech, helping organizations plan platform, architecture and modernization decisions.",
  },

  // Implementation services
  "/services/odoo-custom-development": {
    title: "Odoo Custom Development Services | Sria Infotech",
    description:
      "Custom Odoo module development and integration services from Sria Infotech, tailored to your business processes.",
  },
  "/services/data-analytics": {
    title: "Data Management & Analytics Services | Sria Infotech",
    description:
      "Data management, business intelligence and analytics services from Sria Infotech, across SAP and non-SAP data sources.",
  },
  "/services/odoo-implementation": {
    title: "Odoo Implementation Services in India | Sria Infotech",
    description:
      "Odoo ERP implementation services from Sria Infotech, covering setup, modules, migration and Indian statutory/GST support.",
  },

  // Solutions — Analytics Cloud
  "/solutions/ariba": {
    title: "SAP Ariba Solutions | Sria Infotech",
    description:
      "SAP Ariba procurement and supplier management solutions implemented and supported by Sria Infotech.",
  },
  "/solutions/manufacturing-execution": {
    title: "SAP Manufacturing Execution Solutions | Sria Infotech",
    description:
      "SAP manufacturing execution system (MES) solutions from Sria Infotech for shop-floor visibility and control.",
  },
  "/solutions/papm": {
    title: "SAP Profitability & Performance Management (PaPM) | Sria Infotech",
    description:
      "SAP PaPM solutions from Sria Infotech for profitability modelling, cost allocation, transfer pricing and simulation.",
  },
  "/solutions/concur": {
    title: "SAP Concur Solutions | Sria Infotech",
    description:
      "SAP Concur travel and expense management implementation and support services from Sria Infotech.",
  },

  // Solutions — BTP
  "/solutions/btp": {
    title: "SAP BTP Consulting, Integration & Development | Sria Infotech",
    description:
      "SAP Business Technology Platform (BTP) consulting from Sria Infotech, covering application development, integration, data, analytics and AI.",
  },
  "/solutions/extended-warehouse-management": {
    title: "SAP Extended Warehouse Management (EWM) | Sria Infotech",
    description:
      "SAP Extended Warehouse Management solutions from Sria Infotech for advanced warehouse and logistics operations.",
  },
  "/solutions/fieldglass": {
    title: "SAP Fieldglass Solutions | Sria Infotech",
    description:
      "SAP Fieldglass external workforce and services procurement solutions implemented by Sria Infotech.",
  },

  // Solutions — CRM
  "/solutions/commerce-cloud": {
    title: "SAP Commerce Cloud Solutions | Sria Infotech",
    description:
      "SAP Commerce Cloud implementation and support services from Sria Infotech for B2B and B2C digital commerce.",
  },
  "/solutions/business": {
    title: "SAP Business One Solutions | Sria Infotech",
    description:
      "SAP Business One implementation and support services from Sria Infotech for small and mid-sized enterprises.",
  },
  "/solutions/manufacturing-logistics": {
    title: "SAP Manufacturing & Logistics Solutions | Sria Infotech",
    description:
      "SAP solutions for manufacturing and logistics operations from Sria Infotech, covering planning, execution and visibility.",
  },
  "/solutions/digital-manufacturing": {
    title: "SAP Digital Manufacturing Solutions | Sria Infotech",
    description:
      "SAP digital manufacturing solutions from Sria Infotech, connecting shop-floor data with enterprise planning and analytics.",
  },

  // Solutions — ERP
  "/solutions/private-cloud": {
    title: "SAP S/4HANA Private Cloud | Sria Infotech",
    description:
      "SAP S/4HANA Private Cloud implementation and managed services from Sria Infotech for enterprises needing dedicated infrastructure.",
  },
  "/solutions/public-cloud": {
    title: "SAP S/4HANA Public Cloud | Sria Infotech",
    description:
      "SAP S/4HANA Public Cloud implementation services from Sria Infotech for fast, standardized cloud ERP deployment.",
  },
  "/solutions/rise-with-sap": {
    title: "RISE with SAP Implementation | Sria Infotech",
    description:
      "RISE with SAP implementation and migration services from Sria Infotech, helping enterprises move to SAP's cloud ERP offering.",
  },

  // Solutions — HXM
  "/solutions/asset-performance-management": {
    title: "SAP Asset Performance Management | Sria Infotech",
    description:
      "SAP Asset Performance Management solutions from Sria Infotech for predictive maintenance and asset reliability.",
  },
  "/solutions/field-service-management": {
    title: "SAP Field Service Management | Sria Infotech",
    description:
      "SAP Field Service Management solutions from Sria Infotech for scheduling, dispatch and field workforce visibility.",
  },
  "/solutions/product-lifecycle": {
    title: "SAP Product Lifecycle Management | Sria Infotech",
    description:
      "SAP Product Lifecycle Management (PLM) solutions from Sria Infotech for managing products from design through retirement.",
  },
  "/solutions/successfactors": {
    title: "SAP SuccessFactors Solutions | Sria Infotech",
    description:
      "SAP SuccessFactors HXM implementation and support services from Sria Infotech for core HR, talent and workforce management.",
  },

  // Subscription & Plans
  "/subscription": {
    title: "Subscription Plans | Sria Infotech",
    description: "Sria Infotech subscription and support plan options.",
  },
  "/plans": {
    title: "Pricing & Plans | Sria Infotech",
    description: "Sria Infotech pricing and engagement plan options for SAP, Odoo and product support.",
  },

  // Legal
  "/privacy": {
    title: "Privacy Policy | Sria Infotech",
    description: "Sria Infotech's privacy policy, covering how we collect, use and protect personal data.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Sria Infotech",
    description: "Sria Infotech's terms and conditions governing use of our website and services.",
  },
  "/cookies": {
    title: "Cookie Policy | Sria Infotech",
    description: "Sria Infotech's cookie policy, explaining the cookies and tracking technologies used on our website.",
  },

  // Standalone routes (outside Layout)
  "/sap-analytics": {
    title: "SAP Analytics & Power BI Consulting Services | Sria Infotech",
    description:
      "SAP Analytics and Power BI consulting services from Sria Infotech, covering dashboards, data sources, governance and delivery phases.",
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
  description: "The page you're looking for doesn't exist or may have moved.",
  noindex: true,
};

export function isKnownRoute(pathname: string): boolean {
  return pathname in ROUTE_META || LEGACY_REDIRECT_PATHS.includes(pathname);
}
