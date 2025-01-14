import * as S from "./styles";

interface PropsHero {
  image: string;
  descriptionHero: string
  marginBottom?: string;
  objectFit?: string;

}

const Hero = ({ image, marginBottom,objectFit, descriptionHero }: PropsHero) => {
  return (
    <S.HeroContainer>
      <S.ImgHero src={image} alt={descriptionHero} $objectFit={objectFit} $marginBottom={marginBottom} />
    </S.HeroContainer>
  );
};

export default Hero;

