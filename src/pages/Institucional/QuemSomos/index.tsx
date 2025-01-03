import * as S from "./styled";
import SectionHeaders from "../../../sections/SectionHeader";
import { Container } from "../../../styles";
import Hero from "../../../components/Hero";
import imgHeroQuemSomos from "../../../assets/foto-quem-somos.jpg";
import { CheckCircle, Eye, Shield, Target } from "lucide-react";

function PageQuemSomos() {
  return (
    <S.SectionAboutUs>
      <Hero image={imgHeroQuemSomos} />
      <Container>
        <SectionHeaders title="Quem Somos" />
        <S.TextContent>
          <p>
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
            tem como finalidade coordenar, defender e representar os pacientes
            perante a sociedade, promovendo ações em benefício deles, de seus
            familiares e das comunidades, sem distinção ou discriminação de
            raça, cor, profissão, nacionalidade, gênero, credo religioso,
            orientação sexual ou posicionamento político. Essas ações são
            realizadas por meio de programas e projetos que atendam aos seus
            objetivos.
          </p>
          <p>
            O uso ilícito de drogas tem aumentado em ritmo alarmante nos últimos
            anos, ultrapassando fronteiras sociais, econômicas, políticas e
            nacionais. Esse aumento pode ser atribuído a diversos fatores, como
            a falta de informações confiáveis sobre os perigos a curto e longo
            prazo do consumo de drogas, as limitações das atividades preventivas
            e a ausência de conscientização sobre a magnitude do problema dos
            entorpecentes.
          </p>
          <p>
            Os problemas decorrentes do uso inadequado de drogas são
            frequentemente descritos como um excesso de consequências para os
            jovens e uma falta de conscientização por parte dos adultos.
          </p>
        </S.TextContent>
        <S.ContainerPrincipios>
          <S.ListPrincipios>
            <S.ItemPrincipios>
              <div className="list-item__icon">
                <Target color="#38A973" size={32} />
              </div>
              <h3 className="list-item__title">Missão</h3>
              <p className="list-item__text">
                Promover ações para a atenção integral à saúde da população, com
                qualidade, por meio de redes de atenção resolutivas, gestão
                eficiente dos recursos e desenvolvimento regional.
              </p>
            </S.ItemPrincipios>
            <S.ItemPrincipios>
              <div className="list-item__icon">
                <Eye color="#38A973" size={32} />
              </div>
              <h3 className="list-item__title">Visão</h3>
              <p className="list-item__text">
                Ser reconhecida pelo cidadão por promover ações e serviços
                públicos em saúde, assistência social e educação de maneira
                eficiente e comprometida com o bem-estar da população.
              </p>
            </S.ItemPrincipios>
            <S.ItemPrincipios>
              <div className="list-item__icon">
                <Shield color="#38A973" size={32} />
              </div>
              <h3 className="list-item__title">Valores</h3>
              <ul className="list-item">
                <li className="list-item__item">
                  <CheckCircle size={10} color="#84B622"/>
                  Compromisso com a saúde
                </li>
                <li className="list-item__item">
                  <CheckCircle size={10} color="#84B622"/>
                  Eficiência e qualidade
                </li>
                <li className="list-item__item">
                  <CheckCircle size={10} color="#84B622"/>
                  Desenvolvimento regional
                </li>
                <li className="list-item__item">
                  <CheckCircle size={10} color="#84B622"/>
                  Bem-estar comunitário
                </li>
                <li className="list-item__item">
                  <CheckCircle size={10} color="#84B622"/>
                  Transparência e ética
                </li>
              </ul>
            </S.ItemPrincipios>
          </S.ListPrincipios>
        </S.ContainerPrincipios>
      </Container>
    </S.SectionAboutUs>
  );
}

export default PageQuemSomos;
