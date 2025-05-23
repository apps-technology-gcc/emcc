"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Region = "US" | "EU" | "ASIA" | "DEFAULT";

interface RegionContextType {
  region: Region;
  setRegion: (region: Region) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<Region>("DEFAULT");

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error("useRegion must be used within a RegionProvider");
  }
  return context;
}
