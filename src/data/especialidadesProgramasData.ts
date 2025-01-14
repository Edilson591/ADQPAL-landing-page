interface PlanoSaude {
  title: string;
  items: string[];
  links?: string;
}

export const especialidadesProgramasData: PlanoSaude[] = [
  {
    title: "Assistência Odontológica",
    items: [
      "Tratamento odontológico completo",
      "Tratamento de Canal e gengiva",
      "Restauração",
      "Odontopediatria (Tratamento infantil)",
      "Radiografia",
      "Extração",
      "Atendimento nacional",
      "Carência zero",
      "Urgência 24h (Nas capitais)"
    ],
  },
  {
    title: "Especialidades Médicas",
    items: [
      "Clínico Geral",
      "Psicologia",
      "Pediatria",
      "Cardiologia",
      "Nutrição",
      "Dermatologia",
      "Ginecologia/Obstetrícia",
      "Martologia",
      "Urologia",
      "Psiquiatria",
    ],
  },
  {
    title: "Contato",
    items: [
      "A Agibnem Benefícios LTDA é responsável por disponibilizar a plataforma de benefícios, incluindo aplicativo para acesso a serviços de saúde.",
      "A plataforma permite fácil acesso a todos os programas de saúde disponíveis no plano.",
    ],
    links: "sdfgdf"
  },
];
