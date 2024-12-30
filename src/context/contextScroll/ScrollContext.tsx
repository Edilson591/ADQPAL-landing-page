import { ReactNode, useEffect, useRef, useState } from "react"

import { ScrollContext } from "./useScroll";



interface ScrollProviderType {
    children: ReactNode;
}



export const ScrollProvider = ({children}:ScrollProviderType) =>  {
    const [isActiveHeader, setIsActiveHeader] = useState<boolean>(false);
      const elementRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        const handleScrollHeight = () => {
          if (elementRef.current) {
            const elementHeight = elementRef.current.clientHeight;
            const windowHeight = window.scrollY;
            setIsActiveHeader(windowHeight < elementHeight && windowHeight !== 0);
          }
        };
      
        window.addEventListener("scroll", handleScrollHeight);
        return () => {
        window.removeEventListener("scroll", handleScrollHeight);
        };
      }, []);

    return (
        <ScrollContext.Provider value={{isActiveHeader ,elementRef}}>
            {children}
        </ScrollContext.Provider>
    )
}