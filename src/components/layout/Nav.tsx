"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

  const links = [
    { label: "Início", href: "#sobre", id: "sobre" },
    { label: "Sobre", href: "#sobre-detalhado", id: "sobre-detalhado" },
    { label: "Formação", href: "#formacao", id: "formacao" },
    { label: "Carreira", href: "#carreira", id: "carreira" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projetos", href: "#projetos", id: "projetos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = links.map((l) => document.getElementById(l.id));
      const offset = window.scrollY + 120; // compensar navbar

      for (let section of sections) {
        if (!section) continue;
        if (offset >= section.offsetTop && offset < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // rodar uma vez ao carregar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[999] transition-all duration-300
        border-b border-[var(--border)]
        ${scrolled ? "bg-[var(--background)]/80 backdrop-blur shadow-md py-2" : "bg-[var(--background)]/50 py-4"}
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">

        <Link href="#sobre" className="font-bold text-xl text-[var(--primary)]">
          Cleyson.dev
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link hover:text-[var(--primary)] transition-colors ${
                activeSection === link.id ? "text-[var(--primary)] font-semibold active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <nav className="md:hidden bg-[var(--background)] border-t border-[var(--border)] animate-fade-in">
          <ul className="flex flex-col text-center py-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 hover:text-[var(--primary)] ${
                    activeSection === link.id ? "text-[var(--primary)] font-semibold" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
