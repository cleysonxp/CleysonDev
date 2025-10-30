"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const ano = new Date().getFullYear();

  const redes = [
    { icon: <Github size={20} />, url: "https://github.com/cleysonxp" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/cleysonsoares" },
    { icon: <Mail size={20} />, url: "mailto:cleyson.soares.dev@gmail.com" },
    { icon: <FaWhatsapp size={20} />, url: "https://wa.me/5511988936899" }, // seu número aqui
  ];

  return (
    <footer className="mt-20 border-t border-[var(--border)] py-8 bg-[var(--background)]/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        
        {/* Texto */}
        <p className="text-center md:text-left">
          © {ano} Cleyson Soares — Todos os direitos reservados.
        </p>

        {/* Redes sociais */}
        <div className="flex gap-4">
          {redes.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              className="text-gray-400 hover:text-[var(--primary)] transition"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
