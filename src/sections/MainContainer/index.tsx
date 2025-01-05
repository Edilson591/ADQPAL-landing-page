import { ContainerPrincipal } from "./styles";

interface PropsSectionPrincipal {
  children: React.ReactNode;
  padding?: string;
}

function MainContainer({ children, padding}: PropsSectionPrincipal) {
  return <ContainerPrincipal $padding={padding}>{children}</ContainerPrincipal>;
}

export default MainContainer;
