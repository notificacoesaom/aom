import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aom.png";

// Estrutura preparada para o futuro: Agrupámos por áreas de interesse
const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "A Associação", href: "#associacao" },
  { label: "Atividades", href: "#atividades" },
  { label: "Exposições", href: "#exposicoes" }, // Aqui tens as exposições de volta!
  { label: "Criação", href: "#criacao" },
  { label: "Biblioteca", href: "#biblioteca" },
  { label: "Contactos", href: "#contactos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        {/* Navegação principal */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

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

      {/* Menu Mobile */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page flex flex-col py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/85 hover:text-primary border-b border-border/60 last:border-none"
              >
                {n.label}
              </a>
            ))}
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
