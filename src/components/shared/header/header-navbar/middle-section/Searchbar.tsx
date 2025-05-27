"use client";

import { searchAction } from "@/actions/search/search";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useActionState } from "react";

export const Searchbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, action] = useActionState(searchAction, undefined);

  return (
    <>
      <div className="relative w-full">
        <form action={action}>
          <Input
            name="search"
            type="text"
            placeholder="Buscar en falabella.com"
            className="h-[46px] w-full rounded-[35px] border-[0.5px] border-input bg-background pl-6 py-2 text-lg font-normal tracking-wide focus:outline-none focus-visible:ring-0"
          />
          <button
            type="submit"
            title="button"
            className="flex items-center justify-center ml-2 bg-icon-background w-[46px] h-[46px] rounded-[35px] absolute right-0 top-0"
          >
            <Image
              src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt71d9874fe32f0ffa/63b733a51d6eeb10b65d828c/hr-3-search-desktop.svg"
              width={28}
              height={29}
              alt="search"
            />
          </button>
        </form>
      </div>
    </>
  );
};
