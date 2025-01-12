import styled from "styled-components";

export const SectionEvents = styled.section`
  padding: 2rem 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 2rem 0;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;

  h2 {
    font-size: ${(prop) => prop.theme.sizes.xl};
    line-height: 40px;
    text-shadow: 0.01em 0.1em 0.05em ${(prop) => prop.theme.colors.textPrimary};
    color: ${(prop) => prop.theme.colors.textSecondary};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${(prop) => prop.theme.sizes.large};
    line-height: 20px;
    font-weight: bold;
  }
`;

export const EventsGridContainer = styled.div`
  padding-top: 2rem;
  
  .events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: start;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const ContainerButtonMais = styled.div`

`

