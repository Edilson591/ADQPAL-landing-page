import styled from "styled-components";

interface propContainer {
    $padding?: string;
}


export const ContainerPrincipal = styled.main<propContainer>`
  padding: ${({ $padding }) => $padding ? $padding : "4rem 0"};
`;