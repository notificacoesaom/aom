import { CircleDot, CalendarCheck, Wallet, FileText, Download } from "lucide-react";

const DEADLINES = [
  { num: "1.º", date: "01/07/2026" },
  { num: "2.º", date: "01/09/2026" },
  { num: "3.º", date: "01/11/2026" },
  { num: "4.º", date: "15/12/2026" },
  { num: "5.º", date: "01/02/2027" },
  { num: "6.º", date: "01/03/2027" },
];

export default function Anilhas() {
  return (
    <section id="anilhas" className="py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Anilhas, Quotas & Documentos</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Rastreabilidade oficial e gestão associativa.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Enquanto associação filiada, encaminhamos os pedidos de anilhas oficiais da federação, garantindo numeração única e conformidade para exposições nacionais e internacionais. Consulte abaixo os prazos, preçário e descarregue os documentos necessários.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="docs/pedido-anilhas.xlsx"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary-glow transition"
            >
              <Download className="h-4 w-4" />
              Pedido de Anilhas (Ficheiro)
            </a>
            <a
              href="docs/medidas-oficiais-anilhas.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition"
            >
              <FileText className="h-4 w-4 text-primary" />
              Medidas Oficiais
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {/* Card 1: Calendário dos 6 Pedidos Anuais */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-muted-foreground">01</span>
                <h3 className="text-lg font-bold text-foreground">Calendário de Pedidos de Anilhas (6 por ano)</h3>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              As datas indicadas referem-se ao <strong className="text-foreground">último dia</strong> de cada pedido regular.
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DEADLINES.map((d) => (
                <div key={d.num} className="rounded-xl border border-border/60 bg-secondary/30 p-3 text-center">
                  <span className="text-xs font-semibold text-primary">{d.num} Pedido</span>
                  <div className="mt-1 text-sm font-bold font-mono text-foreground">{d.date}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-muted/50 p-3 text-xs text-muted-foreground space-y-1">
              <p>• <strong className="text-foreground">Pedidos regulares:</strong> Tempo expectável de entrega de 2 meses após pedido ao fornecedor.</p>
              <p>• <strong className="text-foreground">Anilhas URGENTES:</strong> Disponíveis a qualquer altura por <strong className="text-foreground">20,00€</strong> (entrega em ~15 dias).</p>
            </div>
          </div>

          {/* Card 2: Quotas, Cartão e Vinheta FOP */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Wallet className="h-5 w-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-muted-foreground">02</span>
                <h3 className="text-lg font-bold text-foreground">Quotas, Cartão e Vinheta FOP</h3>
              </div>
            </div>
            <div className="mt-4 divide-y divide-border/60 text-sm">
              <div className="flex justify-between py-3">
                <span className="text-muted-foreground">Quota Anual de Sócio</span>
                <span className="font-bold text-foreground">12,00 €</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-muted-foreground">Cartão de Sócio (1.ª Inscrição)</span>
                <span className="font-bold text-foreground">3,00 €</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-muted-foreground">Vinheta Anual FOP</span>
                <span className="font-bold text-foreground">5,00 €</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              A quota anual inclui participação em exposições internas e acesso a formações da associação.
            </p>
          </div>

          {/* Card 3: Documentos e Impressos */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-muted-foreground">03</span>
                <h3 className="text-lg font-bold text-foreground">Documentos e Impressos</h3>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Descarregue os ficheiros oficiais para preenchimento dos pedidos de anilhas e consulta das tabelas de medidas autorizadas.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="docs/pedido-anilhas.xlsx"
                download
                className="flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-3 hover:bg-secondary transition flex-1 text-sm font-semibold text-foreground"
              >
                <span className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-primary" />
                  Formulário Pedido de Anilhas
                </span>
                <span className="text-xs text-muted-foreground font-mono">XLSX</span>
              </a>
              <a
                href="docs/medidas-oficiais-anilhas.pdf"
                download
                className="flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-3 hover:bg-secondary transition flex-1 text-sm font-semibold text-foreground"
              >
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Medidas Oficiais das Anilhas
                </span>
                <span className="text-xs text-muted-foreground font-mono">PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
