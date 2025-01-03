import styled from "styled-components";

interface PropHero {
  $image: string;
  $heightImg?: string;
}

export const HeroContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items:center;
  justify-content: center;

`;

export const ImgHero = styled.div<PropHero>`
  width: 100%;
  height: 300px;
  max-width: 2000px;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-height: 200px;
  }
`;
