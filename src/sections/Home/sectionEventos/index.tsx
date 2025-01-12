import * as S from "./styles";
import Cards from "../../../components/Cards";

import clinico from "../../../assets/foto-card-clinico.jpeg";
import clinicoAman from "../../../assets/foto-card-Dr-Aman.jpeg";
import acaoSolidaria from "../../../assets/foto-card-da-solidariedade.jpeg";
import SectionHeaders from "../../MainHeader";
// import { Button } from "../sectionDoacaoAndVoluntariado/styles";

function SectionEvents() {
  return (
    <S.SectionEvents>
      <SectionHeaders
        title="Nossos Eventos"
        subtitle="Acompanhe como nossas ações transformam vidas e promovem a saúde e o bem-estar da comunidade."
        id="events-title"
        descriptionId="events-description"
      />
      
      <S.EventsGridContainer
        role="region"
        aria-labelledby="events-title"
        aria-describedby="events-description"
      >

        <ul className="events-grid" role="list">
          <li className="event-item" role="listitem" aria-label="Mutirão de Consultas realizado no dia 5">
            <Cards
              imagem={clinico}
              subTitle="No dia 5, a ADQPAL realizou uma ação de promoção a saude em sua sede, reafirmando seu compromisso com o bem-estar da comunidade de São Miguel dos Campos. Diversas consultas foram realizadas, abordando cuidados especializados e orientações personalizadas com as pessoas."
              titulo="Mutirão de Consultas"

              // Hoje, dia 5, a ADQPAL teve o prazer de realizar mais um dia de atendimentos dedicados à promoção da saúde e do bem-estar. Com a valiosa parceria do Dr. Benildo, diversas consultas foram realizadas, abrangendo orientações personalizadas e cuidados especializados. A manhã foi marcada por muito trabalho, comprometimento e atenção, reafirmando nosso compromisso de oferecer o melhor cuidado possível aos nossos pacientes. Cada atendimento reflete nossa missão de proporcionar saúde, inclusão e acolhimento àqueles que mais precisam. Estamos felizes em continuar fazendo a diferença na vida de tantas pessoas!              titulo="Mutirão de Consultas"

            />
          </li>
          <li className="event-item" role="listitem" aria-label="Mutirão de Consultas realizado no dia 12">
            <Cards
              imagem={clinicoAman}
              subTitle="No dia 12, mais uma ação de saúde foi promovida pela ADQPAL em parceria com o Dr. Aman Caldas, reafirmando o compromisso com o bem-estar e a vida da população de São Miguel dos Campos. Foram realizados atendimentos médicos, orientações preventivas, protetivas e muito mais."
              // No dia 12, a ADQPAL promoveu mais uma importante ação de saúde em sua sede, reafirmando seu compromisso com o bem-estar da comunidade de São Miguel dos Campos. A iniciativa contou com o apoio do renomado clínico geral, Dr. Aman Caldas, e a participação especial do vereador Pedro da Saúde, que reforçou a importância de iniciativas como essa para a promoção de saúde e qualidade de vida na região. Durante a ação, foram realizados atendimentos médicos, orientações preventivas e esclarecimentos sobre cuidados essenciais, sempre com foco nas necessidades da população local. Esse dia foi marcado pela dedicação dos profissionais envolvidos e pelo acolhimento à comunidade, refletindo a missão da ADQPAL de oferecer suporte, inclusão e atenção humanizada.
              titulo="Mutirão de Consultas"
            />
          </li>
          <li className="event-item" role="listitem" aria-label="Mutirão de Solidariedade realizado no dia 09/08">
            <Cards
              imagem={acaoSolidaria}
              subTitle="Em 09 de agosto, a ADQPAL realizou um evento de solidariedade, distribuindo muletas e colchões pneumáticos, itens essenciais para promover conforto e mobilidade aos beneficiados. A ação também incluiu exames de eletrocardiograma para atender à saúde cardiovascular da comunidade."
              titulo="Mutirão de Solidariedade"

              // Realizada nesta manhã especial, dia 09 de agosto, na sede da associação, a ação foi marcada pela entrega de itens essenciais como muletas e colchões pneumáticos, fundamentais para proporcionar maior conforto e mobilidade aos beneficiados. Além disso, a iniciativa contou com a realização de exames de eletrocardiograma, oferecendo um importante suporte diagnóstico para a saúde cardiovascular da comunidade. Essa atividade reafirma o compromisso da associação em promover cuidado integral, acessibilidade e bem-estar, atendendo de forma humanizada às necessidades dos moradores da região. Cada gesto e cada recurso disponibilizado simbolizam o esforço contínuo em construir uma sociedade mais acolhedora e comprometida com a saúde coletiva.
            />
          </li>
        </ul>
      </S.EventsGridContainer>
      {/* <S.ContainerButtonMais>
        <Button/>
      </S.ContainerButtonMais> */}
    </S.SectionEvents>
  );
}

export default SectionEvents;
