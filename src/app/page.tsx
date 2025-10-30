import { Sobre } from "@/components/sections/Sobre";
import { Formacao } from "@/components/sections/Formacao";
import { Carreira } from "@/components/sections/Carreira";
import { Skills } from "@/components/sections/Skills";
import { Projetos } from "@/components/sections/Projetos";
import { SobreDetalhado } from "@/components/sections/SobreDetalhado";

export default function Home() {
  return (
    <main>
      <Sobre />
      <SobreDetalhado/>
      <Formacao />
      <Carreira />
      <Skills />
      <Projetos />
    </main>
  );
}
