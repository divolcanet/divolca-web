import { useEffect } from "react";

export default function NoupeChatbot() {
  useEffect(() => {
    const showNoupeWidget = () => {
      const widgets = document.querySelectorAll(
        '[id*="noupe"], [class*="noupe"]',
      );
      widgets.forEach((el) => {
        (el as HTMLElement).style.display = "block";
      });
    };

    showNoupeWidget();
    const observer = new MutationObserver(() => {
      showNoupeWidget();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const widgets = document.querySelectorAll(
        '[id*="noupe"], [class*="noupe"]',
      );
      widgets.forEach((el) => {
        (el as HTMLElement).style.display = "none";
      });
    };
  }, []);

  return null;
}
