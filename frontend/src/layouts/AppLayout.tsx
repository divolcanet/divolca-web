import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import NoupeChatbot from "../components/NoupeChatbot";
import VolcanoEventStats from "../components/VolcanoEventStats";
import { Scene3DCanvas } from "../components/Scene3DCanvas";
import { useScroll } from "../hooks/useScroll";
import { cn } from "../lib/utils";

const SCENE_PAGES = ["/", "/full"];

export default function AppLayout() {
  const scrolled = useScroll(50);
  const { pathname } = useLocation();
  const showScene = SCENE_PAGES.includes(pathname);

  return (
    <div className="min-h-svh flex flex-col">
      <div
        className={cn(
          "fixed inset-0 z-0 transition-opacity duration-500",
          showScene ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!showScene}
      >
        <Scene3DCanvas />
      </div>

      <div className="relative z-10 flex flex-col min-h-svh">
        <div
          className={cn(
            "sticky top-0 z-60 transition-transform duration-300",
            scrolled && "-translate-y-full",
          )}
        >
          <VolcanoEventStats />
        </div>
        <Navbar />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <NoupeChatbot />
      </div>
    </div>
  );
}
