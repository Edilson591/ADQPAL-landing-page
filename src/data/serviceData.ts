//imagens Atendimento
import fotoFisioterapia from "../assets/imagens serviços/foto-services-fisio.webp";
import fotoClinico from "../assets/imagens serviços/foto-services-clinico.webp";
import fotoNutricionista from "../assets/imagens serviços/foto-services-nutricionista.webp";
import fotoPsicologo from "../assets/imagens serviços/foto-services-psicologo.webp";
import fotoAssitenteSocial from "../assets/imagens serviços/foto-services-assistenteSocial.webp";
import fotoPsiquiatra from "../assets/imagens serviços/foto-services-psiquiatra.webp";
import fotoOrtopedista from "../assets/imagens serviços/foto-services-ortopedista.webp";
import fotoVascular from "../assets/imagens serviços/foto-services-vascular.webp";
import fotoMastologista from "../assets/imagens serviços/foto-services-mastologista.webp"

//imagens Exames 
import fotoLaboratorio from "../assets/imagens serviços/foto-services-laboratorial.webp"
import fotoUltrasson from "../assets/imagens serviços/foto-services-ultrasson.webp"
import fotoEletro from "../assets/imagens serviços/foto-services-eletro.webp"
import fotoAudiometria from "../assets/imagens serviços/foto-services-audiometria.jpg"


interface CardsServices {
  imagem?: string;
  titulo: string;
  height: string;
  paddingCard: string;
}

export const cardsAtendimentoData:CardsServices[] = [
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
    titulo: "Ajuda Social",
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
  {
    imagem: fotoMastologista,
    titulo: "Mastologista",
    height: "auto",
    paddingCard: "8px",
  },
];


export const cardsExamesData: CardsServices[] = [
  {
    imagem: fotoLaboratorio, 
    titulo: "Laboratoriais",
    height: "auto",
    paddingCard: "8px",
  },
  {
    imagem: fotoUltrasson, 
    titulo: "Ultrassonografia",
    height: "auto",
    paddingCard: "8px",
  },
  {
    imagem: fotoEletro, 
    titulo: "Eletrocardiograma",
    height: "auto",
    paddingCard: "8px",
  },
  // {
  //   // imagem: fotoMapa, 
  //   titulo: "MAPA 24h",
  //   height: "auto",
  //   paddingCard: "8px",
  // },
  // {
  //   // imagem: fotoEspirometria, 
  //   titulo: "Espirometria",
  //   height: "auto",
  //   paddingCard: "8px",
  // },
  // {
  //   // imagem: fotoHolter, 
  //   titulo: "Holter 24h",
  //   height: "auto",
  //   paddingCard: "8px",
  // },
  // {
  //   // imagem: fotoPreNatal, 
  //   titulo: "Pré-Natal",
  //   height: "auto",
  //   paddingCard: "8px",
  // },
  {
    imagem: fotoAudiometria, 
    titulo: "Audiometria",
    height: "auto",
    paddingCard: "8px",
  },
];


