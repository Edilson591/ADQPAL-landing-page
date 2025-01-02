import ContainerCarrossel from "../../components/Slides";
import SectionDoacaoAndVoluntario from "../../sections/Home/sectionDoacaoAndVoluntariado";
import SectionParceiros from "../../sections/Home/sectionParceiros";
import SectionServices from "../../sections/Home/sectionServices";
import { Container } from "../../styles";

function Home() {
  return (
    <>
      <ContainerCarrossel />
      <Container>
        <SectionServices />
        <SectionDoacaoAndVoluntario />
        <SectionParceiros />
      </Container>
    </>
  );
}

export default Home;
