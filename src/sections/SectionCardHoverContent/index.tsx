import * as S from "./styles";
import {
  cardProgramas,
  cardGaleria,
  HoverCard,
} from "../../data/cardHoverContainerData";
import CardHover from "../../components/CardHover";

interface PropsSectionCardHover {
  tiposCard: "programas" | "galeria";
}

function SectionCardHover({ tiposCard }: PropsSectionCardHover) {
  const dataCard: HoverCard[] =
    tiposCard === "programas" ? cardProgramas : cardGaleria;
  return (
    <S.ContainerProgramas>
      <S.ListItensCard>
        {dataCard?.map((card, index) => (
          <S.ListItensCards key={index}>
            <CardHover
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
              name={card.nameButton || "Saiba Mais"}
            />
          </S.ListItensCards>
        ))}
      </S.ListItensCard>
    </S.ContainerProgramas>
  );
}

export default SectionCardHover;
