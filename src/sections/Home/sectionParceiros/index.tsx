import SectionHeaders from "../../SectionHeader";
import * as S from "./styles";
import logoAgibem from "../../../assets/logo-agibem.jpeg";
import logoLabClin from "../../../assets/logo-labclin.jpeg";
import logoSantaCasa from "../../../assets/logo-santacasa-Photoroom.png";
import logoDiag from "../../../assets/logo-diag.jpeg";

function SectionParceiros() {
  return (
    <S.SectionParceiros>
      <SectionHeaders title="Parceiros" />
      <S.SliderContainer role="region" aria-labelledby="parceiros-title">
        <S.SlideContent role="list">
          <S.Slide role="listitem" aria-label="Parceiro agibem">
            <S.LinkSlide
              href="https://web.agiben.com.br/"
              target="_blank"
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
              href="https://www.labclin-itajuba.com.br/logins/login"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite o site da labClin"
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
              target="_blank"
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
              href="https://www.laboratoriodiag.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite o site da Diag"
            >
              <S.SlideImg
                src={logoDiag}
                alt="Logotipo do parceiro Diag"
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