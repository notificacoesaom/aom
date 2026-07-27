import { useState } from "react";
import { CalendarDays, MapPin, Clock, FileText, Award, Download, Image as ImageIcon, X } from "lucide-react";
import { EXPOSICOES_HISTORICO } from "@/data/exposicoesData";

export default function ExposicaoSection() {
  // Estado para controlar a imagem selecionada para o modal (lightbox)
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

  // Validação defensiva para os dados
  const exposicoes = Array.isArray(EXPOSICOES_HISTORICO) ? EXPOSICOES_HISTORICO : [];
  const info = exposicoes.find((e) => e.status === "atual") || exposicoes[0];

  if (!info) {
    return (
      <section className="py-24 bg-background text-foreground text-center">
        <p className="text-muted-foreground">A carregar informações da exposição...</p>
      </section>
    );
  }

  // Caminho relativo para carregar as imagens da pasta galeria-2026
  const imagensModules = import.meta.glob<{ default: string }>(
    '../assets/galeria-2026/*.{jpg,jpeg,png,webp}', 
    { eager: true }
  );

  const listaFotos = Object.values(imagensModules).map((mod) => mod.default);

  return (
    <section id={`exposicao-${info.ano}`} className="py-24 bg-background text-foreground relative overflow-hidden border-t border-border/40">
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
            {/* CAMINHO CORRIGIDO COM BASE_URL DO VITE */}
            <a 
              href={`${import.meta.env.BASE_URL}docs/regulamento-exposicao-2026.pdf`} 
              download="regulamento-exposicao-2026.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90 mt-4"
            >
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
            {/* BOTÃO INSCRIÇÕES ATUALIZADO */}
            <a 
              href="https://www.fop.pt/expo.asp?id=664" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium shadow-sm transition hover:bg-muted mt-4"
            >
              Efetuar Inscrição Online
            </a>
          </div>
        </div>

        {/* Galeria Dinâmica */}
        <div className="rounded-2xl border border-border/60 bg-muted/20 p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold">Galeria Fotográfica - {info.ano}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {listaFotos.length > 0 
                  ? `A mostrar ${listaFotos.length} fotografias do evento.` 
                  : "Registo fotográfico brevemente disponível."}
              </p>
            </div>
          </div>

          {listaFotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {listaFotos.map((fotoUrl, index) => (
                <div 
                  key={index} 
                  onClick={() => setImagemSelecionada(fotoUrl)}
                  className="group relative aspect-video rounded-xl overflow-hidden bg-muted border border-border/80 shadow-sm transition hover:shadow-md cursor-pointer"
                >
                  <img 
                    src={fotoUrl} 
                    alt={`Foto ${index + 1} Exposição ${info.ano}`} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-border rounded-xl bg-background/50">
              <ImageIcon className="h-10 w-10 mx-auto text-muted-foreground/40 mb-3" />
              <p className="text-sm font-medium text-muted-foreground">Ainda não existem fotografias publicadas.</p>
              <p className="text-xs text-muted-foreground/70 mt-1">Basta colocar as imagens na pasta <code className="bg-muted px-1.5 py-0.5 rounded text-primary">src/assets/galeria-{info.ano}/</code> para aparecerem aqui.</p>
            </div>
          )}
        </div>

      </div>

      {/* Modal / Lightbox (Abre quando se clica numa fotografia) */}
      {imagemSelecionada && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setImagemSelecionada(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setImagemSelecionada(null)}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-50 rounded-full bg-black/60 p-2.5 text-white hover:bg-black transition"
              aria-label="Fechar"
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={imagemSelecionada} 
              alt="Fotografia Ampliada" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl bg-black/40"
            />
          </div>
        </div>
      )}
    </section>
  );
}
