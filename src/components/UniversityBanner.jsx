const MITS_LOGO = "https://res.cloudinary.com/dwumernfk/image/upload/v1789034432/WhatsApp_Image_2026-09-10_at_14.29.00-removebg-preview_dwgnqm.png";

export default function UniversityBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] w-full flex items-center justify-between px-4 sm:px-6"
      style={{
        height: "68px",
        background: "#FFF2E5",
      }}
      aria-label="Madhav Institute of Technology & Science, Gwalior"
    >
      {/* Left Logo */}
      <img
        src={MITS_LOGO}
        alt="MITS Logo"
        className="h-12 w-auto object-contain shrink-0 hidden sm:block"
        draggable={false}
      />

      {/* Center — Text */}
      <div className="text-center leading-tight flex-1 px-2">
        <p
          className="font-semibold text-[12px] sm:text-[14px] text-[#1e3a8a]"
          style={{ fontFamily: "serif" }}
        >
          माधव प्रौद्योगिकी एवं विज्ञान संस्थान, ग्वालियर (म.प्र.), भारत
        </p>
        <p className="font-extrabold text-[12px] sm:text-[15px] text-[#1e3a8a] tracking-wide uppercase">
          Madhav Institute of Technology &amp; Science, Gwalior (M.P.), India
        </p>
        <p className="text-[9px] sm:text-[11px] text-gray-600 font-medium">
          <span className="font-semibold">Deemed University</span>
          {" · "}
          <span className="italic">Declared under Distinct Category by Ministry of Education, Govt. of India</span>
          {" · "}
          <span className="font-bold text-red-600 uppercase tracking-wide">NAAC A++</span>
        </p>
      </div>

      {/* Right Logo */}
      <img
        src={MITS_LOGO}
        alt="MITS Logo"
        className="h-12 w-auto object-contain shrink-0 hidden sm:block"
        draggable={false}
      />
    </div>
  );
}
