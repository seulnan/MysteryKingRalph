import { createContext, useContext, useState } from "react";
import { StorySteps } from "../flow/StorySteps";

interface FlowCtx {
  index: number;
  goNext: () => void;
  goPrev: () => void;
}
const Context = createContext<FlowCtx | null>(null);
export const useFlow = () => useContext(Context)!;

export const FlowProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [index, setIndex] = useState(0);
  const goNext = () => setIndex((i) => Math.min(i + 1, StorySteps.length - 1));
  const goPrev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <Context.Provider value={{ index, goNext, goPrev }}>
      {children}
    </Context.Provider>
  );
};
