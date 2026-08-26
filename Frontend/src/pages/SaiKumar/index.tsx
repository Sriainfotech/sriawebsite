import { DigitalCard } from "@/components/digital-card/DigitalCard";
import { cardData } from "./cardData";

// Hidden route: not linked from the navbar, not in sitemap.xml, and marked
// noindex in routeMeta.ts — reachable only via direct link, QR code, or the
// profile icon on the Leadership page. Ported from a standalone
// digital-business-card project; see components/digital-card/DigitalCard.tsx
// for what changed in the port.
function SaiKumar() {
  return <DigitalCard data={cardData} />;
}

export default SaiKumar;
