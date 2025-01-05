import * as S from "./styles";

interface PropsHero {
  image: string;
  marginBottom?: string;
}

const Hero = ({ image, marginBottom }: PropsHero) => {
  return (
    <S.HeroContainer>
      <S.ImgHero $image={image} $marginBottom={marginBottom} />
    </S.HeroContainer>
  );
};

export default Hero;
