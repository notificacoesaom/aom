import Header from "./components/Header";
import Hero from "./components/Hero";
import Associacao from "./components/Associacao";
import Atividades from "./components/Atividades"; // <--- Importação correta de Atividades
import Anilhas from "./components/Anilhas";
import Exposicoes from "./components/Exposicoes";
import ExposicaoSection from "./components/ExposicaoSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Associacao />
        <Atividades /> {/* <--- Componente Atividades ativo na página */}
        <Anilhas />
        
        {/* Destaque rápido / Contagem decrescente (#exposicoes) */}
        <Exposicoes />
        
        {/* Informação completa da exposição atual */}
        <ExposicaoSection />
      </main>
      <Footer />
    </div>
  );
}
