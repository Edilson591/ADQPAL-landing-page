import { useEffect, useRef, useState } from "react";

const useShowHeader = () => {
  const [isActiveHeader, setIsActiveHeader] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollHeight = () => {
      if (elementRef.current) {
        const elementHeight = elementRef.current.clientHeight;
        const windowHeight = window.scrollY;
        setIsActiveHeader(windowHeight < elementHeight);
      }
    };
  
    window.addEventListener("scroll", handleScrollHeight);
    return () => {
    window.removeEventListener("scroll", handleScrollHeight);
    };
  }, [isActiveHeader]);
  

  return {
    elementRef,
    isActiveHeader,
  };
};

export default useShowHeader;
