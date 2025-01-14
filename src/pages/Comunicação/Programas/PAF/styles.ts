import styled from 'styled-components';




export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SectionDescription = styled.section`
  p {
    font-size: ${({theme}) => theme.sizes.medium};
    line-height: 1.6;
  }

  strong {
    font-weight: bold;
    color: #000;
  }
`;

export const ContainerDescription = styled.div`
  /* flex: 00 90% */

`;

export const ContainerContact = styled.div`

`
