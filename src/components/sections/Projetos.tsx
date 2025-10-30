"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export function Projetos() {
  const projetos = [
    {
      titulo: "Calculadora de IMC",
      descricao:
        "Calculadora de IMC utilizando React e TypeScript, permitindo inserir peso e altura para obter o índice com classificação.",
      codigo: "https://github.com/cleysonxp/react-calc-imc",
      demo: "https://cleysonxp.github.io/react-calc-imc/",
    },
    {
      titulo: "Lista de Tarefas",
      descricao:
        "Aplicação para gerenciamento de tarefas com React + Vite. Permite adicionar, marcar e remover tarefas com interface simples.",
      codigo: "https://github.com/cleysonxp/lista_todo_react_vite",
      demo: "https://cleysonxp.github.io/lista_todo_react_vite/",
    },
    {
      titulo: "Linktree",
      descricao:
        "Aplicação para gerenciamento de tarefas com React + Vite. Permite adicionar, marcar e remover tarefas com interface simples.",
      codigo: "https://github.com/cleysonxp/lista_todo_react_vite",
      demo: "https://cleysonxp.github.io/lista_todo_react_vite/",
    },
    {
      titulo: "PetDevShop",
      descricao:
        "Aplicação web para pet shop com Node.js e Mustache.js. Roteamento organizado e páginas dinâmicas com templates.",
      codigo: "https://github.com/cleysonxp/PetDevShop_Node",
    },
    {
      titulo: "API Médica",
      descricao:
        "API REST para gestão de médicos e pacientes com Java + Spring Boot. Permite CRUD completo e agendamento de consultas.",
      codigo: "https://github.com/cleysonxp/springBoot/tree/main/api",
    },
    {
      titulo: "API Filmes/Séries",
      descricao:
        "API REST para gestão de médicos e pacientes com Java + Spring Boot. Permite CRUD completo e agendamento de consultas.",
      codigo: "https://github.com/cleysonxp/springBoot/tree/main/api",
    },
  ];

  return (
    <section id="projetos" className="section text-white">
      <h2 className="section-title text-center mb-12">Projetos</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, index) => (
          <motion.div
            key={index}
            className="card hover-rise flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-bold text-xl mb-2 text-[var(--primary)]">{projeto.titulo}</h3>
              <p className="text-muted mb-4">{projeto.descricao}</p>
            </div>

            <div className="flex gap-3 mt-4">
              <a href={projeto.codigo} target="_blank" className="btn btn-outline flex items-center gap-2">
                <Github size={18} /> Código
              </a>

              {projeto.demo && (
                <a href={projeto.demo} target="_blank" className="btn btn-primary flex items-center gap-2">
                  <ExternalLink size={18} /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
