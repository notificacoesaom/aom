import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Vantagens from "./components/Vantagens";
import Anilhas from "./components/Anilhas";
import Exposicoes from "./components/Exposicoes";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Vantagens />
        <Anilhas />
        <Exposicoes />
      </main>
      <Footer />
    </div>
  );
}
