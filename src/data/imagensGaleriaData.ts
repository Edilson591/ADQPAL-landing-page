// imagens ação aedes
import foto1aedes from "../assets/imagens galeria/imagens ação aedes/20151223_090937.jpg"
import foto2aedes from "../assets/imagens galeria/imagens ação aedes/20151223_091040.jpg"
import foto3aedes from "../assets/imagens galeria/imagens ação aedes/20151223_092941.jpg"
import foto4aedes from "../assets/imagens galeria/imagens ação aedes/20151223_093418.jpg"
import foto5aedes from "../assets/imagens galeria/imagens ação aedes/20151223_094456.jpg"
import foto6aedes from "../assets/imagens galeria/imagens ação aedes/20151223_094530.jpg"
import foto7aedes from "../assets/imagens galeria/imagens ação aedes/20151223_095328.jpg"
import foto8aedes from "../assets/imagens galeria/imagens ação aedes/20151223_095413.jpg"
import foto9aedes from "../assets/imagens galeria/imagens ação aedes/20151223_095739.jpg"
import foto10aedes from "../assets/imagens galeria/imagens ação aedes/20151223_100117.jpg"

// imagens ação entraga de marmita 
import foto1entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1 (1).webp"
import foto2entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1 (2).webp"
import foto3entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1 (3).webp"
import foto4entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1-_4_.webp"
import foto5entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1-_5_.webp"
import foto6entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1-_6_.webp"
import foto7entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1-_7_.webp"
import foto8entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1-_8_.webp"
import foto9entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1-_9_.webp"
import foto10entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1-_10_.webp"
import foto11entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1-_11_.webp"
import foto12entrega from "../assets/imagens galeria/imagens ação entrega de comida/imagemEntrega1-_12__1.webp"

interface Imagem {
  url: string;
  descricao: string;
}

interface ImagemGalery {
  titulo: string;
  imagens: Imagem[];
}


export const imagensGalery: Record<string, ImagemGalery> = {
  "fazer-o-bem": {
    titulo: "Fazer o Bem Sem Olhar a Quem",
    imagens: [
      {
        url: foto1entrega,
        descricao: "Imagem de pessoas ajudando em uma ação comunitária",
      },
      {
        url: foto2entrega,
        descricao: "Distribuição de alimentos em um evento solidário",
      },
      {
        url: foto3entrega,
        descricao: "Imagem de pessoas ajudando em uma ação comunitária",
      },
      {
        url: foto4entrega,
        descricao: "Distribuição de alimentos em um evento solidário",
      },
      {
        url: foto5entrega,
        descricao: "Imagem de pessoas ajudando em uma ação comunitária",
      },
      {
        url: foto6entrega,
        descricao: "Distribuição de alimentos em um evento solidário",
      },
      {
        url: foto7entrega,
        descricao: "Imagem de pessoas ajudando em uma ação comunitária",
      },
      {
        url: foto8entrega,
        descricao: "Distribuição de alimentos em um evento solidário",
      },
      {
        url: foto9entrega,
        descricao: "Imagem de pessoas ajudando em uma ação comunitária",
      },
      {
        url: foto10entrega,
        descricao: "Distribuição de alimentos em um evento solidário",
      },
      {
        url: foto11entrega,
        descricao: "Distribuição de alimentos em um evento solidário",
      },
      {
        url: foto12entrega,
        descricao: "Distribuição de alimentos em um evento solidário",
      },
    ],
  },
  "luta-aedes-aegypti": {
    titulo: "Luta Contra o Aedes Aegypti",
    imagens: [
      {
        url: foto1aedes,
        descricao: "Campanha de conscientização contra o mosquito",
      },
      {
        url: foto2aedes,
        descricao: "Pessoas eliminando criadouros do Aedes Aegypti",
      },
      {
        url: foto3aedes,
        descricao: "Campanha de conscientização contra o mosquito",
      },
      {
        url: foto4aedes,
        descricao: "Pessoas eliminando criadouros do Aedes Aegypti",
      },
      {
        url: foto5aedes,
        descricao: "Campanha de conscientização contra o mosquito",
      },
      {
        url: foto6aedes,
        descricao: "Pessoas eliminando criadouros do Aedes Aegypti",
      },
      {
        url: foto7aedes,
        descricao: "Campanha de conscientização contra o mosquito",
      },
      {
        url: foto8aedes,
        descricao: "Pessoas eliminando criadouros do Aedes Aegypti",
      },
      {
        url: foto9aedes,
        descricao: "Campanha de conscientização contra o mosquito",
      },
      {
        url: foto10aedes,
        descricao: "Pessoas eliminando criadouros do Aedes Aegypti",
      },
    ],
  },
};
