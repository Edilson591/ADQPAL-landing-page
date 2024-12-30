import * as S from "./styles"

interface PropsHero {
    image: string
}
  
const Hero = ({image}: PropsHero) => {
    return (
      <S.HeroContainer $image={image}/>
    );
  };
  
  export default Hero;