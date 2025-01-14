import Hero from "../../../components/Hero";
import SectionHeaders from "../../../sections/MainHeader";
import * as S from "./styles";
import ImgDocumentos from "../../../assets/imagens backgroundSections/foto-logo-documentos.webp";
import { Container } from "../../../styles";
import { dataDocumentosInstitucionais } from "../../../data/dataDocumentosInstitucional";
import { FileText } from "lucide-react";
import { ContainerPrincipal } from "../../../sections/MainContainer/styles";

function PageDocumentosInstituicao() {
  return (
    <S.SectionDocumentos>
      <Hero image={ImgDocumentos} marginBottom="4rem" descriptionHero="imagem ilustrativa de Documentos"/>
      <SectionHeaders title="Documentos Instituição" id="contas-title" subBackground={true} />
      <S.ContainerOverlay>
        <ContainerPrincipal>
          <Container>
            <S.ListContainer>
              <S.StyledList>
                {dataDocumentosInstitucionais.map((doc, index) => (
                  <S.StyledListItem key={index}>
                    <FileText size={16} style={{ flexShrink: 0 }} />
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.title}
                    </a>
                  </S.StyledListItem>
                ))}
              </S.StyledList>
            </S.ListContainer>
          </Container>
        </ContainerPrincipal>
      </S.ContainerOverlay>
    </S.SectionDocumentos>
  );
}

export default PageDocumentosInstituicao;
