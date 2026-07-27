import { useState } from "react";
import { Calendar, MapPin, Image as ImageIcon, Tag } from "lucide-react";

const ATIVIDADES_LIST = [
  {
    id: "feira-luz-2026",
    titulo: "Feira da Luz 2026 (Mostra e Cedência)",
    tipo: "Feira Anual",
    data: "2 a 7 de Setembro de 2026",
    local: "Parque Municipal de Exposições, Montemor-o-Novo",
    descricao: "Visite o nosso espaço na Feira da Luz e descubra uma grande variedade de aves de diferentes espécies e mutações, criadas pelos nossos associados.",
    estado: "Próxima",
  },
  {
    id: "mostra-julho-2026",
    titulo: "Mostra e Cedência de Aves (Mensal) + Almoço de Convívio",
    tipo: "Mensal",
    data: "12 de Julho de 2026",
    local: "Sede da AOM (Rua de Santo António, n.º 26, Montemor-o-Novo)",
    descricao: "Encontro mensal de sócios para partilha, mostra de criação, cedência responsável e almoço de convívio associativo.",
    estado: "Realizada",
  },
];

export default function Atividades() {
  const [filtro, setFiltro] = useState("todas");

  const atividadesFiltradas = ATIVIDADES_LIST.filter((ativ) => {
    if (filtro === "todas") return true;
    return ativ.tipo === filtro;
  });

  return (
    <section id="atividades" className="py-24 md:py-32 bg-secondary/20">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Dinâmica Associativa</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Atividades, Mostras e Eventos
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Acompanhe a nossa agenda anual, participe nas mostras e cedências mensais de aves e reveja os melhores momentos dos nossos eventos.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFiltro("todas")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filtro === "todas" ? "bg-primary text-primary-foreground shadow" : "bg-card border border-border text-foreground hover:bg-secondary"
              }`}
            >
              Todas as Atividades
            </button>
            <button
              onClick={() => setFiltro("Feira Anual")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filtro === "Feira Anual" ? "bg-primary text-primary-foreground shadow" : "bg-card border border-border text-foreground hover:bg-secondary"
              }`}
            >
              Feira Anual (Montemor)
            </button>
            <button
              onClick={() => setFiltro("Mensal")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filtro === "Mensal" ? "bg-primary text-primary-foreground shadow" : "bg-card border border-border text-foreground hover:bg-secondary"
              }`}
            >
              Mostras Mensais
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {atividadesFiltradas.map((ativ) => (
            <div key={ativ.id} className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)]">
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <Tag className="h-3 w-3" /> {ativ.tipo}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${ativ.estado === 'Próxima' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-muted text-muted-foreground'}`}>
                      {ativ.estado}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-foreground">{ativ.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ativ.descricao}</p>

                  <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium text-foreground">{ativ.data}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0" />
                      <span>{ativ.local}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <ImageIcon className="h-4 w-4 text-primary" /> Galeria de Fotos
                    </span>
                    <span className="text-xs text-muted-foreground italic">Em breve / Adicionar fotos</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-20 rounded-lg bg-secondary/50 border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">Foto 1</div>
                    <div className="h-20 rounded-lg bg-secondary/50 border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">Foto 2</div>
                    <div className="h-20 rounded-lg bg-secondary/50 border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">Foto 3</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
