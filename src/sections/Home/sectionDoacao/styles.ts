import styled from "styled-components";
import { CustonButton } from "../../../components/Cards/styles";

export const SectionDoacao = styled.section`
  padding: 4rem 2rem;
`;

export const ContainerDoacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: 8px;
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
`;

export const SectionsHeader = styled.div`
  margin-bottom: 2rem;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 100%;

  .section-doacao__content-image {
    max-width: 500px;
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    flex-grow: 1;
  }

  .section-doacao__content-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    height: 100%;

    .section-doacao__content-description-title {
      font-size: ${({ theme }) => theme.sizes.large};
      color: ${({ theme }) => theme.colors.textPrimary};
      margin-bottom: 1rem;
      
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.sizes.medium};
      }
    }
    
    .section-doacao__content-description-text {
      font-size: ${({ theme }) => theme.sizes.medium};
      color: ${(prop) => prop.theme.colors.textPrimary};
      line-height: 1.5;
      opacity: 0.6;
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.sizes.small};
      }
    }
    .section-doacao__content-description-button {
      display: block;
      font-weight: bold;
      margin: 0 auto;
      width: 100%;
      margin-top: 1rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    &.section-doacao__content {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: left;
    }

    .section-doacao__content-description {
      margin-left: 1.5rem;
      .section-doacao__content-description-button {
        margin-top: 4rem;
      }
    }
  }
`;

export const Button = styled(CustonButton)`
  display: block;
  font-weight: bold;
  margin: 0 auto;
  width: 100%;
`;
