import styled from "styled-components";

interface PropHero {
  $image: string;
}
 

export const HeroContainer = styled.div<PropHero>`
  width: 100%;
  height: 300px; 
  background-image: url(${({$image}) => $image});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
`;