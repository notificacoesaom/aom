import { Feather, Mail, Phone, Smartphone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/aom.png";

export default function Footer() {
  return (
    <footer id="contactos" className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10">
              <img src={logo} alt="Logo A.O. Montemorense" className="h-20 w-20 shrink-0 object-contain" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold">Associação Ornitológica Montemorense</div>
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

       <div className="flex flex-col gap-4">
  <h3 className="font-bold text-lg">CONTACTOS</h3>
  <div className="flex flex-col gap-3 text-sm">
    {/* Telefone Fixo */}
    <div className="flex flex-col">
      <a href="tel:+351266877513" className="hover:text-primary transition-colors flex items-center gap-2">
        <Phone className="h-4 w-4" /> +351 266 877 513
      </a>
      <span className="text-[10px] text-primary-foreground/60 ml-6">(Chamada para rede fixa nacional)</span>
    </div>

    {/* Telefone Móvel */}
    <div className="flex flex-col">
      <a href="tel:+351917219280" className="hover:text-primary transition-colors flex items-center gap-2">
        <Smartphone className="h-4 w-4" /> +351 917 219 280
      </a>
      <span className="text-[10px] text-primary-foreground/60 ml-6">(Chamada para rede móvel nacional)</span>
    </div>

    {/* Email */}
    <a href="mailto:aom.direcao@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
      <Mail className="h-4 w-4" /> aom.direcao@gmail.com
    </a>
  </div>
</div>

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

        <div id="inscricao">
  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
    Inscrição & Quotas
  </h4>
  <p className="mt-4 text-sm opacity-80">
    Quota anual: <span className="font-semibold text-primary-foreground">12€</span>
  </p>
  
  <div className="mt-4 rounded-xl bg-primary-foreground/10 p-4 text-sm">
    <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">IBAN</div>
    {/* Adicionámos "break-all" para garantir que o número nunca "foge" da caixa */}
    <div className="mt-1 font-mono text-xs tracking-wider break-all">
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

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Associação Ornitológica Montemorense. Todos os direitos reservados.</span>
          <span>NIPC 507 500 474</span>
        </div>
      </div>
    </footer>
  );
}
