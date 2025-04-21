"use client";

import { useUIStore } from "@/store/ui";
import { DropdownItem } from "./DropdownItem";
import { UserData } from "@/interfaces/auth/user";
import { logout } from "@/actions/auth/logout";

interface Props {
  user: UserData;
}

export const DropdownMenu = ({ user }: Props) => {
  const openLoginForm = useUIStore((state) => state.openLogin);

  const isLoginHeaderModalOpen = useUIStore(
    (state) => state.isLoginHeaderModalOpen
  );

  const closeLoginHeaderModal = useUIStore(
    (state) => state.closeLoginHeaderModal
  );

  return (
    <>
      {isLoginHeaderModalOpen && (
        <>
          <div
            className="absolute hidden lg:block top-0 bg-white shadow-lg border border-gray-200 mt-14 rounded-sm w-[160px] text-sm z-20"
            onMouseLeave={() =>
              setTimeout(() => {
                closeLoginHeaderModal();
              }, 200)
            }
          >
            <ul className="space-y-2 py-2 px-4" onClick={closeLoginHeaderModal}>
              {!user ? (
                <>
                  <li
                    className="cursor-pointer hover:text-black py-1"
                    onClick={openLoginForm}
                  >
                    Inicia sesión
                  </li>
                  <DropdownItem
                    href="/falabella-co/myaccount/registration"
                    text="Registrate"
                  />
                  <DropdownItem
                    href="/falabella-co/myaccount/user/userpersonalinformation"
                    text="Mi cuenta"
                  />
                  <DropdownItem
                    href="/falabella-co/page/cmr-puntos"
                    text="CMR Puntos"
                    className="border-t-[1px] border-gray-200 py-3"
                  />
                </>
              ) : (
                <>
                  <DropdownItem
                    href="/falabella-co/myaccount/user/userpersonalinformation"
                    text="Mi cuenta"
                  />
                  <DropdownItem
                    href="/falabella-co/page/cmr-puntos"
                    text="Mis CMR Puntos"
                  />
                  <DropdownItem
                    href="/falabella-co/orders"
                    text="Mis compras"
                  />
                  <li
                    className="cursor-pointer hover:text-black py-2"
                    onClick={logout}
                  >
                    Cerrar sesión
                  </li>
                </>
              )}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
