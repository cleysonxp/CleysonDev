"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Sobre() {
  const dataInicio = new Date("2021-01-21");
  const hoje = new Date();

  // Calcula a diferença de anos levando em conta o mês e o dia
  let anos = hoje.getFullYear() - dataInicio.getFullYear();
  const aindaNaoCompletou =
    hoje.getMonth() < dataInicio.getMonth() ||
    (hoje.getMonth() === dataInicio.getMonth() && hoje.getDate() < dataInicio.getDate());

  if (aindaNaoCompletou) anos--;

  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto px-6"
    >
      {/* Texto à esquerda */}
      <motion.div
        className="md:w-1/2 text-center md:text-left text-white"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold mb-2">
          Olá, sou <span className="text-[var(--primary)]">Cleyson</span> 👋
        </h1>
        <h2 className="text-xl text-gray-400 mb-6">
          Desenvolvedor Back-End | Analista de Sistemas 
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8">
          Tenho {anos} anos de experiência em desenvolvimento de software, atuando no
          back-end e front-end com tecnologias como <strong>PHP</strong>,{" "}
          <strong>C#</strong>, <strong>JavaScript</strong>,{" "}
          <strong>MySQL</strong>, <strong>React</strong> e <strong>.NET</strong>.
          Apaixonado por criar soluções escaláveis e intuitivas que geram
          impacto real.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="mailto:cleyson.soares.dev@gmail.com"
            className="btn btn-outline"
          >
            Email
          </a>

          <a
            href="https://wa.me/5511988936899"
            target="_blank"
            className="btn btn-outline"
          >
            WhatsApp
          </a>

          <a
            href="https://linkedin.com/in/cleysonsoares"
            target="_blank"
            className="btn btn-outline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/cleysonxp"
            target="_blank"
            className="btn btn-outline"
          >
            GitHub
          </a>

          <a href="/cleyson-cv.pdf" className="btn btn-primary">
            Download CV
          </a>
        </div>

      </motion.div>

      {/* Foto à direita com halo animado */}
      <motion.div
        className="md:w-1/3 mb-10 md:mb-0 flex justify-center relative"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Halo animado */}
        <div className="absolute w-60 h-60 rounded-full animate-spin-slow bg-gradient-to-tr from-[var(--primary)] via-sky-400 to-[var(--primary)] blur-sm"></div>

        <img
          src="/perfil.jpg"
          alt="Cleyson Soares"
          className="w-56 h-56 rounded-full object-cover shadow-lg border-4 border-[#0b0b0b] relative z-10"
        />
      </motion.div>

      {/* Seta de rolagem */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#formacao">
          <ChevronDown size={32} />
        </a>
      </motion.div> */}
    </section>
  );
}
