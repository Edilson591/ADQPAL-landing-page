// import { useState } from "react";
import MainContainer from "../../../../sections/MainContainer";
import { useParams } from "react-router-dom";
import { imagensGalery } from "../../../../data/imagensGaleriaData";
import SectionHeaders from "../../../../sections/MainHeader";
import { Container } from "../../../../styles";
import * as S from "./styles" 
import ImageGalleryPage from "../../../../components/ModalGaleria";


interface GaleriaParams extends Record<string, string | undefined> {
  galeria: string;
}

function GaleriaContent() {
  const { galeria } = useParams<GaleriaParams>();

  const conteudoAtual =
    galeria && imagensGalery[galeria]
      ? imagensGalery[galeria]
      : {
          titulo: "Galeria Não Encontrada",
          imagens: [],
        };

  return (
    <MainContainer>
      <SectionHeaders title={conteudoAtual.titulo} />
      <Container>
        <S.SectionContentImage>
        <ImageGalleryPage teste={conteudoAtual.imagens}/>
        </S.SectionContentImage>
      </Container>
    </MainContainer>
  );
}

export default GaleriaContent;
