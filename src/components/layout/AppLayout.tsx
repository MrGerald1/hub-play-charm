import { Outlet } from "react-router-dom";
import MobileShell from "./MobileShell";
import BottomNav from "./BottomNav";
import AppHeader from "./AppHeader";

const AppLayout = () => {
  return (
    <MobileShell>
      <AppHeader />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <BottomNav />
    </MobileShell>
  );
};

export default AppLayout;
