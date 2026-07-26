import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Estrutura organizada para gerir links simples e menus com dropdowns futuros
const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "A Associação", href: "#associacao" },
  { label: "Atividades", href: "#atividades" },
  { 
    label: "Exposições", 
    href: "#exposicoes",
    dropdown: [
      { label: "Exposição 2026 (Atual)", href: "#exposicao-2026", badge: "Novo" },
      { label: "Exposição 2025", href: "#exposicao-2025" },
      { label: "Exposição 2024", href: "#exposicao-2024" },
      { label: "Exposição 2023", href: "#exposicao-2023" },
    ]
  },
  // Podes adicionar mais dropdowns no futuro aqui de forma muito simples:
  // { label: "Outra Secção", href: "#", dropdown: [...] },
  { label: "Criação", href: "#criacao" },
  { label: "Biblioteca", href: "#biblioteca" },
  { label: "Contactos", href: "#contactos" },
];

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-6">
      {NAV_ITEMS.map((item) => {
        const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
        const isOpen = activeDropdown === item.label;

        return (
          <div
            key={item.label}
            className="relative py-2"
            onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
            onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
          >
            <a
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
            >
              {item.label}
              {hasDropdown && (
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              )}
            </a>

            {/* Caixa do Dropdown */}
            {hasDropdown && isOpen && item.dropdown && (
              <div className="absolute top-full left-0 w-52 rounded-xl bg-background/95 backdrop-blur-xl border border-border shadow-xl py-2 flex flex-col z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/60 mb-1">
                  Histórico
                </div>
                {item.dropdown.map((sub) => (
                  <a
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setActiveDropdown(null)}
                    className="px-4 py-2 text-xs text-foreground/80 hover:text-primary hover:bg-muted/50 transition flex items-center justify-between"
                  >
                    <span>{sub.label}</span>
                    {sub.badge && (
                      <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[9px] text-primary font-semibold">
                        {sub.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
