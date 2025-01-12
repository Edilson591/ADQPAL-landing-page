import styled from "styled-components";

interface PropHero {
  src: string;
  $marginBottom?: string;
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
  height: auto; 
  object-fit: cover; 
  max-height: 400px; 
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "0"};
  object-position: bottom;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-height: 250px; 
  }
`;
