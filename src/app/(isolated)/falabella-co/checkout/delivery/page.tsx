import { getUser } from "@/actions/auth/helpers/getUser";
import { NotAuthenticated } from "@/components/checkout/delivery/NotAuthenticated";

export default async function Page() {
  const user = await getUser();

  return (
    <div className="container mx-auto max-w-7xl w-[890px] mt-8 bg-white rounded-md shadow py-8 px-6">
      {!user ? <NotAuthenticated /> : <span>auth</span>}
    </div>
  );
}
