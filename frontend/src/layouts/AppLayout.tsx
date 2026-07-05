import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import NoupeChatbot from "../components/NoupeChatbot";

export default function AppLayout() {
  return (
    <div className="min-h-svh flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <NoupeChatbot />
    </div>
  );
}
