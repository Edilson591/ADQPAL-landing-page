import styled from "styled-components";

interface PropHero {
  src: string;
  $marginBottom?: string;
  $objectFit?: string;
}

export const HeroContainer = styled.section`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const ImgHero = styled.img<PropHero>`
  width: 100%;
  object-fit: ${({$objectFit}) => $objectFit || "cover"};
  max-height: 350px; 
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "0"};
  object-position: center center;

  /* @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-height: 200px; 
    height: auto;
  } */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-height: 150px; 
    height: auto;
  }
`;
