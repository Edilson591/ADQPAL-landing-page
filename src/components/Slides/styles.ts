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
  height: auto;
  max-height: 500px;
  object-fit: cover;
  overflow: hidden;
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
