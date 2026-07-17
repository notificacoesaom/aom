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
  <h2 className="text-3xl font-bold mb-8 text-foreground">Órgãos Sociais</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Direcção */}
    <div className="p-6 bg-muted rounded-xl">
      <h4 className="font-bold text-lg mb-4 border-b border-primary/20 pb-2">Direcção</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li><strong className="text-foreground">Liberata Borralho</strong> – Presidente</li>
        <li><strong className="text-foreground">Nelson Coelho</strong> – Vice-presidente</li>
        <li><strong className="text-foreground">Virginío Luz</strong> – Tesoureiro</li>
        <li><strong className="text-foreground">Carla da Luz</strong> – Secretário</li>
        <li><strong className="text-foreground">Joaquim Reis</strong> – 1º Suplente</li>
        <li><strong className="text-foreground">Manuel Pereira</strong> – 2º Suplente</li>
      </ul>
    </div>

    {/* Assembleia Geral */}
    <div className="p-6 bg-muted rounded-xl">
      <h4 className="font-bold text-lg mb-4 border-b border-primary/20 pb-2">Assembleia Geral</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li><strong className="text-foreground">Ricardo Pinto</strong> – Presidente</li>
        <li><strong className="text-foreground">Pedro Pereira</strong> – Vice-presidente</li>
        <li><strong className="text-foreground">Andreia Fernandes</strong> – Secretário</li>
      </ul>
    </div>

    {/* Conselho Fiscal */}
    <div className="p-6 bg-muted rounded-xl">
      <h4 className="font-bold text-lg mb-4 border-b border-primary/20 pb-2">Conselho Fiscal</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li><strong className="text-foreground">João Serrano</strong> – Presidente</li>
        <li><strong className="text-foreground">José Alvito</strong> – Relator</li>
        <li><strong className="text-foreground">Fernando Branca</strong> – Secretário</li>
        <li><strong className="text-foreground">Luis Lérias</strong> – Suplente</li>
      </ul>
    </div>

  </div>
</section>

      </div>
    </div>
  );
}
