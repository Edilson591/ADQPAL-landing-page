import ContainerCarrossel from "../../components/Slides";
import SectionDoacaoAndVoluntario from "../../sections/Home/sectionDoacaoAndVoluntariado";
import SectionParceiros from "../../sections/Home/sectionParceiros";
import { ContainerPrincipal } from "../../sections/MainContainer/styles";
import { Container } from "../../styles";
import SectionEvents from "../../sections/Home/sectionEventos";

function Home() {
  return (
    <>
      <ContainerCarrossel />
      <ContainerPrincipal>
        <Container>
          <SectionEvents/>
          <SectionDoacaoAndVoluntario />
          <SectionParceiros />
        </Container>
      </ContainerPrincipal>
    </>
  );
}

export default Home;
