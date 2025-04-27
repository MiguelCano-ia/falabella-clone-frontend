import { ProductCarousel } from "./ProductCarousel";

const getMenProducts = async () => {
  const res = fetch(`${process.env.API_URL}/collection/moda_hombre`);
  return (await res).json();
};

export const LatestMen = async () => {
  const allProducts = await getMenProducts();

  return (
    <ProductCarousel
      products={allProducts.products.slice(-17)}
      title="Lo más vendido en Moda Hombre"
      scrollBy={6}
    />
  );
};
