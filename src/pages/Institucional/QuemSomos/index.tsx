import * as S from "./styled";
import SectionHeaders from "../../../sections/MainHeader";
import { Container } from "../../../styles";
import Hero from "../../../components/Hero";
import heroQuemSomos from "../../../assets/imagens backgroundSections/foto-o-que-fazemos.webp";
import { ContainerPrincipal } from "../../../sections/MainContainer/styles";
import SectionPrincipios from "../../../sections/SectionPrincipios";

function PageQuemSomos() {
  return (
    <>
      <Hero
        image={heroQuemSomos}
        descriptionHero="Logo da Associação dos Dependentes Químicos e Portadores de Doenças Psiquiátricas de São Miguel dos Campos (ADQPAL)"
      />
      <ContainerPrincipal>
        <Container>
          <SectionHeaders
            title="Quem Somos"
            id="quem-somos-section"
            subBackground={true}
          />
          <S.SectionText aria-labelledby="quem-somos-header">
            <article>
              <p id="quem-somos-header">
                Fundada em 29 de fevereiro de 2012, na cidade de São Miguel dos
                Campos, a{" "}
                <strong>
                  <em>
                    Associação dos Dependentes Químicos e Portadores de Doenças
                    Psiquiátricas de São Miguel dos Campos - Alagoas
                  </em>
                </strong>{" "}
                (ADQPAL) é uma associação filantrópica, sem fins lucrativos, com
                duração indeterminada. Sua sede e foro estão localizados no
                município de São Miguel dos Campos, Alagoas.
              </p>
              <p>
                A{" "}
                <strong>
                  <em>ADQPAL</em>
                </strong>{" "}
                tem como finalidade coordenar, defender e representar os
                pacientes perante a sociedade, promovendo ações em benefício
                deles, de seus familiares e das comunidades, sem distinção ou
                discriminação de raça, cor, profissão, nacionalidade, gênero,
                credo religioso, orientação sexual ou posicionamento político.
                Essas ações são realizadas por meio de programas e projetos que
                atendam aos seus objetivos.
              </p>
              <p>
                O uso ilícito de drogas tem aumentado em ritmo alarmante nos
                últimos anos, ultrapassando fronteiras sociais, econômicas,
                políticas e nacionais. Esse aumento pode ser atribuído a
                diversos fatores, como a falta de informações confiáveis sobre
                os perigos a curto e longo prazo do consumo de drogas, as
                limitações das atividades preventivas e a ausência de
                conscientização sobre a magnitude do problema dos entorpecentes.
              </p>
              <p>
                Os problemas decorrentes do uso inadequado de drogas são
                frequentemente descritos como um excesso de consequências para
                os jovens e uma falta de conscientização por parte dos adultos.
              </p>
            </article>
          </S.SectionText>
          <S.ContainerPrincipios aria-labelledby="principios-header"> 
            <SectionPrincipios tiposPrincipios={"quem-somos"} />
          </S.ContainerPrincipios>
        </Container>
      </ContainerPrincipal>
    </>
  );
}

export default PageQuemSomos;
