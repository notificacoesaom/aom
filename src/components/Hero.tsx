import heroImg from "@/assets/hero-birds.jpg";
import { ArrowRight, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Canários em ambiente natural ao amanhecer"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative container-page flex min-h-[92vh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24">
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-background/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md ring-1 ring-white/20">
          <Leaf className="h-3.5 w-3.5" /> Associação Ornitológica Montemorense
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Preservar, criar e celebrar a ornitologia em Montemor.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
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
    </section>
  );
}
