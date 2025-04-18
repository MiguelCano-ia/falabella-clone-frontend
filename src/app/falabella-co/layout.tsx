import { Header } from "@/components/shared/header/Header";
import { LoginForm } from "@/components/auth/login/LoginForm";
import { Overlay } from "@/components/shared/header/header-navbar/right-section/user-section/Overlay";
import { Sidebar } from "@/components/shared/sidebar/Sidebar";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function FalabellaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Sidebar />
      <LoginForm />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Overlay />
    </>
  );
}
