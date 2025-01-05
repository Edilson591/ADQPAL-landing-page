import Hero from "../../../components/Hero";
import SectionHeaders from "../../../sections/MainHeader";
import * as S from "./styles";
import backgroundDocumentos from "../../../assets/foto-slide-instalacoes.jpg";
import { Container } from "../../../styles";
import { dataDocumentosInstitucionais } from "../../../data/dataDocumentosInstitucional";
import { FileText } from "lucide-react";
import { ContainerPrincipal } from "../../../sections/MainContainer/styles";

function PageDocumentosInstituicao() {
  return (
    <S.SectionDocumentos>
      <Hero image={backgroundDocumentos} marginBotton="4rem" />
      <SectionHeaders title="Documentos Instituição" id="contas-title" />
      <S.ContainerOverlay>
        <ContainerPrincipal >
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
