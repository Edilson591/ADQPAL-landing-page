import {
  BookOpen,
  Brain,
  Handshake,
  Home,
  Users,
  Heart,
  Search,
  UserCheck,
} from "lucide-react";
import { Principios } from "./principiosQuemSomosData";

export const principiosOQueFazemos: Principios[] = [
  {
    icon: <Heart color="#38A973" size={32} />,
    title: "Acolhimento e Suporte",
    description:
      "Oferecemos apoio integral aos dependentes químicos e portadores de doenças psiquiátricas, com atendimento humanizado e personalizado.",
  },
  {
    icon: <Users color="#38A973" size={32} />,
    title: "Apoio Familiar",
    description:
      "Desenvolvemos programas de suporte às famílias, incluindo grupos de apoio e orientação psicológica.",
  },
  {
    icon: <Brain color="#38A973" size={32} />,
    title: "Tratamento Especializado",
    description:
      "Coordenamos o acesso a tratamentos especializados em parceria com profissionais e instituições de saúde.",
  },
  {
    icon: <BookOpen color="#38A973" size={32} />,
    title: "Educação e Prevenção",
    description:
      "Realizamos campanhas educativas e preventivas sobre o uso de drogas e saúde mental na comunidade.",
  },
  {
    icon: <Handshake color="#38A973" size={32} />,
    title: "Reinserção Social",
    description:
      "Promovemos programas de capacitação e reinserção social para auxiliar no retorno à vida em sociedade.",
  },
  {
    icon: <Home color="#38A973" size={32} />,
    title: "Acompanhamento Contínuo",
    description:
      "Mantemos um sistema de acompanhamento contínuo dos assistidos, garantindo suporte durante todo o processo de recuperação.",
  },
  {
    icon: <Search color="#38A973" size={32} />,
    title: "Publico Alvo",
    Listvalues: [
      {
        icon: <UserCheck color="#38A973" size={16} />,
        subTitle: "Crianças entre 13 a 18 anos incompletos",
      },
      {
        icon: <UserCheck color="#38A973" size={16} />,
        subTitle: "Adultos e famílias em risco e vulnerabilidade",
      },
      {
        icon: <UserCheck color="#38A973" size={16} />,
        subTitle: "Pessoas usuárias de drogas",
      },
    ],
  },
];
