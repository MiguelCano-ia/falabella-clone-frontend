import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleCheck, Eye, EyeOff } from "lucide-react";
import { checkoutCodeVerify } from "@/actions/auth/checkoutCode";
import { useRouter } from "next/navigation";
import { useUIStore } from "@/store/ui";

const codeSchema = z.string().min(3).nonempty();
export const PurchaseCode = ({ email }: { email: string }) => {
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState("");
  const closeLoginForm = useUIStore((state) => state.closeLogin);
  const router = useRouter();

  const handleOnBlur = () => {
    const result = codeSchema.safeParse(code);

    if (!result.success && code.length > 0) {
      setError("Ingresa un código verificador válido");
    } else {
      setError("");
    }
  };

  const handleVerifyCode = async () => {
    const result = await checkoutCodeVerify(email, code);

    if (result.errors) {
      setError("Hubo un problema al verificar el código. Intenta nuevamente.");
    } else if (result.codeVerified) {
      closeLoginForm();
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col w-full justify-center mb-5 gap-4">
      <h2 className="text-xl font-medium text-[#333]">
        Ingresa tu código verificador
      </h2>
      <p className="text-sm text-[#000]">
        Por seguridad necesitamos verificar que eres tú para que puedas terminar
        la compra.
      </p>
      <div className="flex items-center p-[10px] rounded-[4px] bg-[#f0f0f0] text-[#333] text-sm gap-2">
        <CircleCheck size={24} className="text-[#4CAF50] " />
        <span>Revisa el código que enviamos a {email}</span>
      </div>
      <div className="flex flex-col gap-1">
        <div
          className={`flex items-center justify-between border-b-[1px] border-b-[#A6A6A6] ${
            !!error && "border-b-[#BC001C]"
          }`}
        >
          <Input
            type={showCode ? "text" : "password"}
            id="code"
            onChange={(e) => {
              setCode(e.target.value);
              setError("");
            }}
            value={code}
            onBlur={handleOnBlur}
            placeholder="Ingresa tu código verificador"
            className="border-0 rounded-none p-0 text-sm  font-normal focus:outline-none focus-visible:ring-0"
            style={{
              WebkitBoxShadow: "0 0 0px 1000px white inset",
            }}
          />
          {showCode ? (
            <Eye
              size={20}
              className="cursor-pointer text-[#9CA3AF]"
              onClick={() => setShowCode(false)}
            />
          ) : (
            <EyeOff
              size={20}
              className="cursor-pointer text-[#9CA3AF]"
              onClick={() => setShowCode(true)}
            />
          )}
        </div>
        {error && <span className="text-[12px] text-[#BC001C]">{error}</span>}
        <Button
          variant="clean"
          disabled={!!error || codeSchema.safeParse(code).success === false}
          className="mt-1 disabled:bg-[#D1D1D1] disabled:opacity-100 disabled:text-[#636363]  text-white font-semibold text-lg rounded-full bg-[#343E49] h-10"
          onClick={handleVerifyCode}
        >
          Ingresar
        </Button>
      </div>
    </div>
  );
};
