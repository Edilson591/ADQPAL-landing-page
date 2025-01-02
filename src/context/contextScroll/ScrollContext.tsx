import { ReactNode, useEffect, useRef, useState } from "react";

import { ScrollContext } from "./useScroll";

interface ScrollProviderType {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderType) => {
  const [isActiveHeader, setIsActiveHeader] = useState<boolean>(false);
  const elementRefSlide = useRef<HTMLDivElement>(null);
  const elementRefHeader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollHeight = () => {
      const slideHeight = elementRefSlide.current?.clientHeight || 0;
      const headerHeight = !elementRefSlide.current
        ? elementRefHeader.current?.clientHeight || 0
        : 0;

      const targetHeight = slideHeight || headerHeight;
      const windowHeight = window.scrollY;

      setIsActiveHeader(windowHeight < targetHeight && windowHeight !== 0);
    };

    window.addEventListener("scroll", handleScrollHeight);
    return () => {
      window.removeEventListener("scroll", handleScrollHeight);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{ isActiveHeader, elementRefSlide, elementRefHeader }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
