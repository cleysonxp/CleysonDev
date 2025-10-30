"use client";

import { motion } from "framer-motion";
import { User, Target, Code, Sparkles } from "lucide-react";

export function SobreDetalhado() {
  return (
    <section id="sobre-detalhado" className="section text-white">
      <h2 className="section-title text-center mb-12 flex items-center justify-center gap-2">
        <User className="w-7 h-7 text-[var(--primary)]" />
        Sobre Mim
      </h2>

      <div className="max-w-4xl mx-auto space-y-10 text-lg leading-relaxed text-gray-300">

        {/* Quem sou */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl font-bold text-[var(--primary)] flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Quem sou
          </h3>
          <p>
            Sou Cleyson Soares, desenvolvedor full stack com foco em back-end e APIs. 
            Tenho experiência com desenvolvimento de sistemas internos e aplicações web, 
            integrando tecnologias como <strong>.NET, PHP, Java, React e MySQL</strong>.
          </p>
          <p>
            Comecei na programação pela curiosidade e hoje sou apaixonado por construir 
            soluções úteis, escaláveis e que realmente façam diferença no negócio.
          </p>
        </motion.div>

        {/* Forma de trabalhar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl font-bold text-[var(--primary)] flex items-center gap-2">
            <Code className="w-5 h-5" />
            Minha forma de trabalhar
          </h3>
          <p>
            Tenho perfil analítico, gosto de entender o problema antes de escrever código 
            e trabalho com foco em clareza, organização e qualidade.
          </p>
          <p>
            Já atuei com metodologias ágeis, versionamento com Git, e em ambientes em produção 
            com sistemas críticos usados por áreas como operação, financeiro e diretoria.
          </p>
        </motion.div>

        {/* Objetivos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl font-bold text-[var(--primary)] flex items-center gap-2">
            <Target className="w-5 h-5" />
            Objetivos
          </h3>
          <p>
            Busco me especializar cada vez mais em desenvolvimento back-end, arquiteturas de software, 
            integrações e cloud — com foco em criar sistemas robustos, seguros e escaláveis.
          </p>
          <p>
            No curto prazo, meu foco é me desenvolver como <strong>Analista de Sistemas / Back-End</strong> 
            e evoluir para áreas como arquitetura e cloud.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
