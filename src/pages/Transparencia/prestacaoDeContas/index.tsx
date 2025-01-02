// import { useState } from "react";
// import Accordion, { Item } from "../../../components/Accordion";
import SectionHeaders from "../../../sections/SectionHeader";
import { SectionContas } from "./styles";
import Hero from "../../../components/Hero";
// import { prestacaoContas2024 } from "../../../data/prestacaoContas2024";
import { Container } from "../../../styles";

function PageTransparencia() {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // const items: Item[] = [
  //   {
  //     id: 1,
  //     title: "2022",
  //     content: (
  //       <>
  //         {prestacaoContas2024.map((item, index) => (
  //           <div className="container-content__item" key={index}>
  //             <header className="accordion__content__header">
  //               <h5
  //                 id="accordion__content__month-february"
  //                 className="accordion__content__month"
  //               >
  //                 {item.month}
  //               </h5>
  //             </header>
  //             <div
  //               id="accordion__content__body-february"
  //               className="accordion__content__body"
  //               aria-labelledby="accordion__content__month-february"
  //               role="region"
  //             >
  //               {item.files.map((item,index) => (
  //                 <ul key={index} className="accordion__content__list">
  //                   <li className="accordion__content__list-item">
  //                     <a className="accordion__content__link" href={item.link}>
  //                       {item.title}
  //                     </a>
  //                   </li>
  //                 </ul>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </>
  //     ),
  //   },
  //   {
  //     id: 2,
  //     title: "2023",
  //     content: (
  //       <>
  //         {prestacaoContas2024.map((item, index) => (
  //           <div className="container-content__item" key={index}>
  //             <header className="accordion__content__header">
  //               <h5
  //                 id="accordion__content__month-february"
  //                 className="accordion__content__month"
  //               >
  //                 {item.month}
  //               </h5>
  //             </header>
  //             <div
  //               id="accordion__content__body-february"
  //               className="accordion__content__body"
  //               aria-labelledby="accordion__content__month-february"
  //               role="region"
  //             >
  //               {item.files.map((item,index) => (
  //                 <ul key={index} className="accordion__content__list" >
  //                   <li className="accordion__content__list-item">
  //                     <a className="accordion__content__link" href={item.link}>
  //                       {item.title}
  //                     </a>
  //                   </li>
  //                 </ul>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </>
  //     ),
  //   },
  //   {
  //     id: 3,
  //     title: "2024",
  //     content: (
  //       <>
  //         {prestacaoContas2024.map((item, index) => (
  //           <div className="container-content__item" key={index}>
  //             <header className="accordion__content__header">
  //               <h5
  //                 id="accordion__content__month-february"
  //                 className="accordion__content__month"
  //               >
  //                 {item.month}
  //               </h5>
  //             </header>
  //             <div
  //               id="accordion__content__body-february"
  //               className="accordion__content__body"
  //               aria-labelledby="accordion__content__month-february"
  //               role="region"
  //             >
  //               {item.files.map((item,index) => (
  //                 <ul key={index} className="accordion__content__list">
  //                   <li className="accordion__content__list-item">
  //                     <a className="accordion__content__link" href={item.link}>
  //                       {item.title}
  //                     </a>
  //                   </li>
  //                 </ul>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </>
  //     ),
  //   },
  // ];

  // const handleAccordionChange = (index: number) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };
  return (
    <SectionContas>
      <Hero image="https://img.freepik.com/fotos-gratis/closeup-de-economista-usando-calculadora-ao-passar-por-contas-e-impostos-no-escritorio_637285-3156.jpg?t=st=1735392233~exp=1735395833~hmac=6f18faaf1022d57f42554503750460ef1609470b5c7f09cfd79916da143cb652&w=740" />
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
    </SectionContas>
  );
}

export default PageTransparencia;
