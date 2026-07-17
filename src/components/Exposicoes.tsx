import { useEffect, useState } from "react";
import { CalendarDays, MapPin, Clock } from "lucide-react";

// Importa as tuas imagens aqui (garante que os nomes dos ficheiros estão corretos na pasta src/assets)
import cartazImg from "@/assets/cartaz.jpg"; 
import logoImg from "@/assets/logo-exposicao.png";

const TARGET = new Date("2026-11-21T09:00:00").getTime();

function useCountdown(target: number) {
  const compute = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      dias: Math.floor(diff / 86400000),
      horas: Math.floor((diff / 3600000) % 24),
      minutos: Math.floor((diff / 60000) % 60),
      segundos: Math.floor((diff / 1000) % 60),
    };
  };
  const [t, setT] = useState(compute);
  useEffect(() => {
    const id = setInterval(() => setT(compute()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

export default function Exposicoes() {
  const t = useCountdown(TARGET);
  const cells = [
    { v: t.dias, l: "Dias" },
    { v: t.horas, l: "Horas" },
    { v: t.minutos, l: "Minutos" },
    { v: t.segundos, l: "Segundos" },
  ];

  return (
    <section id="exposicoes" className="relative overflow-hidden py-24 bg-[oklch(0.22_0.04_160)] text-white">
      <div className="container-page">
        
        {/* Layout em Grid: Cartaz à esquerda, Conteúdo à direita */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna do Cartaz */}
          <div className="w-full">
            <img src={cartazImg} alt="Cartaz MorAves 2026" className="rounded-xl shadow-2xl w-full h-auto object-cover" />
          </div>

          {/* Coluna da Informação */}
          <div>
            <div className="flex items-center gap-4 mb-6">
               <img src={logoImg} alt="Logo MorAves" className="h-20 w-20 object-contain" />
               <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">1ª Exposição Nacional Ornitológica</span>
                  <h2 className="font-display text-4xl font-bold">MorAves 2026</h2>
               </div>
            </div>

            <div className="space-y-4 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary-glow" /> 21 – 22 Novembro 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary-glow" /> Sábado: 10h-18h · Domingo: 10h-13h
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-glow" /> Pavilhão do Parque das Feiras · Montemor-O-Novo
              </span>
            </div>

            {/* Contagem Decrescente */}
            <div className="mt-10 grid grid-cols-4 gap-3 max-w-lg">
              {cells.map((c) => (
                <div key={c.l} className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold tabular-nums">{String(c.v).padStart(2, "0")}</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/60">{c.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
