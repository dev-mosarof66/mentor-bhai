"use server";
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
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
