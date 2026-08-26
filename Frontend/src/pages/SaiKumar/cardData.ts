import type { CardData } from "@/lib/digitalCard";

// Ported from the standalone "sai-kumar" digital-business-card project
// (Lovable/TanStack Start) into this site as a single hidden route. Content
// only — see src/components/digital-card/DigitalCard.tsx for the shared
// rendering logic both this and RaviKumar/cardData.ts use.
export const cardData: CardData = {
  profileImage: "/sai-kumar-profile.png",
  name: "Sai Kumar Bonakurthi",
  firstName: "Sai Kumar",
  lastName: "Bonakurthi",
  designation: "Founder & Managing Director",
  company: "SRIA Infotech",
  tagline: "Transforming Ideas Into Digital Reality.",
  phone: "+919989795335",
  whatsapp: "+919989795335",
  email: "saikumarb@sriainfotech.com",
  businessEmail: "sales@sriainfotech.com",
  website: "https://www.sriainfotech.com",
  address: "T-Hub, Hyderabad, Telangana, India",
  about:
    "Helping businesses with Digital Transformation, SAP Consulting, AI Solutions, Enterprise Software Development, HRMS, ERP, Web & Mobile Applications.",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/saikumarb/", icon: "Linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/saikumarbonakurthi/", icon: "Instagram" },
    { name: "Facebook", url: "https://www.facebook.com/ashwini.saikumar", icon: "Facebook" },
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
  vcfInlinePath: "/sai-kumar-contact.vcf",
  vcfDownloadPath: "/sai-kumar-contact-dl.vcf",
};
