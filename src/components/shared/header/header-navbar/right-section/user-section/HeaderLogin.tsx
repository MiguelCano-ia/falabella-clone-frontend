"use client";

import { ChevronDown } from "lucide-react";
import { DropdownMenu } from "./DropdownMenu";
import { UserData } from "@/interfaces/auth/user";
import { useUIStore } from "@/store/ui";

interface Props {
  user: UserData;
}

export const HeaderLogin = ({ user }: Props) => {
  const openLoginHeaderModal = useUIStore(
    (state) => state.openLoginHeaderModal
  );

  return (
    <div className="relative" onMouseEnter={openLoginHeaderModal}>
      <div className="flex flex-col justify-center h-[47px] pr-2 border-r-[1px] border-primary max-lg:border-0 max-lg:pr-0 max-sm:w-12 max-sm:text-right max-sm:mb-2">
        <p className="font-bold text-[19px] text-icon-background h-[17px] max-lg:hidden">
          Hola,
        </p>
        <div className="flex items-center space-x-1 group">
          <p className="font-black text-[19px] text-icon-background mt-1 max-lg:text-[14px] max-lg:underline max-lg:underline-offset-1">
            {user ? user.name : "Inicia sesión"}
          </p>
          <ChevronDown width={18} className="mt-1 max-lg:hidden" />
        </div>

        <DropdownMenu user={user} />
      </div>
    </div>
  );
};
