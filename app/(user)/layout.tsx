"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { fetchUserInfo } from "@/app/onboarding/layout";
import RootLayoutClient from "./layout-client";

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

  return <RootLayoutClient>{children} </RootLayoutClient>;
}
