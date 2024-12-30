import * as S from "./styles";
import photoDoacao from "../../../assets/foto-section-doacao.jpeg";
import SectionHeaders from "../../SectionHeader";

function SectionDoacao() {
  return (
    <S.SectionDoacao>
      <S.ContainerDoacao>
        <SectionHeaders
          title="Seja um doador"
          subtitle="Transforme sua generosidade em esperança. Doe qualquer valor e faça a diferença!"
        />
        <S.SectionContent className="section-doacao__content">
          <img
            className="section-doacao__content-image"
            src={photoDoacao}
            alt="Imagem representativa sobre a doação, mostrando ações da associação ADQPAL"
          />
          <div className="section-doacao__content-description">
            <h3 className="section-doacao__content-description-title">
              Conheça Nossa Missão e Faça Parte Desta Transformação
            </h3>
            <p className="section-doacao__content-description-text">
              Cada sorriso que você vê nesta imagem representa uma vida
              transformada. Por meio de nossas ações, já levamos esperança,
              cuidado e apoio a milhares de pessoas. Mas ainda há muito a ser
              feito. Com a sua ajuda, podemos alcançar ainda mais vidas.
              Junte-se a nós nesta missão de amor e solidariedade.
            </p>
            <div className="section-doacao__content-description-button">
              <S.Button>Doe Agora e Transforme Vidas!</S.Button>
            </div>
          </div>
        </S.SectionContent>
      </S.ContainerDoacao>
    </S.SectionDoacao>
  );
}

export default SectionDoacao;
