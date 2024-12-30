import { Container } from "../../styles";
import * as S from "./styles";
import { Mail, Phone } from "lucide-react";
// import fotoFooter from "../../../public/logo-adqpal.png";

function Footer() {
  return (
    <S.FooterContainer className="footer">
      <Container>
        <S.FooterGrid className="footer__grid">
          <S.FooterSection className="footer__section">
            <h4 className="footer__title">Nosso Compromisso</h4>
            <p className="footer__description">
              Somos a Associação dos Dependentes Químicos e Portadores de
              Doenças Psiquiátricas de São Miguel dos Campos, comprometidos em
              proporcionar apoio, reabilitação e qualidade de vida.
            </p>
          </S.FooterSection>

          <S.FooterSection className="footer__section">
            <S.ContactsContainer className="content-contact">
              <h4 id="contact" className="footer-contact__title">
                Contato
              </h4>
              <ul className="footer-contact__list">
                <li className="footer-contact__list-item">
                  <a
                    href="mailto:contato@instituicao.com"
                    title="Enviar um e-mail para contato"
                    className="footer-contact__link"
                  >
                    <Mail />
                    contato@instituicao.com
                  </a>
                </li>
                <li className="footer-contact__list-item">
                  <a
                    href="tel:+553232123456"
                    title="Ligar para o contato"
                    className="footer-contact__link"
                  >
                    <Phone />
                    +55 32 3212-3456
                  </a>
                </li>
              </ul>
            </S.ContactsContainer>
            <S.AttendanceContainer className="content-horario">
              <h3 className="attendance-title">Horário de Atendimento</h3>
              <ul className="attendance-list">
                <li className="attendance-list-item">Segunda a Sexta</li>
                <li className="attendance-list-item">8:00 às 17:00</li>
                <li className="attendance-list-item">
                  Plantão 24h para Emergências
                </li>
              </ul>
            </S.AttendanceContainer>
          </S.FooterSection>
          <S.FooterSection
            aria-labelledby="location"
            className="footer__section"
          >
            <h4 id="location" className="footer__title">
              Localização
            </h4>
            <p className="footer__description">
              Praça Dr José Inácio 173, São Miguel dos Campos - AL 57241-234
            </p>
            <S.MapIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.806031424251!2d-36.098003999999996!3d-9.782473999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x706a7dcf055f76f%3A0x74975c25f996b690!2sPra%C3%A7a%20Dr.%20Jos%C3%A9%20In%C3%A1cio%2C%20173%20-%20Centro%2C%20S%C3%A3o%20Miguel%20dos%20Campos%20-%20AL%2C%2057240-000!5e0!3m2!1spt-BR!2sbr!4v1735313304055!5m2!1spt-BR!2sbr"
              loading="lazy"
              title="Localização no mapa"
              aria-label="Mapa de localização da nossa instituição"
              className="footer__map"
            />
          </S.FooterSection>
        </S.FooterGrid>
      </Container>

      <S.Copyright className="footer__copyright">
        © 2024 ADQPAL. Todos os direitos reservados.
      </S.Copyright>
    </S.FooterContainer>
  );
}

export default Footer;
