import { Feather, Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contactos" className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10">
              <Feather className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold">A. O. Montemorense</div>
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">desde 1998</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed opacity-80">
            Ornitologia com tradição, ciência e comunidade no coração do Alentejo.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Contactos</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
              <span>+351 266 000 000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
              <a href="mailto:geral@aomontemor.pt" className="hover:underline">geral@aomontemor.pt</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Sede</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
              <span>Rua da Ornitologia, 12<br />7050-000 Montemor-o-Novo</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
              <span>Sáb · 15h – 18h<br />Dom · 10h – 12h</span>
            </li>
          </ul>
        </div>

        <div id="inscricao">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Inscrição & Quotas</h4>
          <p className="mt-4 text-sm opacity-80">
            Quota anual: <span className="font-semibold text-primary-foreground">25€</span>
          </p>
          <div className="mt-4 rounded-xl bg-primary-foreground/10 p-4 text-sm">
            <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">IBAN</div>
            <div className="mt-1 font-mono text-xs tracking-wider">PT50 0000 0000 0000 0000 0000 0</div>
          </div>
          <a
            href="mailto:geral@aomontemor.pt?subject=Inscri%C3%A7%C3%A3o%20de%20S%C3%B3cio"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90 transition"
          >
            Pedir Inscrição
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Associação Ornitológica Montemorense. Todos os direitos reservados.</span>
          <span>NIPC 500 000 000</span>
        </div>
      </div>
    </footer>
  );
}
