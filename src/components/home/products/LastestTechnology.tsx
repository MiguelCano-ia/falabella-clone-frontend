import { ProductCarousel } from "./ProductCarousel";

const getTechnologyProducts = async () => {
  const res = fetch(`${process.env.API_URL}/collection/tecnologia`);
  return (await res).json();
};

export const LatestTechnology = async () => {
  const allProducts = await getTechnologyProducts();

  return (
    <ProductCarousel
      products={allProducts.products.slice(-17)}
      title="Lo más vendido en Tecnología"
      scrollBy={6}
    />
  );
};
