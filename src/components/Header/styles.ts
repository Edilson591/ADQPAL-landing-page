// styled-components
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ActiveMenu {
  $activeMenuMobile?: boolean;
}
interface ActiveSubmenu {
  $activeSub?: boolean;
}
interface AtiveHeader {
  $isActiveHeader: boolean;
}

export const Header = styled.header<AtiveHeader>`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  position: sticky;
  top: 0;
  z-index: 9999;
  opacity: ${(props) => (props.$isActiveHeader ? "0" : "1")};
  visibility: ${(props) => (props.$isActiveHeader ? "hidden" : "visible")};
  transition: opacity .5s ease, visibility .5s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    opacity: 1;
    visibility: visible;
  }
`;
export const BackgroundOverlay = styled.div<ActiveMenu>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
  visibility: ${(props) => (props.$activeMenuMobile ? "visible" : "hidden")};
  opacity: ${(props) => (props.$activeMenuMobile ? "1" : "0")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;

  button {
    display: none;
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
  }
  .container-icon {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .container-logo {
    img {
      max-width: 170px;
    }
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.textPrimary};
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
export const Button = styled.button`
  color: ${(props) => props.theme.colors.textPrimary};
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

export const MenuDesktop = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0;
  }
`;
export const MenuMobile = styled.ul<ActiveMenu>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  opacity: 1;
  transform: ${(props) =>
    props.$activeMenuMobile ? "translateY(0)" : "translateY(-100%)"};
  visibility: ${(props) => (props.$activeMenuMobile ? "visible" : "hidden")};
  opacity: ${(props) => (props.$activeMenuMobile ? "1" : "0")};
  transition: all 0.3s ease-in-out;

  li {
    padding: 1rem 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const Submenu = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== "activeSub",
})<ActiveSubmenu>`
  position: ${(props) => (props.$activeSub ? "static" : "absolute")};
  display: flex;
  z-index: 9999;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 1.5rem 1rem;
  border-radius: 4px;
  background-color: #fff;
  opacity: ${(props) => (props.$activeSub ? "1" : "0")};
  transform: ${(props) =>
    props.$activeSub ? "translateY(0)" : "translateY(-200px)"};
  pointer-events: ${(props) => (props.$activeSub ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: absolute;
    opacity: ${(props) => (props.$activeSub ? "1" : "0")};
    transform: ${(props) =>
      props.$activeSub ? "translateY(0)" : "translateY(-100px)"};
    pointer-events: ${(props) => (props.$activeSub ? "auto" : "none")};
  }

  li {
    padding: 0.5rem;
  }

  li:hover {
    transition: all ease 0.5s;
    color: ${(props) => props.theme.colors.textSecondary};
    background-color: ${(props) => props.theme.colors.textSecondary};
    border-radius: 4px;
    a {
      color: ${(props) => props.theme.colors.background};
    }
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
`;
