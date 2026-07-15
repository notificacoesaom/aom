import sobreImg from "@/assets/sobre-aviario.jpg";
import { FileText, Download } from "lucide-react";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={sobreImg}
            alt="Aviário com aves exóticas"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <div className="absolute -bottom-6 -right-4 hidden sm:block rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-[var(--shadow-soft)]">
            <div className="font-display text-3xl font-bold leading-none">+250</div>
            <div className="mt-1 text-xs uppercase tracking-widest opacity-80">sócios ativos</div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sobre Nós</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Uma tradição ornitológica no coração do Alentejo.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A Associação Ornitológica Montemorense reúne criadores de todas as gerações em
            torno de uma paixão comum: as aves. Promovemos o anilhamento oficial, a criação
            ética, exposições anuais e formação técnica, contribuindo para a preservação de
            espécies e para o desenvolvimento da ornitologia em Portugal.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Somos filiados na federação nacional, o que garante aos nossos sócios acesso a
            anilhas oficiais, participação em concursos e o reconhecimento do seu trabalho.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] hover:border-primary/40 transition"
            >
              <FileText className="h-5 w-5 text-primary" />
              <span className="flex flex-col text-left">
                <span>Estatutos</span>
                <span className="text-xs font-normal text-muted-foreground">PDF · 240 KB</span>
              </span>
              <Download className="ml-auto h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] hover:border-primary/40 transition"
            >
              <FileText className="h-5 w-5 text-primary" />
              <span className="flex flex-col text-left">
                <span>Regulamento Interno</span>
                <span className="text-xs font-normal text-muted-foreground">PDF · 180 KB</span>
              </span>
              <Download className="ml-auto h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
