import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Camera, Users, MapPin, Heart, X,
  ChevronLeft, ChevronRight, Play, Images, Volume2
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

/* ─── Types ─── */
type GridSize = "hero" | "wide" | "tall" | "regular";

type GalleryItem = {
  id: number;
  category: string;
  caption: string;
  featured?: boolean;
  size?: GridSize;
  type: "image" | "video";
  images: string[];
  videoSrc?: string;
};

const getBentoClass = (item: GalleryItem): string => {
  switch (item.size) {
    case "hero": return "col-span-2 row-span-2";
    case "wide": return "col-span-2";
    case "tall": return "row-span-2";
    default: return "";
  }
};

/* ─── Data ─── */
const categories = ["All", "Team Events", "Office Life", "Celebrations", "Milestones", "Videos"];

const gallery: GalleryItem[] = [
  // ── Hero anchors ──
  {
    id: 1, type: "image", category: "Team Events", caption: "Annual Team Gathering",
    featured: true, size: "wide",
    images: ["https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454760/sria/gallery/sria-annual-team-gathering.jpg"],
  },
  {
    id: 3, type: "image", category: "Milestones", caption: "SAP Inside Track – Hyderabad",
    size: "tall",
    images: ["https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454759/sria/gallery/sap-inside-track-hyderabad.jpg"],
  },
  {
    id: 4, type: "image", category: "Milestones", caption: "Job Fair – Local Youth Placements, Mulugu",
    images: ["https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454772/sria/gallery/sria-job-fair-mulugu.png"],
  },
  {
    id: 5, type: "image", category: "Milestones", caption: "Office Inauguration – Mulugu",
    images: ["https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454758/sria/gallery/mulugu-office-inauguration.png"],
  },

  // ── Wide banners ──
  {
    id: 7, type: "image", category: "Team Events", caption: "Team Gatherings",
    featured: true, size: "hero",
    images: [
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454868/sria/gallery/sria-team-gathering-01.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454870/sria/gallery/sria-team-gathering-02.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454879/sria/gallery/sria-team-gathering-03.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454883/sria/gallery/sria-team-gathering-04.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454895/sria/gallery/sria-team-gathering-05.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454899/sria/gallery/sria-team-gathering-06.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454902/sria/gallery/sria-team-gathering-07.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454904/sria/gallery/sria-team-gathering-08.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454905/sria/gallery/sria-team-gathering-09.jpg",
    ],
  },
  {
    id: 6, type: "image", category: "Milestones", caption: "Visit to Telangana Secretariat, Hyderabad",
    images: ["https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454916/sria/gallery/telangana-secretariat-visit.jpg"],
  },
  {
    id: 9, type: "image", category: "Team Events", caption: "Team Photos",
    images: [
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454907/sria/gallery/sria-team-group-photo.png",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454913/sria/gallery/sria-team-photo-01.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454914/sria/gallery/sria-team-photo-02.jpg",
    ],
  },
  {
    id: 8, type: "image", category: "Team Events", caption: "Team Events",
    featured: true, size: "hero",
    images: [
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454803/sria/gallery/sria-team-event-02.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454804/sria/gallery/sria-team-event-03.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454805/sria/gallery/sria-team-event-04.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454807/sria/gallery/sria-team-event-05.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454811/sria/gallery/sria-team-event-06.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454813/sria/gallery/sria-team-event-07.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454814/sria/gallery/sria-team-event-08.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454828/sria/gallery/sria-team-event-09.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454849/sria/gallery/sria-team-event-10.jpg",
    ],
  },
  {
    id: 2, type: "image", category: "Team Events", caption: "Family Day at T-Hub, Hyderabad",
    images: ["https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454917/sria/gallery/thub-hyderabad-family-day.png"],
  },
  {
    id: 110, type: "image", category: "Team Events", caption: "Team Celebration", size: "tall",
    images: ["https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454802/sria/gallery/sria-team-event-01.jpg"],
  },
  {
    id: 10, type: "image", category: "Celebrations", caption: "SRIA Celebrations",
    featured: true, size: "hero",
    images: [
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454761/sria/gallery/sria-celebration-01.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454762/sria/gallery/sria-celebration-02.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454764/sria/gallery/sria-celebration-03.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454765/sria/gallery/sria-celebration-04.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454766/sria/gallery/sria-celebration-05.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454769/sria/gallery/sria-celebration-06.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454789/sria/gallery/sria-milestone-15.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454912/sria/gallery/sria-team-outing.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454909/sria/gallery/sria-team-hangout.jpg",
    ],
  },
  {
    id: 11, type: "image", category: "Office Life", caption: "SRIA Office & Workspace",
    size: "regular",
    images: [
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454793/sria/gallery/sria-miyapur-office.png",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454799/sria/gallery/sria-office-photo-01.png",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454801/sria/gallery/sria-office-photo-03.png",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454794/sria/gallery/sria-office-life-01.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454795/sria/gallery/sria-office-life-02.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454797/sria/gallery/sria-office-life-03.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454798/sria/gallery/sria-office-life-04.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454915/sria/gallery/sria-team-photo-03.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454910/sria/gallery/sria-team-lunch.jpg",
    ],
  },
  {
    id: 111, type: "image", category: "Office Life", caption: "SRIA Office", size: "tall",
    images: ["https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454800/sria/gallery/sria-office-photo-02.png"],
  },
  {
    id: 12, type: "image", category: "Milestones", caption: "Company Milestones",
    size: "regular",
    images: [
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454773/sria/gallery/sria-milestone-01.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454774/sria/gallery/sria-milestone-02.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454775/sria/gallery/sria-milestone-03.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454776/sria/gallery/sria-milestone-04.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454777/sria/gallery/sria-milestone-05.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454778/sria/gallery/sria-milestone-06.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454779/sria/gallery/sria-milestone-07.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454792/sria/gallery/sria-milestone-17.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454781/sria/gallery/sria-milestone-08.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454782/sria/gallery/sria-milestone-09.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454783/sria/gallery/sria-milestone-10.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454784/sria/gallery/sria-milestone-11.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454786/sria/gallery/sria-milestone-12.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454787/sria/gallery/sria-milestone-13.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454788/sria/gallery/sria-milestone-14.jpg",
      "https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454790/sria/gallery/sria-milestone-16.jpg",
    ],
  },

  // ── Videos ──
  {
    id: 13, type: "video", category: "Videos", caption: "SRIA Team Video",
    videoSrc: "https://res.cloudinary.com/dmxfdt7ub/video/upload/v1779454739/sria/gallery/IMG_0225.mp4",
    images: [],
  },
  {
    id: 14, type: "video", category: "Videos", caption: "SRIA Moments",
    size: "tall", videoSrc: "https://res.cloudinary.com/dmxfdt7ub/video/upload/v1779454744/sria/gallery/IMG_1442.mp4",
    images: [],
  },
  // {
  //   id: 15, type: "video", category: "Videos", caption: "Team Highlights",
  //   size: "tall", videoSrc: "/gallery/IMG_7334.MOV",
  //   images: [],
  // },
];

const stats = [
  { value: "50+", label: "Team Members", Icon: Users },
  { value: "3", label: "Global Offices", Icon: MapPin },
  { value: "5+", label: "Years Together", Icon: Heart },
  { value: "50+", label: "Events Per Year", Icon: Camera },
];

const countFor = (cat: string) =>
  cat === "All" ? gallery.length : gallery.filter(i => i.category === cat).length;

/* ─── Video Gallery Card ─── */
const VideoCard: React.FC<{ item: GalleryItem; onOpen: () => void }> = ({ item, onOpen }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.play()
      .then(() => setPlaying(true))
      .catch(() => {
        if (!videoRef.current) return;
        videoRef.current.muted = true;
        videoRef.current.play().then(() => setPlaying(true)).catch(() => { });
      });
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.muted = true;
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-slate-950 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-800 hover:border-orange-500/50 w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
    >
      <video
        ref={videoRef}
        src={item.videoSrc}
        preload="metadata"
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
        style={{ opacity: playing ? 1 : 0.65 }}
      />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400" />

      {/* VIDEO badge */}
      <div className="absolute top-3 left-3">
        <span className="px-2.5 py-1 bg-orange-500 text-white rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
          Video
        </span>
      </div>

      {/* Volume indicator */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/40"
          >
            <Volume2 className="w-4 h-4 text-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play button overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${playing ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 shadow-2xl"
        >
          <Play className="w-7 h-7 text-white fill-current ml-1" />
        </motion.div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent">
        <p className="text-white font-semibold text-sm leading-snug">{item.caption}</p>
        <p className="text-white/40 text-[11px] mt-0.5">
          {playing ? "Playing with sound" : "Hover to play · Click to open"}
        </p>
      </div>
    </div>
  );
};

/* ─── Image Gallery Card ─── */
const ImageCard: React.FC<{
  item: GalleryItem;
  onOpen: (startIdx: number) => void;
}> = ({ item, onOpen }) => {
  const [idx, setIdx] = useState(0);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isGroup = item.images.length > 1;
  const isProminent = item.size === "hero" || item.size === "wide";

  useEffect(() => {
    if (hovering && isGroup) {
      intervalRef.current = setInterval(() => setIdx(p => (p + 1) % item.images.length), 1800);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (!hovering) setIdx(0);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [hovering, isGroup, item.images.length]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer border border-slate-100 hover:border-orange-200 bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-400 w-full h-full"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={() => onOpen(idx)}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={idx}
          src={item.images[idx]}
          alt={item.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </AnimatePresence>

      {/* Gradient: always on for prominent cards, hover-only for small */}
      <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent transition-opacity duration-300 ${isProminent ? "opacity-60 group-hover:opacity-90" : "opacity-0 group-hover:opacity-100"}`} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      {/* Badges */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
        <span className="px-2.5 py-1 bg-slate-900/85 backdrop-blur-sm text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
          {item.category}
        </span>
        {isGroup && (
          <span className="flex items-center gap-1 px-2 py-1 bg-orange-500/90 backdrop-blur-sm text-white rounded-full text-[10px] font-bold">
            <Images className="w-3 h-3" />{item.images.length}
          </span>
        )}
      </div>

      {/* Caption: always for prominent, hover-only for small */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${isProminent ? "opacity-100 translate-y-0" : "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"}`}>
        <p className="text-white font-semibold text-sm leading-snug mb-2">{item.caption}</p>
        {isGroup && (
          <div className="flex gap-1 items-center">
            {item.images.slice(0, 9).map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${i === idx % item.images.length ? "w-4 bg-orange-400" : "w-1.5 bg-white/35"}`}
              />
            ))}
            {item.images.length > 9 && (
              <span className="text-white/45 text-[9px] ml-1">+{item.images.length - 9}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Unified Card wrapper ─── */
const GalleryCard: React.FC<{
  item: GalleryItem;
  onOpen: (item: GalleryItem, startIndex?: number) => void;
}> = ({ item, onOpen }) => {
  if (item.type === "video") {
    return <VideoCard item={item} onOpen={() => onOpen(item, 0)} />;
  }
  return <ImageCard item={item} onOpen={(idx) => onOpen(item, idx)} />;
};

/* ─── Lightbox ─── */
type LightboxState = { item: GalleryItem; index: number } | null;

const Lightbox: React.FC<{ state: LightboxState; onClose: () => void }> = ({ state, onClose }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => { if (state) setIdx(state.index ?? 0); }, [state]);

  const prev = useCallback(() => {
    if (!state) return;
    setIdx(p => (p - 1 + state.item.images.length) % state.item.images.length);
  }, [state]);

  const next = useCallback(() => {
    if (!state) return;
    setIdx(p => (p + 1) % state.item.images.length);
  }, [state]);

  useEffect(() => {
    if (!state) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [state, prev, next, onClose]);

  return (
    <AnimatePresence>
      {state && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-slate-950/97 flex flex-col items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.93, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-5xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute -top-14 right-0 w-11 h-11 rounded-full bg-white/20 hover:bg-orange-500 border border-white/40 flex items-center justify-center text-white transition-all z-10 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            {state.item.images.length > 1 && state.item.type === "image" && (
              <div className="absolute -top-11 left-0 text-white/40 text-sm font-medium">
                {idx + 1} / {state.item.images.length}
              </div>
            )}

            {/* Media */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-white/5">
              {state.item.type === "video" && state.item.videoSrc ? (
                <video
                  src={state.item.videoSrc}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh]"
                />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={idx}
                    src={state.item.images[idx]}
                    alt={state.item.caption}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-h-[80vh] object-contain"
                  />
                </AnimatePresence>
              )}
            </div>

            {/* Caption */}
            <p className="text-center text-white/60 text-sm mt-4 font-medium">{state.item.caption}</p>

            {/* Prev / Next */}
            {state.item.type === "image" && state.item.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 flex items-center justify-center text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Thumbnails */}
                <div className="flex gap-2 justify-center mt-4 flex-wrap max-h-20 overflow-hidden">
                  {state.item.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`w-12 h-9 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${i === idx ? "border-orange-400 opacity-100" : "border-transparent opacity-35 hover:opacity-65"
                        }`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─── Page ─── */
const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const filtered: GalleryItem[] = activeCategory === "All"
    ? gallery
    : gallery
      .filter(item => item.category === activeCategory)
      .flatMap(item => {
        if (item.type === "video" || item.images.length <= 1) return [item];
        return item.images.map((src, i) => ({
          ...item,
          id: item.id * 1000 + i,
          images: [src],
          featured: false,
          size: undefined,
        }));
      });

  const openLightbox = useCallback((item: GalleryItem, startIndex = 0) => {
    setLightbox({ item, index: startIndex });
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <PageHeader
        title="Life at SRIA"
        subtitle="A glimpse into our culture, our people, and the moments that make us who we are."
        breadcrumbs={[{ name: "About Us", path: "/aboutus" }, { name: "Life at SRIA", path: "/gallery" }]}
        backgroundImage="https://res.cloudinary.com/dmxfdt7ub/image/upload/v1779454760/sria/gallery/sria-annual-team-gathering.jpg"
      />

      {/* ── Stats ── */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label, Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4 pl-5 border-l-2 border-orange-400"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 leading-none">{value}</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture Statement ── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
        />
        {/* Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

        {/* Large decorative quote */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[200px] font-serif leading-none text-white/[0.025] pointer-events-none select-none">"</div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-5">Our Culture</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              More Than a Workplace —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                A Community
              </span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mx-auto mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed">
              At SRIA, we believe great work is built on great relationships. From team lunches to global summits — every moment brings us closer and drives our shared mission of digital excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-500 font-semibold tracking-widest uppercase text-xs mb-2">Photo & Video Gallery</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Moments We Treasure</h2>
              <div className="h-0.5 w-10 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full mt-3" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-xs md:text-right max-w-xs leading-relaxed"
            >
              Hover grouped cards to preview · hover videos to play with sound · click to open
            </motion.p>
          </div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide"
          >
            {categories.map(cat => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${active
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-slate-50 border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                >
                  {cat}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center ${active ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                    }`}>
                    {countFor(cat)}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Bento grid (All) / Uniform grid (category filter) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className={
                activeCategory === "All"
                  ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[210px] gap-3 grid-flow-dense"
                  : "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[240px] gap-3"
              }
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.28, delay: Math.min(i * 0.04, 0.3) }}
                  className={activeCategory === "All" ? getBentoClass(item) : ""}
                >
                  <GalleryCard item={item} onOpen={openLightbox} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-slate-400">
              <Camera className="w-10 h-10 mx-auto mb-3 opacity-25" />
              <p className="text-sm">Nothing here yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block text-orange-400 font-semibold tracking-widest uppercase text-xs mb-4">Join Our Team</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-5">
              Be Part of Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Story</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              We're always looking for passionate people who want to make an impact. Explore opportunities to grow with a team that cares.
            </p>
            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-sm transition-colors shadow-xl shadow-orange-500/25"
              >
                Explore Careers <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Lightbox state={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
};

export default Gallery;
