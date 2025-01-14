// import ModalGaleria from "../../../components/ModalGaleria";
import MainContainer from "../../../sections/MainContainer";
import SectionHeaders from "../../../sections/MainHeader";
import SectionCardHover from "../../../sections/SectionCardHoverContent";
import { Container } from "../../../styles";
// import ImageGalleryPage from "./AcaoAedes";

function PageGaleria() {
  return (
    <MainContainer>
      <SectionHeaders
        title="Galeria de Eventos"
        subtitle="Conheça nosso eventos por dentro"
      />
      <Container>
        <SectionCardHover tiposCard="galeria"/>
      </Container>
      {/* <ModalGaleria/> */}
      {/* <ImageGalleryPage/> */}
    </MainContainer>
  );
}

export default PageGaleria;
