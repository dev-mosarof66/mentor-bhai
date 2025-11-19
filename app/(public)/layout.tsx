import Navbar from "@/components/common/navbar";
import Footer from "@/components/landing/footer";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { fetchUserInfo } from "../onboarding/layout";
import { connectDB } from "@/config/db";

connectDB();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  let userInfo;
  if (session) {
    userInfo = await fetchUserInfo(session.session.userId);
  }

  if (!userInfo && session) {
    redirect("/onboarding");
  }
  if (userInfo) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex-1">{children}</div>
      <Footer />
    </div>
  );
}
