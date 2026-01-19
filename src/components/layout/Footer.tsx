import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "SAP S/4HANA Implementation", path: "/services" },
    { name: "SAP Migration Services", path: "/services" },
    { name: "SAP Fiori Development", path: "/services" },
    { name: "Microsoft Managed Services", path: "/services" },
    { name: "Data Analytics", path: "/services" },
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const locations = [
    {
      title: "India (Miyapur)",
      address: "First Floor, 1-121/63 Survey No. 63 Part, Hotel Sitara Grand Backside, Miyapur, Telangana 500049",
    },
    {
      title: "India (Knowledge City)",
      address: "Plot No 1/C, Sy No 83/1, Raidurgam, Hyderabad Knowledge City, Hyderabad, Telangana 500081",
    },
    {
      title: "USA",
      address: "18 Hunters Dr, Gilbertsville, PA 19525-6601 USA",
    },
  ];

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl font-heading">S</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl">SRIA</span>
                <span className="text-xs -mt-1 text-primary-foreground/80">INFOTECH</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Empower Your Digital Transformation Journey with Our Technical Arms. 
              A global IT services and consulting firm focusing on digital transformation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@sriainfotech.com"
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>info@sriainfotech.com</span>
              </a>
              <a
                href="tel:+919014552492"
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>India: +91-9014552492</p>
                  <p>USA: +1-6142167070</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Hyderabad, India & Pennsylvania, USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} SRIA Infotech Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
