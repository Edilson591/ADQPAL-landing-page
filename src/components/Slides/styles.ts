import styled from "styled-components";

interface ProgressProps {
  $progress: number;
}

export const ContainerSlide = styled.div`
  position: relative;
  margin-bottom: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
  }
  `;

export const SlideImage = styled.img`
  width: 100%;
  height: 500px;
  min-height: 100%;
  object-fit: cover;
  overflow: hidden;
  /* object-position: center; */
  object-position: top;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-height: 250px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 440px;
  }
`;

export const ProgressBar = styled.div<ProgressProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  z-index: 10;
  width: ${(props) =>props.$progress}%;
  background-color: ${(props) => props.theme.colors.textSecondary};
  transition: width 0.1s linear;
`;
