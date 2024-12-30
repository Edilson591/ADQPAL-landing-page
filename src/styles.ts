import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
  text-decoration: none;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(({theme}) => theme.colors.textSecondary)}; 
    border-radius: 10px; 
    border: 3px solid #fff; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(({theme}) => theme.colors.secondary)}; 
  }
  
  ::-webkit-scrollbar-track {
    background: ${(({theme}) => theme.colors.primary)}; 
    border-radius: 10px; 
  }
 
}

body {
  background: url("/background_adppal.png") no-repeat center center; 
  background-size: cover; 
  font-family: ${(props) => props.theme.fonts.body};
  color: #000;


  .swiper{
    max-height: 500px;
  }
  
  .swiper-slide {
    position: relative;
  width: 100%;
  height: 400px; 
  overflow: hidden; 
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(prop) => prop.theme.colors.secondary};
    padding: 1rem;
  }

  .swiper-pagination-bullet {
  background-color: #ccc;
    }
  .swiper-pagination-bullet-active {
  background-color: #38a973;
  }
}`;

export const Container = styled.div`
 max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 90%;
  }
`;



