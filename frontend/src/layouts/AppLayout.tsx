import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import NoupeChatbot from "../components/NoupeChatbot";
import VolcanoEventStats from "../components/VolcanoEventStats";
import { useScroll } from "../hooks/useScroll";
import { cn } from "../lib/utils";

export default function AppLayout() {
  const scrolled = useScroll(50);
  return (
    <div className="min-h-svh flex flex-col">
      <div className="relative z-10 flex flex-col min-h-svh">
        <div className={cn("sticky top-0 z-60 transition-transform duration-300", scrolled && "-translate-y-full")}>
          <VolcanoEventStats />
        </div>
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <NoupeChatbot />
      </div>
    </div>
  );
}
