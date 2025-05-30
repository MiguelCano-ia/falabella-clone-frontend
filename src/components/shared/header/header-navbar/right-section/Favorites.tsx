import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Favorites = () => {
  return (
    <div className="p-4 border-r-[1px] border-primary h-[47px] flex items-center max-lg:hidden">
      <Link href="/falabella-co/myaccount/user/mylists">
        <Heart
          size={30}
          className="hover:text-[#6d7985] hover:transition-colors"
        />
      </Link>
    </div>
  );
};
