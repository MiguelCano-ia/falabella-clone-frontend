import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export const Overlay = ({ children }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-[#4A4A4A80] z-10">
      {children}
    </div>
  );
};
