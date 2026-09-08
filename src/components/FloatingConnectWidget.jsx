import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, MessageCircle, X, ExternalLink, Sparkles } from "lucide-react";
import { WHATSAPP_GENERAL, whatsappLink } from "../lib/contact";

export default function FloatingConnectWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const YOUTUBE_URL = "https://youtube.com/@iotifylabmits?si=v3H9LDrcABtWdb4O";
  const WHATSAPP_URL = whatsappLink(WHATSAPP_GENERAL);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end pointer-events-auto select-none"
    >
      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-64 rounded-2xl p-2 shadow-2xl overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(17, 24, 39, 0.12)",
              boxShadow: "0 20px 40px -10px rgba(15, 118, 110, 0.25), 0 10px 20px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Header / Title */}
            <div className="px-3 py-2 border-b border-gray-100 mb-1 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                <Sparkles size={13} className="text-accent" />
                Connect With Us
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="flex flex-col gap-1">
              {/* WhatsApp Option */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition-all duration-200 group text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-900 group-hover:text-[#25D366] transition-colors flex items-center justify-between">
                    WhatsApp Chat
                    <ExternalLink size={12} className="text-gray-400 group-hover:text-[#25D366]" />
                  </div>
                  <div className="text-[11px] text-gray-500 truncate mt-0.5">
                    Instant CIoT support
                  </div>
                </div>
              </a>

              {/* YouTube Option */}
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-red-50 transition-all duration-200 group text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF0000] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                  <Youtube size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-900 group-hover:text-[#FF0000] transition-colors flex items-center justify-between">
                    YouTube Channel
                    <ExternalLink size={12} className="text-gray-400 group-hover:text-[#FF0000]" />
                  </div>
                  <div className="text-[11px] text-gray-500 truncate mt-0.5">
                    Lab tutorials & demos
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Marker Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full text-white flex items-center justify-center shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        style={{
          background: isOpen 
            ? "#1F2937" 
            : "linear-gradient(135deg, #0F766E 0%, #0D6860 100%)",
          boxShadow: "0 10px 25px -5px rgba(15, 118, 110, 0.4), 0 4px 10px -2px rgba(0, 0, 0, 0.1)",
        }}
        aria-label={isOpen ? "Close Connect Menu" : "Open Connect Menu"}
        title="Quick Connect Menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageCircle size={26} />
              {/* Subtle pulse ring */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
