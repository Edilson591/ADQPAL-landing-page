// import { color } from './../../../node_modules/@mui/system/palette/palette.d';
import { Button as MuiButton, Typography, CardContent} from "@mui/material";
import { Card } from "@mui/material";
import styled from "styled-components";

interface PropsImg {
  $height: string;
}

interface PropsCard {
  $padding: string;
}

export const CardContainer = styled(Card)`
  max-width: 380px;
  margin: 0 auto;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  background-color:${({theme}) => theme.colors.textSecondary}50 !important;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
    transition: all .5s ease;
  }
`;

export const CardContents = styled(CardContent)<PropsCard>`
  padding: ${({$padding}) => $padding} !important;
`

export const CardImg = styled.img<PropsImg>`
  width: 100%;
  height: ${({ $height }) => $height};
  object-fit: cover;
  object-position: top;
`;


export const StyledTypography = styled(Typography)`
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  gap: 1rem;
  font-size: ${({theme}) => theme.sizes.medium} !important;
  font-weight: 500 !important;
`
export const CustonButton = styled(MuiButton)`
    color: ${(props) => props.theme.colors.textPrimary} !important;
    background-color: ${(props) => props.theme.colors.primary}!important;
  &:hover {
    color: ${({ theme }) => theme.colors.primary} !important;
    background-color: ${({ theme }) => theme.colors.textSecondary} !important;
  }
`;
