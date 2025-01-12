import fotoTeste from "../assets/foto-card-Dr-Aman.jpeg";

interface propsCardHover {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

export const cardProgramas: propsCardHover[] = [
  {
    id: 1,
    image: fotoTeste,
    title: "Plano de Assistência Familiar (PAF)",
    description:
      "Conheça nosso programa que oferece telemedicina com mais de 10 especialidades, incluindo odontologia, garantindo cuidado e conveniência para você e sua família.",
    link: "/comunicacao/programas/PAF",
  },
];
