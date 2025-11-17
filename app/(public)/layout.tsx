"use client";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/landing/footer";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex-1">{children}</div>
      <Footer />
    </div>
  );
}
