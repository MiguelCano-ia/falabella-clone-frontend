"use client";

import { useEffect, useState, ReactNode } from "react";

interface StickyHeaderProps {
  children: ReactNode;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({ children }) => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [atTop, setAtTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setAtTop(currentScrollPos < 10);

      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`
          fixed top-0 left-0 w-full z-5 transition-transform duration-300
          ${visible ? "transform-none" : "transform -translate-y-full"}
          ${atTop ? "relative" : "sticky bg-white shadow-md z-10"}
        `}
    >
      {children}
    </header>
  );
};
