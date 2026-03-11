import React, { ReactNode } from "react";

const IconWrapper = ({ children }: { children: ReactNode }) => (
  <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[6px] bg-[#18181b] border border-[#27272a] text-[#a1a1aa] shadow-sm">
    {children}
  </div>
);

const SearchIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
  </svg>
);

const MoonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);

const CodeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const LightbulbIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
    <path d="M12 18h.01"></path>
  </svg>
);

const LinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const MailIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const MaleIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="10" cy="14" r="5"></circle>
    <path d="M19 5v5"></path>
    <path d="M14 5h5"></path>
    <path d="m14 10 5-5"></path>
  </svg>
);

const VerifiedIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#3b82f6"
    className="text-blue-500"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      fill="#fff"
      transform="scale(0.8) translate(3,3)"
    />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const SpeakerIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-zinc-400"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
  </svg>
);

// --- Main Page Component ---
const Page = () => {
  return (
    // Outer container with faint dot pattern
    <div
      className="min-h-screen bg-[#09090b] text-zinc-300 font-sans flex justify-center relative"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Main Column Grid */}
      <div className="w-full max-w-[1000px] border-x border-[#1e1e20] bg-[#09090b] relative z-10 flex flex-col">
        {/* Header Navigation */}
        <header className="h-[52px] border-b border-[#1e1e20] flex items-center justify-end px-6 gap-6 text-sm">
          <nav className="flex items-center gap-5 font-medium">
            <a href="#" className="text-zinc-50">
              Home
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              Components
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              Blocks
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              Blog
            </a>
          </nav>

          <div className="flex items-center gap-4 border-l border-[#1e1e20] pl-6">
            {/* Search Box */}
            <button className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-md px-2.5 py-1.5 text-xs text-zinc-400 hover:border-zinc-700 transition-colors">
              <SearchIcon />
              <div className="flex items-center gap-1 ml-1">
                <span className="bg-[#27272a] text-[10px] px-1.5 py-0.5 rounded text-zinc-300 leading-none">
                  Ctrl
                </span>
                <span className="bg-[#27272a] text-[10px] px-1.5 py-0.5 rounded text-zinc-300 leading-none">
                  K
                </span>
              </div>
            </button>

            {/* GitHub Stat */}
            <a
              href="#"
              className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm"
            >
              <GithubIcon />
              <span className="font-medium">1.5k</span>
            </a>

            {/* Theme Divider & Toggle */}
            <div className="h-4 w-px bg-[#27272a]"></div>
            <button className="text-zinc-400 hover:text-zinc-300">
              <MoonIcon />
            </button>
          </div>
        </header>

        {/* Hero Area with CD Logo */}
        <section
          className="h-[280px] border-b border-[#1e1e20] relative flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
          }}
        >
          {/* Custom Pixelated CD Logo */}
          <div className="relative w-[100px] h-[50px] flex gap-2 z-10">
            {/* 'C' shape */}
            <div className="relative w-[46px] h-full">
              <div className="absolute left-0 top-0 bottom-0 w-[12px] bg-white rounded-[2px]"></div>
              <div className="absolute left-[12px] top-0 w-[22px] h-[12px] bg-white rounded-[2px]"></div>
              <div className="absolute left-[12px] bottom-0 w-[22px] h-[12px] bg-white rounded-[2px]"></div>
            </div>
            {/* 'D' shape */}
            <div className="relative w-[46px] h-full">
              <div className="absolute left-0 top-0 bottom-0 w-[12px] bg-white rounded-[2px]"></div>
              <div className="absolute left-[12px] top-0 w-[22px] h-[12px] bg-white rounded-[2px]"></div>
              <div className="absolute right-0 top-[12px] bottom-[12px] w-[12px] bg-white rounded-[2px]"></div>
              <div className="absolute left-[12px] bottom-0 w-[34px] h-[12px] bg-white rounded-[2px]"></div>
            </div>
          </div>
        </section>

        {/* Profile Info Section */}
        <section className="flex border-b border-[#1e1e20]">
          {/* Avatar Area */}
          <div className="w-[300px] border-r border-[#1e1e20] flex items-center justify-center py-8">
            <div className="w-40 h-40 rounded-full border border-[#27272a] overflow-hidden bg-[#18181b]">
              {/* Using a generic placeholder that visually resembles the anime style avatar's color palette */}
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix&backgroundColor=f5e6d3"
                alt="Profile"
                className="w-full h-full object-cover opacity-80"
                style={{
                  filter: "sepia(0.3) hue-rotate(-20deg) contrast(1.1)",
                }} // Faux filter to mimic image tone
              />
            </div>
          </div>

          {/* Text Info Area */}
          <div className="flex-1 flex flex-col justify-center px-10">
            <div className="pb-5 border-b border-[#1e1e20]">
              <div className="font-mono text-[11px] text-[#52525b] mb-1.5 opacity-80">
                text-3xl text-zinc-50 font-medium
              </div>
              <h1 className="text-3xl text-zinc-50 font-medium flex items-center gap-2.5">
                Chánh Đại
                <VerifiedIcon />
                <SpeakerIcon />
              </h1>
            </div>
            <div className="pt-5 text-[15px] text-[#a1a1aa] font-mono tracking-tight">
              Creating with code. Small details matter.
            </div>
          </div>
        </section>

        {/* Hatched Separator */}
        <div
          className="h-[30px] border-b border-[#1e1e20]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #111113 0, #111113 1px, transparent 1px, transparent 6px)",
          }}
        ></div>

        {/* Details Grid Section */}
        <section className="p-10 font-mono text-[13px] text-[#d4d4d8]">
          <div className="grid grid-cols-[1fr_1fr] gap-y-4 gap-x-12 max-w-[800px]">
            {/* Left Column Items */}
            <div className="flex items-center gap-3.5">
              <IconWrapper>
                <CodeIcon />
              </IconWrapper>
              <span>
                Design Engineer <span className="text-zinc-50">@Shadcraft</span>
              </span>
            </div>

            {/* Empty space for grid alignment offset */}
            <div></div>

            <div className="flex items-center gap-3.5">
              <IconWrapper>
                <LightbulbIcon />
              </IconWrapper>
              <span>
                Founder <span className="text-zinc-50">@Quaric</span>
              </span>
            </div>

            {/* Empty space */}
            <div></div>

            <div className="flex items-center gap-3.5">
              <IconWrapper>
                <MapPinIcon />
              </IconWrapper>
              <span>Ho Chi Minh City, Viet Nam</span>
            </div>

            {/* Right Column starts aligning here */}
            <div className="flex items-center gap-3.5">
              <IconWrapper>
                <ClockIcon />
              </IconWrapper>
              <span>
                10:25 <span className="text-zinc-500">//</span> 1h ahead
              </span>
            </div>

            <div className="flex items-center gap-3.5">
              <IconWrapper>
                <PhoneIcon />
              </IconWrapper>
              <span>+84 777 888 148</span>
            </div>

            <div className="flex items-center gap-3.5">
              <IconWrapper>
                <MailIcon />
              </IconWrapper>
              <span>dai@chanhdai.com</span>
            </div>

            <div className="flex items-center gap-3.5">
              <IconWrapper>
                <LinkIcon />
              </IconWrapper>
              <span>chanhdai.com</span>
            </div>

            <div className="flex items-center gap-3.5">
              <IconWrapper>
                <MaleIcon />
              </IconWrapper>
              <span>he/him</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
