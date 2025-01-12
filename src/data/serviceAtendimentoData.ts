import fotoFisioterapia from "../assets/imagens serviços/foto-services-fisio.jpg";
import fotoClinico from "../assets/imagens serviços/foto-services-clinico.png";
import fotoNutricionista from "../assets/imagens serviços/foto-services-nutricionista.png";
import fotoPsicologo from "../assets/imagens serviços/foto-services-psicologo.png";
import fotoAssitenteSocial from "../assets/imagens serviços/foto-services-assistenteSocial.png";
import fotoPsiquiatra from "../assets/imagens serviços/foto-services-psiquiatra.png";
import fotoOrtopedista from "../assets/imagens serviços/foto-services-ortopedista.png";
import fotoVascular from "../assets/imagens serviços/foto-services-vascular.png";

interface CardsServicesAtedimento {
  imagem: string;
  titulo: string;
  height: string;
  paddingCard: string;
}

export const cardsAtendimentoData:CardsServicesAtedimento[] = [
  {
    imagem: fotoPsicologo,
    titulo: "Psicologo",
    height: "auto",
    paddingCard: "8px",
  },
  {
    imagem: fotoClinico,
    titulo: "Clínico Geral",
    height: "auto",
    paddingCard: "8px",
  },
  {
    imagem: fotoFisioterapia,
    titulo: "Fisioterapeuta",
    height: "auto",
    paddingCard: "8px",
  },
  {
    imagem: fotoNutricionista,
    titulo: "Nutricionista",
    height: "auto",
    paddingCard: "8px",
  },
  {
    imagem: fotoAssitenteSocial,
    titulo: "Assistência Social",
    height: "auto",
    paddingCard: "8px",
  },
  {
    imagem: fotoPsiquiatra,
    titulo: "Psiquiatra",
    height: "auto",
    paddingCard: "8px",
  },
  {
    imagem: fotoOrtopedista,
    titulo: "Ortopedista",
    height: "auto",
    paddingCard: "8px",
  },
  {
    imagem: fotoVascular,
    titulo: "Vascular",
    height: "auto",
    paddingCard: "8px",
  },
];
