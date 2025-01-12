import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const CardInfo = styled.div`
  position: relative;
  z-index: 3;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0;
  transform: translate(30px);
  transition: all 0.5s;
`;

export const CardHoverContent = styled.div`
  width: 280px;
  height: 360px;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: flex;
  align-items: flex-end;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5 ease-in-out;

  &:hover {
    transform: translateY(20px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 176, 155, 0.5),
      rgba(150, 201, 61, 1)
    );
    z-index: 2;
    transition: all 0.5s;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover ${CardInfo} {
    opacity: 1;
    transform: translate(0);
  }

  @media (hover: none) {
  &:hover {
    transform: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover ${CardInfo} {
    opacity: 1;
    transform: translate(0);
  }
}

`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const CardTitle = styled.h3`
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes.medium};
  line-height: 1.167;
  letter-spacing: 0em;
  margin-bottom: 0.35em;
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.sizes.small};
  margin: 8px 0;
`;

export const CardLink = styled.a``;
