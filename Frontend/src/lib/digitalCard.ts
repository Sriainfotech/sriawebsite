// Shared types + vCard logic for the hidden digital-business-card routes
// (src/pages/SaiKumar, src/pages/RaviKumar). One generic DigitalCard/
// ShareButton pair (src/components/digital-card/) renders whichever
// CardData object each page passes in.

export type SocialLink = {
  name: string;
  url: string;
  icon: string; // lucide icon name
};

export type QrCard = {
  label: string;
  subtitle: string;
  description: string;
  url: string;
  icon: string;
};

export type CardData = {
  profileImage: string;
  name: string;
  firstName: string;
  lastName: string;
  designation: string;
  company: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  businessEmail: string;
  website: string;
  address: string;
  about: string;
  socialLinks: SocialLink[];
  qrCodes: QrCard[];
  // Per-person static .vcf files (see vercel.json for their Content-Type/
  // Content-Disposition headers) — "inline" for iOS's Add-to-Contacts
  // handoff, "download" for Android's.
  vcfInlinePath: string;
  vcfDownloadPath: string;
};

export function buildVCard(d: CardData): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${d.lastName};${d.firstName};;;`,
    `FN:${d.name}`,
    `ORG:${d.company}`,
    `TITLE:${d.designation}`,
    `TEL;TYPE=CELL,VOICE:${d.phone}`,
    `TEL;TYPE=WORK,VOICE:${d.phone}`,
    `EMAIL;TYPE=INTERNET,PREF:${d.email}`,
    `EMAIL;TYPE=INTERNET,WORK:${d.businessEmail}`,
    `URL:${d.website}`,
    `ADR;TYPE=WORK:;;${d.address};;;;`,
    `NOTE:${d.about}`,
    "END:VCARD",
  ];
  return lines.join("\r\n");
}

export function downloadVCard(d: CardData) {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isAndroid = /Android/.test(ua);

  // Both iOS Safari and Android Chrome trigger the native "Add to contacts"
  // handoff when navigating to a REAL, server-hosted .vcf file with a
  // correct text/vcard Content-Type header (see vercel.json). A blob: URL
  // does NOT work for this on Android — blob downloads carry no real HTTP
  // headers, so Chrome just silently saves the file into Downloads with no
  // "Open with Contacts" prompt, which looks like it "didn't save" at all.
  // Navigating to the real hosted file is what makes Chrome show its
  // "Open with" system chooser instead of a silent download.
  if (isIOS) {
    window.location.href = d.vcfInlinePath;
    return;
  }

  if (isAndroid) {
    window.location.href = d.vcfDownloadPath;
    return;
  }

  // Desktop fallback: download the .vcf so Outlook / Contacts / Address Book
  // can import it.
  const vcf = buildVCard(d);
  const filename = `${d.name.replace(/\s+/g, "_")}.vcf`;
  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
