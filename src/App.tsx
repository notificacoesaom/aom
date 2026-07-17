import Header from "./components/Header";
import Hero from "./components/Hero";
import Associacao from "./components/Associacao"; // Renomeámos de Sobre para Associacao
import Vantagens from "./components/Vantagens";
import Anilhas from "./components/Anilhas";
import Exposicoes from "./components/Exposicoes";
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
        <Associacao /> {/* Componente renomeado */}
        <Vantagens />
        <Anilhas />
        <Exposicoes />
        
        {/* Quando criares os ficheiros, basta adicionar aqui: */}
        {/* <Criacao /> */}
        {/* <Biblioteca /> */}
      </main>
      <Footer />
    </div>
  );
}
