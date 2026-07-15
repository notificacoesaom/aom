import { useEffect, useState } from "react";
//import expoImg from "@/assets/exposicao.jpg";
import { CalendarDays, MapPin } from "lucide-react";

const TARGET = new Date("2026-10-15T09:00:00").getTime();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <section id="exposicoes" className="relative overflow-hidden py-24 md:py-32 text-white">
      <img
        src={expoImg}
        alt="Exposição ornitológica"
        width={1280}
        height={960}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[oklch(0.22_0.04_160/0.82)]" />
      <div className="relative container-page">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Próxima Exposição
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            XXVII Exposição Ornitológica Montemorense
          </h2>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> 15 – 18 Outubro 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Pavilhão Municipal · Montemor-o-Novo
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5 max-w-3xl">
          {cells.map((c) => (
            <div
              key={c.l}
              className="rounded-2xl bg-white/10 px-4 py-6 text-center ring-1 ring-white/15 backdrop-blur-sm"
            >
              <div className="font-display text-4xl font-bold tabular-nums sm:text-5xl">
                {String(c.v).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                {c.l}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-white/80">
          Quatro dias de concurso oficial com júri credenciado, mostra de criadores,
          bolsa de aves e programa social para associados e visitantes. Entrada livre.
        </p>
      </div>
    </section>
  );
}
