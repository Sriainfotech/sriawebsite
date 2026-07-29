import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const events = [
  {
    id: "mulugu-inauguration",
    label: "Mulugu Inauguration",
    caption: "Office Inauguration – Mulugu",
    // Width kept at 1600 (ladder max) because this same URL also backs the
    // full-screen lightbox view; the masonry thumbnail below requests a
    // smaller rendition via its own srcset.
    photos: [
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow1.jpg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow2.jpg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow3.jpg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow4.jpg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow5.jpg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow6.jpg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow7.jpg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow8.jpg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow9.jpg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/events/ow10.jpg?tr=f-auto,q-auto,w-1600",
    ],
  },
  {
    id: "bsnl-partnership-signing",
    label: "BSNL Partnership Signing",
    caption: "BSNL Partnership Signing – Regional Telecom Training Centre",
    photos: [
      "https://ik.imagekit.io/hps6th7vy/sria/gallery/bsnl-partnership-signing-01.jpeg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/gallery/bsnl-partnership-signing-02.jpeg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/gallery/bsnl-partnership-signing-03.jpeg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/gallery/bsnl-partnership-signing-04.jpeg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/gallery/bsnl-partnership-signing-05.jpeg?tr=f-auto,q-auto,w-1600",
      "https://ik.imagekit.io/hps6th7vy/sria/gallery/bsnl-partnership-signing-06.jpeg?tr=f-auto,q-auto,w-1600",
    ],
  },
];

const IK = "ik.imagekit.io";
const withW = (url: string, w: number) => (url.includes(IK) ? url.replace(/w-\d+/, `w-${w}`) : url);
const ikSrcSet = (url: string, w1: number, w2: number) =>
  url.includes(IK) ? `${withW(url, w1)} ${w1}w, ${withW(url, w2)} ${w2}w` : undefined;

// Flat list across all events — keeps the lightbox navigable end-to-end.
const allPhotos = events.flatMap((event) =>
  event.photos.map((url) => ({ url, caption: event.caption }))
);

const Culture: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex(i => (i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length));
  const next = () =>
    setLightboxIndex(i => (i === null ? null : (i + 1) % allPhotos.length));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "Escape") closeLightbox();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <PageHeader
        title="Our Culture"
        subtitle="Moments from our offices, our people, and the communities we work alongside."
      />

      {events.map((event, eventIndex) => {
        const startIndex = events
          .slice(0, eventIndex)
          .reduce((sum, e) => sum + e.photos.length, 0);

        return (
          <section key={event.id} className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <Camera className="w-5 h-5 text-orange-400" />
              <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">
                {event.label}
              </span>
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-slate-500 text-sm">{event.photos.length} photos</span>
            </motion.div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {event.photos.map((url, index) => {
                const globalIndex = startIndex + index;
                return (
                  <motion.div
                    key={url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                    onClick={() => openLightbox(globalIndex)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openLightbox(globalIndex);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <img
                      src={withW(url, 480)}
                      srcSet={ikSrcSet(url, 480, 768)}
                      sizes={url.includes(IK) ? "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" : undefined}
                      alt={`${event.caption} – photo ${index + 1} of ${event.photos.length}`}
                      className="w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                      <span className="text-white text-sm font-medium">{event.caption}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              aria-label="Previous photo"
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={allPhotos[lightboxIndex].url}
              alt={`${allPhotos[lightboxIndex].caption} – photo ${lightboxIndex + 1} of ${allPhotos.length}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
              onClick={e => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              aria-label="Next photo"
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightboxIndex + 1} / {allPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Culture;
