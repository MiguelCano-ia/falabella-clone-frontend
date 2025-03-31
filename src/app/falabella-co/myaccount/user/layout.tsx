import { getUser } from "@/actions/auth/helpers/getUser";
import { NotAuthenticated } from "@/components/shared/not-authenticated/NotAuthenticated";
import { ProfileSettings } from "@/components/user/ProfileSettings";
import { ChevronRight, CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <>
      {!user ? (
        <section className="flex h-auto min-h-[375px] justify-center bg-[#f1f1f1]">
          <NotAuthenticated />
        </section>
      ) : (
        <main className="bg-[#F1F1F1]">
          <section className="bg-[#FEFEFF] w-full">
            <header className="container m-auto flex flex-col items-center justify-start w-full max-w-[1272px] mx-auto">
              <div className="flex items-end justify-between w-full mt-[40px]">
                <h1 className="text-[#343E49] text-[32px] leading-[36px] font-normal">
                  Hola, Miguel Angel
                </h1>
                <Link
                  href="#"
                  className="flex  items-center gap-4 text-[#333] p-2 h-[72px] rounded-[10px] bg-[#F9F9F9] w-full max-w-[343px] shadow-md "
                >
                  <Image
                    src="/images/register/cmr.png"
                    width={44}
                    height={40}
                    alt="cmr-points"
                  />
                  <div className="text-[20px] leading-[24px] mr-auto">
                    <div className="flex items-center gap-2">
                      <p className="text-[#333] font-bold">Aún no tienes</p>
                      <Image
                        src="/icons/user-information/cmrPointsText.svg"
                        width={34}
                        height={16}
                        alt="cmr-points"
                      />
                    </div>
                    <p className="text-[12px] font-bold leading-[16px] text-[#333]">
                      Descubre los canjes y beneficios
                    </p>
                  </div>
                  <ChevronRight size={24} className="text-[#A6A6A6]" />
                </Link>
              </div>
              <nav className="w-full max-w-[343px] h-[94px] px-2 border-[1px] border-[#F9F9F9] shadow-sm bg-[#FEFEFF]">
                <div className="flex h-[86px] items-center gap-3 ">
                  <Link href="#" className="flex flex-col gap-2 items-center">
                    <CircleUserRound size={24} />
                    <span className="">Mi perfil</span>
                  </Link>
                </div>
              </nav>
            </header>
          </section>
          <section className="container m-auto max-w-[1272px] mt-10 mb-[40px]">
            <div className="flex gap-8">
              <ProfileSettings />
              <div className="w-full">{children}</div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
