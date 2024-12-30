import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import * as S from "./styles"

interface PropsCard {
  imagem: string;
  titulo: string;
  subTitle: string;
}

function Cards({ imagem, titulo, subTitle }: PropsCard) {
  return (
    <S.CardContainer>
      <S.CardImg  src={imagem} alt={titulo} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subTitle}
        </Typography>
      </CardContent>
      <CardActions>
        <S.CustonButton size="small">Mais Informações</S.CustonButton>
      </CardActions>
    </S.CardContainer>
  );
}

export default Cards;
