import {
  CarruselCoupons,
  CMRCarousel,
  CMRHeader,
  LearnCMR,
  RedeemOptions,
} from "@/components/cmr-puntos-page";

export default function Page() {
  return (
    <div className="bg-[#f7f9fb]">
      <div className="max-w-[1200px] mx-auto px-4">
        <CMRHeader />
        <CMRCarousel />
        <RedeemOptions />
        <CarruselCoupons />
        <LearnCMR />
      </div>
    </div>
  );
}
