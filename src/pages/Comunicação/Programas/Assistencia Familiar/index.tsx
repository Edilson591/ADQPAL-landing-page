import MainContainer from "../../../../sections/MainContainer";
import SectionHeaders from "../../../../sections/MainHeader";
import * as S from "./styles"
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
              
            </p>
           </S.ContainerText>
        </S.ContainerContent>
      </Container>
    </MainContainer>
  );
}

export default PageAssistenciaFamiliar;
