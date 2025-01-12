import styled from "styled-components";

export const ContainerButtonLink = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 6px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.small};
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  min-width: 60px;
  border-radius: 4px;
  text-transform: uppercase;
  width: 100%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
