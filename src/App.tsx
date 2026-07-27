import Header from "./components/Header";
import Hero from "./components/Hero";
import Associacao from "./components/Associacao"; // Renomeámos de Sobre para Associacao
import Vantagens from "./components/Vantagens";
import Anilhas from "./components/Anilhas";
import Exposicoes from "./components/Exposicoes"; // Secção de destaque / countdown rápida
import ExposicaoSection from "./components/ExposicaoSection"; // Nova secção detalhada baseada em dados
import Footer from "./components/Footer";

// Quando quiseres criar estas secções, basta descomentar:
// import Criacao from "./components/Criacao";
// import Biblioteca from "./components/Biblioteca";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Associacao />
        <Vantagens />
        <Anilhas />
        
        {/* Destaque rápido / Contagem decrescente (#exposicoes) */}
        <Exposicoes />
        
        {/* Informação completa da exposição atual (Lê automaticamente o status "atual" de exposicoesData.ts) */}
        <ExposicaoSection />
        
        {/* Quando criares os ficheiros, basta adicionar aqui: */}
        {/* <Criacao /> */}
        {/* <Biblioteca /> */}
      </main>
      <Footer />
    </div>
  );
}
