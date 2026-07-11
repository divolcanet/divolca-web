import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? "Beralih ke tema terang" : "Beralih ke tema gelap"}
      className="text-white "
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
