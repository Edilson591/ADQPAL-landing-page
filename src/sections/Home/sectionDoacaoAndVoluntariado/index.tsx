import * as S from "./styles";
import photoDoacao from "../../../assets/foto-section-doacao.jpeg";
import SectionHeaders from "../../SectionHeader";

function SectionDoacaoAndVoluntario() {
  return (
    <S.SectionDoacaoAndVoluntario>
      <S.ContainerDoacaoandVoluntario>
        <SectionHeaders
          title="Transforme Vidas com Sua Generosidade e Dedicação"
          subtitle="Descubra como você pode fazer a diferença, seja doando ou voluntariando seu tempo e talento!"
        />
        <S.SectionContent className="section-doacao-voluntario__content">
          <img
            className="section-doacao-voluntario__content-image"
            src={photoDoacao}
            alt="Imagem representativa sobre a doação, mostrando ações da associação ADQPAL"
          />
          <div className="section-doacao-voluntario__content-description">
            <h3 className="section-doacao-voluntario__content-description-title">
              Conheça Nossa Missão e Faça Parte Desta Transformação
            </h3>
            <p className="section-doacao-voluntario__content-description-text">
              Cada sorriso que você vê nesta imagem representa uma vida
              transformada. Por meio de nossas ações, já levamos esperança,
              cuidado e apoio a milhares de pessoas. Mas ainda há muito a ser
              feito. Com a sua ajuda, podemos alcançar ainda mais vidas.
              Junte-se a nós nesta missão de amor e solidariedade.
            </p>
            <div className="section-doacao-voluntario__content-description-button">
              <S.Button>Doe Agora e Transforme Vidas!</S.Button>
              <S.Button>Seja um Voluntario</S.Button>
            </div>
          </div>
        </S.SectionContent>
      </S.ContainerDoacaoandVoluntario>
    </S.SectionDoacaoAndVoluntario>
  );
}

export default SectionDoacaoAndVoluntario;
