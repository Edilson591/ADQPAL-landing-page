import fotoPAF from "../assets/imagens backgroundSections/foto-programa-PAF.webp";
import fotoGaleriaAeds from "../assets/imagens backgroundSections/20151223_090937.jpg";
import fotoFazerOBem from "../assets/imagens backgroundSections/DSC_8597.webp";

export interface HoverCard {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  nameButton?:string;
}

export const cardProgramas: HoverCard[] = [
  {
    id: 1,
    image: fotoPAF,
    title: "Plano de Assistência Familiar (PAF)",
    description:
      "Conheça nosso programa que oferece telemedicina com mais de 10 especialidades, incluindo odontologia, garantindo cuidado e conveniência para você e sua família.",
    link: "/comunicacao/programas/PAF",
  },
];


export const cardGaleria: HoverCard[] = [
  {
    id: 1,
    image: fotoGaleriaAeds,
    title: "Ação Social: Luta contra o Aedes Aegypti",
    description:
      "Explore todas as fotos do nosso evento sobre o combate do aedes aegypti",
    link: "/comunicacao/galeria-de-fotos/luta-aedes-aegypti",
    nameButton:"Mais Fotos"
  },
  {
    id: 2,
    image: fotoFazerOBem,
    title: "Ação Social: Fazer o bem sem olha a quem",
    description:
      "Explore todas as fotos do nosso evento sobre o doação de marmita",
    link: "/comunicacao/galeria-de-fotos/fazer-o-bem",
    nameButton:"Mais Fotos"
  },
];


