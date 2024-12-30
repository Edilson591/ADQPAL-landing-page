import AccordionItem from "./item";
import * as S from "./styles";

export interface Item {
  id: number;
  title: string;
  content: React.ReactNode;
}

interface PropsAccordion {
  items: Item[];
  activeIndex?: number | null;
  onChangeActiveIndex: (index: number) => void;
}

function Accordion({ items = [], onChangeActiveIndex,activeIndex }: PropsAccordion) {
  return (
    <S.ContainerAccordion>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          isActive={index === activeIndex}
          onClickHeader={() => onChangeActiveIndex(index)}
          {...item}
        />
      ))}
    </S.ContainerAccordion>
  );
}

export default Accordion;
