import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Globe,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Building2,
  UserPlus,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ShareButton } from "./ShareButton";
import { downloadVCard, type CardData } from "@/lib/digitalCard";

const socialIconMap: Record<string, LucideIcon> = {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Globe,
};

const qrIconMap: Record<string, LucideIcon> = {
  Instagram,
  Linkedin,
  Globe,
  MapPin,
  Building2,
};

// App-icon-style brand colors so each tile reads like a familiar app icon —
// unchanged from the original card.
const socialBrand: Record<string, { bg: string; iconColor?: string }> = {
  Linkedin: { bg: "bg-[#0A66C2]" },
  Instagram: { bg: "bg-gradient-to-tr from-[#FEDA75] via-[#D62976] to-[#4F5BD5]" },
  Facebook: { bg: "bg-[#1877F2]" },
  Twitter: { bg: "bg-black" },
  Youtube: { bg: "bg-[#FF0000]" },
  Globe: { bg: "bg-white border border-orange-100", iconColor: "text-orange-500" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function DigitalCard({ data }: { data: CardData }) {
  const telHref = `tel:${data.phone}`;
  const waHref = `https://wa.me/${data.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col">
      <ShareButton data={data} />

      <div className="relative flex flex-1 flex-col overflow-hidden bg-white shadow-sm sm:rounded-3xl sm:border sm:border-orange-100">
        {/* Header */}
        <section className="flex flex-col items-center border-b border-orange-100 pb-6 text-center">
          <div className="relative h-24 w-full overflow-hidden bg-gradient-to-br from-amber-400 via-orange-500 to-orange-700 sm:h-28">
            <NetworkPattern />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 -mt-14 h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-md"
          >
            <img
              src={data.profileImage}
              alt={data.name}
              width={112}
              height={112}
              className="h-full w-full scale-100 object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mt-4 space-y-1"
          >
            <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {data.name}
            </h1>
            <p className="text-sm font-medium text-orange-600">{data.designation}</p>
            <p className="text-sm text-slate-500">{data.company}</p>
            <p className="mt-2 text-xs italic text-slate-500">"{data.tagline}"</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.35 }}
            className="mt-5 flex items-center justify-center gap-2"
          >
            <motion.a
              href={telHref}
              whileTap={{ scale: 0.94 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Call"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-100 bg-white text-orange-600 shadow-sm"
            >
              <Phone className="h-4 w-4" />
            </motion.a>

            <motion.button
              onClick={() => downloadVCard(data)}
              whileTap={{ scale: 0.94 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Save Contact"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-orange-500/50"
            >
              <UserPlus className="h-5 w-5" />
            </motion.button>

            <motion.a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.94 }}
              whileHover={{ scale: 1.05 }}
              aria-label="WhatsApp"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-100 bg-white text-orange-600 shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.a
            href={data.website}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.35 }}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.01 }}
            className="mt-4 flex w-auto items-center justify-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold text-orange-600"
          >
            <Globe className="h-3.5 w-3.5" />
            Visit Website
            <ArrowUpRight className="h-3 w-3" />
          </motion.a>
        </section>

        {/* Connect */}
        <section className="px-4 pb-3 pt-6 sm:px-6">
          <SectionEyebrow text="Connect" />
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {data.qrCodes.map((qr, i) => {
              const Icon = qrIconMap[qr.icon] ?? Globe;
              const isProfile = qr.label === "Sria Profile";
              return (
                <IconTile
                  key={qr.label}
                  icon={Icon}
                  label={qr.label}
                  index={i}
                  href={isProfile ? "/SRIA_Company_Profile.pdf" : qr.url}
                  download={isProfile ? "SRIA_Company_Profile.pdf" : undefined}
                  iconBg="bg-orange-500"
                />
              );
            })}
          </div>
        </section>

        {/* Social */}
        <section className="px-4 pb-6 pt-6 sm:px-6">
          <SectionEyebrow text="Social" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            {data.socialLinks
              .filter((s) => s.name !== "Website")
              .map((s, i) => {
                const Icon = socialIconMap[s.icon] ?? Globe;
                const brand = socialBrand[s.icon] ?? { bg: "bg-orange-500" };
                return (
                  <IconTile
                    key={s.name}
                    icon={Icon}
                    label={s.name}
                    index={i}
                    href={s.url}
                    iconBg={brand.bg}
                    iconColor={brand.iconColor}
                  />
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}

function IconTile({
  icon: Icon,
  label,
  href,
  index,
  download,
  iconBg,
  iconColor,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
  index: number;
  download?: string;
  iconBg: string;
  iconColor?: string;
}) {
  return (
    <motion.a
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      download={download}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="flex flex-col items-center gap-1"
      aria-label={label}
    >
      <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl shadow-sm", iconBg)}>
        <Icon className={cn("h-5 w-5", iconColor ?? "text-white")} />
      </div>
      <span className="text-center text-[10px] font-medium leading-tight text-slate-900">{label}</span>
    </motion.a>
  );
}

function NetworkPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-40"
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      fill="none"
    >
      <g stroke="white" strokeWidth="1">
        <path d="M20 90 L70 40 L140 55 L200 20" />
        <path d="M70 40 L100 95" />
        <path d="M140 55 L180 100" />
        <path d="M200 20 L260 50 L320 15" />
        <path d="M260 50 L300 95 L360 70" />
        <path d="M320 15 L380 45" />
      </g>
      <g fill="white">
        <circle cx="20" cy="90" r="2.5" />
        <circle cx="70" cy="40" r="3" />
        <circle cx="140" cy="55" r="2.5" />
        <circle cx="200" cy="20" r="3" />
        <circle cx="100" cy="95" r="2" />
        <circle cx="180" cy="100" r="2" />
        <circle cx="260" cy="50" r="3" />
        <circle cx="320" cy="15" r="2.5" />
        <circle cx="300" cy="95" r="2" />
        <circle cx="360" cy="70" r="2.5" />
        <circle cx="380" cy="45" r="2" />
      </g>
    </svg>
  );
}

function SectionEyebrow({ text }: { text: string }) {
  return (
    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-500/80">
      {text}
    </div>
  );
}
