import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const LinkedInIcon = () => (
 <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
 </svg>
);
const FacebookIcon = () => (
 <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
 </svg>
);
const YoutubeIcon = () => (
 <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
 <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
 </svg>
);
const InstagramIcon = () => (
 <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
 </svg>
);

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
 <footer className="bg-slate-950 text-slate-400 font-sans relative overflow-hidden">
 {/* Top gradient accent */}
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

 {/* Background glow */}
 <div className="absolute inset-0 pointer-events-none overflow-hidden">
 <div className="absolute -top-40 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl" />
 <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-slate-800/50 rounded-full blur-3xl" />
 </div>

 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 {/* Main footer content */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-12 pb-12">
 {/* Brand Column */}
 <div className="lg:col-span-1">
 <div className="flex gap-3 mb-6">
 <Link to="/" className="flex items-center group">
 <img src="/logo-footer.png" alt="Logo" className="w-auto h-20 opacity-80 group-hover:opacity-100 transition-opacity" />
 </Link>
 <Link to="https://ivcsol.com/" target="_blank" className="flex items-center group">
 <img src="/ivclogo.png" alt="IVC Logo" className="w-auto h-20 opacity-80 group-hover:opacity-100 transition-opacity" />
 </Link>
 </div>

 <p className="text-sm text-slate-500 mb-8 leading-relaxed">
 Delivering innovative technology solutions for modern businesses.
 </p>

 {/* Social icons */}
 <div className="flex gap-3">
 {[
 { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/sria-infotech-pvt-ltd/" },
 { Icon: FacebookIcon, href: "https://www.facebook.com/sriainfotech/" },
 { Icon: YoutubeIcon, href: "https://www.youtube.com/@SriaInfotech" },
 { Icon: InstagramIcon, href: "https://www.instagram.com/sriainfotech/" },
 ].map((social, i) => (
 <motion.a
 key={i}
 href={social.href}
 target="_blank"
 rel="noopener noreferrer"
 whileHover={{ scale: 1.1, y: -2 }}
 className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-slate-500 hover:text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300"
 >
 <social.Icon />
 </motion.a>
 ))}
 </div>
 </div>

 {/* Solutions */}
 <div className="lg:col-span-1">
 <h4 className="font-bold text-white text-sm mb-6 tracking-wider uppercase">Solutions</h4>
 <ul className="space-y-2.5">
 {solutions.map((item) => (
 <li key={item.label}>
 <Link
 to={item.link}
 className="text-sm text-slate-500 hover:text-orange-400 transition-colors duration-200 block hover:translate-x-0.5 transition-transform"
 >
 {item.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Services */}
 <div className="lg:col-span-1">
 <h4 className="font-bold text-white text-sm mb-6 tracking-wider uppercase">Services</h4>
 <ul className="space-y-2.5">
 {services.map((item) => (
 <li key={item.label}>
 <Link
 to={item.link}
 className="text-sm text-slate-500 hover:text-orange-400 transition-colors duration-200 block hover:translate-x-0.5 transition-transform"
 >
 {item.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Contact */}
 <div className="lg:col-span-1">
 <h4 className="font-bold text-white text-sm mb-6 tracking-wider uppercase">Contact</h4>
 <div className="space-y-5">
 <div className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
 <Mail className="w-3.5 h-3.5 text-orange-400" />
 </div>
 <div>
 <p className="text-xs text-slate-500 mb-0.5">Email</p>
 <p className="text-sm text-slate-300">info@sriainfotech.com</p>
 </div>
 </div>

 <div className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
 <Phone className="w-3.5 h-3.5 text-orange-400" />
 </div>
 <div>
 <p className="text-xs text-slate-500 mb-0.5">Phone</p>
 <p className="text-sm text-slate-300">+91-9014552492</p>
 </div>
 </div>

 <div className="flex items-start gap-3">
 <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
 <MapPin className="w-3.5 h-3.5 text-orange-400" />
 </div>
 <div>
 <p className="text-xs text-slate-500 mb-0.5">Address</p>
 <p className="text-sm text-slate-300 leading-relaxed">
 First Floor, 1-121/63 Survey No. 63 Part, Hotel Sitara Grand Backside, Miyapur, Telangana 500049
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Bottom bar */}
 <div className="border-t border-white/6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
 <p className="text-sm text-slate-600">
 © {currentYear} SRIA Infotech Pvt Ltd. All rights reserved.
 </p>
 <div className="flex gap-6 text-sm text-slate-600">
 <Link to="/privacy" className="hover:text-orange-400 transition-colors">
 Privacy Policy
 </Link>
 <Link to="/terms" className="hover:text-orange-400 transition-colors">
 Terms of Service
 </Link>
 </div>
 </div>
 </div>
 </footer>
 );
};

export default Footer;

