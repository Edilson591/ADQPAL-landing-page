// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import * as S from "./styles";

interface PropsCard {
  imagem: string;
  titulo: string;
  subTitle?: string;
  height?: string;
  paddingCard?: string;
  icon?: React.ReactNode;
}

function Cards({
  imagem,
  titulo,
  subTitle,
  icon,
  height,
  paddingCard,
}: PropsCard) {
  return (
    <S.CardContainer role="region" aria-labelledby="card-title">
      <figure>
        <S.CardImg
          src={imagem}
          alt={`Imagem de ${titulo}`}
          $height={height || "240px"}
        />
      </figure>
      <S.CardContents $padding={paddingCard || "16px"}>
        <S.StyledTypography gutterBottom variant="h3" id="card-title">
          {icon && <span aria-hidden="true">{icon}</span>}
          {titulo}
        </S.StyledTypography>
        {subTitle && (
          <Typography variant="body2" color="text.secondary">
            {subTitle}
          </Typography>
        )}
      </S.CardContents>
      {subTitle && icon && (
        <CardActions>
          <S.CustonButton
            size="small"
            aria-label={`Saiba mais sobre ${titulo}`}
          >
            Mais Informações
          </S.CustonButton>
        </CardActions>
      )}
    </S.CardContainer>
  );
}

export default Cards;
