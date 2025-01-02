import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.footerColors};
  color: ${({ theme }) => theme.colors.primary};
  padding: 2rem 1rem;
  text-align: center;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
  }
`;

export const FooterSection = styled.div`
  .footer__description {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  .footer__title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

export const ContactsContainer = styled.div`
  margin-bottom: 2rem;
  .footer-contact__list {
    &-item {
      .footer-contact__link {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        margin-bottom: 0.5rem;
        justify-content: center;
        cursor: pointer;

        @media (min-width: 768px) {
          justify-content: flex-start;
        }

        &:hover {
          color: ${({ theme }) => theme.colors.textSecondary};
        }
      }
    }
  }

  .footer-contact__title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

export const AttendanceContainer = styled.div`
  .attendance-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .attendance-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.875rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: column;
    }
    .attendance-list-item {
      margin-bottom: 0.5rem;
      span {
        display: block;
        line-height: 1.2rem;
      }
    }
  }
`;

export const MapIframe = styled.iframe`
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  border-radius: 4px;
  border: none;
  display: block;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
    height: 300px;
  }
`;

export const Copyright = styled.div`
  margin-top: 2rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary};
`;
