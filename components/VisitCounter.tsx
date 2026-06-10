"use client";

import { useEffect, useState } from "react";

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: number | undefined;

    async function loadCounter() {
      const hasCounted = sessionStorage.getItem("xiangxi_visit_counted") === "1";
      const response = await fetch("/api/visits", {
        method: hasCounted ? "GET" : "POST",
        cache: "no-store"
      });
      const data = (await response.json()) as { count?: number };

      if (!hasCounted) {
        sessionStorage.setItem("xiangxi_visit_counted", "1");
      }

      if (!cancelled && typeof data.count === "number") {
        setCount(data.count);
      }
    }

    function scheduleCounter() {
      const run = () => {
        timeoutId = window.setTimeout(() => {
          loadCounter().catch(() => {
            if (!cancelled) {
              setCount(null);
            }
          });
        }, 1200);
      };

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(run, { timeout: 3000 });
      } else {
        run();
      }
    }

    if (document.readyState === "complete") {
      scheduleCounter();
    } else {
      window.addEventListener("load", scheduleCounter, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", scheduleCounter);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (count === null) {
    return null;
  }

  return <span>本站访问 {count.toLocaleString("zh-CN")} 次</span>;
}
