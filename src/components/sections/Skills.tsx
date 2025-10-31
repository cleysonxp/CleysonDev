"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Boxes } from "lucide-react";

function ProficiencyBar({ level }: { level: number }) {
  const total = 5;
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-5 rounded ${
            i < level
              ? "bg-[var(--primary)]"
              : "bg-[var(--border)] opacity-40"
          }`}
        />
      ))}
    </div>
  );
}

export function Skills() {
  const [modoProficiencia, setModoProficiencia] = useState(false);

  const categorias = [
    {
      titulo: "Back-End",
      icone: <Server className="w-6 h-6 text-[var(--primary)]" />,
      skills: [
        { nome: "C#", nivel: 4 },
        { nome: ".NET / ASP.NET", nivel: 4 },
        { nome: "PHP", nivel: 4 },
        { nome: "Laravel", nivel: 4 },
        { nome: "CodeIgniter", nivel: 4 },
        { nome: "Node.js", nivel: 2 },
        { nome: "Java", nivel: 3 },
        { nome: "Spring Boot", nivel: 2 },
        { nome: "Golang", nivel: 2 },
      ],
    },
    {
      titulo: "Front-End & Mobile",
      icone: <Code className="w-6 h-6 text-[var(--primary)]" />,
      skills: [
        { nome: "JavaScript", nivel: 4 },
        { nome: "React", nivel: 3 },
        { nome: "Next.js", nivel: 3 },
        { nome: "Vue.js", nivel: 2 },
        { nome: "HTML", nivel: 4 },
        { nome: "CSS", nivel: 3 },
        { nome: "Tailwind", nivel: 3 },
        { nome: "Bootstrap", nivel: 4 },
        { nome: "Flutter", nivel: 1 },
        { nome: "Dart", nivel: 1 },
        { nome: "Kotlin", nivel: 2 },
      ],
    },
    {
      titulo: "Banco de Dados",
      icone: <Database className="w-6 h-6 text-[var(--primary)]" />,
      skills: [
        { nome: "MySQL", nivel: 4 },
        { nome: "SQL Server", nivel: 4 },
        { nome: "MongoDB", nivel: 3 },
        { nome: "Oracle", nivel: 3 },
      ],
    },
    {
      titulo: "Cloud & DevOps",
      icone: <Wrench className="w-6 h-6 text-[var(--primary)]" />,
      skills: [
        { nome: "Docker", nivel: 2 },
        { nome: "Linux", nivel: 4 },
        { nome: "Azure", nivel: 2 },
        { nome: "AWS", nivel: 1 },
        { nome: "Git", nivel: 4 },
        { nome: "GitHub", nivel: 4 },
        { nome: "Postman", nivel: 4 },
      ],
    },
    {
      titulo: "Data / BI",
      icone: <Boxes className="w-6 h-6 text-[var(--primary)]" />,
      skills: [
        { nome: "Power BI", nivel: 3 },
        { nome: "Excel", nivel: 4 },
      ],
    },
    {
      titulo: "Fundamentos",
      icone: <Boxes className="w-6 h-6 text-[var(--primary)]" />,
      skills: [
        { nome: "APIs REST", nivel: 5 },
        { nome: "Arquitetura MVC", nivel: 5 },
        { nome: "Clean Code", nivel: 4 },
        { nome: "SOLID", nivel: 3 },
        { nome: "DDD", nivel: 2 },
        { nome: "Kanban / Scrum", nivel: 4 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-dark py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center mb-12">Skills</h2>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setModoProficiencia(!modoProficiencia)}
            className="px-4 py-2 text-sm rounded border border-[var(--border)] hover:border-[var(--primary)] transition"
          >
            {modoProficiencia ? "Modo Simples" : "Modo Proficiência"}
          </button>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {categorias.map((cat, index) => (
            <motion.div
              key={index}
              className="card hover-rise p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                {cat.icone}
                <h3 className="font-bold text-lg text-[var(--primary)]">{cat.titulo}</h3>
              </div>

              {modoProficiencia ? (
                <div className="flex flex-col gap-2">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between w-full text-sm">
                      <span>{skill.nome}</span>
                      <ProficiencyBar level={skill.nivel} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-[var(--muted)] text-[var(--foreground)] rounded-full border border-[var(--border)]"
                    >
                      {skill.nome}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
