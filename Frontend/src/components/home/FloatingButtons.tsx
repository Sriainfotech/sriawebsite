import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Share2 } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import axiosInstance from "@/lib/axios";

const FloatingButtons = () => {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [totalVisits, setTotalVisits] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance.get('/analytics')
      .then(res => {
        const { totalVisits } = res.data;
        if (totalVisits !== undefined) {
          setTotalVisits(Number(totalVisits).toLocaleString());
        }
      })
      .catch(() => { });
  }, []);

  // Use refs for tap counters to persist across renders
  const phoneTapRef = useRef(0);
  const mailTapRef = useRef(0);
  const shareTapRef = useRef(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handlePhoneTap = () => {
    if (!isMobile) {
      window.location.href = "tel:+919059585039";
      return;
    }

    phoneTapRef.current++;
    if (phoneTapRef.current === 1) {
      setPhoneOpen(!phoneOpen);
      setTimeout(() => (phoneTapRef.current = 0), 350);
    } else if (phoneTapRef.current === 2) {
      window.location.href = "tel:+919059585039";
      phoneTapRef.current = 0;
    }
  };

  const handleMailTap = () => {
    if (!isMobile) {
      window.location.href = "mailto:hr@sriainfotech.com";
      return;
    }

    mailTapRef.current++;
    if (mailTapRef.current === 1) {
      setMailOpen(!mailOpen);
      setTimeout(() => (mailTapRef.current = 0), 350);
    } else if (mailTapRef.current === 2) {
      window.location.href = "mailto:hr@sriainfotech.com";
      mailTapRef.current = 0;
    }
  };

  const handleShareTap = () => {
    if (!isMobile) return;

    shareTapRef.current++;
    if (shareTapRef.current === 1) {
      setShareOpen(!shareOpen);
      setTimeout(() => (shareTapRef.current = 0), 350);
    } else if (shareTapRef.current === 2) {
      if (navigator.share) {
        navigator.share({
          title: "Website",
          url: "https://www.sriainfotech.com/",
        });
      }
      shareTapRef.current = 0;
    }
  };

  return (
    <div className="flex fixed right-2 top-[38%] sm:top-1/4 z-50 flex-col gap-3 items-end">

      {/* Visitor Count — hidden on phones to avoid overlapping hero content;
          the interactive contact buttons below stay visible everywhere. */}
      {/* {totalVisits && (
        <div className="hidden sm:flex bg-black/60 backdrop-blur-sm rounded-md shadow-lg items-center gap-2 px-3 py-3">
          <span className="text-white text-[15px] font-bold leading-none">{totalVisits}</span>
          <span className="text-white/50 text-[10px] leading-none">Visits</span>
        </div>
      )} */}

      {/* IVC — hidden on phones, same reason as above */}
      {/* <a
        href="https://ivcsol.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex bg-white backdrop-blur-sm w-auto h-16 rounded-md shadow-lg hover:bg-black/30 hover:scale-105 transition overflow-hidden items-center justify-center"
      >
        <img
          src='https://ik.imagekit.io/hps6th7vy/sria/ivclogo.png?tr=f-auto,q-auto,w-320'
          srcSet="https://ik.imagekit.io/hps6th7vy/sria/ivclogo.png?tr=f-auto,q-auto,w-160 160w, https://ik.imagekit.io/hps6th7vy/sria/ivclogo.png?tr=f-auto,q-auto,w-320 320w"
          sizes="120px"
          alt="IVC"
          width={120}
          height={80}
          loading="lazy"
          decoding="async"
          className="h-20 max-w-none object-contain"
        />
      </a> */}

      {/* BSNL */}
      {/* <Link
        to="/partners/bsnl"
        title="Official Skill Solution Partner"
        aria-label="BSNL — Official Skill Solution Partner"
        className="bg-white backdrop-blur-sm w-auto h-16 rounded-md shadow-lg hover:bg-black/30 hover:scale-105 transition overflow-hidden flex items-center justify-center p-2"
      >
        <img
          src="https://ik.imagekit.io/hps6th7vy/sria/logos/bsnl.png?tr=f-auto,q-auto,w-2000"
          alt="BSNL"
          className="h-full max-w-none object-contain"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            t.parentElement!.insertAdjacentHTML(
              "afterbegin",
              '<span class="text-orange-600 font-bold text-xs">BSNL</span>'
            );
          }}
        />
      </Link> */}

      {/* PHONE */}
      {/* Smaller footprint on mobile (h-11/w-11 vs h-12/w-12 at sm+) — matches
          the WhatsApp button's own mobile/desktop split in Layout.tsx
          (w-8 h-8 sm:w-14 sm:h-14). Fixed-position buttons never move with
          scroll, so on narrow phones an undersized-for-mobile footprint here
          was overlapping whatever content happened to scroll past top-[38%].
          Kept at 44px (Tailwind's 11 = 2.75rem) rather than smaller, since
          that's the minimum accessible touch-target size. */}
      <button
        type="button"
        aria-label="Call Sria Infotech: +91 90595 85039"
        className={`
 bg-orange-500 h-11 sm:h-12 flex items-center shadow-lg rounded-md transition-all duration-500 ease-in-out overflow-hidden cursor-pointer
 ${phoneOpen ? "w-[160px] sm:w-[180px]" : "w-11 sm:w-12"}
 `}
        onMouseEnter={() => !isMobile && setPhoneOpen(true)}
        onMouseLeave={() => !isMobile && setPhoneOpen(false)}
        onClick={handlePhoneTap}
      >
        <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 text-white">
          <Phone size={isMobile ? 16 : 22} />
        </div>

        <div className={`whitespace-nowrap text-white font-medium pr-4 text-sm transition-opacity duration-300 ${phoneOpen ? "opacity-100" : "opacity-0"}`}>
          +91 90595 85039
        </div>
      </button>

      {/* MAIL */}
      <button
        type="button"
        aria-label="Email Sria Infotech: hr@sriainfotech.com"
        className={`
 bg-orange-500 h-11 sm:h-12 flex items-center shadow-lg rounded-md transition-all duration-500 ease-in-out overflow-hidden cursor-pointer
 ${mailOpen ? "w-[220px] sm:w-[240px]" : "w-11 sm:w-12"}
 `}
        onMouseEnter={() => !isMobile && setMailOpen(true)}
        onMouseLeave={() => !isMobile && setMailOpen(false)}
        onClick={handleMailTap}
      >
        <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 text-white">
          <Mail size={isMobile ? 16 : 22} />
        </div>

        <div className={`whitespace-nowrap text-white font-medium pr-2 text-sm transition-opacity duration-300 ${mailOpen ? "opacity-100" : "opacity-0"}`}>
          hr@sriainfotech.com
        </div>
      </button>

      {/* SHARE */}
      <div
        className={`
 bg-orange-500 h-11 sm:h-12 flex items-center shadow-lg rounded-md transition-all duration-500 ease-in-out overflow-hidden
 ${shareOpen ? "w-[200px]" : "w-11 sm:w-12"}
 `}
        onMouseEnter={() => !isMobile && setShareOpen(true)}
        onMouseLeave={() => !isMobile && setShareOpen(false)}
      >
        <button
          type="button"
          aria-label="Share this website"
          aria-expanded={shareOpen}
          onClick={handleShareTap}
          className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 text-white cursor-pointer"
        >
          <Share2 size={isMobile ? 16 : 22} />
        </button>

        <div className={`flex gap-4 items-center transition-opacity duration-300 ${shareOpen ? "opacity-100" : "opacity-0"}`}>
          <div className="flex justify-center gap-4 text-lg text-white">

            <a
              href="https://www.linkedin.com/company/sria-infotech-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sria Infotech on LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" className="text-white hover:text-orange-400 cursor-pointer" />
            </a>

            <a
              href="https://www.facebook.com/sriainfotech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sria Infotech on Facebook"
            >
              <FaFacebookF aria-hidden="true" className="text-white hover:text-orange-400 cursor-pointer" />
            </a>

            <a
              href="https://www.youtube.com/@SriaInfotech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sria Infotech on YouTube"
            >
              <FaYoutube aria-hidden="true" className="text-white hover:text-orange-400 cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/risewithsria/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sria Infotech on Instagram"
            >
              <FaInstagram aria-hidden="true" className="text-white hover:text-orange-400 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;

