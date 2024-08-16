import { Suspense } from "react";
import Footer from "@app/components/Footer/Footer";
import Header from "@app/components/Header/Header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Suspense>
        <main className="flex flex-grow flex-col">{children}</main>
      </Suspense>
      <Footer />
    </div>
  );
}
