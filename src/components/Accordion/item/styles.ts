import styled from "styled-components";

interface ContainerItemProps {
  $isActive: boolean;
}

export const ContainerItem = styled.div<ContainerItemProps>`
  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  &:last-of-type {
    border-bottom: none;
  }
  .container-header {
    all: unset;
    display: flex;
    align-items: center;
    padding: 0.8rem;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.textSecondary};
      color: ${({ theme }) => theme.colors.primary};
    }
    h3 {
      display: flex; 
      align-items: center;
      gap: .2rem;
      font-weight: 400;
      flex: 1;
      text-align: left;
    }
    .icon {
      display: inline-flex;
      transition: transform 0.3s ease;
      transform: ${({ $isActive }) =>
        $isActive ? "rotate(180deg)" : "rotate(0deg)"};
    }
  }
  .container-content {
    max-height: ${({ $isActive }) => ($isActive ? "max-content" : "0")};
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    transition: all 0.1s ease-in-out;
    opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
    padding: ${({ $isActive }) => ($isActive ? ".8rem" : "0")};
    .container-content__item {
      margin-bottom: 2rem;
    }
    .accordion__content__body {
      .accordion__content__list {
        margin-bottom: 1rem;
        padding-left: 2rem;
        .accordion__content__list-item {
          list-style: disc;
          .accordion__content__link {
            text-decoration: none;
            color: currentColor;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .accordion__content__header {
      padding: 1rem 0;
    }
  }
`;
