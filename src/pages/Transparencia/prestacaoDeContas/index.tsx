// import { useState } from "react";
// import Accordion from "../../../components/Accordion";
import SectionHeaders from "../../../sections/MainHeader";
import { SectionContas } from "./styles";
import Hero from "../../../components/Hero";
import { Container } from "../../../styles";
import { ContainerPrincipal } from "../../../sections/MainContainer/styles";
import ImgContas from "../../../assets//imagens backgroundSections/foto-logo-contas.png"
// import { items } from "../../../features/FinancialReports/YearlyAccordion";

function PageTransparencia() {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // const handleAccordionChange = (index: number) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };
  return (
    <SectionContas>
      <Hero image={ImgContas} descriptionHero="imagem ilustrativa de constas"/>
      <ContainerPrincipal>
        <Container>
          <SectionHeaders
            title="Prestação de Contas"
            subtitle="Em breve mais informações"
            id="contas-title"
            subBackground={true}
          />
          {/* <Accordion
          items={items}
          activeIndex={activeIndex}
          onChangeActiveIndex={handleAccordionChange}
        /> */}
        </Container>
      </ContainerPrincipal>
    </SectionContas>
  );
}

export default PageTransparencia;
