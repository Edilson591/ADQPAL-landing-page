import Hero from "../../../components/Hero";
import HeroOqueFazemos from "../../../assets/imagens backgroundSections/img-hero-conta.jpg";
import { ContainerPrincipal } from "../../../sections/MainContainer/styles";
import SectionHeaders from "../../../sections/MainHeader";
import { Container } from "../../../styles";
import * as S from "./styles";
import SectionPrincipios from "../../../sections/SectionPrincipios";

function PageOQueFazemos() {
  return (
    <>
      <Hero image={HeroOqueFazemos} descriptionHero="foto ilustrativa do o que fazemos"/>
      <ContainerPrincipal>
        <Container>
          <S.ContainerContent>
            <SectionHeaders
              title="O que Fazemos"
              subtitle="Atuamos de forma integrada no tratamento e prevenção da dependência química e doenças psiquiátricas, oferecendo suporte completo aos pacientes e suas famílias."
              subBackground={true}
            />
            <SectionPrincipios tiposPrincipios="o-que-fazemos"/>
          </S.ContainerContent>
        </Container>
      </ContainerPrincipal>
    </>
  );
}

export default PageOQueFazemos;
