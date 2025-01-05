// import { useState } from "react";
// import Accordion from "../../../components/Accordion";
import SectionHeaders from "../../../sections/MainHeader";
import { SectionContas } from "./styles";
import Hero from "../../../components/Hero";
import { Container } from "../../../styles";
import { ContainerPrincipal } from "../../../sections/MainContainer/styles";
// import { items } from "../../../features/FinancialReports/YearlyAccordion";

function PageTransparencia() {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // const handleAccordionChange = (index: number) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };
  return (
    <SectionContas>
      <Hero image="https://img.freepik.com/fotos-gratis/closeup-de-economista-usando-calculadora-ao-passar-por-contas-e-impostos-no-escritorio_637285-3156.jpg?t=st=1735392233~exp=1735395833~hmac=6f18faaf1022d57f42554503750460ef1609470b5c7f09cfd79916da143cb652&w=740" />
      <ContainerPrincipal>
        <Container>
          <SectionHeaders
            title="Prestação de Contas"
            subtitle="Em breve mais informações"
            id="contas-title"
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
