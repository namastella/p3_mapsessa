import { createContext, useContext, useMemo, useState } from "react";

const ScoreContext = createContext(null);

export function ScoreProvider({ children }) {
  const [score, setScore] = useState(120); // Startwert (später z.B. aus localStorage)

  const value = useMemo(() => {
    const spend = (amount) => {
      setScore((prev) => Math.max(0, prev - amount));
    };

    const add = (amount) => {
      setScore((prev) => prev + amount);
    };

    const canAfford = (amount) => score >= amount;

    return { score, setScore, spend, add, canAfford };
  }, [score]);

  return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
}

export function useScore() {
  const ctx = useContext(ScoreContext);
  if (!ctx) {
    throw new Error("useScore must be used within <ScoreProvider />");
  }
  return ctx;
}
