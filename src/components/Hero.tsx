import heroImg from "@/assets/hero-birds.jpg";
import posterImg from "@/assets/cartaz.jpeg"; // Substitui pelo caminho correto do teu cartaz
import { ArrowRight, Leaf, Calendar, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] w-full overflow-hidden flex items-center">
      {/* Imagem de Fundo e Gradiente */}
      <img
        src={heroImg}
        alt="Canários em ambiente natural ao amanhecer"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <div className="relative container-page py-20 md:py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUNA ESQUERDA: Texto Principal e Botões */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-background/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md ring-1 ring-white/20">
              <Leaf className="h-3.5 w-3.5" /> Associação Ornitológica Montemorense
            </span>
            
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              Preservar, criar e celebrar a ornitologia em Montemor.
            </h1>
            
            <p className="mt-6 text-base text-white/85 sm:text-lg">
              Uma comunidade dedicada ao anilhamento oficial, à criação responsável e à
              partilha de conhecimento entre criadores amadores e profissionais.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#inscricao"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-soft)] hover:bg-white/90 transition"
              >
                Ser Sócio <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Conhecer a Associação
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: Cartaz da Exposição & Próximos Eventos */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Bloco do Cartaz da Exposição */}
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/20 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                  Destaque / Exposição
                </span>
                <span className="rounded-full bg-primary/80 px-2.5 py-0.5 text-[10px] font-medium text-white">
                  Brevemente
                </span>
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={posterImg}
                  alt="Cartaz da Exposição Ornitológica"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <a
                    href="#exposicao"
                    className="text-xs font-medium text-white flex items-center gap-1 hover:underline"
                  >
                    Ver detalhes do cartaz <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bloco de Próximos Eventos */}
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/20 shadow-xl">
              <div className="flex items-center gap-2 mb-3 text-white">
                <Calendar className="h-4 w-4 text-primary-foreground" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Próximos Eventos</h3>
              </div>
              
              <div className="space-y-3">
                {/* Evento 1 */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs text-white/90">
                  <div>
                    <p className="font-semibold text-white">Reunião Mensal de Sócios</p>
                    <p className="text-white/70">Sede da Associação</p>
                  </div>
                  <span className="rounded-md bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white whitespace-nowrap">
                    12 Out
                  </span>
                </div>
                
                {/* Evento 2 */}
                <div className="flex items-center justify-between text-xs text-white/90">
                  <div>
                    <p className="font-semibold text-white">Exposição Anual de Ornitologia</p>
                    <p className="text-white/70">Pavilhão Municipal</p>
                  </div>
                  <span className="rounded-md bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white whitespace-nowrap">
                    05-08 Nov
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
