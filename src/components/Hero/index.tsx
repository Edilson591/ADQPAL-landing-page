import * as S from "./styles";

interface PropsHero {
  image: string;
}

const Hero = ({ image }: PropsHero) => {
  return (
    <S.HeroContainer>
      <S.ImgHero $image={image} />
    </S.HeroContainer>
  );
};

export default Hero;
