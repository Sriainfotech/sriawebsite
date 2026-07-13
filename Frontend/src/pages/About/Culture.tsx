import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

const eventPhotos = [
  {
    id: 1,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow1.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
  {
    id: 2,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow2.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
  {
    id: 3,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow3.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
  {
    id: 4,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow4.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
  {
    id: 5,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow5.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
  {
    id: 6,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow6.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
  {
    id: 7,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow7.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
  {
    id: 8,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow8.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
  {
    id: 9,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow9.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
  {
    id: 10,
    url: "https://ik.imagekit.io/hps6th7vy/sria/events/ow10.jpg?tr=f-auto,q-auto,w-2000",
    caption: "Office Inauguration – Mulugu",
  },
];

const Culture: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex(i => (i === null ? null : (i - 1 + eventPhotos.length) % eventPhotos.length));
  const next = () =>
    setLightboxIndex(i => (i === null ? null : (i + 1) % eventPhotos.length));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "Escape") closeLightbox();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <PageHeader
        title="Office Inauguration – Mulugu"
        subtitle="Celebrating the opening of our Mulugu office — a proud milestone for the SRIA family and the local community."
      />

      {/* Photo Grid */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <Camera className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">
            Mulugu Inauguration
          </span>
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-slate-500 text-sm">{eventPhotos.length} photos</span>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {eventPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.url}
                alt={`${photo.caption} – photo ${index + 1} of ${eventPhotos.length}`}
                className="w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium">{photo.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
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
              src={eventPhotos[lightboxIndex].url}
              alt={`${eventPhotos[lightboxIndex].caption} – photo ${lightboxIndex + 1} of ${eventPhotos.length}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
              onClick={e => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightboxIndex + 1} / {eventPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Culture;
