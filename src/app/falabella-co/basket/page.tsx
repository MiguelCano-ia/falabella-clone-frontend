import { getUser } from "@/actions/auth/helpers/getUser";
import { EmptyCart } from "@/components/basket/EmptyCart";

export default async function Page() {
  const user = await getUser();

  return (
    <main className="bg-[#f1f1f1] w-full h-full">
      <section className="container mx-auto my-5 bg-[#fff] max-w-[1280px] mb-48">
        <EmptyCart user={user} />
      </section>
    </main>
  );
}
