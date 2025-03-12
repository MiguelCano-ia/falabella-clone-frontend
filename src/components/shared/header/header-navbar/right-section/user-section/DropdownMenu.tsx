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
            onMouseLeave={closeLoginHeaderModal}
          >
            <ul className="space-y-2 py-2 px-4" onClick={closeLoginHeaderModal}>
              {!user ? (
                <>
                  <li
                    className="cursor-pointer hover:text-black"
                    onClick={openLoginForm}
                  >
                    Inicia sesión
                  </li>
                  <DropdownItem
                    href="/falabella-co/myaccount/registration"
                    text="Registrate"
                  />
                  <DropdownItem href="/logout" text="Mi cuenta" />
                </>
              ) : (
                <>
                  <DropdownItem href="/profile" text="Mi cuenta" />
                  <DropdownItem href="/orders" text="Mis compras" />
                  <li
                    className="cursor-pointer hover:text-black"
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
