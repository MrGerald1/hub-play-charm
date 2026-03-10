import { ReactNode } from "react";

interface MobileShellProps {
  children: ReactNode;
}

const MobileShell = ({ children }: MobileShellProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="relative w-full max-w-[430px] min-h-screen md:min-h-[calc(100vh-4rem)] md:max-h-[932px] md:rounded-3xl md:border md:border-border md:shadow-2xl overflow-hidden bg-background flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default MobileShell;
