import styled from "styled-components";

export const SectionAboutUs = styled.section``;

export const TextContent = styled.div`
  margin-bottom: 2rem;
`;

export const ContainerPrincipios = styled.div`
  margin-bottom: 4rem;
`;

export const ListPrincipios = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const ItemPrincipios = styled.li`
  text-align: center;
  .list-item__icon {
    background-color: ${({ theme }) => theme.colors.textSecondary}20;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .list-item__title {
    font-size: ${({ theme }) => theme.sizes.large};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .list-item {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    &__item {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;
