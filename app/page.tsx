"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const fullText = "Fullstack Developer";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [mounted]);

  const navLinks = ["Home", "Carier", "Project", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#0d2137] text-white font-sans overflow-hidden relative">

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-700/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Navbar */}
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-300 ${scrolled
          ? "bg-[#0d2137]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/20 py-3"
          : "bg-transparent"
          }`}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 12H2L8 2Z" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight">Arfiansyah</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`hover:text-white transition-colors duration-200 ${link === "Home" ? "text-white font-semibold" : ""
                    } flex items-center gap-1`}
                >
                  {link}
                  {(link === "Blog" || link === "Pages") && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="px-5 py-2 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-lg shadow-teal-500/20"
            >
              Hire Me
            </a>
            <button className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="7" cy="7" r="5" />
                <path d="M11 11L14 14" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              {darkMode ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1a7 7 0 1 0 7 7A7 7 0 0 0 8 1zm0 12.5A5.5 5.5 0 1 1 13.5 8 5.51 5.51 0 0 1 8 13.5z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-4 h-0.5 bg-white" />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0d2137]/95 backdrop-blur border-t border-white/10 z-50 px-8 py-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="block py-2 text-gray-300 hover:text-white">
                {link}
              </a>
            ))}
            <a href="#" className="mt-3 inline-block px-5 py-2 bg-teal-500 text-white text-sm font-semibold rounded-full">
              Hire Me
            </a>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-28 md:pt-32 pb-20 min-h-screen">
          {/* Left Content */}
          <div className="flex-1 max-w-xl animate-fade-in">
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3 opacity-80">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
              Hi, I&apos;m{" "}
              <span className="text-white">Arfiansyah</span>
            </h1>

            {/* Outlined typed text */}
            <h2
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
              style={{
                WebkitTextStroke: "2px #2dd4bf",
                color: "transparent",
                minHeight: "72px",
              }}
            >
              {typed}
              <span className="animate-blink border-r-2 border-teal-400 ml-0.5">&nbsp;</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Saya seorang <span className="text-teal-400 font-semibold">Fullstack Developer</span> dengan
              keahlian membangun aplikasi web dari sisi <span className="text-white font-medium">Frontend </span>
              dan <span className="text-white font-medium">Backend</span>, serta integrasi
              sistem yang efisien untuk menghadirkan pengalaman digital yang lebih baik.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#"
                className="px-7 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full transition-all duration-200 shadow-xl shadow-teal-500/30 hover:shadow-teal-400/40 hover:-translate-y-0.5 transform"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="px-7 py-3 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 transform backdrop-blur"
              >
                My Portfolio
              </a>
            </div>
          </div>

          {/* Right: Avatar / Image placeholder */}
          <div className="relative mt-12 md:mt-0 flex-shrink-0">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-teal-500/30 scale-110 animate-pulse-slow" />
            <div className="absolute inset-0 rounded-full border border-teal-400/10 scale-125" />

            {/* Avatar circle */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-teal-800 to-[#0d3b4f] border-4 border-teal-500/40 shadow-2xl shadow-teal-500/20">
              {/* Placeholder person silhouette */}
              <Image
                src="/foto.png"
                alt="Arfiansyah"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section className="relative z-10 px-8 md:px-16 py-20 border-t border-white/5">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pengalaman <span style={{ WebkitTextStroke: "1.5px #2dd4bf", color: "transparent" }}>Saya</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent" />

            {/* Experience Items */}
            {[
              {
                date: "Februari 2025",
                role: "Web Developer Intern",
                company: "Kelurahan Paras, Cepogo, Boyolali",
                type: "Internship",
                color: "from-amber-500 to-orange-400",
                desc: "Berperan sebagai IT & Web Developer Intern dengan mengembangkan website profil desa sebagai media informasi dan publikasi digital, serta membangun sistem pendataan warga berbasis web untuk membantu pengelolaan administrasi desa.",
              },
              {
                date: "Mei 2025",
                role: "Web Reservasi Bengkel",
                company: "Bengkel Polanharjo",
                type: "Project",
                color: "from-violet-500 to-purple-400",
                desc: "Membangun sistem reservasi bengkel berbasis web untuk mendukung proses booking servis kendaraan secara digital dan efisien. Dilengkapi fitur pengelolaan antrian, data pelanggan, jadwal servis, serta dashboard administrasi untuk operasional yang lebih terstruktur.",
              },
              {
                date: "Februari 2026 — Sekarang",
                role: "Fullstack Developer",
                company: "PT Berkat Hijau Makmur Abadi",
                type: "Full-time",
                color: "from-teal-500 to-cyan-400",
                desc: "Berperan sebagai Fullstack Developer dalam pengembangan dan maintenance aplikasi berbasis web untuk mendukung kebutuhan operasional perusahaan. Mengembangkan fitur frontend dan backend, mengelola database, serta memastikan sistem berjalan optimal sesuai kebutuhan pengguna.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-0 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                >
                  <div className="bg-white/5 hover:bg-white/8 border border-white/10 hover:border-teal-500/30 rounded-2xl p-6 transition-all duration-300 group">
                    {/* Top Row */}
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}
                      >
                        {item.type}
                      </span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-teal-400 text-sm font-medium mb-3 flex items-center gap-1">
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg`} />
                  <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} opacity-30 scale-150 blur-sm`} />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Project Section */}
        <section className="relative z-10 px-8 md:px-16 py-20 border-t border-white/5">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Project <span style={{ WebkitTextStroke: "1.5px #2dd4bf", color: "transparent" }}>Saya</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">
              Beberapa project yang telah saya kerjakan, dari website desa hingga sistem manajemen berbasis web.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Website Profil Desa",
                company: "Kelurahan Paras, Cepogo, Boyolali",
                desc: "Website profil desa sebagai media informasi dan publikasi digital untuk masyarakat. Menampilkan informasi desa, berita, dan layanan administrasi secara online.",
                image: "https://api.microlink.io/?url=https://website-profil-desa-paras.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
                link: "https://website-profil-desa-paras.vercel.app/",
                stack: [],
                color: "from-amber-500/20 to-orange-500/5",
                border: "hover:border-amber-500/40",
                dot: "bg-amber-400",
              },
              {
                title: "Pendataan Warga",
                company: "Kelurahan Paras, Cepogo, Boyolali",
                desc: "Sistem pendataan warga berbasis web untuk membantu pengelolaan administrasi desa secara digital, efisien, dan terstruktur.",
                image: "https://api.microlink.io/?url=https://pendataan-warga-mu.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
                link: "https://pendataan-warga-mu.vercel.app/",
                stack: [],
                color: "from-violet-500/20 to-purple-500/5",
                border: "hover:border-violet-500/40",
                dot: "bg-violet-400",
              },
              {
                title: "Reservasi Bengkel",
                company: "Bengkel Polanharjo",
                desc: "Sistem reservasi bengkel berbasis web dengan fitur booking servis, antrian, data pelanggan, jadwal servis, dan dashboard administrasi.",
                image: "/projects/reservasi-bengkel.png",
                link: "#",
                stack: [],
                color: "from-teal-500/20 to-cyan-500/5",
                border: "hover:border-teal-500/40",
                dot: "bg-teal-400",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group bg-white/5 border border-white/10 ${project.border} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30`}
              >
                {/* Image Preview */}
                <div className={`relative w-full h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Fallback placeholder jika gambar belum ada */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <div className="text-center opacity-30">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-2">
                        <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
                        <path d="M4 30l10-8 8 6 8-10 14 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <circle cx="15" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <p className="text-xs text-gray-400">Preview</p>
                    </div> */}
                  </div>

                  {/* Stack badges overlay */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/50 backdrop-blur text-white border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Dot + Company */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${project.dot}`} />
                    <span className="text-xs text-gray-500">{project.company}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  {/* Button */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-teal-500 border border-white/10 hover:border-teal-500 text-white text-sm font-semibold rounded-full transition-all duration-200 group/btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lihat Project
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    >
                      <path
                        d="M3 11L11 3M11 3H6M11 3V8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6L8 11L13 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>


      </div>
    </div>
  );
}