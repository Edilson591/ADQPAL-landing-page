import styled, { keyframes } from "styled-components";

// Animação ajustada
const scroll = keyframes`
  0% {
    transform: translateX(-100%);
}
50% {
    transform: translateX(0);

  }
  100% {
    transform: translateX(100%);
  }
`;

export const SectionParceiros = styled.section`
  padding: 4rem 2rem;
`;

export const SliderContainer = styled.div`
  height: 250px;
  margin: auto;
  position: relative;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const SlideContent = styled.ul`
  display: flex;
  width: max-content;
  animation: ${scroll} 20s linear infinite;
  display: flex;
  flex-wrap: nowrap;
`;

export const Slide = styled.li`
  height: 150px;
  width: 250px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  list-style: none;
  overflow: hidden;
`;

export const LinkSlide = styled.a`
  text-decoration: none;
`;

export const SlideImg = styled.img`
  width: 100%;
  height: auto;
`;
