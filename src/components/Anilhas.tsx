import { CircleDot, CalendarCheck, Wallet } from "lucide-react";

const STEPS = [
  {
    icon: CircleDot,
    title: "Pedidos de Anilhas",
    desc: "Os pedidos de anilhas federais são feitos em duas campanhas anuais. Os sócios recebem por email o formulário, prazos e valores em vigor.",
  },
  {
    icon: CalendarCheck,
    title: "Campanhas",
    desc: "1.ª Campanha: Outubro a Novembro · 2.ª Campanha: Fevereiro a Março. Pedidos fora de campanha estão sujeitos a taxa adicional.",
  },
  {
    icon: Wallet,
    title: "Quotas",
    desc: "A quota anual é de 25€ e inclui o cartão de sócio, participação em exposições internas e acesso a formações.",
  },
];

export default function Anilhas() {
  return (
    <section id="anilhas" className="py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Anilhas & Quotas</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Rastreabilidade oficial para cada ave que cria.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Enquanto associação filiada, encaminhamos os pedidos de anilhas oficiais da
            federação, garantindo numeração única e conformidade para exposições nacionais
            e internacionais.
          </p>
          <a
            href="#contactos"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary-glow transition"
          >
            Falar com a Direção
          </a>
        </div>

        <div className="space-y-4">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="shrink-0">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                  <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
