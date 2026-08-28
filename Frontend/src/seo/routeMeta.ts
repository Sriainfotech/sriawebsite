export interface RouteMeta {
  title: string;
  description: string;
  noindex?: boolean;
}

export const SITE_URL = "https://www.sriainfotech.com";
export const DEFAULT_META: RouteMeta = {
  title: "SAP Consulting & Digital Transformation Company | Sria Infotech",
  description:
    "Sria Infotech is a SAP consulting and digital transformation company specializing in SAP, Odoo, analytics and support across India and global markets.",
};

// Each hidden digital-business-card route exists at two slugs (see
// App.tsx) — both need their own ROUTE_META entry since it's keyed by
// exact pathname, so they share one object here to avoid the copy
// drifting between the two.
const SAI_KUMAR_CARD_META: RouteMeta = {
  title: "Sai Kumar Bonakurthi — Founder & Managing Director | Sria Infotech",
  description:
    "Transforming Ideas Into Digital Reality. Save Sai Kumar Bonakurthi's digital business card, connect on socials, and reach Sria Infotech instantly.",
  noindex: true,
};
const RAVI_KUMAR_CARD_META: RouteMeta = {
  title: "Ravikumar Rangari — Co Founder & Executive Chairman | Sria Infotech",
  description:
    "Empowering Businesses Through Technology. Save Ravikumar Rangari's digital business card, connect on socials, and reach Sria Infotech instantly.",
  noindex: true,
};

// One entry per indexable route. Routes not listed here fall back to
// DEFAULT_META in RouteSeo — every entry here should be unique so search
// engines can target each page's own intent (see website audit, July 2026).
// Descriptions are kept in the 150-160 character range so Google doesn't
// truncate them in search results (trimmed from an earlier 160-300 range
// per an Aug 2026 PageSpeed/on-page SEO audit).
export const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "SAP Consulting & Digital Transformation Company | Sria Infotech",
    description:
      "Sria Infotech helps growing enterprises implement, integrate and support SAP, Odoo and data platforms across India and global markets, with dedicated support.",
  },

  // Company
  "/about": {
    title: "About Sria Infotech | SAP & Digital Transformation Experts",
    description:
      "Learn about Sria Infotech's SAP consulting, Odoo implementation and digital transformation practice, our leadership team, partnerships and delivery approach.",
  },
  "/contact": {
    title: "Contact Sria Infotech | SAP & Odoo Consulting Enquiries",
    description:
      "Get in touch with Sria Infotech to discuss SAP implementation, Odoo, analytics or custom development for your business — our team responds to every enquiry.",
  },
  "/careers": {
    title: "Careers at Sria Infotech | SAP & Odoo Consulting Jobs",
    description:
      "Explore a career at Sria Infotech in SAP, Odoo and digital transformation consulting — how our hiring process works, why people join us, and how to reach out.",
  },
  // Hidden digital business cards — not linked from the navbar or sitemap,
  // reachable only via direct link/QR code/the Leadership page.
  "/sai-kumar": SAI_KUMAR_CARD_META,
  "/about/leadership/sai-kumar": SAI_KUMAR_CARD_META,
  "/ravi-kumar": RAVI_KUMAR_CARD_META,
  "/about/leadership/ravi-kumar": RAVI_KUMAR_CARD_META,
  "/gallery": {
    title: "Gallery | Sria Infotech",
    description:
      "Photos from Sria Infotech's partnerships, events and office life, including our BSNL skill solution partnership signing and our wider consulting practice.",
  },
  // /blog itself; individual /blog/:slug posts are handled separately in
  // RouteSeo (dynamic path, can't be a static key here) and override this
  // with their own title/excerpt once loaded — see BlogPost.tsx.
  "/blog": {
    title: "Blog | Sria Infotech",
    description:
      "Insights, updates and perspectives from the Sria Infotech team on SAP consulting, Odoo implementation and digital transformation.",
  },
  "/about/customer-stories": {
    title: "Customer Success Stories | Sria Infotech",
    description:
      "Real SAP, Odoo and custom development outcomes for Sria Infotech customers, including delivery approach, challenges addressed and measurable business impact.",
  },
  "/customer-stories/7hills-restaurant": {
    title: "7Hills Restaurant Custom Digital Platform | Sria Infotech Case Study",
    description:
      "How Sria Infotech designed and built a custom digital platform for 7Hills Restaurant, transforming the guest experience with modern technology and design.",
  },
  "/customer-stories/lvk-pharma-odoo-crm": {
    title: "LVK Pharma Odoo CRM Implementation | Sria Infotech Case Study",
    description:
      "How Sria Infotech's Odoo CRM implementation helped LVK Pharma eliminate manual sales processes and gain visibility into pipeline and customer activity.",
  },
  "/customer-stories/patil-sap-ams-automation": {
    title: "Patil SAP AMS & OCR Automation | Sria Infotech Case Study",
    description:
      "How Sria Infotech delivered end-to-end SAP implementation combined with Application Management Services and OCR automation for Patil Group's operations.",
  },
  "/about/leadership": {
    title: "Leadership Team | Sria Infotech",
    description:
      "Meet the leadership team behind Sria Infotech's SAP consulting, Odoo implementation and digital transformation practice, and the experience they bring.",
  },
  "/about/locations": {
    title: "Office Locations | Sria Infotech",
    description:
      "Sria Infotech office locations, addresses and contact details across our regions of operation, so you know exactly where to reach our consulting team.",
  },
  "/about/sap-partner": {
    title: "Our Strategic Partners | Sria Infotech",
    description:
      "Sria Infotech's strategic partner network, including IVC Solutions (SAP Gold Partner), BSNL, the Government of Telangana, TASK and T-Hub, across India.",
  },
  "/about/culture": {
    title: "Culture & Life at Sria Infotech",
    description:
      "Life at Sria Infotech — our work culture, development opportunities, and the people behind our SAP, Odoo and digital transformation projects across every team.",
  },
  "/about/alliances": {
    title: "Alliances | Sria Infotech",
    description:
      "Sria Infotech's alliance program is being finalized. Check back soon for full details on our technology and delivery alliances, or contact us directly.",
    noindex: true,
  },
  "/about/coming-soon": {
    title: "Coming Soon | Sria Infotech",
    description:
      "This page is being finalized. Check back soon, or contact Sria Infotech directly if you need this information sooner — our team responds quickly to enquiries.",
    noindex: true,
  },
  "/about/events": {
    title: "Events | Sria Infotech",
    description:
      "Sria Infotech events and webinars — details for this page are still being finalized. Check back soon, or contact us to hear about upcoming sessions soon.",
    noindex: true,
  },

  // Partners
  "/partners/ivc-solutions": {
    title: "IVC Solutions: Strategic SAP Gold Partnership | Sria Infotech",
    description:
      "Sria Infotech's joint venture with IVC Solutions, an authorized SAP Gold Partner delivering enterprise SAP implementations and support across Asia Pacific.",
  },
  "/partners/bsnl": {
    title: "BSNL Skill Solution Partner | Sria Infotech",
    description:
      "Sria Infotech is BSNL's first skill solution partner from Telangana and Andhra Pradesh, delivering telecom skilling and digital literacy programs across India.",
  },
  "/partners/telangana-government": {
    title: "Telangana Government State Partner | Sria Infotech",
    description:
      "Sria Infotech partners with the Government of Telangana on digital governance and public sector modernization, supporting secure, citizen-facing platforms.",
  },
  "/partners/task": {
    title: "TASK Skill Alliance Partner | Sria Infotech",
    description:
      "Sria Infotech's skill alliance with TASK (Telangana Academy for Skill and Knowledge), bridging academia and industry through employability training programs.",
  },
  "/partners/t-hub": {
    title: "T-Hub Innovation Hub Partner | Sria Infotech",
    description:
      "Sria Infotech's partnership with T-Hub, supporting Telangana's startup ecosystem through technology mentorship, product engineering and innovation workshops.",
  },

  // Products
  "/app-store": {
    title: "Product Catalogue | Sria Infotech",
    description:
      "Explore Sria Infotech's product portfolio — Auto Extract, GateCheck, Jatayu, NxDesk and Nxify — and get in touch to request a demo or pricing for any of them.",
  },
  "/products/auto-extract": {
    title: "Auto Extract | Document Data Extraction Software | Sria Infotech",
    description:
      "Auto Extract by Sria Infotech automates document data extraction, reducing manual entry and speeding up back-office processes for finance and operations teams.",
  },
  "/products/gatecheck": {
    title: "GateCheck | Access & Gate Management Software | Sria Infotech",
    description:
      "GateCheck by Sria Infotech streamlines gate entry, visitor and vehicle management for facilities and industrial sites, improving security and visibility.",
  },
  "/products/jatayu": {
    title: "Jatayu | Sria Infotech Product",
    description:
      "Jatayu is a Sria Infotech product built to solve real operational business challenges with a modern, scalable platform designed for growing teams today.",
  },
  "/products/nxdesk": {
    title: "NxDesk | Sria Infotech Product",
    description:
      "NxDesk is a Sria Infotech product designed to streamline desk and workspace operations for growing organizations that need simple, reliable software today.",
  },
  "/products/nxify": {
    title: "Nxify | Sria Infotech Product",
    description:
      "Nxify is a Sria Infotech product built to help businesses modernize and simplify everyday operations, replacing manual workflows with a single platform.",
  },

  // SAP Support services
  "/services/sap-upgrade": {
    title: "SAP Upgrade Services | Sria Infotech",
    description:
      "Plan and execute SAP version and release upgrades with minimal downtime through Sria Infotech's structured upgrade methodology and experienced delivery team.",
  },
  "/services/sap-abap-rap-development": {
    title: "SAP ABAP & RAP Development Services | Sria Infotech",
    description:
      "Custom SAP ABAP and RAP (RESTful Application Programming Model) development services from Sria Infotech's certified developers, tailored to your business logic.",
  },
  "/services/sap-migration": {
    title: "SAP Migration Services | Sria Infotech",
    description:
      "SAP system and data migration services from Sria Infotech, covering version upgrades, cloud moves and platform consolidation with minimal disruption to teams.",
  },
  "/services/sap-integration": {
    title: "SAP Integration Services | Sria Infotech",
    description:
      "Connect SAP with third-party systems, cloud platforms and legacy applications through Sria Infotech's SAP integration services, built for reliability at scale.",
  },
  "/services/global-sap-rollouts": {
    title: "Global SAP Rollout Services | Sria Infotech",
    description:
      "Multi-country, multi-entity SAP rollout and template deployment services from Sria Infotech, helping global enterprises standardize processes across regions.",
  },
  "/services/sap-application-development": {
    title: "SAP Application Development Services | Sria Infotech",
    description:
      "Custom SAP application development services from Sria Infotech, extending SAP with tailored functionality built around your specific business requirements.",
  },
  "/services/sap-fiori-development": {
    title: "SAP Fiori Development Services | Sria Infotech",
    description:
      "SAP Fiori app design and development services from Sria Infotech, delivering modern, role-based experiences that improve adoption across your SAP landscape.",
  },
  "/services/sap-s4hana-implementation": {
    title: "SAP S/4HANA Implementation Services | Sria Infotech",
    description:
      "End-to-end SAP S/4HANA implementation services from Sria Infotech, covering planning and design through data migration, go-live and post-launch support.",
  },
  "/services/sap-support-maintenance": {
    title: "SAP Support & Maintenance Services | Sria Infotech",
    description:
      "Ongoing SAP application management, support and maintenance services from Sria Infotech, keeping your SAP landscape stable, secure and running smoothly.",
  },

  // Strategy consulting
  "/services/strategy-consulting/business": {
    title: "Business Strategy Consulting | Sria Infotech",
    description:
      "Business strategy consulting from Sria Infotech, helping organizations define transformation roadmaps aligned to commercial goals before choosing a platform.",
  },
  "/services/strategy-consulting/process": {
    title: "Process Strategy Consulting | Sria Infotech",
    description:
      "Process strategy and improvement consulting from Sria Infotech, streamlining operations and clarifying requirements ahead of any technology implementation.",
  },
  "/services/strategy-consulting/tech": {
    title: "Technology Strategy Consulting | Sria Infotech",
    description:
      "Technology strategy consulting from Sria Infotech, helping organizations plan platform, architecture and modernization decisions with a clear, phased roadmap.",
  },

  // Implementation services
  "/services/odoo-custom-development": {
    title: "Odoo Custom Development Services | Sria Infotech",
    description:
      "Custom Odoo module development and integration services from Sria Infotech, tailored to your business processes when off-the-shelf modules aren't enough.",
  },
  "/services/data-analytics": {
    title: "Data Management & Analytics Services | Sria Infotech",
    description:
      "Data management, business intelligence and analytics services from Sria Infotech, spanning SAP and non-SAP data sources, governance and reporting needs.",
  },
  "/services/odoo-implementation": {
    title: "Odoo Implementation Services in India | Sria Infotech",
    description:
      "Odoo ERP implementation services from Sria Infotech, covering setup, modules, data migration, integrations and Indian statutory and GST-related support.",
  },

  // Solutions — Analytics Cloud
  "/solutions/ariba": {
    title: "SAP Ariba Solutions | Sria Infotech",
    description:
      "SAP Ariba procurement and supplier management solutions implemented and supported by Sria Infotech, helping teams streamline sourcing and vendor management.",
  },
  "/solutions/manufacturing-execution": {
    title: "SAP Manufacturing Execution Solutions | Sria Infotech",
    description:
      "SAP manufacturing execution system (MES) solutions from Sria Infotech for real-time shop-floor visibility, production tracking and tighter quality control.",
  },
  "/solutions/papm": {
    title: "SAP Profitability & Performance Management (PaPM) | Sria Infotech",
    description:
      "SAP PaPM solutions from Sria Infotech for profitability modelling, cost allocation, transfer pricing and simulation, integrated with S/4HANA and analytics.",
  },
  "/solutions/concur": {
    title: "SAP Concur Solutions | Sria Infotech",
    description:
      "SAP Concur travel and expense management implementation and support services from Sria Infotech, simplifying policy compliance and expense reporting processes.",
  },

  // Solutions — BTP
  "/solutions/btp": {
    title: "SAP BTP Consulting, Integration & Development | Sria Infotech",
    description:
      "SAP Business Technology Platform (BTP) consulting from Sria Infotech, covering application development, Integration Suite, data, analytics, AI and more.",
  },
  "/solutions/extended-warehouse-management": {
    title: "SAP Extended Warehouse Management (EWM) | Sria Infotech",
    description:
      "SAP Extended Warehouse Management solutions from Sria Infotech for advanced warehouse and logistics operations, from receiving through outbound fulfillment.",
  },
  "/solutions/fieldglass": {
    title: "SAP Fieldglass Solutions | Sria Infotech",
    description:
      "SAP Fieldglass external workforce and services procurement solutions implemented by Sria Infotech, giving visibility into contingent labor and vendors.",
  },

  // Solutions — CRM
  "/solutions/commerce-cloud": {
    title: "SAP Commerce Cloud Solutions | Sria Infotech",
    description:
      "SAP Commerce Cloud implementation and support services from Sria Infotech for B2B and B2C digital commerce, from storefront setup through order management.",
  },
  "/solutions/business": {
    title: "SAP Business Network Solutions | Sria Infotech",
    description:
      "SAP Business Network implementation and support services from Sria Infotech, covering freight collaboration, settlement, global track and trace, and more.",
  },
  "/solutions/manufacturing-logistics": {
    title: "SAP Manufacturing & Logistics Solutions | Sria Infotech",
    description:
      "SAP solutions for manufacturing and logistics operations from Sria Infotech, covering planning, execution and end-to-end supply chain visibility today.",
  },
  "/solutions/digital-manufacturing": {
    title: "SAP Digital Manufacturing Solutions | Sria Infotech",
    description:
      "SAP digital manufacturing solutions from Sria Infotech, connecting shop-floor data with enterprise planning and analytics for real-time decision-making.",
  },

  // Solutions — ERP
  "/solutions/private-cloud": {
    title: "SAP S/4HANA Private Cloud | Sria Infotech",
    description:
      "SAP S/4HANA Private Cloud implementation and managed services from Sria Infotech for enterprises that need dedicated infrastructure and deeper customization.",
  },
  "/solutions/public-cloud": {
    title: "SAP S/4HANA Public Cloud | Sria Infotech",
    description:
      "SAP S/4HANA Public Cloud implementation services from Sria Infotech for fast, standardized cloud ERP deployment with predictable timelines and lower costs.",
  },
  "/solutions/rise-with-sap": {
    title: "RISE with SAP Implementation | Sria Infotech",
    description:
      "RISE with SAP implementation and migration services from Sria Infotech, helping enterprises move to SAP's cloud ERP offering with a guided transition plan.",
  },

  // Solutions — HXM
  "/solutions/asset-performance-management": {
    title: "SAP Asset Performance Management | Sria Infotech",
    description:
      "SAP Asset Performance Management solutions from Sria Infotech for predictive maintenance, asset reliability and reduced unplanned downtime across facilities.",
  },
  "/solutions/field-service-management": {
    title: "SAP Field Service Management | Sria Infotech",
    description:
      "SAP Field Service Management solutions from Sria Infotech for scheduling, dispatch and field workforce visibility, connected back to your core ERP system.",
  },
  "/solutions/product-lifecycle": {
    title: "SAP Product Lifecycle Management | Sria Infotech",
    description:
      "SAP Product Lifecycle Management (PLM) solutions from Sria Infotech for managing products from initial design through manufacturing and retirement stages.",
  },
  "/solutions/successfactors": {
    title: "SAP SuccessFactors Solutions | Sria Infotech",
    description:
      "SAP SuccessFactors HXM implementation and support services from Sria Infotech for core HR, talent management and workforce planning at enterprise scale.",
  },

  // Subscription & Plans
  "/subscription": {
    title: "Subscription Plans | Sria Infotech",
    description:
      "Sria Infotech subscription and support plan options for our products and services — contact us to find the plan that best fits your organization's needs.",
  },
  "/plans": {
    title: "Pricing & Plans | Sria Infotech",
    description:
      "Sria Infotech pricing and engagement plan options for SAP, Odoo and product support, designed to match different project sizes and support needs closely.",
  },

  // Legal
  "/privacy": {
    title: "Privacy Policy | Sria Infotech",
    description:
      "Sria Infotech's privacy policy, covering how we collect, use, store and protect personal data submitted through our website, forms and online services.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Sria Infotech",
    description:
      "Sria Infotech's terms and conditions governing use of our website and services, including acceptable use, user responsibilities, liability and applicable law.",
  },
  "/cookies": {
    title: "Cookie Policy | Sria Infotech",
    description:
      "Sria Infotech's cookie policy, explaining the cookies and tracking technologies used on our website and how you can easily manage your privacy preferences.",
  },

  // Standalone routes (outside Layout)
  "/sap-analytics": {
    title: "SAP Analytics & Power BI Consulting Services | Sria Infotech",
    description:
      "SAP Analytics and Power BI consulting services from Sria Infotech, covering dashboard design, supported data sources, governance and delivery timelines.",
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
    "The page you're looking for doesn't exist or may have moved. Use the navigation above to find services, products, or contact Sria Infotech for direct help.",
  noindex: true,
};

// /blog/:slug is dynamic — can't be a static ROUTE_META key — so it isn't
// "known" by the exact-match check below. Was previously falling all the way
// through to NOT_FOUND_META (title "Page Not Found", noindex) for every real,
// published blog post. This generic-but-indexable placeholder is what shows
// briefly before BlogPost.tsx's own <Seo/> mounts with the real post's
// title/excerpt once it's fetched (see BlogPost.tsx) — never the final tags
// for a real visit, but not a false 404 either.
export const BLOG_POST_FALLBACK_META: RouteMeta = {
  title: "Blog | Sria Infotech",
  description:
    "Insights, updates and perspectives from the Sria Infotech team on SAP consulting, Odoo implementation and digital transformation.",
};

const BLOG_POST_PATH = /^\/blog\/[^/]+$/;
export function isBlogPostPath(pathname: string): boolean {
  return BLOG_POST_PATH.test(pathname);
}

export function isKnownRoute(pathname: string): boolean {
  return pathname in ROUTE_META || LEGACY_REDIRECT_PATHS.includes(pathname);
}
