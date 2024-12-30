import * as S from "./styles";
import Cards from "../../../components/Cards";

import clinico from "../../../assets/foto-card-clinico.jpeg";
import clinicoAman from "../../../assets/foto-card-Dr-Aman.jpeg";
import acaoSolidaria from "../../../assets/foto-card-da-solidariedade.jpeg";
import SectionHeaders from "../../SectionHeader";

function SectionServices() {
  return (
    <S.SectionServices>
      <SectionHeaders
        title="Nossos serviços"
        subtitle="Descubra como transformamos vidas com nossas ações solidárias e cuidados com a saúde."
        id="services-title"
        descriptionId="services-description"
      />
      
      <S.ServicesGridContainer
        role="region"
        aria-labelledby="services-title"
        aria-describedby="services-description"
      >

        <ul className="services-grid" role="list">
          <li className="service-item" role="listitem" aria-label="Mutirão de Consultas realizado no dia 5">
            <Cards
              imagem={clinico}
              subTitle="Hoje, dia 5, a ADQPAL teve o prazer de realizar mais um dia de atendimentos, com diversas consultas realizadas em parceria com o Dr. Benildo. Foi uma manhã de muito trabalho e dedicação para oferecer o melhor cuidado aos nossos pacientes."
              titulo="Mutirão de Consultas"
            />
          </li>
          <li className="service-item" role="listitem" aria-label="Mutirão de Consultas realizado no dia 12">
            <Cards
              imagem={clinicoAman}
              subTitle="Hoje, dia 12, a ADQPAL realizou mais uma ação de saúde em sua sede, contando com o apoio do Dr. Aman Caldas, clínico geral, e do vereador Pedro da Saúde. Foi um dia marcado por dedicação e cuidado com a comunidade de São Miguel dos Campos."
              titulo="Mutirão de Consultas"
            />
          </li>
          <li className="service-item" role="listitem" aria-label="Mutirão de Solidariedade realizado no dia 09/08">
            <Cards
              imagem={acaoSolidaria}
              subTitle="Realizada nesta manhã especial, dia 09/08, na sede da associação, onde foram entregues muletas e colchões pneumáticos, além da realização de eletrocardiogramas, reafirmando nosso compromisso com o cuidado e a saúde da comunidade."
              titulo="Mutirão de Solidariedade"
            />
          </li>
        </ul>
      </S.ServicesGridContainer>
    </S.SectionServices>
  );
}

export default SectionServices;

