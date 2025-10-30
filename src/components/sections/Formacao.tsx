"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Network } from "lucide-react";

export function Formacao() {
  const formacoes = [
    {
      curso: "Técnico em Redes de Computadores",
      instituicao: "SENAI de Jandira – Professor Vicente Amato",
      periodo: "2017 – 2019",
      icone: <Network className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      curso: "Técnico em Desenvolvimento de Sistemas",
      instituicao: "SENAI de Jandira – Professor Vicente Amato",
      periodo: "2019 – 2020",
      icone: <Code className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      curso: "Bacharelado em Sistemas de Informação",
      instituicao: "Universidade Paulista (UNIP)",
      periodo: "2023 – Atualmente",
      icone: <GraduationCap className="w-6 h-6 text-[var(--primary)]" />,
    },
  ];

  return (
    <section id="formacao" className="section text-white relative">
      <h2 className="section-title text-center mb-16">Formação</h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Linha central da timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[var(--primary)] opacity-40"></div>

        {formacoes.map((item, index) => (
          <motion.div
            key={index}
            className={`relative mb-12 md:mb-20 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Ponto luminoso */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary)] z-10"></div>

            {/* Linha de conexão */}
            {index < formacoes.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-5 bottom-[-50px] w-[2px] bg-[var(--primary)] opacity-30"></div>
            )}

            {/* Card */}
            <div
              className={`card w-full md:w-[45%] ${
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {item.icone}
                <span className="text-[var(--primary)] font-semibold text-sm">
                  {item.periodo}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1">{item.curso}</h3>
              <p className="text-muted text-sm">{item.instituicao}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
