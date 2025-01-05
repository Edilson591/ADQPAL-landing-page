import Hero from "../../../components/Hero";
import imgOqueFazemos from "../../../assets/foto-o-que-fazemos.png";
import { ContainerPrincipal } from "../../../sections/MainContainer/styles";
import SectionHeaders from "../../../sections/MainHeader";
import { Container } from "../../../styles";
import * as S from "./styles";
import SectionPrincipios from "../../../sections/SectionPrincipios";

function PageOQueFazemos() {
  return (
    <>
      <Hero image={imgOqueFazemos} />
      <ContainerPrincipal>
        <Container>
          <S.ContainerContent>
            <SectionHeaders
              title="O que Fazemos"
              subtitle="Atuamos de forma integrada no tratamento e prevenção da dependência química e doenças psiquiátricas, oferecendo suporte completo aos pacientes e suas famílias."
            />
            <SectionPrincipios tiposPrincipios="o-que-fazemos"/>
          </S.ContainerContent>
        </Container>
      </ContainerPrincipal>
    </>
  );
}

export default PageOQueFazemos;
