import * as S from "./styles";

interface PropsHero {
  image: string;
  height?: string;
}

const Hero = ({ image, height }: PropsHero) => {
  return (
    <S.HeroContainer>
      <S.ImgHero $image={image} $heightImg={height} />
    </S.HeroContainer>
  );
};

export default Hero;
