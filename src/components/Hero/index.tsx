import * as S from "./styles";

interface PropsHero {
  image: string;
  descriptionHero: string
  marginBottom?: string;
}

const Hero = ({ image, marginBottom,descriptionHero }: PropsHero) => {
  return (
    <S.HeroContainer>
      <S.ImgHero src={image} alt={descriptionHero} $marginBottom={marginBottom} />
    </S.HeroContainer>
  );
};

export default Hero;

