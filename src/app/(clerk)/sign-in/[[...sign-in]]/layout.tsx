import { ReactNode } from "react";

const SignInLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-screen h-screen justify-center items-center">{children}</div>;
};

export default SignInLayout;
