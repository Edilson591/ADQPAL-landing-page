import SectionHeaders from "../../MainHeader";
import * as S from "./styles";
import logoAgibem from "../../../assets/imagens parceiros/logo-agibem.jpeg";
import logoLabClin from "../../../assets/imagens parceiros/logo-labclin.jpeg";
import logoSantaCasa from "../../../assets/imagens parceiros/logo-santacasa.png";
import logoDiag from "../../../assets/imagens parceiros/logo-diag.jpeg";
import logoSateal from "../../../assets/imagens parceiros/logo-sateal.jpg"
import logoNaedjaMelo from "../../../assets/imagens parceiros/logo-naedja-melo.jpeg"

function SectionParceiros() {
  return (
    <S.SectionParceiros>
      <SectionHeaders title="Parceiros" id="parceiros-section"/>
      <S.SliderContainer role="region" aria-labelledby="parceiros-title">
        <S.SlideContent role="list">
          <S.Slide role="listitem" aria-label="Parceiro agibem">
            <S.LinkSlide
              href="https://web.agiben.com.br/"
              target="reg"
              rel="noopener noreferrer"
              aria-label="Visite o site da Agibem"
            >
              <S.SlideImg
                src={logoAgibem}
                alt="Logotipo do parceiro Agibem"
                role="img"
              />
            </S.LinkSlide>
          </S.Slide>
          <S.Slide role="listitem" aria-label="Parceiro labClin">
            <S.LinkSlide
              href="https://instagram.com/cllabclin"
              target="reg"
              rel="noopener noreferrer"
              aria-label="Visite o instagram da LabClin"
            >
              <S.SlideImg
                src={logoLabClin}
                alt="Logotipo do parceiro LabClin"
                role="img"
              />
            </S.LinkSlide>
          </S.Slide>
          <S.Slide
            role="listitem"
            aria-label="Parceiro Santa Casa de São Miguel dos Campos"
          >
            <S.LinkSlide
              href="https://santacasadesaomiguel.com.br/"
              target="reg"
              rel="noopener noreferrer"
              aria-label="Visite o site da Santa Casa de São Miguel dos Campos"
            >
              <S.SlideImg
                src={logoSantaCasa}
                alt="Logotipo do parceiro Santa Casa de São Miguel dos Campos"
                role="img"
              />
            </S.LinkSlide>
          </S.Slide>
          <S.Slide role="listitem" aria-label="Parceiro Diag">
            <S.LinkSlide
              href="https://instagram.com/diag_saude"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite o instragam da Diag"
            >
              <S.SlideImg
                src={logoDiag}
                alt="Logotipo do parceiro Diag"
                role="img"
              />
            </S.LinkSlide>
          </S.Slide>
          <S.Slide role="listitem" aria-label="Parceiro Sateal">
            <S.LinkSlide
              href="https://instagram.com/satealsindicato"
              target="reg"
              rel="noopener noreferrer"
              aria-label="Visite o instragram do Sateal"
            >
              <S.SlideImg
                src={logoSateal}
                alt="Logotipo do parceiro Sateal"
                role="img"
              />
            </S.LinkSlide>
          </S.Slide>
          <S.Slide role="listitem" aria-label="Parceiro Naeja Melo">
            <S.LinkSlide
              href="https://instagram.com/satealsindicato"
              target="reg"
              rel="noopener noreferrer"
              aria-label="Visite o instragram da Naeja Melo"
            >
              <S.SlideImg
                src={logoNaedjaMelo}
                alt="Logotipo do Naedja Melo"
                role="img"
              />
            </S.LinkSlide>
          </S.Slide>
        </S.SlideContent>
      </S.SliderContainer>
    </S.SectionParceiros>
  );
}

export default SectionParceiros;
