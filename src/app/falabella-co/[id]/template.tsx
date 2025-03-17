import { FooterProd } from "@/components/FooterPagProduct";

export default function ProductTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto p-8">{children}</main>
      <FooterProd />
    </div>
  );
}
