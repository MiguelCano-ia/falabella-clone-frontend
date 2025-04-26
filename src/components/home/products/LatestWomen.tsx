import { ProductCarousel } from "./ProductCarousel";

const getWomenProducts = async () => {
  const res = fetch("http://localhost:4000/collection/moda_mujer");
  return (await res).json();
};

export const LatestWomen = async () => {
  const allProducts = await getWomenProducts();

  return (
    <ProductCarousel
      products={allProducts.products.slice(-17)}
      title="Lo más vendido en Moda Mujer"
      scrollBy={6}
    />
  );
};
