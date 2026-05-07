"use client";

import { motion } from "framer-motion";
import { User, Target, Code, Sparkles } from "lucide-react";

export function SobreDetalhado() {
  return (
    <section id="sobre-detalhado" className="bg-dark-alt py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
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
              Sou Cleyson Soares, desenvolvedor full stack com foco em back-end,
              APIs e arquitetura de sistemas. Tenho experiência no desenvolvimento
              e manutenção de aplicações corporativas, atuando principalmente com
              <strong> C#, .NET, PHP, React e bancos relacionais</strong>.
            </p>

            <p>
              Ao longo da minha trajetória participei da evolução de sistemas internos,
              integrações entre plataformas e automação de processos de negócio,
              sempre com foco em performance, organização e escalabilidade.
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
              Tenho perfil analítico e orientado à resolução de problemas.
              Gosto de entender o contexto do negócio antes de desenvolver soluções,
              priorizando clareza, qualidade e manutenibilidade do código.
            </p>

            <p>
              Trabalho com boas práticas como Clean Code, SOLID e versionamento com Git,
              além de experiência em ambientes ágeis e sistemas críticos utilizados
              por operações internas e áreas estratégicas.
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
              Meu foco é evoluir cada vez mais em desenvolvimento back-end,
              arquitetura de software, integrações e cloud computing,
              construindo sistemas robustos, seguros e escaláveis.
            </p>

            <p>
              Busco oportunidades onde eu possa contribuir tecnicamente,
              crescer como engenheiro de software e participar de projetos
              com impacto real no negócio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
