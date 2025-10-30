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
                "Responsável pelo desenvolvimento, manutenção e integração dos sistemas internos da transportadora. Atuei com APIs para processamento de pedidos dos clientes, criando funcionalidades e realizando correções contínuas. Desenvolvi um sistema de rastreamento de pedidos em Vue.js e participei da criação do módulo de rastreamento de motoristas, com visualização de rotas e paradas. Fui responsável pelo sistema desktop em C#/.NET utilizado por toda a empresa (Operação, Financeiro, Diretoria, RH, Backoffice e TI), incluindo a automação para leitura de e-mails corporativos e processamento de notas fiscais.",
            tecnologias: [
                "C#",
                ".NET",
                "PHP",
                "HTML",
                "CSS",
                "JavaScript",
                "Vue",
                "MySQL",
                "Bootstrap",
                "Tailwind",
                "Git",
                "GitHub",
                "Docker",
                "APIs REST",
                "Kanban"
            ],
        },
        {
            cargo: "Desenvolvedor Full Stack",
            empresa: "Bitcluster",
            periodo: "Jan/2021 – Jul/2022",
            descricao:
                "Atuei no desenvolvimento e manutenção do sistema interno de uma corretora de criptomoedas, criando novas funcionalidades e corrigindo bugs. Participei da construção da Mesa do Trader, um sistema auxiliar desenvolvido do zero em PHP e CodeIgniter. Posteriormente, atuei no desenvolvimento de uma plataforma para consultas cadastrais (CPF, placa, telefone, nome, etc.) com integrações de pagamentos e comissões via API da Asaas. Projetos realizados em ambiente ágil com sprints semanais.",
            tecnologias: [
                "PHP",
                "CodeIgniter",
                "Java",
                "MySQL",
                "Bootstrap",
                "HTML",
                "CSS",
                "APIs REST",
                "Asaas",
                "Scrum"
            ],
        }
    ];

    return (
        <section id="carreira" className="section text-white">
            <h2 className="section-title text-center mb-12 flex items-center justify-center gap-2">
                <Briefcase className="text-[var(--primary)] w-8 h-8" />
                Carreira
            </h2>

            <div className="flex flex-col md:flex-row gap-8 justify-center">
                {experiencias.map((item, index) => (
                    <motion.div
                        key={index}
                        className="card hover-rise w-full md:w-1/2"
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
        </section>
    );
}
