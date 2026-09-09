import { useState, useMemo, useEffect } from "react";
import kitImg1 from "../assets/images/kit1.jpeg";
import kitImg2 from "../assets/images/kit2.jpeg";
import kitImg3 from "../assets/images/kit3.jpeg";
import kitImg4 from "../assets/images/kit4.jpeg";
import kitImg5 from "../assets/images/kit5.jpeg";
import kitImg6 from "../assets/images/kit6.jpeg";
import kitImg7 from "../assets/images/kit7.jpeg";
import kitImg8 from "../assets/images/kit8.jpeg";
import kitImg9 from "../assets/images/kit9.jpeg";
import kitImg10 from "../assets/images/kit10.png";
import kitImg11 from "../assets/images/kit11.jpeg";
import kitImg12 from "../assets/images/kit12.jpeg";
import kitImg13 from "../assets/images/kit13.jpeg";
import kitImg14 from "../assets/images/kit14.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ZoomIn, ChevronLeft, ChevronRight, Play, Pause, 
  Globe, Grid, Search, Zap, Cpu, Maximize2, Sparkles, Activity,
  Camera, Package
} from "lucide-react";

// ── EVENTS GALLERY DATA ──
// Add new event images here — each entry becomes a card in the Events Gallery
const EVENT_IMAGES = [
  {
    id: "e1",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851959/PXL_20240518_020921708_sfxwvi.jpg",
    title: "IoT Workshop 2024",
    category: "Event",
    desc: "Hands-on IoT kit assembly session with students at CIoT lab.",
    sticker: "LATEST",
    specs: "CIoT • MITS Gwalior",
  },
  {
    id: "e2",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851957/PXL_20240518_020501876_ikao5n.jpg",
    title: "Embedded Systems Bootcamp",
    category: "Event",
    desc: "Intensive embedded systems training covering RTOS and firmware.",
    specs: "ESP32 • RTOS",
  },
  {
    id: "e3",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851957/PXL_20240518_020515651_vdbbwz.jpg",
    title: "Smart Agriculture Demo Day",
    category: "Event",
    desc: "Live demonstration of LoRaWAN-based precision agriculture nodes.",
    sticker: "FEATURED",
    specs: "LoRaWAN • Soil Sensors",
  },
  {
    id: "e4",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851956/IMG20240521104259_bfgtov.jpg",
    title: "Industry 4.0 Seminar",
    category: "Event",
    desc: "Expert talks on Industry 4.0, digital twins, and smart factories.",
    specs: "Digital Twin • OPC-UA",
  },
  {
    id: "e5",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851955/PXL_20240517_054048850.PORTRAIT_l1rght.jpg",
    title: "Robotics Challenge 2024",
    category: "Event",
    desc: "Inter-college robotics competition featuring autonomous navigation bots.",
    sticker: "HOT!",
    specs: "ROS 2 • LiDAR",
  },
  {
    id: "e6",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851949/PXL_20240518_020234463_gkviv6.jpg",
    title: "Edge AI Hackathon",
    category: "Event",
    desc: "24-hour hackathon for building AI-powered edge applications.",
    sticker: "WOW!",
    specs: "Jetson Nano • YOLOv8",
  },
  {
    id: "e7",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851949/PXL_20240517_052931102_lscxze.jpg",
    title: "PCB Design Sprint",
    category: "Event",
    desc: "Sprint workshop on custom PCB design using KiCAD.",
    specs: "KiCAD 8 • SMD",
  },
  {
    id: "e8",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851947/PXL_20240518_015640104_unmnjm.jpg",
    title: "Smart Campus Expo",
    category: "Event",
    desc: "Annual expo showcasing student-built smart campus IoT solutions.",
    sticker: "POPULAR",
    specs: "MQTT • Node-RED",
  },
  {
    id: "e9",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851940/PXL_20240517_052540680_fyenu2.jpg",
    title: "Vision AI Lab Opening",
    category: "Event",
    desc: "Inauguration of the new Computer Vision and Edge AI lab at MITS.",
    sticker: "NEW",
    specs: "Jetson AGX • CUDA 12",
  },
  {
    id: "e10",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851937/PXL_20240517_052332292_s8vzqs.jpg",
    title: "Predictive Maintenance Workshop",
    category: "Event",
    desc: "Practical workshop on vibration analysis for industrial predictive maintenance.",
    specs: "10kHz Sampling • AI",
  },
  {
    id: "e11",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851934/PXL_20240517_042927120_vxd1za.jpg",
    title: "Cloud IoT Summit",
    category: "Event",
    desc: "Half-day summit on cloud IoT architectures with AWS and Azure.",
    specs: "AWS IoT • Azure",
  },
  {
    id: "e12",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851930/PXL_20240517_040449401_lwaqk4.jpg",
    title: "Open Lab Day",
    category: "Event",
    desc: "Open-house day where students showcased their semester projects.",
    sticker: "FEATURED",
    specs: "CIoT • Open House",
  },
  {
    id: "e13",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851925/IMG_20240521_110500_t25aj7.jpg",
    title: "Firmware Foundations Course",
    category: "Event",
    desc: "Deep-dive into bare-metal firmware programming for ARM Cortex-M.",
    specs: "ARM Cortex-M • C",
  },
  {
    id: "e14",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851924/IMG_8789_k3t3p4.jpg",
    title: "Annual Techfest 2024",
    category: "Event",
    desc: "MITS annual techfest featuring IoT pavilion, demos and competitions.",
    sticker: "HOT!",
    specs: "MITS Gwalior • 2024",
  },
  {
    id: "e15",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851915/IMG_8797_kg8hpo.jpg",
    title: "Hardware Hackathon",
    category: "Event",
    desc: "Students building and prototyping new IoT devices.",
    specs: "IoT • Hardware",
  },
  {
    id: "e16",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851915/IMG_8794_nqixc0.jpg",
    title: "AI in Edge Devices",
    category: "Event",
    desc: "Session on integrating AI models with edge devices.",
    specs: "Edge AI • TensorFlow",
  },
  {
    id: "e17",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851909/20240521_112814_ndfnz9.jpg",
    title: "Student Showcase",
    category: "Event",
    desc: "Exhibition of final year projects and IoT innovations.",
    specs: "Exhibition • Showcase",
  },
  {
    id: "e18",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851908/20240521_110825_eep1rw.jpg",
    title: "Advanced Robotics Workshop",
    category: "Event",
    desc: "Hands-on session with advanced robotic arms and mobility platforms.",
    specs: "Robotics • Workshop",
  },
  {
    id: "e19",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851908/20240521_112224_skmje1.jpg",
    title: "Networking and IoT",
    category: "Event",
    desc: "Seminar on communication protocols for IoT devices.",
    specs: "Networking • Protocols",
  },
  {
    id: "e20",
    src: "https://res.cloudinary.com/dwumernfk/image/upload/v1788851921/IMG_20240521_105948_rixtni.jpg",
    title: "Lab Tour",
    category: "Event",
    desc: "Guided tour of the CIoT lab facilities and equipment.",
    specs: "Tour • CIoT",
  }
];

// ── KIT GALLERY DATA ──
// Add new kit images here — each entry becomes a card in the Kits Gallery
const KIT_IMAGES = [
  {
    id: 1,
    src: kitImg1,
    title: "IoT Application Kit (IAK-01)",
    category: "IoT",
    desc: "ESP32 extension board with Raspberry Pi Pico, gas sensors (MQ-2, MQ-9, MQ-135), PM sensor, OLED display, and LED panel.",
    sticker: "FEATURED",
    specs: "ESP32 • Raspberry Pi Pico • Sensors",
  },
  {
    id: 2,
    src: kitImg2,
    title: "Wildlife Animal Detection Kit",
    category: "Edge AI",
    desc: "Raspberry Pi 5 based wildlife detection system with 7-inch touchscreen, GPS, PIR sensor, ultrasonic, and relay module.",
    sticker: "NEW",
    specs: "Raspberry Pi 5 • GPS • Computer Vision",
  },
  {
    id: 3,
    src: kitImg3,
    title: "IoT Innovator Kit – Foundation (IIK-02)",
    category: "IoT",
    desc: "Comprehensive IoT learning kit with ESP32 + Raspberry Pi, featuring multiple sensors: PIR, Flame, Air Quality, Ultrasonic, Soil Moisture, OLED and more.",
    sticker: "POPULAR",
    specs: "ESP32 • Raspberry Pi • Multi-Sensor",
  },
  {
    id: 4,
    src: kitImg4,
    title: "IoT Innovator Kit – Foundation (Open View)",
    category: "IoT",
    desc: "Open-box view of the IIK-02 kit showing detailed sensor layout, ESP32 extension board, and comprehensive pin configuration guide.",
    specs: "ESP32 • Raspberry Pi • Foundation",
  },
  {
    id: 5,
    src: kitImg5,
    title: "Embedded Motor Control – BLDC & Servo",
    category: "Robotics",
    desc: "LiPo battery powered BLDC motor control kit with ESC and servo motor modules for drone and robotics learning.",
    specs: "BLDC • ESC • LiPo • Servo",
  },
  {
    id: 6,
    src: kitImg6,
    title: "Embedded Motor Control – DC Motors",
    category: "Robotics",
    desc: "Raspberry Pi Pico W based DC motor control kit featuring L298N driver, relay module, and bulb holder for embedded motor learning.",
    sticker: "HOT!",
    specs: "L298N • DC Motor 24V/3V • Relay",
  },
  {
    id: 7,
    src: kitImg7,
    title: "Microcontroller & Driver Circuits Kit",
    category: "Robotics",
    desc: "Advanced motor driver board with DRV8825, BTS7960B, TFT display, NodeMCU expansion, touch sensor, IR sensor, and stepper control.",
    specs: "DRV8825 • BTS7960B • TFT • NodeMCU",
  },
  {
    id: 8,
    src: kitImg8,
    title: "Embedded Vision Kit (CV-1)",
    category: "Edge AI",
    desc: "Raspberry Pi 5 powered computer vision kit with 6-channel relay, Pan-Tilt bracket, camera capability, stepper motor, and 64-bit LED matrix.",
    sticker: "FEATURED",
    specs: "Raspberry Pi 5 • Camera • Vision • CV-1",
  },
  {
    id: 9,
    src: kitImg9,
    title: "IoT Starter Kit – Foundation (ISK-01)",
    category: "IoT",
    desc: "Entry-level IoT kit with Arduino UNO & Nano, featuring digital and analog sensors, relay module, joystick, sound sensor, and soil moisture sensor.",
    specs: "Arduino UNO • Arduino Nano • Sensors",
  },
  {
    id: 10,
    src: kitImg10,
    title: "IoT Starter Kit – Complete Set",
    category: "IoT",
    desc: "Complete open-box view of ISK-01 showing the full sensor layout, pin configuration diagrams for Arduino UNO and Arduino Nano.",
    sticker: "POPULAR",
    specs: "Arduino UNO • Nano • ISK-01",
  },
  {
    id: 11,
    src: kitImg11,
    title: "IoT Starter Kit – Foundation (Top View)",
    category: "IoT",
    desc: "Close-up top view of ISK-01 foundation kit showing digital sensors row, relay module, push button, LDR, joystick, and MQ-2 gas sensor.",
    specs: "Digital Sensors • Analog Sensors • LED",
  },
  {
    id: 12,
    src: kitImg12,
    title: "IoT Communication Kit – Transmitter (ICK-01)",
    category: "Wireless",
    desc: "Wireless communication learning kit with LoRa SX1278, ZigBee, Bluetooth, GSM, NRF24L01, GPS module, RFID, and RF-433 transmitter modules.",
    sticker: "NEW",
    specs: "LoRa • ZigBee • GSM • BT • RFID • ICK-01",
  },
  {
    id: 13,
    src: kitImg13,
    title: "Vehicle Anti-Theft & Access Control",
    category: "Edge AI",
    desc: "Raspberry Pi 4 based intelligent vehicle anti-theft system using facial recognition with 7-inch touchscreen, GPS, solenoid lock, and PIR sensor.",
    specs: "Raspberry Pi 4 • Face Recognition • GPS",
  },
  {
    id: 14,
    src: kitImg14,
    title: "IoT Smart Attendance System",
    category: "Edge AI",
    desc: "Raspberry Pi 5 powered smart attendance system with 7-inch touchscreen display, RFID reader, DHT22 sensor, PIR, relay module, and ultrasonic sensor.",
    sticker: "LATEST",
    specs: "Raspberry Pi 5 • RFID • Attendance",
  },
];

export default function GalleryPage() {
  // ── Section tab state (events | kits) ──
  const [activeSection, setActiveSection] = useState("events"); // "events" | "kits"

  const [viewMode, setViewMode] = useState("bento"); // 'globe' (3D animation) or 'bento'
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Derive the active image dataset based on current section
  const ALL_IMAGES = activeSection === "events" ? EVENT_IMAGES : KIT_IMAGES;

  // Compute unique categories for the active section
  const CATEGORIES = useMemo(() => {
    return ["All", ...new Set(ALL_IMAGES.map((img) => img.category))];
  }, [ALL_IMAGES]);

  const [activeFilter, setActiveFilter] = useState("All");

  // Reset filters & lightbox when switching sections
  const handleSectionChange = (section) => {
    if (section === activeSection) return;
    setActiveSection(section);
    setActiveFilter("All");
    setSearchQuery("");
    setLightboxIdx(null);
    setViewMode("bento");
  };

  // Filter & Search Logic
  const filteredImages = useMemo(() => {
    return ALL_IMAGES.filter((img) => {
      const matchesCategory = activeFilter === "All" || img.category === activeFilter;
      const matchesSearch = 
        img.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        img.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [ALL_IMAGES, activeFilter, searchQuery]);

  // Triple datasets for 360 seamless scrolling marquee in Globe View
  const row1 = useMemo(() => [...filteredImages, ...filteredImages, ...filteredImages], [filteredImages]);
  const row2 = useMemo(() => [...filteredImages.slice().reverse(), ...filteredImages.slice().reverse(), ...filteredImages.slice().reverse()], [filteredImages]);
  const row3 = useMemo(() => [...filteredImages, ...filteredImages, ...filteredImages], [filteredImages]);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImg = () => setLightboxIdx((i) => (i - 1 + filteredImages.length) % filteredImages.length);
  const nextImg = () => setLightboxIdx((i) => (i + 1) % filteredImages.length);

  // Lock body scroll and handle keyboard navigation when Lightbox is open
  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") prevImg();
        if (e.key === "ArrowRight") nextImg();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [lightboxIdx, filteredImages.length]);

  return (
    <div className="min-h-screen bg-[#FFF2E5] text-gray-900 overflow-x-hidden pt-24 pb-20 selection:bg-accent/20 selection:text-gray-900 relative">
      
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(30,58,138,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      {/* ── HEADER SECTION ── */}
      <section className="relative px-6 pt-4 pb-4 text-center z-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-3" style={{ background: "rgba(30,58,138,0.08)", borderColor: "rgba(30,58,138,0.22)", color: "#1e3a8a" }}>
            <Sparkles size={13} className="text-accent" />
            Lab Visual Showcase
          </span>
          <h1 className="font-extrabold text-4xl sm:text-5xl tracking-tight text-gray-900 mb-2">
            Inside the{" "}
            <span className="text-accent">IoTify Lab</span>
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm max-w-lg mx-auto">
            Explore hardware setups, research prototypes and IoT kit deployments developed at CIoT, MITS Gwalior.
          </p>
        </motion.div>

        {/* Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-5 py-2.5 px-5 rounded-2xl max-w-sm mx-auto text-xs font-medium text-gray-600"
          style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(17,24,39,0.09)" }}
        >
          <div className="flex items-center gap-2">
            <Activity size={13} className="text-blue-800" />
            <span>STATUS: <strong className="text-gray-900">ONLINE</strong></span>
          </div>
          <div className="w-px h-3.5 bg-gray-200" />
          <div>ITEMS: <strong className="text-accent">{filteredImages.length}</strong></div>
        </motion.div>
      </section>

      {/* ── EVENTS / KITS TAB NAVIGATION ── */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative z-20 flex flex-col items-center gap-2 px-6 pb-2"
      >
        <div
          className="flex items-center gap-1 p-1 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(17,24,39,0.10)",
            boxShadow: "0 2px 10px rgba(17,24,39,0.06)",
          }}
          role="tablist"
          aria-label="Gallery sections"
        >
          <button
            id="tab-events"
            role="tab"
            aria-selected={activeSection === "events"}
            aria-controls="panel-events"
            onClick={() => handleSectionChange("events")}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeSection === "events"
                ? "bg-accent text-white shadow-md"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <Camera size={15} />
            <span>Events</span>
          </button>

          <button
            id="tab-kits"
            role="tab"
            aria-selected={activeSection === "kits"}
            aria-controls="panel-kits"
            onClick={() => handleSectionChange("kits")}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeSection === "kits"
                ? "bg-accent text-white shadow-md"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <Package size={15} />
            <span>Kits</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeSection}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-gray-500 font-medium tracking-wide"
          >
            {activeSection === "events"
              ? "Workshops, demos, hackathons & more from CIoT labs"
              : "IoTify & MITS IoT kits — hardware setups and prototypes"}
          </motion.p>
        </AnimatePresence>
      </motion.section>

      {/* ── CONTROL PANEL & BAR ── */}
      <section className="sticky top-20 z-30 px-6 py-3" style={{ background: "rgba(255,242,229,0.96)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(17,24,39,0.08)", borderBottom: "1px solid rgba(17,24,39,0.08)" }}>
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* View Switcher & Search */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            
            {/* View Mode Toggle */}
            <div className="flex rounded-xl p-1" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(17,24,39,0.10)" }}>
              <button
                onClick={() => setViewMode("globe")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "globe"
                    ? "bg-accent text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Globe size={13} />
                <span>3D View</span>
              </button>
              <button
                onClick={() => setViewMode("bento")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "bento"
                    ? "bg-accent text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Grid size={13} />
                <span>Grid View</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative flex-grow max-w-xs">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={activeSection === "events" ? "Search events..." : "Search kits or categories..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search gallery"
                className="w-full rounded-xl pl-9 pr-8 py-2 text-xs text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(17,24,39,0.10)" }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" aria-label="Clear search">
                  <X size={12} />
                </button>
              )}
            </div>
          </div>



          {/* Pause / Play Button for Globe */}
          {viewMode === "globe" && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-accent/40 text-accent hover:bg-cyan-950/50 transition-all text-xs font-semibold shadow-[0_0_10px_rgba(30,58,138,0.15)]"
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlaying ? "Pause" : "Rotate"}</span>
            </button>
          )}
        </div>
      </section>

      {/* ── MAIN DISPLAY AREA ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.26 }}
        >
      {viewMode === "globe" ? (
        /* ── MODE 1: 3D CYBER EARTH GLOBE WALL (MARQUEE) ── */
        <section className="relative py-8 overflow-hidden flex items-center justify-center min-h-[640px]">
          {/* Vignette Gradients — cream-based */}
          <div className="absolute inset-0 pointer-events-none z-20" style={{ background: "radial-gradient(ellipse at center, transparent 25%, rgba(255,242,229,0.92) 80%)" }} />
          <div className="absolute inset-y-0 left-0 w-40 pointer-events-none z-20" style={{ background: "linear-gradient(to right, #FFF2E5, transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-40 pointer-events-none z-20" style={{ background: "linear-gradient(to left, #FFF2E5, transparent)" }} />

          {/* 3D Barrel Transformation Canvas */}
          <div 
            className="w-full max-w-[1800px] px-2 transition-all duration-700"
            style={{
              perspective: "750px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            <div 
              className="flex flex-col gap-3.5 transform-gpu transition-all duration-500"
              style={{
                transform: "rotateX(6deg) rotateY(0deg) scale(0.92) translateZ(-40px)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Row 1 */}
              <div className="flex overflow-hidden relative w-full">
                <motion.div
                  className="flex gap-3.5 min-w-full flex-nowrap"
                  animate={{ x: isPlaying ? ["0%", "-33.33%"] : "0%" }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
                >
                  {row1.map((img, i) => (
                    <VideoCard key={`r1-${i}`} img={img} onClick={() => openLightbox(i % filteredImages.length)} />
                  ))}
                </motion.div>
              </div>

              {/* Row 2 */}
              <div className="flex overflow-hidden relative w-full">
                <motion.div
                  className="flex gap-3.5 min-w-full flex-nowrap"
                  animate={{ x: isPlaying ? ["-33.33%", "0%"] : "0%" }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
                >
                  {row2.map((img, i) => (
                    <VideoCard key={`r2-${i}`} img={img} onClick={() => openLightbox(i % filteredImages.length)} />
                  ))}
                </motion.div>
              </div>

              {/* Row 3 */}
              <div className="flex overflow-hidden relative w-full">
                <motion.div
                  className="flex gap-3.5 min-w-full flex-nowrap"
                  animate={{ x: isPlaying ? ["0%", "-33.33%"] : "0%" }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
                >
                  {row3.map((img, i) => (
                    <VideoCard key={`r3-${i}`} img={img} onClick={() => openLightbox(i % filteredImages.length)} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* ── MODE 2: MODERN BENTO GRID ── */
        <section className="relative px-6 py-8 mx-auto max-w-7xl z-10">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-gray-200 rounded-3xl bg-white/[0.01]">
              <p className="text-gray-600 text-sm">No items matching your filter/search criteria.</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <AnimatePresence>
                {filteredImages.map((img, idx) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.28 }}
                    onClick={() => openLightbox(idx)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "#FFFFFF", border: "1px solid rgba(17,24,39,0.10)", boxShadow: "0 2px 8px rgba(17,24,39,0.06)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(30,58,138,0.30)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(17,24,39,0.10)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(17,24,39,0.10)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(17,24,39,0.06)"; }}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                      
                      {img.sticker && (
                        <div className="absolute top-3 left-3 bg-accent text-white text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                          <Zap size={11} className="fill-black" />
                          {img.sticker}
                        </div>
                      )}

                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-cream-primary/70 border border-accent text-accent-light backdrop-blur-md">
                          <Maximize2 size={13} />
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full" style={{ background: "rgba(30,58,138,0.08)", color: "#1e3a8a", border: "1px solid rgba(30,58,138,0.20)" }}>
                          {img.category}
                        </span>
                        <span className="text-[10px] text-gray-400">{img.specs?.split('•')[0]?.trim()}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-accent transition-colors line-clamp-1">{img.title}</h3>
                      <p className="text-gray-500 text-xs mt-1 line-clamp-2">{img.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </section>
      )}
        </motion.div>
      </AnimatePresence>

      {/* ── CINEMATIC LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {lightboxIdx !== null && filteredImages[lightboxIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFF2E5]/97 backdrop-blur-2xl p-4 sm:p-6 overscroll-none select-none"
            onClick={closeLightbox}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-gray-900 hover:bg-white/20 transition-colors z-30"
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-gray-900 hover:bg-accent/20 hover:border-accent transition-colors z-30"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-gray-900 hover:bg-accent/20 hover:border-accent transition-colors z-30"
            >
              <ChevronRight size={22} />
            </button>

            {/* Preview Box Container */}
            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-4 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white" style={{boxShadow:"0 0 0 1px rgba(30,58,138,0.15)"}}>
                <img
                  src={filteredImages[lightboxIdx].src}
                  alt={filteredImages[lightboxIdx].title}
                  className="max-w-full max-h-[52vh] object-contain rounded-3xl"
                />
              </div>

              {/* HUD Details Bar */}
              <div className="text-center max-w-xl bg-white/90 border border-gray-200 p-4 rounded-3xl backdrop-blur-2xl shadow-2xl w-full">
                <div className="flex items-center justify-between gap-2 mb-2 border-b border-gray-200 pb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-[11px] font-mono font-semibold">
                    {filteredImages[lightboxIdx].category}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-accent">
                    <Cpu size={12} />
                    <span>{filteredImages[lightboxIdx].specs || "Lab Hardware Setup"}</span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-lg sm:text-xl">{filteredImages[lightboxIdx].title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 font-light">{filteredImages[lightboxIdx].desc}</p>
                <div className="text-[11px] text-gray-500 font-mono mt-3 pt-2 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-blue-800">SYSTEM: ONLINE</span>
                  <span className="text-accent">{lightboxIdx + 1} / {filteredImages.length}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── VIDEO CARD TILE COMPONENT (FOR 3D GLOBE VIEW) ──
function VideoCard({ img, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative flex-shrink-0 w-48 sm:w-52 h-32 sm:h-36 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 hover:z-30"
      style={{ border: "1px solid rgba(17,24,39,0.10)", background: "#FFFFFF", boxShadow: "0 4px 16px rgba(17,24,39,0.08)" }}
    >
      <img
        src={img.src}
        alt={img.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

      {img.sticker && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <motion.div
            animate={{ scale: [0.95, 1.08, 0.95] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="px-2.5 py-0.5 text-white font-bold text-xs tracking-wider uppercase rounded-full flex items-center gap-1"
            style={{ background: "#1e3a8a" }}
          >
            <Zap size={11} className="fill-current" />
            {img.sticker}
          </motion.div>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col justify-end p-2.5 z-10">
        <span className="self-start text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1" style={{ background: "rgba(30,58,138,0.12)", color: "#1e3a8a" }}>
          {img.category}
        </span>
        <h4 className="font-semibold text-white text-xs line-clamp-1">
          {img.title}
        </h4>
      </div>

      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/80 text-accent">
          <ZoomIn size={11} />
        </div>
      </div>
    </div>
  );
}