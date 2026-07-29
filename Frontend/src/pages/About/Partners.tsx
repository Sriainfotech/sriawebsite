import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ArrowLeft, CheckCircle, MapPin } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const buildLogoSrcSet = (url: string) => {
  if (!url.includes("ik.imagekit.io") || !url.includes("w-")) return undefined;
  const w160 = url.replace(/w-\d+/, "w-160");
  const w320 = url.replace(/w-\d+/, "w-320");
  return `${w160} 160w, ${w320} 320w`;
};

const partners = [
  {
    name: "IVC Solutions",
    type: "Joint Venture Partner",
    badge: "SAP Gold Partner",
    shortDescription:
      "An authorized SAP Gold Partner with offices across Mainland China, Hong Kong, Macau, Taiwan, and Asia Pacific. Together, we deliver world-class SAP and enterprise solutions.",
    logo: "https://ik.imagekit.io/hps6th7vy/sria/ivclogo.png?tr=f-auto,q-auto,w-320",
    detailsUrl: "/partners/ivc-solutions",
    regions: ["Mainland China", "Hong Kong", "Macau", "Taiwan", "Asia Pacific"],
    stats: [
      { value: "500+", label: "Successful SAP Projects Delivered" },
      { value: "20+", label: "Years of Expertise" },
      { value: "5+", label: "Regions Covered" },
    ],
  },
  {
    name: "BSNL",
    type: "Skill Solution Partner",
    badge: "First in Telangana & AP",
    shortDescription:
      "Official skill solution partner of BSNL, delivering telecom skilling programs across India — the first such partnership from Telangana and Andhra Pradesh.",
    logo: "https://ik.imagekit.io/hps6th7vy/sria/logos/bsnl.png?tr=f-auto,q-auto,w-320",
    detailsUrl: "/partners/bsnl",
    regions: ["Telangana", "Andhra Pradesh", "Pan-India Network"],
    stats: [
      { value: "12,500+", label: "Learners Trained" },
      { value: "38", label: "Training Centers" },
      { value: "9", label: "States Covered" },
    ],
  },
  {
    name: "Telangana Government",
    type: "State Partner",
    badge: "Digital Governance",
    shortDescription:
      "Supporting the Government of Telangana's digital governance initiatives with secure, scalable e-governance platforms and public sector technology solutions.",
    logo: "https://ik.imagekit.io/hps6th7vy/sria/logos/Emblem_of_Telangana.webp?tr=f-auto,q-auto,w-320",
    detailsUrl: "/partners/telangana-government",
    regions: ["Telangana"],
    stats: [
      { value: "10+", label: "Government Projects" },
      { value: "6+", label: "Departments Served" },
      { value: "1M+", label: "Citizens Reached" },
    ],
  },
  {
    name: "TASK",
    type: "Skill Alliance Partner",
    badge: "Employability Training",
    shortDescription:
      "Skill alliance partner bridging academia and industry through employability training programs delivered across colleges in Telangana.",
    logo: "https://ik.imagekit.io/hps6th7vy/sria/logos/task.jpg?tr=f-auto,q-auto,w-320",
    detailsUrl: "/partners/task",
    regions: ["Telangana"],
    stats: [
      { value: "8,000+", label: "Students Trained" },
      { value: "40+", label: "Colleges Engaged" },
      { value: "10+", label: "Districts Covered" },
    ],
  },
  {
    name: "T-Hub",
    type: "Innovation Hub Partner",
    badge: "Startup Ecosystem",
    shortDescription:
      "Innovation hub partner supporting startups through technology mentorship, product engineering, and innovation workshops across Telangana's startup ecosystem.",
    logo: "https://ik.imagekit.io/hps6th7vy/sria/logos/thub.png?tr=f-auto,q-auto,w-320",
    detailsUrl: "/partners/t-hub",
    regions: ["Telangana (Hyderabad)"],
    stats: [
      { value: "25+", label: "Startups Supported" },
      { value: "15+", label: "Workshops Delivered" },
      { value: "500+", label: "Mentorship Hours" },
    ],
  },
];

function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="Our Strategic Partners"
        subtitle="Building powerful alliances to deliver world-class enterprise solutions across the globe."
        breadcrumbs={[
          { name: "About Us", path: "/about" },
          { name: "Partners", path: "/about/partners" },
        ]}
        backgroundImage="https://ik.imagekit.io/hps6th7vy/sria/partners/sap-partner.png?tr=f-auto,q-auto,w-1600"
      />

      {/* ── Partnership Overview ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl opacity-60 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">
                Partnership Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight">
                Collaborating for<br />Innovation & Growth
              </h2>
              <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mb-6" />
              <p className="text-slate-500 leading-relaxed mb-5">
                At Sria Infotech, strategic collaboration empowers our mission of
                building smarter, more sustainable, future-ready solutions. Each
                partnership strengthens our capabilities, expands our global
                presence, and accelerates innovation across industries.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our joint venture ecosystem is built on trust, shared vision, and
                a commitment to delivering transformative digital solutions for
                businesses worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "SAP Gold Partner network",
                  "Global delivery model",
                  "Asia Pacific market coverage",
                  "End-to-end SAP implementations",
                  "Certified SAP professionals",
                  "Localised enterprise solutions",
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-orange-200/50 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="https://ik.imagekit.io/hps6th7vy/sria/partners/partner-overview.png?tr=f-auto,q-auto,w-1600"
                  srcSet="https://ik.imagekit.io/hps6th7vy/sria/partners/partner-overview.png?tr=f-auto,q-auto,w-768 768w, https://ik.imagekit.io/hps6th7vy/sria/partners/partner-overview.png?tr=f-auto,q-auto,w-1600 1600w"
                  sizes="(min-width: 1024px) 660px, 100vw"
                  alt="Partnership Overview"
                  className="w-full h-full object-cover"
                  width={660}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <p className="text-white font-bold text-sm">Global Partnership Network</p>
                    <p className="text-white/60 text-xs mt-0.5">Trusted across Asia Pacific & beyond</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Partners ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-4">Alliance Network</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Strategic Partners</h2>
            <div className="h-1 w-14 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto" />
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-6">
                {partners.map((partner, idx) => (
                  <div key={idx} className="flex-[0_0_100%] pl-6 min-w-0">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-400 overflow-hidden"
                    >
                      <div className="grid lg:grid-cols-3 gap-0">
                        {/* Left: logo + badge */}
                        <div className="lg:border-r border-slate-100 p-10 flex flex-col items-center justify-center bg-slate-50 group-hover:bg-orange-50/40 transition-colors duration-300">
                          <img
                            src={partner.logo}
                            srcSet={buildLogoSrcSet(partner.logo)}
                            sizes="160px"
                            alt={partner.name}
                            className="h-28 object-contain mb-5"
                            width={160}
                            height={112}
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              const t = e.currentTarget;
                              t.style.display = "none";
                              t.parentElement!.insertAdjacentHTML(
                                "afterbegin",
                                `<span class="h-28 flex items-center justify-center text-orange-500 font-bold text-2xl mb-5">${partner.name}</span>`
                              );
                            }}
                          />
                          <span className="inline-block px-3 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider">
                            {partner.badge}
                          </span>
                          <p className="text-slate-500 text-xs font-medium mt-2">{partner.type}</p>
                        </div>

                        {/* Middle: content */}
                        <div className="lg:col-span-2 p-8 lg:p-10">
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                              {partner.name}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-5">{partner.shortDescription}</p>

                            {/* Regions */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              <span className="flex items-center gap-1 text-xs text-slate-500 font-medium mr-1">
                                <MapPin className="w-3.5 h-3.5 text-orange-400" /> Coverage:
                              </span>
                              {partner.regions.map((region, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
                                >
                                  {region}
                                </span>
                              ))}
                            </div>

                            {/* Stats row */}
                            <div className="grid grid-cols-3 gap-4 mb-7 border-t border-slate-100 pt-6">
                              {partner.stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                  <p className="text-2xl font-black text-orange-500">{stat.value}</p>
                                  <p className="text-xs text-slate-500 font-medium mt-0.5">{stat.label}</p>
                                </div>
                              ))}
                            </div>

                            <motion.div whileHover={{ x: 4 }} className="inline-block">
                              <Link
                                to={partner.detailsUrl}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-orange-200"
                              >
                                View Partnership <ArrowRight className="w-4 h-4" />
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous partner"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-orange-600 hover:border-orange-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                {partners.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(idx)}
                    aria-label={`Go to partner ${idx + 1}`}
                    className="group p-2.5 -m-2.5 flex items-center justify-center"
                  >
                    <span className="block w-2 h-2 rounded-full bg-slate-300 group-hover:bg-orange-400 transition-colors" />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next partner"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-orange-600 hover:border-orange-300 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Partners;
