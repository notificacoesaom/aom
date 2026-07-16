import { Mail, Phone, Smartphone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/aom.png";

export default function Footer() {
  return (
    <footer id="contactos" className="bg-primary text-primary-foreground">
      {/* Esta é a tua secção de colunas (Grid) */}
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        
       {/* Coluna 1: Logo/Desc */}
        <div>
          <div className="flex items-center gap-4">
            {/* Aumentámos para h-20 w-20 e ajustámos o padding para 3 */}
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-primary-foreground/10 p-3">
              <img src={logo} alt="Logo A.O. Montemorense" className="h-full w-full object-contain" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg">Associação Ornitológica Montemorense</div>
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">desde 2005</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed opacity-80">
            Ornitologia com tradição, ciência e comunidade no coração do Alentejo.
          </p>
          <div className="mt-6 flex gap-3">
            <a 
              href="https://www.facebook.com/profile.php?id=100057546965240" 
              target="_blank" 
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">CONTACTOS</h3>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex flex-col">
              <a href="tel:+351266877513" className="hover:text-primary-foreground/70 transition flex items-center gap-2">
                <Phone className="h-4 w-4" /> +351 266 877 513
              </a>
              <span className="text-[10px] opacity-60 ml-6">(Chamada para rede fixa nacional)</span>
            </div>
            <div className="flex flex-col">
              <a href="tel:+351917219280" className="hover:text-primary-foreground/70 transition flex items-center gap-2">
                <Smartphone className="h-4 w-4" /> +351 917 219 280
              </a>
              <span className="text-[10px] opacity-60 ml-6">(Chamada para rede móvel nacional)</span>
            </div>
            <a href="mailto:aom.direcao@gmail.com" className="hover:text-primary-foreground/70 transition flex items-center gap-2">
              <Mail className="h-4 w-4" /> aom.direcao@gmail.com
            </a>
          </div>
        </div>

        {/* Coluna 3 */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Sede</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
              <span>Rua de Santo António 26<br />7050-202 Montemor-o-Novo</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
              <span>Segunda a Sexta, das 13h30 às 15h30</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Inscrição */}
        <div id="inscricao">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
            Inscrição & Quotas
          </h4>
          <p className="mt-4 text-sm opacity-80">
            Quota anual: <span className="font-semibold text-primary-foreground">12€</span>
          </p>
          
          <div className="mt-4 rounded-xl bg-primary-foreground/10 p-4 text-sm border border-primary-foreground/10">
            <div className="text-[10px] uppercase tracking-[0.18em] opacity-70 mb-1">IBAN</div>
            <div className="font-mono text-xs tracking-wide break-words text-primary-foreground/90">
              PT50 0045 6390 4020 2141 2033 8
            </div>
          </div>

          <a
            href="mailto:aom.direcao@gmail.com?subject=Inscrição%20de%20Sócio&body=Gostaria%20de%20solicitar%20a%20minha%20inscrição%20como%20sócio.%0A%0ANome:%0AMorada:%0ANIF:%0AContacto%20Telefónico:"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90 transition"
          >
            Pedir Inscrição
          </a>
        </div>
        
      </div> {/* <--- FECHAMENTO DA GRID (Faltava este!) */}

      {/* Secção de Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Associação Ornitológica Montemorense. Todos os direitos reservados.</span>
          <span>NIPC 507 500 474</span>
        </div>
      </div>
    </footer>
  );
}
