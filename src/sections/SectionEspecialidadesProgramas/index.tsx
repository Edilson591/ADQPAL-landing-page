import * as S from "./styles";
import { especialidadesProgramasData } from "../../data/especialidadesProgramasData";
import ButtonLink from "../../components/Button";
// import CardHover from "../../components/CardHover";
// import fotoContact from "../../assets/imagens backgroundSections/Documento Escaneado_page-0002.jpg";
// interface PropsEspecialidade {
//   isButtonExist: boolean;
// }

function EspecilidadesProgramas() {
  return (
    <S.ContainerEspecialidade>
      <S.ListProgramas>
        {especialidadesProgramasData?.map((programa, index) => (
          <S.ListProgramaItem key={index}>
            <S.ItemProgramaTitle>{programa.title}</S.ItemProgramaTitle>
            <S.ListItem>
              {programa.items?.map((item, index) => (
                <S.ListItens
                  key={index}
                  // $showBefore={showIcon ? true : false}
                >
                  {item}
                </S.ListItens>
              ))}
              <div className="contato">
                {programa.links && (
                  <>
                    <ButtonLink
                      href="tel:+55xxxxxxxxxxx"
                      name="Contato Telefônico"
                    />
                    <ButtonLink
                      href="https://wa.me/55xxxxxxxxxxx"
                      name="Contato pelo WhatsApp"
                    />
                  </>
                )}
              </div>
            </S.ListItem>
          </S.ListProgramaItem>
        ))}
      </S.ListProgramas>
    </S.ContainerEspecialidade>
  );
}

export default EspecilidadesProgramas;
