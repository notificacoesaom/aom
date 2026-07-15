import { BadgeCheck, Trophy, Users, Tag } from "lucide-react";

const ITEMS = [
  {
    icon: BadgeCheck,
    title: "Anilhamento Oficial",
    desc: "Acesso a anilhas federais numeradas com garantia de rastreabilidade e reconhecimento nacional.",
  },
  {
    icon: Trophy,
    title: "Exposições",
    desc: "Participação em concursos regionais e nacionais, com júri credenciado e prémios oficiais.",
  },
  {
    icon: Users,
    title: "Comunidade",
    desc: "Encontros, formação técnica e partilha de experiência entre criadores de todos os níveis.",
  },
  {
    icon: Tag,
    title: "Descontos",
    desc: "Condições exclusivas em rações, gaiolas, medicação e material especializado com parceiros.",
  },
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Vantagens de ser sócio</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Tudo o que precisa para cuidar e valorizar as suas aves.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col rounded-2xl bg-card p-7 shadow-[var(--shadow-card)] ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
