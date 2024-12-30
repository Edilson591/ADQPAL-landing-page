// import { color } from './../../../node_modules/@mui/system/palette/palette.d';
import { Button as MuiButton } from "@mui/material";
import { Card } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: "0 auto",
  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.5);",
  backgroundColor:`${theme.colors.textSecondary}50 !important`,
  transition: "all 0.5s ease",
  "&:hover": {
    transform:"scale(1.05)",
    transition: "all 0.5s ease"
  }
}));

export const CardImg = styled.img(() => ({
  width: "100%",
  height: 140,
  objectFit: "cover",
  objectPosition: "top",
}));

export const CustonButton = styled(MuiButton)`
    color: ${(props) => props.theme.colors.textPrimary} !important;
    background-color: ${(props) => props.theme.colors.primary}!important;
  &:hover {
    color: ${({ theme }) => theme.colors.primary} !important;
    background-color: ${({ theme }) => theme.colors.textSecondary} !important;
  }
`;
