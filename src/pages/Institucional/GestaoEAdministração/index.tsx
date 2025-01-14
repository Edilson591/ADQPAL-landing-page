import * as S from "./styles";
import { ContainerPrincipal } from "../../../sections/MainContainer/styles";
import imgGestao from "../../../assets/imagens backgroundSections/foto-logo-gestao.webp";
import Hero from "../../../components/Hero";
import SectionHeaders from "../../../sections/MainHeader";
import { diretoriaExecutivaData } from "../../../data/diretoriaExecutivaData";

function PageDiretoria() {
  return (
    <>
      <Hero image={imgGestao} descriptionHero="imagem do que fazemos" />
      <ContainerPrincipal>
        <SectionHeaders
          title="Gestão e Administração"
          subtitle="Diretoria Excutiva"
          subBackground={true}
        />
        <S.ContainerTables>
          <S.Table aria-labelledby="table-title">
            <caption id="table-title">Conselho Administrativo</caption>
            <S.TableHeader>
              <S.TableRow>
                <S.TableHeaderCell scope="col" >Nome</S.TableHeaderCell>
                <S.TableHeaderCell scope="col" >Cargo</S.TableHeaderCell>
              </S.TableRow>
            </S.TableHeader>
            <tbody>
              {diretoriaExecutivaData.map((director, index) => (
                <S.TableRow key={index}>
                  <S.TableCell>{director.name}</S.TableCell>
                  <S.TableCell>{director.role}</S.TableCell>
                </S.TableRow>
              ))}
            </tbody>
          </S.Table>
          <S.Table aria-labelledby="table-title">
            <caption id="table-title">Conselho Fiscal</caption>
            <S.TableHeader>
              <S.TableRow>
                <S.TableHeaderCell scope="col">Nome</S.TableHeaderCell>
              </S.TableRow>
            </S.TableHeader>
            <tbody>
              {diretoriaExecutivaData.map((director, index) => (
                <S.TableRow key={index}>
                  <S.TableCell>{director.name}</S.TableCell>
                </S.TableRow>
              ))}
            </tbody>
          </S.Table>
        </S.ContainerTables>
      </ContainerPrincipal>
    </>
  );
}

export default PageDiretoria;
