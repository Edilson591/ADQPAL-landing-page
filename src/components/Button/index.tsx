import { AnchorHTMLAttributes } from "react";
import * as S from "./styles";

interface  PropsButtonLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  href: string;
}

function ButtonLink({ name, href, ...rest}: PropsButtonLink) {
  return (
    <S.ContainerButtonLink>
      <S.ButtonLink href={href} role="link" {...rest} >
        {name}
      </S.ButtonLink>
    </S.ContainerButtonLink>
  );
}

export default ButtonLink;
