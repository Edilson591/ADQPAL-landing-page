import * as S from "./styles";
import imgSubBackground from "../../assets/foto-sub-background.png";

interface propHeader {
  title?: string;
  subtitle?: string;
  id?: string;
  descriptionId?: string;
  paddingBottom?: string;
  subBackground?: boolean;
}

function SectionHeaders({
  title,
  subtitle,
  paddingBottom,
  subBackground,
}: propHeader) {
  return (
    <S.SectionsHeader $paddingBottom={paddingBottom}>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      {subtitle && <S.HeaderDescription>{subtitle}</S.HeaderDescription>}
      {subBackground && (
        <S.SubBackground>
          <img src={imgSubBackground} className="image-subBackground" alt="imagem de corações da sub Background" />
        </S.SubBackground>
      )}
    </S.SectionsHeader>
  );
}

export default SectionHeaders;
