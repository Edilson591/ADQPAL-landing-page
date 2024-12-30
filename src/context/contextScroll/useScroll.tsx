import { createContext, useContext } from "react";

interface ScrollContextType {
    isActiveHeader: boolean;
    elementRef:  React.RefObject<HTMLDivElement>
}

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
      throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
  };