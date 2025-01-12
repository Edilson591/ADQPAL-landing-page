import styled from "styled-components";

export const ContainerPrincipios = styled.div`
  padding: 4rem 0;
`;

export const ListPrincipios = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const ItemPrincipios = styled.li`
  text-align: center;
  margin: 0 auto;
  .list-item__icon {
    background-color: ${({ theme }) => theme.colors.textSecondary}20;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    margin: 0 auto 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .list-item__title {
    font-size: ${({ theme }) => theme.sizes.large};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.sizes.small};
  }
  .list-item__text {
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.sizes.small};
    }
  }

  .list-item {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${({ theme }) => theme.sizes.small};
    &__item {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-align: start;
      svg {
        flex-shrink: 0;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.sizes.small};
      }
    }
  }
`;
