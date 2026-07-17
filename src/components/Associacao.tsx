import { History, Target, Users, Mail } from "lucide-react";

export default function Associacao() {
  return (
    <div id="associacao" className="py-24 bg-background">
      <div className="container-page space-y-24">
        
        {/* 1. História e Quem Somos */}
        <section>
          <h2 className="text-3xl font-bold mb-6">A Nossa História</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Fundada em 2005, a Associação Ornitológica Montemorense nasceu da vontade de...
            (Insere aqui o texto sobre a história da associação).
          </p>
        </section>

        {/* 2. Missão, Visão e Valores */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <Target className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2">Missão</h3>
            <p className="text-sm text-muted-foreground">Promover a ornitologia ética...</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <Target className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2">Visão</h3>
            <p className="text-sm text-muted-foreground">Ser uma referência nacional...</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-xl mb-2">Valores</h3>
            <p className="text-sm text-muted-foreground">Ética, preservação e respeito...</p>
          </div>
        </section>

        {/* 3. Órgãos Sociais */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Órgãos Sociais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-muted rounded-xl">
              <h4 className="font-bold">Direção</h4>
              <p className="text-sm text-muted-foreground mt-2">Presidente: [Nome]</p>
            </div>
            <div className="p-4 bg-muted rounded-xl">
              <h4 className="font-bold">Assembleia Geral</h4>
              <p className="text-sm text-muted-foreground mt-2">Presidente: [Nome]</p>
            </div>
            <div className="p-4 bg-muted rounded-xl">
              <h4 className="font-bold">Conselho Fiscal</h4>
              <p className="text-sm text-muted-foreground mt-2">Presidente: [Nome]</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
