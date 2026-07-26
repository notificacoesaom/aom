import heroImg from "@/assets/hero-birds.jpg";
import cartazImg from "@/assets/cartaz.jpeg"; // O teu cartaz real
import { ArrowRight, Leaf, Calendar, ExternalLink, X, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { EXPOSICOES_HISTORICO } from "@/data/exposicoesData";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Puxa automaticamente os dados da exposição atual (2026)
  const expoAtual = EXPOSICOES_HISTORICO.find(e => e.ano === 2026) || EXPOSICOES_HISTORICO[0];

  return (
    <section id="inicio" className="relative min-h-[92vh] w-full overflow-hidden flex items-center">
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
          
          {/* COLUNA ESQUERDA */}
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

          {/* COLUNA DIREITA: Cartaz Real & Informações do MorAves 2026 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md ring-1 ring-white/20 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/95">
                  {expoAtual.titulo}
                </span>
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-white">
                  2026
                </span>
              </div>
              
              {/* Miniatura do Cartaz Real */}
              <div 
                className="relative overflow-hidden rounded-xl bg-black/40 aspect-[3/4] max-h-[360px] flex items-center justify-center group cursor-pointer border border-white/10 mb-4"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={cartazImg}
                  alt="Cartaz MorAves 2026"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105 p-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition flex items-end p-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className="text-xs font-semibold text-white flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg backdrop-blur-md transition w-full justify-center shadow-lg cursor-pointer"
                  >
                    Ver cartaz completo <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Detalhes rápidos extraídos do cartaz */}
              <div className="space-y-2 text-xs text-white/90 bg-black/20 p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-semibold">{expoAtual.datas}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span>{expoAtual.horario}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{expoAtual.local}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* MODAL / POPUP DO CARTAZ COMPLETO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative max-w-2xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/15 p-5 flex flex-col items-center">
            
            <div className="w-full flex items-center justify-between mb-3 pb-2 border-b border-white/15">
              <h3 className="text-base font-bold text-white">1ª Exposição Nacional Ornitológica - MorAves 2026</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition cursor-pointer"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="relative w-full h-[70vh] flex items-center justify-center bg-black/50 rounded-xl p-2 border border-white/10">
              <img
                src={cartazImg}
                alt="Cartaz MorAves 2026 Completo"
                className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>
            
            <div className="mt-4 flex justify-between items-center w-full pt-2 border-t border-white/15 text-xs text-white/80">
              <span>Organização: Associação Ornitológica Montemorense</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl bg-primary px-6 py-2 font-semibold text-white hover:opacity-90 transition shadow-md cursor-pointer"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
