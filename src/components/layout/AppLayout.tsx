import { Outlet } from "react-router-dom";
import MobileShell from "./MobileShell";
import BottomNav from "./BottomNav";

const AppLayout = () => {
  return (
    <MobileShell>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <BottomNav />
    </MobileShell>
  );
};

export default AppLayout;
