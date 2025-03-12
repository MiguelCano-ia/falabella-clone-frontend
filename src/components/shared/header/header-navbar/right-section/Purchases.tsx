import Link from "next/link";

export const Purchases = () => {
  return (
    <div className="flex flex-col justify-center h-[47px] border-r-[1px] border-primary p-4 max-lg:hidden">
      <Link
        href="/falabella-co/orders"
        className="text-icon-background hover:text-[#6d7985] hover:transition-colors"
      >
        <span className="font-bold text-[19px] leading-none block">Mis</span>
        <span className="font-black text-[19px] leading-none">compras</span>
      </Link>
    </div>
  );
};
