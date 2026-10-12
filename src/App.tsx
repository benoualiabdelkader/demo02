import { useEffect, useState } from "react";
import TrialExpiredScreen from "./TrialExpiredScreen";
import SiteApp from "./SiteApp";

export default function App() {
  const [unlocked, setUnlocked] = useState(() => {
    // Check if secret preview query parameter is present for developer preview
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("preview") === "full" || params.get("unlock") === "true";
    }
    return false;
  });

  useEffect(() => {
    // Allow developer to toggle preview locally using Ctrl+Shift+U or URL param
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "U" || e.key === "u")) {
        setUnlocked((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (unlocked) {
    return <SiteApp />;
  }

  return <TrialExpiredScreen onUnlock={() => setUnlocked(true)} />;
}
