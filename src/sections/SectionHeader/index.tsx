import * as S from "./styles";

interface propHeader {
  title?: string;
  subtitle?: string;
  id?: string;
  descriptionId?: string;
}

function SectionHeaders({ title, subtitle }: propHeader) {
  return (
    <S.SectionsHeader>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      {subtitle && (
        <S.HeaderDescription>{subtitle}</S.HeaderDescription>
      )}
    </S.SectionsHeader>
  );
}

export default SectionHeaders;
