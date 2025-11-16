import { ReactNode } from "react";
import BackButton from "@/components/common/back-button";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center relative p-2">
      {/* back button  */}
      <BackButton />
      <div className="w-full h-full px-4 flex items-center justify-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
