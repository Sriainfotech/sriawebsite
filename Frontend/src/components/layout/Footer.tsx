import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram, Send, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutions = [
    { label: "Rise with SAP", link: "/solutions/rise-with-sap" },
    { label: "SAP S/4 HANA Private Cloud", link: "/solutions/private-cloud" },
    { label: "SAP S/4 HANA Public Cloud", link: "/solutions/public-cloud" },
    { label: "SAP SuccessFactors", link: "/solutions/successfactors" },
    { label: "SAP Commerce Cloud", link: "/solutions/commerce-cloud" },
    { label: "SAP Concur", link: "/solutions/concur" },
    { label: "SAP Ariba", link: "/solutions/ariba" },
    { label: "SAP Manufacturing Execution", link: "/solutions/manufacturing-execution" },
    { label: "SAP Manufacturing Logistics", link: "/solutions/manufacturing-logistics" },
    { label: "SAP Digital Manufacturing", link: "/solutions/digital-manufacturing" },
    { label: "SAP Business Network for Logistics", link: "/solutions/business" },
    { label: "SAP Fieldglass", link: "/solutions/fieldglass" },
    { label: "SAP Extended Warehouse Management", link: "/solutions/extended-warehouse-management" },
    { label: "SAP Product Lifecycle", link: "/solutions/product-lifecycle" },
    { label: "SAP Asset Performance Management", link: "/solutions/asset-performance-management" },
    { label: "SAP Field Service Management", link: "/solutions/field-service-management" }
  ];

  const services = [
    { label: "SAP Implementation", link: "/implement" },
    { label: "SAP Rollouts", link: "/rollouts" },
    { label: "Application Development", link: "/application-development" },
    { label: "SAP Integration", link: "/integration" },
    { label: "Support & Maintenance", link: "/support-maintainance" },
    { label: "SAP Upgrades", link: "/upgrades" },
    { label: "SAP Migrations", link: "/migrations" },
    { label: "Fiori Development", link: "/fioridevelop" },
    { label: "ABAP RAP Services", link: "/abap" },
    { label: "Odoo Implementation", link: "/odooservices/implementation" },
    { label: "Custom App Development", link: "/odooservices/customdevelopment" },
    { label: "Data Analytics", link: "/additionalServices/dataanalytics" }
  ];

  return (
    <footer className="bg-slate-100 text-slate-700 pt-20 pb-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex gap-2">
              <Link to="/" className="flex items-center gap-2 mb-6 group">
                <img src="/logo-footer.png" alt="Logo" className="w-auto h-24" />
              </Link>
              <Link to="https://ivcsol.com/" target="_blank" className="flex items-center gap-2 mb-6 group">
                <img src="/ivclogo.png" alt="IVC Logo" className="w-auto h-24" />
              </Link>
            </div>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Delivering innovative technology solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/sria-infotech-pvt-ltd/" },
                { Icon: Facebook, href: "https://www.facebook.com/sriainfotech/" },
                { Icon: Youtube, href: "https://www.youtube.com/@SriaInfotech" },
                { Icon: Instagram, href: "https://www.instagram.com/sriainfotech/" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-primary transition-colors"
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-slate-900 text-lg mb-6">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link to={item.link} className="text-sm text-slate-600 hover:text-primary transition-colors block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-slate-900 text-lg mb-6">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.label}>
                  <Link to={item.link} className="text-sm text-slate-600 hover:text-primary transition-colors block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-slate-900 text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <p className="mb-1">Email: info@sriainfotech.com</p>
                <p>Phone: +91-9014552492</p>
              </div>
              <div>
                <p className="leading-relaxed">Address: First Floor, 1-121/63 Survey No. 63 Part, Hotel Sitara Grand Backside, Miyapur, Telangana 500049</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} SRIA Infotech Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
