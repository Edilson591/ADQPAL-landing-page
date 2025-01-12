import styled from "styled-components";

interface PropsHeader {
  $paddingBottom?: string;
}

export const SectionsHeader = styled.div<PropsHeader>`
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: ${({$paddingBottom}) => $paddingBottom ? "4rem" : ""};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const HeaderTitle = styled.h2`
  font-size: ${(prop) => prop.theme.sizes.xl};
  line-height: 40px;
  text-shadow: 0.01em 0.1em 0.05em ${(prop) => prop.theme.colors.textPrimary};
  color: ${(prop) => prop.theme.colors.textSecondary};
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${(prop) => prop.theme.sizes.large};
  }
  `;

export const HeaderDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${(prop) => prop.theme.sizes.small};
  }
`;

export const SubBackground = styled.div`
  max-width: 200px;
  margin: 0 auto;
  .image-subBackground {
    height: 100px;
  }
`
