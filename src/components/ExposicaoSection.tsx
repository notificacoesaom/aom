import { CalendarDays, MapPin, Clock, FileText, Award, Download, Image as ImageIcon } from "lucide-react";
import { EXPOSICOES_HISTORICO } from "@/data/exposicoesData";

export default function ExposicaoSection() {
  // Procura automaticamente a exposição que está marcada como "atual"
  const info = EXPOSICOES_HISTORICO.find((e) => e.status === "atual") || EXPOSICOES_HISTORICO[0];

  return (
    <section id={`exposicao-2026${info.ano}`} className="py-24 bg-background text-foreground relative overflow-hidden border-t border-border/40">
      <div className="container-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho dinâmico */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Edição em Destaque · MorAves {info.ano}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {info.titulo}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            {info.descricao}
          </p>
        </div>

        {/* Grelha de Informações */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <CalendarDays className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Detalhes do Evento</h3>
              <ul className="space-y-3 text-sm text-foreground/85 mt-4">
                <li className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary shrink-0" />
                  <span>{info.datas}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span>{info.horario}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{info.local}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Normas e Regulamento</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Consulte as condições de admissão e escalões de {info.ano}.
              </p>
            </div>
            <a href="#regulamento" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90 mt-4">
              <Download className="h-4 w-4" /> Descarregar Regulamento (PDF)
            </a>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Inscrições de Aves</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Portal de submissão de exemplares para a edição de {info.ano}.
              </p>
            </div>
            <a href="#inscricoes" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium shadow-sm transition hover:bg-muted mt-4">
              Efetuar Inscrição Online
            </a>
          </div>

        </div>

        {/* Galeria */}
        <div className="rounded-2xl border border-border/60 bg-muted/20 p-8 sm:p-12">
          <h3 className="font-display text-2xl font-bold mb-6">Galeria Fotográfica - {info.ano}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="aspect-video rounded-xl bg-muted border border-border/80 flex items-center justify-center text-center p-4">
                <span className="text-xs text-muted-foreground">Fotografia #{num} ({info.ano})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
