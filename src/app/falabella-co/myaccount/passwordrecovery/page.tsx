import { PasswordRecoveryForm } from "@/components/auth/passwordrecovery/PasswordRecovery";

export default function Page() {
  return (
    <div className="bg-[#eee]">
      <div className="container m-auto flex items-stretch justify-center pt-5 pb-3 w-full">
        <PasswordRecoveryForm />
      </div>
    </div>
  );
}
