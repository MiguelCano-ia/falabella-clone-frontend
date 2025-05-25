import {
  Breadcrumbs,
  CategoryList,
  ProductSection,
  SideBarCateogory,
} from "@/components";

const getProducts = async (slug: string[]) => {
  try {
    if (slug[2] === "ver_todo") {
      slug = slug.filter((item) => item !== "ver_todo");
    }

    const response = await fetch(
      `${process.env.API_URL}/collection/${slug.join("/")}`
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
  let { slug } = await params;
  const productsInfo = await getProducts(slug);

  if (slug[2] === "ver_todo") {
    slug = slug.filter((item) => item !== "ver_todo");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Breadcrumbs slugs={slug} />
      <div className="flex flex-col bg-[#F1F1F1] w-full h-full justify-center items-center">
        <CategoryList
          banner={productsInfo?.info?.banner || null}
          featured={productsInfo.info?.featured || null}
          slugs={slug}
        />
        <div className="flex pt-[15px] max-w-[1280px] w-full">
          {/* Sidebar */}
          <SideBarCateogory products={productsInfo.products} slugs={slug} />
          {/* Derecha */}
          <ProductSection products={productsInfo.products} />
        </div>
      </div>
    </div>
  );
}
