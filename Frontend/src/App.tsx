import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingScreen from "./components/layout/LoadingScreen";
import RouteSeo from "./components/seo/RouteSeo";

// Eager-loaded (critical above-the-fold pages)
import Index from "./pages/Index";

// All other pages — loaded only when navigated to
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Gallery = React.lazy(() => import("./pages/Gallery"));

// Customer Stories
const Hills = React.lazy(() => import("./pages/CustomerStories/Hills"));
const Lvk = React.lazy(() => import("./pages/CustomerStories/Lvk"));
const Patil = React.lazy(() => import("./pages/CustomerStories/Patil"));

// About Sub-pages
const ComingSoon = React.lazy(() => import("./pages/About/ComingSoon"));
const Careers = React.lazy(() => import("./pages/About/Careers"));
const CustomerStoriesPage = React.lazy(() => import("./pages/About/CustomerStoriesPage"));
const LeaderShip = React.lazy(() => import("./pages/About/LeaderShip"));
const Location = React.lazy(() => import("./pages/About/Location"));
const Partners = React.lazy(() => import("./pages/About/Partners"));
const Culture = React.lazy(() => import("./pages/About/Culture"));

// Products
const AutoExtract = React.lazy(() => import("./pages/Products/AutoExtract"));
const GateCheck = React.lazy(() => import("./pages/Products/GateCheck"));
const Jatayu = React.lazy(() => import("./pages/Products/Jatayu"));
const NxDesk = React.lazy(() => import("./pages/Products/NxDesk"));
const Nxify = React.lazy(() => import("./pages/Products/Nxify"));

// Partners
const IVCSolutions = React.lazy(() => import("./pages/Partners/IVCSolutions"));
const BSNL = React.lazy(() => import("./pages/Partners/BSNL"));
const TelanganaGovernment = React.lazy(() => import("./pages/Partners/TelanganaGovernment"));
const TASK = React.lazy(() => import("./pages/Partners/TASK"));
const THub = React.lazy(() => import("./pages/Partners/THub"));

// Services — SAP Support
const Upgrade = React.lazy(() => import("./pages/Services/SAPSupport/Upgrade"));
const Abap = React.lazy(() => import("./pages/Services/SAPSupport/Abap"));
const Migration = React.lazy(() => import("./pages/Services/SAPSupport/Migration"));
const Integration = React.lazy(() => import("./pages/Services/SAPSupport/Integration"));
const SAPConsulting = React.lazy(() => import("./pages/Services/SAPSupport/Rollouts"));
const Application = React.lazy(() => import("./pages/Services/SAPSupport/Application"));
const SAPFiori = React.lazy(() => import("./pages/Services/SAPSupport/SAPFiori"));
const Implementation = React.lazy(() => import("./pages/Services/SAPSupport/Implementation"));
const Support = React.lazy(() => import("./pages/Services/SAPSupport/Support"));

// Services — Strategy Consulting
const BusinessConsulting = React.lazy(() => import("./pages/Services/StratagyConsulting/BusinessConsulting"));
const ProcessConsulting = React.lazy(() => import("./pages/Services/StratagyConsulting/ProcessConsulting"));
const TechConsulting = React.lazy(() => import("./pages/Services/StratagyConsulting/TechConsulting"));

// Services — Implementation
const CustomeDevelopment = React.lazy(() => import("./pages/Services/implementation/CustomeDevelopment"));
const DataAnalytics = React.lazy(() => import("./pages/Services/implementation/DataAnalytics"));
const OdooImplementation = React.lazy(() => import("./pages/Services/implementation/OdooImplementation"));

// Solutions — Analytics Cloud
const Ariba = React.lazy(() => import("./pages/Solutions/SAPANALITICSCLOUD/Ariba"));
const Manufacturing = React.lazy(() => import("./pages/Solutions/SAPANALITICSCLOUD/Manufacturing"));
const PaPM = React.lazy(() => import("./pages/Solutions/SAPANALITICSCLOUD/PaPM"));
const Concur = React.lazy(() => import("./pages/Solutions/SAPANALITICSCLOUD/Concur"));

// Solutions — BTP
const BTP = React.lazy(() => import("./pages/Solutions/SAPBTP/BTP"));
const Warehouse = React.lazy(() => import("./pages/Solutions/SAPBTP/Warehouse"));
const Fieldglass = React.lazy(() => import("./pages/Solutions/SAPBTP/Fieldglass"));

// Solutions — CRM
const CommerceCloud = React.lazy(() => import("./pages/Solutions/SAPCRM/CommerceCloud"));
const Business = React.lazy(() => import("./pages/Solutions/SAPCRM/Business"));
const Logistics = React.lazy(() => import("./pages/Solutions/SAPCRM/Logistics"));
const Digital = React.lazy(() => import("./pages/Solutions/SAPCRM/Digital"));

// Solutions — ERP
const PrivateCloud = React.lazy(() => import("./pages/Solutions/SAPERP/PrivateCloud"));
const PublicCloud = React.lazy(() => import("./pages/Solutions/SAPERP/PublicCloud"));
const Rise = React.lazy(() => import("./pages/Solutions/SAPERP/Rise"));

// Subscription & Plans
const SubscriptionPage = React.lazy(() => import("./pages/Subscription"));
const PlansPage = React.lazy(() => import("./pages/Plans"));

// Legal
const PrivacyPolicy = React.lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("./pages/legal/TermsOfService"));
const CookiePolicy = React.lazy(() => import("./pages/legal/CookiePolicy"));
const InvoiceTerms = React.lazy(() => import("./pages/legal/InvoiceTerms"));

// App Store
const AppStore = React.lazy(() => import("./pages/AppStore"));

// SAP Analytics proposal page (standalone — own nav/footer)
const SAPAnalytics = React.lazy(() => import("./pages/SAPAnalytics"));

// Solutions — HXM
const AssetPerformance = React.lazy(() => import("./pages/Solutions/SAPHXM/AssetPerformance"));
const FieldServiceMgmt = React.lazy(() => import("./pages/Solutions/SAPHXM/FieldServiceMgmt"));
const ProductLifeCycle = React.lazy(() => import("./pages/Solutions/SAPHXM/ProductLifeCycle"));
const SuccessFactors = React.lazy(() => import("./pages/Solutions/SAPHXM/SuccessFactors"));


class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 32, fontFamily: "monospace", background: "#fff1f0", border: "2px solid red", margin: 16, borderRadius: 8 }}>
          <h2 style={{ color: "red" }}>Runtime Error — please report this message:</h2>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{this.state.error?.message}</pre>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", color: "#555", fontSize: 12 }}>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          {/*
            RouteSeo lives outside Suspense on purpose: every lazy-loaded
            route (and every <Navigate> redirect, which immediately renders
            its lazy destination) suspends this boundary while its chunk
            downloads. If RouteSeo were inside it, it would unmount on every
            such transition, and react-helmet-async removes its tags on
            unmount — causing a brief (or, under load, not-so-brief) window
            with no title/canonical at all before they're re-added. Keeping
            RouteSeo outside means it only ever updates in place as
            useLocation()'s pathname changes, never unmounts.
          */}
          <RouteSeo />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Standalone — no navbar/footer */}
              <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
              <Route path="/sap-analytics" element={<SAPAnalytics />} />

              <Route element={<Layout />}>
                {/* Main Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/best-digital-transformation-company" element={<Navigate to="/" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/aboutus" element={<Navigate to="/about" replace />} />

                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contactus" element={<Navigate to="/contact" replace />} />

                {/* About Routes */}
                <Route path="/about/alliances" element={<ComingSoon />} />
                <Route path="/about/careers" element={<Navigate to="/careers" replace />} />
                <Route path="/about/coming-soon" element={<ComingSoon />} />
                <Route path="/about/customer-stories" element={<CustomerStoriesPage />} />
                <Route path="/customer-stories/7hills-restaurant" element={<Hills />} />
                <Route path="/customer-stories/lvk-pharma-odoo-crm" element={<Lvk />} />
                <Route path="/customer-stories/patil-sap-ams-automation" element={<Patil />} />
                {/* Legacy customer-story URLs */}
                <Route path="/hills" element={<Navigate to="/customer-stories/7hills-restaurant" replace />} />
                <Route path="/Lvk" element={<Navigate to="/customer-stories/lvk-pharma-odoo-crm" replace />} />
                <Route path="/patil" element={<Navigate to="/customer-stories/patil-sap-ams-automation" replace />} />
                <Route path="/about/leadership" element={<LeaderShip />} />
                <Route path="/about/locations" element={<Location />} />
                <Route path="/about/sap-partner" element={<Partners />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about/events" element={<ComingSoon />} />
                <Route path="/about/culture" element={<Culture />} />
                <Route path="/insights/customer-stories" element={<Navigate to="/about/customer-stories" replace />} />

                {/* App Store */}
                <Route path="/app-store" element={<AppStore />} />

                {/* Products Routes */}
                <Route path="/products/auto-extract" element={<AutoExtract />} />
                <Route path="/products/gatecheck" element={<GateCheck />} />
                <Route path="/products/jatayu" element={<Jatayu />} />
                <Route path="/products/nxdesk" element={<NxDesk />} />
                <Route path="/products/nxify" element={<Nxify />} />

                {/* Partners Routes */}
                <Route path="/partners/ivc-solutions" element={<IVCSolutions />} />
                <Route path="/partners/bsnl" element={<BSNL />} />
                <Route path="/partners/telangana-government" element={<TelanganaGovernment />} />
                <Route path="/partners/task" element={<TASK />} />
                <Route path="/partners/t-hub" element={<THub />} />

                {/* Services Routes - SAP Support (clean URLs) */}
                <Route path="/services/sap-upgrade" element={<Upgrade />} />
                <Route path="/services/sap-abap-rap-development" element={<Abap />} />
                <Route path="/services/sap-migration" element={<Migration />} />
                <Route path="/services/sap-integration" element={<Integration />} />
                <Route path="/services/global-sap-rollouts" element={<SAPConsulting />} />
                <Route path="/services/sap-application-development" element={<Application />} />
                <Route path="/services/sap-fiori-development" element={<SAPFiori />} />
                <Route path="/services/sap-s4hana-implementation" element={<Implementation />} />
                <Route path="/services/sap-support-maintenance" element={<Support />} />
                {/* Legacy SAP Support URLs */}
                <Route path="/upgrades" element={<Navigate to="/services/sap-upgrade" replace />} />
                <Route path="/abap" element={<Navigate to="/services/sap-abap-rap-development" replace />} />
                <Route path="/migrations" element={<Navigate to="/services/sap-migration" replace />} />
                <Route path="/integration" element={<Navigate to="/services/sap-integration" replace />} />
                <Route path="/rollouts" element={<Navigate to="/services/global-sap-rollouts" replace />} />
                <Route path="/application-development" element={<Navigate to="/services/sap-application-development" replace />} />
                <Route path="/fioridevelop" element={<Navigate to="/services/sap-fiori-development" replace />} />
                <Route path="/implement" element={<Navigate to="/services/sap-s4hana-implementation" replace />} />
                <Route path="/support-maintainance" element={<Navigate to="/services/sap-support-maintenance" replace />} />

                {/* Services Routes - Strategy Consulting */}
                <Route path="/services/strategy-consulting/business" element={<BusinessConsulting />} />
                <Route path="/services/strategy-consulting/process" element={<ProcessConsulting />} />
                <Route path="/services/strategy-consulting/tech" element={<TechConsulting />} />

                {/* Services Routes - Implementation (clean URLs) */}
                <Route path="/services/odoo-custom-development" element={<CustomeDevelopment />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/odoo-implementation" element={<OdooImplementation />} />
                {/* Legacy Odoo/analytics URLs */}
                <Route path="/odooservices/customdevelopment" element={<Navigate to="/services/odoo-custom-development" replace />} />
                <Route path="/additionalServices/dataanalytics" element={<Navigate to="/services/data-analytics" replace />} />
                <Route path="/odooservices/implementation" element={<Navigate to="/services/odoo-implementation" replace />} />

                {/* Solutions Routes - Analytics Cloud */}
                <Route path="/solutions/ariba" element={<Ariba />} />
                <Route path="/solutions/manufacturing-execution" element={<Manufacturing />} />
                <Route path="/solutions/papm" element={<PaPM />} />
                <Route path="/solutions/concur" element={<Concur />} />

                {/* Solutions Routes - BTP */}
                <Route path="/solutions/btp" element={<BTP />} />
                <Route path="/solutions/extended-warehouse-management" element={<Warehouse />} />
                <Route path="/solutions/fieldglass" element={<Fieldglass />} />

                {/* Solutions Routes - CRM */}
                <Route path="/solutions/commerce-cloud" element={<CommerceCloud />} />
                <Route path="/solutions/business" element={<Business />} />
                <Route path="/solutions/manufacturing-logistics" element={<Logistics />} />
                <Route path="/solutions/digital-manufacturing" element={<Digital />} />

                {/* Solutions Routes - ERP */}
                <Route path="/solutions/private-cloud" element={<PrivateCloud />} />
                <Route path="/solutions/public-cloud" element={<PublicCloud />} />
                <Route path="/solutions/rise-with-sap" element={<Rise />} />

                {/* Solutions Routes - HXM */}
                <Route path="/solutions/asset-performance-management" element={<AssetPerformance />} />
                <Route path="/solutions/field-service-management" element={<FieldServiceMgmt />} />
                <Route path="/solutions/product-lifecycle" element={<ProductLifeCycle />} />
                <Route path="/solutions/successfactors" element={<SuccessFactors />} />

                {/* Subscription & Plans */}
                <Route path="/subscription" element={<SubscriptionPage />} />
                <Route path="/plans" element={<PlansPage />} />

                {/* Legal */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsOfService />} />
                <Route path="/cookies" element={<CookiePolicy />} />

                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
