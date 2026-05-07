"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Carreira() {
    const experiencias = [
        {
            cargo: "Analista de Sistemas",
            empresa: "Carriers Logística e Transporte",
            periodo: "Jul/2022 – Jan/2025",
            descricao:
                "Atuei no desenvolvimento e evolução dos sistemas internos da transportadora, participando da criação de APIs, integrações e aplicações utilizadas por diferentes áreas da empresa, incluindo Operação, Financeiro, RH, Diretoria e Backoffice. Trabalhei com sistemas web, desktop e automações corporativas utilizando C#, .NET e PHP.\n\nParticipei do desenvolvimento de soluções de rastreamento de pedidos e monitoramento de motoristas, incluindo visualização de rotas e paradas em tempo real. Também fui responsável por automações para leitura de e-mails corporativos e processamento de notas fiscais, contribuindo para otimização de processos internos e redução de atividades manuais.",
            tecnologias: [
                "C#",
                ".NET",
                "ASP.NET MVC",
                ".NET Core",
                "PHP",
                "Vue.js",
                "JavaScript",
                "MySQL",
                "SQL Server",
                "Docker",
                "Git",
                "REST APIs",
                "Bootstrap",
                "Tailwind",
                "Kanban"
            ],
        },
        {
            cargo: "Desenvolvedor Full Stack",
            empresa: "Bitcluster",
            periodo: "Jan/2021 – Jul/2022",
            descricao:
                "Atuei no desenvolvimento e manutenção de aplicações internas para o mercado de criptomoedas, trabalhando na implementação de novas funcionalidades, correções e evolução contínua dos sistemas.\n\nParticipei da construção da Mesa do Trader, sistema desenvolvido em PHP e CodeIgniter para suporte operacional da corretora. Também atuei no desenvolvimento de uma plataforma de consultas cadastrais com integrações de pagamento e comissão via API da Asaas.\n\nTrabalhei em ambiente ágil com foco em estabilidade, integração de APIs e desenvolvimento full stack utilizando PHP, JavaScript e MySQL.",
            tecnologias: [
                "PHP",
                "CodeIgniter",
                "Java",
                "Spring Boot",
                "JavaScript",
                "MySQL",
                "HTML",
                "CSS",
                "Bootstrap",
                "REST APIs",
                "Asaas",
                "Git",
                "Scrum"
            ],
        }
    ];

    return (
        <section id="carreira" className="bg-dark-alt py-20 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="section-title text-center mb-12 flex items-center justify-center gap-2">
                    <Briefcase className="text-[var(--primary)] w-8 h-8" />
                    Carreira
                </h2>

                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    {experiencias.map((item, index) => (
                        <motion.div
                            key={index}
                            className="card card-career hover-rise w-full md:w-1/2"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-lg text-[var(--primary)]">
                                        {item.cargo}
                                    </h3>
                                    <span className="text-sm text-gray-400">{item.periodo}</span>
                                </div>
                                <p className="text-muted mb-4">{item.empresa}</p>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    {item.descricao}
                                </p>

                                {/* Tecnologias */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tecnologias.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm bg-[var(--muted)] text-[var(--primary)] rounded-full border border-[var(--border)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
