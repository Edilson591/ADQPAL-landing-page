import MainContainer from "../../../../sections/MainContainer";
import SectionHeaders from "../../../../sections/MainHeader";
import * as S from "./styles";
import { Container } from "../../../../styles";

function PageAssistenciaFamiliar() {
  return (
    <MainContainer padding="4rem 2rem">
      <SectionHeaders
        title="Plano de Assistência Familiar (PAF)"
        subtitle="Assistência aos trabalhadores, seus representados e/ou dependentes."
      />
      <Container>
        <S.ContainerContent>
          <S.ContainerText>
            <p>
              <strong>
                Federação dos Trabalhadores em Estabelecimentos de Serviços de
                Saúde do Nordeste (FETESSNE)
              </strong>
              , representada por <strong>Mário Jorge dos Santos Filho</strong>,
              e a <strong>ADQPAL</strong> (Associação dos Dependentes Químicos e
              Portadores de Doenças Psiquiátricas de São Miguel dos Campos),
              representada por <strong>Naedja Silva Melo</strong>, firmam o{" "}
              <strong>
                Convênio de Adesão ao Plano de Assistência Familiar - PAF
              </strong>
              , com o objetivo de oferecer assistência à saúde aos trabalhadores
              e dependentes dos representados.
            </p>
          </S.ContainerText>
        </S.ContainerContent>
      </Container>
    </MainContainer>
  );
}

export default PageAssistenciaFamiliar;
