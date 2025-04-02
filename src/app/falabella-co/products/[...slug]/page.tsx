import {
  Breadcrumbs,
  CategoryList,
  ProductSection,
  SideBarCateogory,
} from "@/components";

const getProducts = async (slug: string[]) => {
  try {
    const response = await fetch(
      `http://localhost:4000/${slug.join("/")}`
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const products = await getProducts(slug);

  return (
    <div className="flex flex-col items-center justify-center">
      <Breadcrumbs slugs={slug} />
      <div className="flex flex-col bg-[#F1F1F1] w-full h-full justify-center items-center">
        <CategoryList />
        <div className="flex pt-[15px] max-w-[1280px] w-full">
          {/* Sidebar */}
          <SideBarCateogory products={products} slugs={slug} />
          {/* Derecha */}
          <ProductSection products={products} />
        </div>
      </div>
    </div>
  );
}
