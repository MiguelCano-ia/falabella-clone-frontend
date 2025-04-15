import { getUser } from "@/actions/auth/helpers/getUser";
import { UserForm } from "@/components/user/userpersonalinformation/UserForm";

export default async function Page() {
  const user = await getUser();

  return <UserForm user={user!} />;
}
