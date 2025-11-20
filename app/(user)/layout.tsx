"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { fetchUserInfo } from "@/app/onboarding/layout";
import SideBar from "@/components/dashboard/SideBar";
import Header from "@/components/dashboard/Header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth");
  }

  const userInfo = await fetchUserInfo(session.session.userId);

  console.log(userInfo.userId.toString());

  return (
    <div className="w-full h-screen bg-background text-foreground">
      <div className="w-full h-full flex gap-4">
        <SideBar />
        <div className="w-full h-full flex flex-col gap-2 overflow-y-scroll scrollbar-hidden pb-20 sm:pb-0">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
