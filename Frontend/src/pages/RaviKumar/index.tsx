import { DigitalCard } from "@/components/digital-card/DigitalCard";
import { cardData } from "./cardData";

// Hidden route: not linked from the navbar, not in sitemap.xml, and marked
// noindex in routeMeta.ts — reachable only via direct link, QR code, or the
// profile icon on the Leadership page. Same pattern as src/pages/SaiKumar.
function RaviKumar() {
  return <DigitalCard data={cardData} />;
}

export default RaviKumar;
