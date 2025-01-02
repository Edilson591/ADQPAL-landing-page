import styled from "styled-components";

export const SectionDocumentos = styled.section`
 
`;

export const ContainerOverlay = styled.div`
  background: ${({ theme }) => theme.colors.textSecondary};
  padding: 2rem;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: auto 0;
  min-height: 300px;
  justify-content: center;
  align-items: center;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: auto 0;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

export const StyledListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.primary};
  flex: 0 0 33.333333%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 50%;
  }

  &:last-of-type {
    flex: 33.333333%;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex: 50%;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.8rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
