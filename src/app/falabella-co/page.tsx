import {
  Carousel,
  InformationSection,
  LatestMen,
  LatestReleases,
  LatestTechnology,
  LatestWomen,
  LimitedTimeOffers,
  PromotionalBanners,
} from "@/components/home";
import { Footer } from "@/components/shared/footer/Footer";

export default function Page() {
  return (
    <>
      <Carousel />

      <div className="container w-full max-w-[1280px] mx-auto px-4">
        <LatestTechnology />
        <LimitedTimeOffers />
        <LatestMen />
        <LatestReleases />
        <LatestWomen />
        <PromotionalBanners />
        <InformationSection />
      </div>
      <Footer />
    </>
  );
}
