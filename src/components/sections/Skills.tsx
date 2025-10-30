"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Boxes } from "lucide-react";

export function Skills() {

    const categorias = [
    {
      titulo: "Back-End",
      icone: <Server className="w-6 h-6 text-[var(--primary)]" />,
      itens: [
        "C#",
        ".NET",
        "PHP",
        "Laravel",
        "CodeIgniter",
        "Node.js",
        "Java",
        "Spring Boot",
        "Golang",
      ],
    },
    {
      titulo: "Front-End & Mobile",
      icone: <Code className="w-6 h-6 text-[var(--primary)]" />,
      itens: [
        "JavaScript",
        "React",
        "Next.js",
        "Vue.js",
        "HTML",
        "CSS",
        "Tailwind",
        "Bootstrap",
        "Flutter",
        "Dart",
        "Kotlin",
      ],
    },
    {
      titulo: "Banco de Dados",
      icone: <Database className="w-6 h-6 text-[var(--primary)]" />,
      itens: [
        "MySQL",
        "SQL Server",
        "MongoDB",
        "Oracle",
      ],
    },
    {
      titulo: "Cloud & DevOps",
      icone: <Wrench className="w-6 h-6 text-[var(--primary)]" />,
      itens: [
        "Docker",
        "Linux",
        "Azure",
        "AWS",
        "Git",
        "GitHub",
        "Postman",
      ],
    },
    {
      titulo: "Data / BI",
      icone: <Boxes className="w-6 h-6 text-[var(--primary)]" />,
      itens: [
        "Power BI",
        "Excel"
      ],
    },
    {
      titulo: "Fundamentos",
      icone: <Boxes className="w-6 h-6 text-[var(--primary)]" />,
      itens: [
        "APIs REST",
        "Arquitetura MVC",
        "Clean Code",
        "SOLID",
        "DDD",
        "Kanban / Scrum",
      ],
    },
  ];


  return (
    <section id="skills" className="section text-white">
      <h2 className="section-title text-center mb-12">Skills</h2>

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

            <div className="flex flex-wrap gap-2">
              {cat.itens.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-[var(--muted)] text-[var(--foreground)] rounded-full border border-[var(--border)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
