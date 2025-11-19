import { auth } from "@/lib/auth";
import { generateMetadataDescription } from "@/utils/description-generator";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Forget Password | Mentor Bhai",
  description: `${generateMetadataDescription("forget password")}`,
};

const ForgetPasswordLayout = async ({ children }: Props) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default ForgetPasswordLayout;
