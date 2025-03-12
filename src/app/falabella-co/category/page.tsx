import ProductCard from "@/components/category/products/ProductCard";
import Sidebar from "@/components/category/Sidebar";

export default function NamePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="grid grid-cols-4 gap-6">
          <ProductCard
            image="https://example.com/product1.jpg"
            title="Tenis Marithea Gris para Mujer"
            price="79.900"
            originalPrice="99.900"
            discount="20%"
            description="Por Croydon Colombia"
          />
          <ProductCard
            image="https://example.com/product2.jpg"
            title="Baletas Moda Mujer"
            price="54.000"
            originalPrice="79.900"
            discount="32%"
            description="Por Price Shoes"
          />
          <ProductCard
            image="https://example.com/product3.jpg"
            title="Baletas para Mujer Abalatahan"
            price="34.990"
            originalPrice="69.990"
            discount="50%"
            description="Por Falabella"
          />
          <ProductCard
            image="https://example.com/product4.jpg"
            title="Baletas para Mujer Abastuds"
            price="99.990"
            originalPrice=""
            description="Por Falabella"
          />
        </div>
      </div>
    </div>
  );
}
