import { PasswordRecoveryForm } from "@/components/auth/passwordrecovery/PasswordRecovery";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="bg-[#eee]">
      <div className="container m-auto flex items-stretch justify-center pt-5 pb-3 w-full">
        <Suspense>
          <PasswordRecoveryForm />
        </Suspense>
      </div>
    </div>
  );
}
