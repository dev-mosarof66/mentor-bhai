"use server";
import GradientBackground from "@/components/landing/gradient-background";
import { connectDB } from "@/config/db";
import { auth } from "@/lib/auth";
import { UserInfo } from "@/model/user-info.model";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

connectDB();

export const fetchUserInfo = async (userId: string) => {
  const userInfo = await UserInfo.findOne({ userId });
  return userInfo;
};

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

  if (userInfo) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-foreground relative">
      <GradientBackground />
      <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0 backdrop-blur-2xl">{children}</div>
    </div>
  );
}
