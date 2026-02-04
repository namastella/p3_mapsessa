import { createContext, useContext, useState } from "react";
import { CALLS as INITIAL_CALLS } from "../data/calls";

const CallsContext = createContext(null);

export function CallsProvider({ children }) {
  const [calls, setCalls] = useState(INITIAL_CALLS);

  const addCall = ({ name, handle, text, date }) => {
    const newCall = {
      id: `call-${Date.now()}`,
      name,
      handle,
      text,
      date,
    };

    setCalls((prev) => [newCall, ...prev]);
    return newCall;
  };

  return (
    <CallsContext.Provider value={{ calls, addCall, setCalls }}>
      {children}
    </CallsContext.Provider>
  );
}

export function useCalls() {
  const ctx = useContext(CallsContext);
  if (!ctx) {
    throw new Error("useCalls must be used within <CallsProvider />");
  }
  return ctx;
}
