import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Main Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// About Sub-pages
import ComingSoon from "./pages/About/ComingSoon";
import CustomerStoriesPage from "./pages/About/CustomerStoriesPage";
import LeaderShip from "./pages/About/LeaderShip";
import Location from "./pages/About/Location";
import Partners from "./pages/About/Partners";

// Products Sub-pages
import AutoExtract from "./pages/Products/AutoExtract";
import GateCheck from "./pages/Products/GateCheck";
import Jatayu from "./pages/Products/Jatayu";
import NxDesk from "./pages/Products/NxDesk";
import Nxify from "./pages/Products/Nxify";

// Partners Sub-pages
import IVCSolutions from "./pages/Partners/IVCSolutions";

// Services Sub-pages - SAP Support
import Upgrade from "./pages/Services/SAPSupport/Upgrade";
import Abap from "./pages/Services/SAPSupport/Abap";
import Migration from "./pages/Services/SAPSupport/Migration";
import Integration from "./pages/Services/SAPSupport/Integration";
import SAPConsulting from "./pages/Services/SAPSupport/Rollouts";
import Application from "./pages/Services/SAPSupport/Application";
import SAPFiori from "./pages/Services/SAPSupport/SAPFiori";
import Implementation from "./pages/Services/SAPSupport/Implementation";
import Support from "./pages/Services/SAPSupport/Support";

// Services Sub-pages - Strategy Consulting
import BusinessConsulting from "./pages/Services/StratagyConsulting/BusinessConsulting";
import ProcessConsulting from "./pages/Services/StratagyConsulting/ProcessConsulting";
import TechConsulting from "./pages/Services/StratagyConsulting/TechConsulting";

// Services Sub-pages - Implementation
import CustomeDevelopment from "./pages/Services/implementation/CustomeDevelopment";
import DataAnalytics from "./pages/Services/implementation/DataAnalytics";
import OdooImplementation from "./pages/Services/implementation/OdooImplementation";

// Solutions Sub-pages - Analytics Cloud
import Ariba from "./pages/Solutions/SAPANALITICSCLOUD/Ariba";
import Manufacturing from "./pages/Solutions/SAPANALITICSCLOUD/Manufacturing";
import PaPM from "./pages/Solutions/SAPANALITICSCLOUD/PaPM";
import Concur from "./pages/Solutions/SAPANALITICSCLOUD/Concur";

// Solutions Sub-pages - BTP
import BTP from "./pages/Solutions/SAPBTP/BTP";
import Warehouse from "./pages/Solutions/SAPBTP/Warehouse";
import Fieldglass from "./pages/Solutions/SAPBTP/Fieldglass";

// Solutions Sub-pages - CRM
import CommerceCloud from "./pages/Solutions/SAPCRM/CommerceCloud";
import Business from "./pages/Solutions/SAPCRM/Business";
import Logistics from "./pages/Solutions/SAPCRM/Logistics";
import Digital from "./pages/Solutions/SAPCRM/Digital";

// Solutions Sub-pages - ERP
import PrivateCloud from "./pages/Solutions/SAPERP/PrivateCloud";
import PublicCloud from "./pages/Solutions/SAPERP/PublicCloud";
import Rise from "./pages/Solutions/SAPERP/Rise";

// Solutions Sub-pages - HXM
import AssetPerformance from "./pages/Solutions/SAPHXM/AssetPerformance";
import FieldServiceMgmt from "./pages/Solutions/SAPHXM/FieldServiceMgmt";
import ProductLifeCycle from "./pages/Solutions/SAPHXM/ProductLifeCycle";
import SuccessFactors from "./pages/Solutions/SAPHXM/SuccessFactors";

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
 <Sonner />
 <BrowserRouter>
 <Routes>
 <Route element={<Layout />}>
 {/* Main Routes */}
 <Route path="/" element={<Index />} />
 <Route path="/best-digital-transformation-company" element={<Index customTitle="Best Digital Transformation Company" />} />
 <Route path="/about" element={<About />} />
 <Route path="/aboutus" element={<About />} />

 <Route path="/careers" element={<ComingSoon />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/contactus" element={<Contact />} />

 {/* About Routes */}
 <Route path="/about/alliances" element={<ComingSoon />} />
 <Route path="/about/careers" element={<ComingSoon />} />
 <Route path="/about/coming-soon" element={<ComingSoon />} />
 <Route path="/about/customer-stories" element={<CustomerStoriesPage />} />
 <Route path="/about/leadership" element={<LeaderShip />} />
 <Route path="/about/locations" element={<Location />} />
 <Route path="/about/sap-partner" element={<Partners />} />
 <Route path="/about/events" element={<ComingSoon />} />
 <Route path="/insights/customer-stories" element={<CustomerStoriesPage />} />

 {/* Products Routes */}
 <Route path="/products/auto-extract" element={<AutoExtract />} />
 <Route path="/products/gatecheck" element={<GateCheck />} />
 <Route path="/products/jatayu" element={<Jatayu />} />
 <Route path="/products/nxdesk" element={<NxDesk />} />
 <Route path="/products/nxify" element={<Nxify />} />

 {/* Partners Routes */}
 <Route path="/partners/ivc-solutions" element={<IVCSolutions />} />

 {/* Services Routes - SAP Support */}
 <Route path="/upgrades" element={<Upgrade />} />
 <Route path="/abap" element={<Abap />} />
 <Route path="/migrations" element={<Migration />} />
 <Route path="/integration" element={<Integration />} />
 <Route path="/rollouts" element={<SAPConsulting />} />
 <Route path="/application-development" element={<Application />} />
 <Route path="/fioridevelop" element={<SAPFiori />} />
 <Route path="/implement" element={<Implementation />} />
 <Route path="/support-maintainance" element={<Support />} />

 {/* Services Routes - Strategy Consulting */}
 <Route path="/services/strategy-consulting/business" element={<BusinessConsulting />} />
 <Route path="/services/strategy-consulting/process" element={<ProcessConsulting />} />
 <Route path="/services/strategy-consulting/tech" element={<TechConsulting />} />

 {/* Services Routes - Implementation */}
 <Route path="/odooservices/customdevelopment" element={<CustomeDevelopment />} />
 <Route path="/additionalServices/dataanalytics" element={<DataAnalytics />} />
 <Route path="/odooservices/implementation" element={<OdooImplementation />} />

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

 {/* Catch-all */}
 <Route path="*" element={<NotFound />} />
 </Route>
 </Routes>
 </BrowserRouter>
 </TooltipProvider>
 </QueryClientProvider>
 </ErrorBoundary>
);

export default App;
