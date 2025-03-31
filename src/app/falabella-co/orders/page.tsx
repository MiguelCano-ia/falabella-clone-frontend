import { getUser } from "@/actions/auth/helpers/getUser";
import { UserOrders } from "@/components/orders/UserOrders";
import { NotAuthenticated } from "@/components/shared/not-authenticated/NotAuthenticated";

export default async function Page() {
  const user = await getUser();

  return (
    <section className="flex h-auto min-h-[375px] justify-center bg-[#f1f1f1]">
      {!user ? <NotAuthenticated /> : <UserOrders />}
    </section>
  );
}
