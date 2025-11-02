"use client";

import { motion } from "framer-motion";
import HeroGrid from "../HeroGrid";

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
    <section id="sobre" className="relative bg-dark min-h-screen flex items-center py-20 overflow-hidden">
      <HeroGrid />

      <div className="max-w-6xl mx-auto px-8 flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12">

        {/* Texto */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left text-white"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-2">
            Olá, sou <span className="text-[var(--primary)]">Cleyson</span> 👋
          </h1>

          <h2 className="text-lg md:text-xl text-gray-400 mb-6 tracking-wide">
            Desenvolvedor Back-End & Analista de Sistemas
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            Desenvolvedor com {anos}+ anos de experiência criando soluções para web e automação.
            Foco em back-end, APIs escaláveis e boas práticas. Experiência com
            <strong> PHP, C#/.NET, JavaScript, React</strong> e bancos como
            <strong> MySQL, SQL Server</strong> e <strong>Oracle</strong>.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="mailto:cleyson.soares.dev@gmail.com" className="btn btn-outline">Email</a>
            <a href="https://wa.me/5511988936899" target="_blank" className="btn btn-outline">WhatsApp</a>
            <a href="https://www.linkedin.com/in/cleysonxp" target="_blank" className="btn btn-outline">LinkedIn</a>
            <a href="https://github.com/cleysonxp" target="_blank" className="btn btn-outline">GitHub</a>
            <a download href="/CV_Cleyson_Soares.pdf" className="btn btn-primary">Download CV</a>
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Halo */}
          <div className="absolute w-80 h-80 rounded-full animate-spin-slow bg-gradient-to-tr from-[var(--primary)] via-sky-400 to-[var(--primary)] blur-[15px] opacity-70"></div>

          <img
            src="/perfil.jpg"
            alt="Cleyson Soares"
            className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-[0_0_40px_-10px_var(--primary)] border-2 border-[var(--primary)] relative z-10"
          />
        </motion.div>
      </div>
    </section>

  );
}
