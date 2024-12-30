import Hero from "../../../components/Hero";
import SectionHeaders from "../../../sections/SectionHeader";
import * as S from "./styles";
import backgroundDocumentos from "../../../assets/foto-slide-instalacoes.jpg";
import { Container } from "../../../styles";
import { dataDocumentosInstitucionais } from "../../../data/dataDocumentosInstitucional";
import { FileText } from "lucide-react";

function PageDocumentosInstituicao() {
  return (
    <>
      <Hero image={backgroundDocumentos} />
      <S.SectionDocumentos>
        <SectionHeaders title="Documentos Instituição" id="contas-title" />
        <S.ContainerOverlay>
          <Container>
            <S.ListContainer>
              <S.StyledList>
                {dataDocumentosInstitucionais.map((doc, index) => (
                  <S.StyledListItem key={index}>
                    <FileText width={14} />
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
        </S.ContainerOverlay>
      </S.SectionDocumentos>
    </>
  );
}

export default PageDocumentosInstituicao;
