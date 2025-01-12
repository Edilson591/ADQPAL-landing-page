import MainContainer from "../../../sections/MainContainer";
import SectionHeaders from "../../../sections/MainHeader";
import { Container } from "../../../styles";
import * as S from "./styles"
import { cardProgramas } from "../../../data/cardProgramas";
import CardHover from "../../../components/CardHover";

function PageProgramas() {
  return (
    <MainContainer padding="4rem 2rem">
      <SectionHeaders
        title="Nossos Programas"
        subtitle="Conheça nossos programas para a comunidade"
      />
      <Container>
        <S.ContainerProgramas>
            <S.ListItensCard>
                {cardProgramas?.map((card,index) => (
                    <S.ListItensCards key={index}>
                        <CardHover image={card.image} title={card.title} description={card.description} link={card.link}/>
                    </S.ListItensCards>
                ))}
            </S.ListItensCard>
        </S.ContainerProgramas>
      </Container>
    </MainContainer>
  );
}

export default PageProgramas;
