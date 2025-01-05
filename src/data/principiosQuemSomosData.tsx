import { CheckCircle, Eye, Shield, Target } from "lucide-react";

import { ReactNode } from "react";

export interface Principios {
  icon?: ReactNode;
  title?: string;
  description?: string;
  Listvalues?: {icon:ReactNode, subTitle: string}[];
}

export const principiosQuemSomos: Principios[] = [
  {
    icon: <Target color="#38A973" size={32} />,
    title: "Missão",
    description:
      "Promover ações para a atenção integral à saúde da população, com qualidade, por meio de redes de atenção resolutivas, gestão eficiente dos recursos e desenvolvimento regional.",
  },
  {
    icon: <Eye color="#38A973" size={32} />,
    title: "Visão",
    description:
      "Ser reconhecida pelo cidadão por promover ações e serviços públicos em saúde, assistência social e educação de maneira eficiente e comprometida com o bem-estar da população.",
  },
  {
    icon:<Shield color="#38A973" size={32} />,
    title: "Valores",
    Listvalues: [
      {icon: <CheckCircle color="#38A973" size={16} />, subTitle: "Compromisso com a saúde"},
      {icon: <CheckCircle color="#38A973" size={16} />, subTitle: "Eficiência e qualidade"},
      {icon: <CheckCircle color="#38A973" size={16} />, subTitle: "Desenvolvimento regional"},
      {icon: <CheckCircle color="#38A973" size={16} />, subTitle: "Bem-estar comunitário"},
      {icon: <CheckCircle color="#38A973" size={16} />, subTitle: "Transparência e ética"}
    ],
  },
];
