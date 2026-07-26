import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/aom.png";
import { Navbar } from "./Navbar"; // Importa a navbar limpa que criámos

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExposicoesOpen, setMobileExposicoesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" className="flex items-center gap-2.5 min-w-0">
          <img src={logo} alt="Logo A.O. Montemorense" className="h-10 w-10 shrink-0 object-contain" />
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-display text-base font-bold text-foreground truncate">Associação Ornitológica Montemorense</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">desde 2005</span>
          </span>
        </a>

        {/* Navegação Desktop Modular */}
        <Navbar />

        <div className="flex items-center gap-2">
          <a
            href="#inscricao"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary-glow transition-colors"
          >
            Inscrição
          </a>
          <button
            aria-label="Abrir menu"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-background/80"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Mantém-se simples e expansível) */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[85vh] overflow-y-auto">
          <nav className="container-page flex flex-col py-4">
            <a href="#inicio" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-foreground/85 border-b border-border/60">Início</a>
            <a href="#associacao" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-foreground/85 border-b border-border/60">A Associação</a>
            <a href="#atividades" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-foreground/85 border-b border-border/60">Atividades</a>

            {/* Exposições Mobile com Dropdown */}
            <div className="border-b border-border/60 py-3">
              <button
                onClick={() => setMobileExposicoesOpen(!mobileExposicoesOpen)}
                className="flex items-center justify-between w-full text-base font-medium text-foreground/85"
              >
                <span>Exposições</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExposicoesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {mobileExposicoesOpen && (
                <div className="flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-primary/30">
                  <a href="#exposicao-2026" onClick={() => setOpen(false)} className="py-2 text-sm text-foreground/70">Exposição 2026 (Atual)</a>
                  <a href="#exposicao-2025" onClick={() => setOpen(false)} className="py-2 text-sm text-foreground/70">Exposição 2025</a>
                  <a href="#exposicao-2024" onClick={() => setOpen(false)} className="py-2 text-sm text-foreground/70">Exposição 2024</a>
                  <a href="#exposicao-2023" onClick={() => setOpen(false)} className="py-2 text-sm text-foreground/70">Exposição 2023</a>
                </div>
              )}
            </div>

            <a href="#criacao" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-foreground/85 border-b border-border/60">Criação</a>
            <a href="#biblioteca" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-foreground/85 border-b border-border/60">Biblioteca</a>
            <a href="#contactos" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-foreground/85 border-b border-border/60">Contactos</a>

            <a
              href="#inscricao"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Inscrição de Sócios
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
