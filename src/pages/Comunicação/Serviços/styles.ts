import styled from "styled-components";

export const ContainerServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Section = styled.div`
  flex: 0 0 48%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1rem;
  display: inline-block;
  position: relative;


  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }

  &::after {
    content: "";
    position: absolute;
    background-color: ${({theme}) => theme.colors.textSecondary};
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
  }
`;

export const ExamesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: .5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
  
  li {
    font-size: ${({ theme }) => theme.sizes.small};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

