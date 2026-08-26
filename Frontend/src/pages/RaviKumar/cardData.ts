import type { CardData } from "@/lib/digitalCard";

// Ported from the standalone "ravi-kumar" digital-business-card project
// (Lovable/TanStack Start) — same origin/pattern as
// src/pages/SaiKumar/cardData.ts, see that file's comment for context.
export const cardData: CardData = {
  profileImage: "/ravi-kumar-profile.jpg",
  name: "Ravikumar Rangari",
  firstName: "Ravikumar",
  lastName: "Rangari",
  designation: "Co Founder & Executive Chairman",
  company: "SRIA Infotech",
  tagline: "Empowering Businesses Through Technology.",
  phone: "+919701314138",
  whatsapp: "+919701314138",
  email: "ravirangari@sriainfotech.com",
  businessEmail: "sales@sriainfotech.com",
  website: "https://www.sriainfotech.com",
  address: "T-Hub, Hyderabad, Telangana, India",
  about:
    "Helping businesses with Digital Transformation, SAP Consulting, AI Solutions, Enterprise Software Development, HRMS, ERP, Web & Mobile Applications.",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ravikumar-r-53265a22a/", icon: "Linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/ravikumarrangari?igsh=MW83bTRlNGl3OThnZA==", icon: "Instagram" },
    { name: "Facebook", url: "https://www.facebook.com/ravikumar.rangari", icon: "Facebook" },
    { name: "Website", url: "https://www.sriainfotech.com", icon: "Globe" },
  ],
  qrCodes: [
    {
      label: "Kothaguda",
      subtitle: "Office Location",
      description: "Visit our Kothaguda office",
      url: "https://maps.google.com/?q=SRIA+Infotech+Kothaguda+Hyderabad",
      icon: "MapPin",
    },
    {
      label: "Mulugu/Task",
      subtitle: "Office Location",
      description: "Visit our Mulugu / Task office",
      url: "https://maps.google.com/?q=T-Hub+Hyderabad",
      icon: "MapPin",
    },
    {
      label: "Innovation Cell T-Hub",
      subtitle: "Office Location",
      description: "Visit our T-Hub office",
      url: "https://www.google.com/maps?q=17.4339057,78.3788131",
      icon: "MapPin",
    },
    {
      label: "Sria Profile",
      subtitle: "Company Profile",
      description: "Explore SRIA Infotech",
      url: "https://www.sriainfotech.com",
      icon: "Building2",
    },
  ],
  vcfInlinePath: "/ravi-kumar-contact.vcf",
  vcfDownloadPath: "/ravi-kumar-contact-dl.vcf",
};
