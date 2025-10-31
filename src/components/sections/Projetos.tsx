"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export function Projetos() {
  const projetos = [
    {
      titulo: "Calculadora de IMC",
      tipo: "Front-End",
      descricao: "Cálculo de IMC com visual limpo e validações.",
      techs: ["React", "TypeScript", "CSS"],
      features: [
        "Cálculo automático de IMC",
        "Feedback de categoria (baixa, normal, alta)",
        "Componentização + Hooks"
      ],
      codigo: "https://github.com/cleysonxp/react-calc-imc",
      demo: "https://cleysonxp.github.io/react-calc-imc/",
    },
    {
      titulo: "To-Do List",
      tipo: "Front-End",
      descricao: "Gerenciador de tarefas leve e responsivo.",
      techs: ["React", "Vite", "CSS"],
      features: [
        "Adicionar, completar e remover tarefas",
        "Persistência via LocalStorage",
        "UX simples e rápida"
      ],
      codigo: "https://github.com/cleysonxp/lista_todo_react_vite",
      demo: "https://cleysonxp.github.io/lista_todo_react_vite/",
    },
    {
      titulo: "Linktree Custom",
      tipo: "Front-End",
      descricao: "Página de links personalizada com tema tech.",
      techs: ["React", "Vite", "Tailwind"],
      features: [
        "Tema escuro moderno",
        "Animações suaves",
        "Totalmente responsivo"
      ],
      codigo: "https://github.com/cleysonxp/LinkTree",      
      demo: "https://linktree-beta-henna.vercel.app/",
    },
    {
      titulo: "PetDevShop",
      tipo: "Full-Stack",
      descricao: "Sistema web para pet shop com templates dinâmicos.",
      techs: ["Node.js", "TypeScript", "Mustache", "Express"],
      features: [
        "Server-side Rendering",
        "Filtros de pets",
        "Roteamento organizado por controllers"
      ],
      codigo: "https://github.com/cleysonxp/PetDevShop_Node",
    },
    {
      titulo: "API Médica",
      tipo: "Back-End",
      descricao: "API REST para gestão de médicos e pacientes.",
      techs: ["Java", "Spring Boot", "MySQL"],
      features: [
        "CRUD completo",
        "Agendamentos",
        "Validações e DTOs"
      ],
      codigo: "https://github.com/cleysonxp/springBoot/tree/main/api",
    },
    {
      titulo: "API Filmes & Séries",
      tipo: "Back-End",
      descricao: "API REST para catálogo e busca de conteúdos.",
      techs: ["C#", "ASP.NET", "SQL Server"],
      features: [
        "CRUD completo",
        "Filtros de busca",
        "Arquitetura REST"
      ],
      codigo: "https://github.com/cleysonxp/CineFlix_ASPNET",
    },
  ];


  return (
    <section id="projetos" className="bg-dark-alt py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center mb-12">Projetos</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              className="card-career border border-[var(--border)] rounded-xl p-6 flex flex-col justify-between hover:border-[var(--primary)] transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="text-[var(--primary)] text-xs font-semibold mb-1 uppercase tracking-wide">
                  {projeto.tipo}
                </div>

                <h3 className="font-bold text-lg mb-2">{projeto.titulo}</h3>
                <p className="text-gray-400 text-sm mb-3">{projeto.descricao}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {projeto.techs?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  {projeto.features?.map((feat, i) => (
                    <li key={i}>✅ {feat}</li>
                  ))}
                </ul>
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
      </div>
    </section>
  );
}
