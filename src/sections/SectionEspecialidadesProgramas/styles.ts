import styled from "styled-components";

export const ContainerEspecialidade = styled.section`
  margin-top: 2rem;
`;

export const ListProgramas = styled.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

export const ListProgramaItem = styled.li`
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary}50;
  padding: 1rem;
  flex: 0 0 33.3333%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const ItemProgramaTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
  }
`;

export const ItemProgramaDescription = styled.p`
  font-size: ${({ theme }) => theme.sizes.small};
`;

export const ListItem = styled.ul`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  .contato {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const ListItens = styled.li`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
  color: ${({ theme }) => theme.colors.textDescription};

  &:before {
    content: "✔";
    position: absolute;
    left: 0;
    top: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.sizes.small};
  }
`;
