"use client";

import { useUIStore } from "@/store/ui";

export const Overlay = () => {
  const isLoginHeaderModalOpen = useUIStore(
    (state) => state.isLoginHeaderModalOpen
  );
  const closeLoginHeaderModal = useUIStore(
    (state) => state.closeLoginHeaderModal
  );

  return (
    <>
      {isLoginHeaderModalOpen && (
        <div
          className="hidden fixed w-full h-full bg-[#4A4A4A80] lg:z-10 lg:block"
          onClick={closeLoginHeaderModal}
        />
      )}
    </>
  );
};
