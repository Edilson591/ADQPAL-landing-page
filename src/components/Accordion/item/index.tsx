import { Item } from "..";
import * as S from "./styles";
import { ChevronUp, ChevronDown, FileText } from "lucide-react";

type Props = Item & { isActive: boolean; onClickHeader(): void };

function AccordionItem({
  title,
  content,
  isActive = false,
  onClickHeader,
}: Props) {
  return (
    <S.ContainerItem $isActive={isActive}>
      <button
        className="container-header"
        onClick={onClickHeader}
        aria-expanded={isActive}
        aria-controls={`content-${title}`}
        id={`header-${title}`}
      >
        <h3 id={`header-${title}`}>
          <FileText />
          {title}
        </h3>
        <span className="icon">
          {isActive ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      <div
        className="container-content"
        id={`content-${title}`}
        aria-labelledby={`header-${title}`}
      >
        {content}
      </div>
    </S.ContainerItem>
  );
}

export default AccordionItem;
