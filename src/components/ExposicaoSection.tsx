import { useState } from "react"; // Adicionado useState
import { CalendarDays, MapPin, Clock, FileText, Award, Download, Image as ImageIcon, X } from "lucide-react"; // Adicionado X icon
import { EXPOSICOES_HISTORICO } from "@/data/exposicoesData";

// --- Importar componentes do Dialog (Assumindo setup tipo shadcn/ui) ---
// Se não tiver instalado, corra: npx shadcn-ui@latest add dialog
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"; 
// -----------------------------------------------------------------------

export default function ExposicaoSection() {
  // 1. Estado para controlar qual imagem está aberta no ampliada (lightbox)
  const [imagemAmpliada, setImagemAmpliada] = useState<string | null>(null);

  const info = EXPOSICOES_HISTORICO.find((e) => e.status === "atual") || EXPOSICOES_HISTORICO[0];

  const imagensModules = import.meta.glob<{ default: string }>(
    '@/assets/galeria-2026/*.{jpg,jpeg,png,webp}', 
    { eager: true }
  );

  const listaFotos = Object.values(imagensModules).map((mod) => mod.default);

  return (
    <section id={`exposicao-${info.ano}`} className="py-24 bg-background text-foreground relative overflow-hidden border-t border-border/40">
      <div className="container-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho (sem alterações) */}
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

        {/* Grelha de Informações (sem alterações) */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
           {/* ... (conteúdo existente) ... */}
        </div>

        {/* Galeria Dinâmica com Lightbox */}
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
                // Envolvemos cada foto num Dialog Trigger para abrir o Lightbox
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="group relative aspect-video rounded-xl overflow-hidden bg-muted border border-border/80 shadow-sm transition hover:shadow-md cursor-pointer">
                      <img 
                        src={fotoUrl} 
                        alt={`Foto ${index + 1} Exposição ${info.ano}`} 
                        // CORREÇÃO 1: object-contain em vez de object-cover
                        // Isto garante que a foto inteira aparece, sem cortar.
                        // Se a foto não for 16:9, o espaço restante fica com a cor de fundo (bg-muted).
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      {/*Pequeno overlay para indicar que é clicável */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  {/* O conteúdo do Modal (Lightbox) */}
                  <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 border-none bg-transparent flex items-center justify-center shadow-none">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Botão de fechar customizado por cima da imagem se necessário */}
                      <button className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition">
                        <X className="h-6 w-6" />
                      </button>
                      
                      <img
                        src={fotoUrl}
                        alt={`Ampliação ${index + 1} Exposição ${info.ano}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          ) : (
            // Estado de vazio (sem alterações)
            <div className="text-center py-12 border border-dashed border-border rounded-xl bg-background/50">
              <ImageIcon className="h-10 w-10 mx-auto text-muted-foreground/40 mb-3" />
              <p className="text-sm font-medium text-muted-foreground">Ainda não existem fotografias publicadas.</p>
              <p className="text-xs text-muted-foreground/70 mt-1">Basta colocar as imagens na pasta <code className="bg-muted px-1.5 py-0.5 rounded text-primary">src/assets/galeria-{info.ano}/</code> para aparecerem aqui.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
