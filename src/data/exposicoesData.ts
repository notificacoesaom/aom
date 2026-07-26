export interface Vencedor {
  classe: string;
  ave: string;
  nomeCriador: string;
}

export interface Exposicao {
  ano: number;
  titulo: string;
  status: "atual" | "concluida";
  subtitulo: string;
  datas: string;
  horario: string;
  local: string;
  cartazImg: string;
  descricao: string;
  vencedores: Vencedor[];
  fotos: string[];
}

export const EXPOSICOES_HISTORICO: Exposicao[] = [
  {
    ano: 2026,
    titulo: "1ª Exposição Nacional Ornitológica - MorAves 2026",
    status: "atual",
    subtitulo: "1ª Exposição Nacional Ornitológica",
    datas: "21 a 22 de Novembro de 2026",
    horario: "Sábado: 10h - 18h | Domingo: 10h - 13h",
    local: "Pavilhão do Parque das Feiras, Montemor-o-Novo",
    cartazImg: "@/assets/cartaz.jpeg", // Certifica-te de guardar o cartaz com este nome na pasta assets
    descricao: "Organizada pela Associação Ornitológica Montemorense com o apoio da FOP e da Câmara Municipal de Montemor-o-Novo.",
    vencedores: [], // Fica vazio até o evento decorrer
    fotos: []
  },
  {
    ano: 2025,
    titulo: "Exposição Ornitológica Anterior",
    status: "concluida",
    subtitulo: "Edição Anual",
    datas: "Novembro de 2025",
    horario: "",
    local: "Pavilhão Municipal de Montemor-o-Novo",
    cartazImg: "@/assets/exhibition-poster-2025.jpg",
    descricao: "Edição anterior de sucesso com grande adesão de criadores.",
    vencedores: [
      { classe: "Canários de Cor", ave: "Gloster", nomeCriador: "Exemplo" }
    ],
    fotos: []
  }
];
