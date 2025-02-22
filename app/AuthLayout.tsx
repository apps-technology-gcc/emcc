"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/src/components/footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");

  return (
    <>
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}
