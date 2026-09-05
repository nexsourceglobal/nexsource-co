import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { SourcingModal } from "./SourcingModal";

type Ctx = { open: (source?: string) => void };

const SourcingContext = createContext<Ctx>({ open: () => {} });

export function useSourcing() {
  return useContext(SourcingContext);
}

export function SourcingProvider({ children }: { children: ReactNode }) {
  const [source, setSource] = useState<string | null>(null);

  const open = useCallback((s = "site") => setSource(s), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <SourcingContext.Provider value={value}>
      {children}
      {source !== null && <SourcingModal sourcePage={source} onClose={() => setSource(null)} />}
    </SourcingContext.Provider>
  );
}
