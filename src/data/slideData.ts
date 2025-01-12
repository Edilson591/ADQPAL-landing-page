import imgSlide1Medium from "../assets/imagens slide/foto-slide1-medium.png";
import imgSlide1Large from "../assets/imagens slide/foto-slide1-large.png";
import imgSlide2Large from "../assets/imagens slide/foto-slide2-large.png";
import imgSlide2Medium from "../assets/imagens slide/foto-slide2-medium.png";


interface SlidesData {
  id: number;
  title: string;
  link?:string;
  imageLarge: string;
  imagemMedium: string;
}

export const slideData: SlidesData[] = [
  {
    id: 1,
    title: "imagem frente ADQPAL",
    link: "institucional/quemsomos",
    imageLarge: imgSlide2Large,
    imagemMedium: imgSlide2Medium
  },
  {
    id: 2,
    title:"Imagem Ouvidoria Sus",
    link: "institucional/quemsomos",
    imageLarge: imgSlide1Large,
    imagemMedium: imgSlide1Medium,
  },
  // {
  //   id: 3,
  //   title: "Imagem 3",
  //   image: imgSlide3,
  // },
  // {
  //   id: 4,
  //   title: "Imagem 4",
  //   image: imgSlide4,
  // },
];
