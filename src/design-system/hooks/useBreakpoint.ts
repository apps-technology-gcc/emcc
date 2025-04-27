import { grid } from "@/src/components/ui/foundations";
import { useState, useEffect } from "react";

type Breakpoint = keyof typeof grid.breakpoints;

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoints = Object.entries(grid.breakpoints);

      const current = breakpoints.reduce((acc, [key, value]) => {
        if (width >= parseInt(value)) {
          return key as Breakpoint;
        }
        return acc;
      }, "xs" as Breakpoint);

      setBreakpoint(current);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
