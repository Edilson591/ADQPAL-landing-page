import Cards from "../../../components/Cards";
import MainContainer from "../../../sections/MainContainer";
import SectionHeaders from "../../../sections/MainHeader";
import * as S from "./styles";
import { cardsAtendimentoData } from "../../../data/serviceData";
import { cardsExamesData } from "../../../data/serviceData";
import { Container } from "../../../styles";


function PageServices() {
  return (
    <MainContainer padding="4rem 0">
      <SectionHeaders
        title="Exames e Serviços"
        subtitle="Conheça nossos serviços e exames disponíveis"
      />
      <Container>
        <S.ContainerServices role="main">
          <S.Section>
            <S.SectionTitle id="exames-section">Exames</S.SectionTitle>
            <S.ExamesList aria-labelledby="exames-section" role="list">
              {cardsExamesData.map((card, index) => (
                <li
                  key={index}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`Serviço: ${card.titulo}`}
                >
                  <Cards
                    imagem={card.imagem || ""} 
                    titulo={card.titulo}
                    height={card.height}
                    paddingCard={card.paddingCard}
                  />
                </li>
              ))}
            </S.ExamesList>
          </S.Section>
          <S.Section>
            <S.SectionTitle id="atendimentos-section">
              Atendimentos
            </S.SectionTitle>
            <S.ExamesList aria-labelledby="atendimentos-section" role="list">
              {cardsAtendimentoData.map((card, index) => (
                <li
                  key={index}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`Serviço: ${card.titulo}`}
                >
                  <Cards
                    imagem={card.imagem || ""}
                    titulo={card.titulo}
                    height={card.height}
                    paddingCard={card.paddingCard}
                  />
                </li>
              ))}
            </S.ExamesList>
          </S.Section>
          <S.Section>
            <S.SectionTitle id="atendimentos-section">
              Ações e Campanhas
            </S.SectionTitle>
            <S.ExamesList aria-labelledby="atendimentos-section" role="list">
              {cardsAtendimentoData.map((card, index) => (
                <li
                  key={index}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`Serviço: ${card.titulo}`}
                >
                  <Cards
                    imagem={card.imagem || ""}
                    titulo={card.titulo}
                    height={card.height}
                    paddingCard={card.paddingCard}
                  />
                </li>
              ))}
            </S.ExamesList>
          </S.Section>
        </S.ContainerServices>
      </Container>
    </MainContainer>
  );
}

export default PageServices;
