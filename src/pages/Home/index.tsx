import ContainerCarrossel from "../../components/Slides";
import SectionDoacaoAndVoluntario from "../../sections/Home/sectionDoacaoAndVoluntariado";
import SectionParceiros from "../../sections/Home/sectionParceiros";
import SectionServices from "../../sections/Home/sectionServices";
import { ContainerPrincipal } from "../../sections/MainContainer/styles";
import { Container } from "../../styles";

function Home() {
  return (
    <>
      <ContainerCarrossel />
      <ContainerPrincipal>
        <Container>
          <SectionServices />
          <SectionDoacaoAndVoluntario />
          <SectionParceiros />
        </Container>
      </ContainerPrincipal>
    </>
  );
}

export default Home;
