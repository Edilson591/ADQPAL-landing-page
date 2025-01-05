import * as S from "./styles";
import {
  Principios,
  principiosQuemSomos,
} from "../../data/principiosQuemSomosData";
import { principiosOQueFazemos } from "../../data/principiosOQueFazemos";


interface PropsPrincipios {
  tiposPrincipios: "quem-somos" | "o-que-fazemos";
}

function SectionPrincipios({ tiposPrincipios }: PropsPrincipios) {
  const data: Principios[] | undefined =
    tiposPrincipios === "quem-somos" ? principiosQuemSomos : principiosOQueFazemos;
  return (
    <S.ContainerPrincipios>
      <S.ListPrincipios>
        {data?.map((item, index) => (
          <S.ItemPrincipios key={index}>
            <div className="list-item__icon">{item.icon}</div>
            <h3 className="list-item__title">{item.title}</h3>
            {item.description && (
              <p className="list-item__text">{item.description}</p>
            )}
            {item.Listvalues && (
              <ul className="list-item">
                {item.Listvalues.map((item, index) => (
                  <li className="list-item__item" key={index}>
                    {item.icon}
                    {item.subTitle}
                  </li>
                ))}
              </ul>
            )}
          </S.ItemPrincipios>
        ))}
      </S.ListPrincipios>
    </S.ContainerPrincipios>
  );
}

export default SectionPrincipios;
