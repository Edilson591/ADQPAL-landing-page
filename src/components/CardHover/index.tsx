import ButtonLink from "../Button";
import * as S from "./styles";

interface PropsCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

function CardHover({ image, title, description, link }: PropsCard) {
  return (
    // <article aria-labelledby={`${title}-heading`} role="group">
    <S.ContainerWrapper>
      <S.CardHoverContent>
        <S.CardImage
          src={image}
          alt={`Imagem representando ${title}`}
          role="img"
        />
        <S.CardInfo>
          <S.CardTitle id={`${title}-heading`}>{title}</S.CardTitle>
          <S.CardDescription>{description}</S.CardDescription>
          <ButtonLink
            name="Saiba mais"
            href={link}
            aria-label={`Saiba mais sobre ${title}`}
            rel="noopener noreferrer"
          />
        </S.CardInfo>
      </S.CardHoverContent>
    </S.ContainerWrapper>
    // </article>
  );
}

export default CardHover;
