import { auth } from "@/lib/auth";
import { generateMetadataDescription } from "@/utils/description-generator";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Verify Email | Mentor Bhai",
  description: `${generateMetadataDescription("auth")}`,
};

type Props = {
  children: ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  if (!!session) {
    redirect("/");
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative p-2">
      <div className="w-full h-full px-4 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
