import ContainerCarrossel from "../../components/Slides";
import SectionDoacao from "../../sections/Home/sectionDoacao";
import SectionParceiros from "../../sections/Home/sectionParceiros";
import SectionServices from "../../sections/Home/sectionServices";
import { Container } from "../../styles";

function Home() {
  return (
    <>
      <ContainerCarrossel />
      <Container>
        <SectionServices />
        <SectionDoacao />
        <SectionParceiros />
      </Container>
    </>
  );
}

export default Home;
