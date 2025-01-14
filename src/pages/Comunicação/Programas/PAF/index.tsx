import MainContainer from "../../../../sections/MainContainer";
import SectionHeaders from "../../../../sections/MainHeader";
import * as S from "./styles";
import { Container } from "../../../../styles";
import EspecilidadesProgramas from "../../../../sections/SectionEspecialidadesProgramas";
// import CardHover from "../../../../components/CardHover";
// import fotoContact from "../../../../assets/imagens backgroundSections/Documento Escaneado_page-0002.jpg"
// import SectionPrincipios from "../../../../sections/SectionPrincipios";

function PageAssistenciaFamiliar() {
  return (
    <MainContainer>
        <SectionHeaders
          title="Plano de Assistência Familiar (PAF)"
          subtitle="Assistência aos trabalhadores, seus representados e/ou dependentes."
        />
      <Container>
        <S.ContainerContent>
          <S.SectionDescription>
            <S.ContainerDescription>
              <p>
                <strong>
                  A Federação dos Trabalhadores em Estabelecimentos de Serviços
                  de Saúde do Nordeste (FETESSNE)
                </strong>
                , representada por <strong>Mário Jorge dos Santos Filho</strong>
                , e a <strong>ADQPAL</strong> (Associação dos Dependentes
                Químicos e Portadores de Doenças Psiquiátricas de São Miguel dos
                Campos), representada por <strong>Naedja Silva Melo</strong>,
                firmam o{" "}
                <strong>
                  Convênio de Adesão ao Plano de Assistência Familiar - PAF
                </strong>
                , com o objetivo de oferecer assistência à saúde aos
                trabalhadores e dependentes dos representados.
              </p>
              <p>
                O <strong>Plano de Assistência Familiar (PAF)</strong> foi
                criado com a missão de proporcionar cuidados médicos,
                odontológicos e hospitalares aos trabalhadores da área da saúde
                e seus familiares. Este plano oferece acesso a uma rede de
                serviços de saúde qualificados e de confiança, garantindo que
                todos os participantes tenham o suporte necessário para lidar
                com questões relacionadas à saúde e bem-estar.
              </p>
              <p>
                A adesão ao PAF é uma forma de proteção e apoio às famílias, uma
                vez que assegura atendimento especializado e acesso rápido a
                tratamentos médicos. Este plano foi desenvolvido para atender às
                necessidades específicas dos trabalhadores em serviços de saúde,
                considerando as particularidades dessa categoria profissional.
              </p>
            </S.ContainerDescription>
          </S.SectionDescription>
          <EspecilidadesProgramas />

        </S.ContainerContent>
      </Container>
    </MainContainer>
  );
}

export default PageAssistenciaFamiliar;
