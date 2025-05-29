import { StorySteps } from "./StorySteps";
import { useFlow } from "../contexts/FlowProvider";
import { AnimatePresence, motion } from "framer-motion";

export const FlowRenderer = () => {
  const { index } = useFlow();
  const StepComponent = StorySteps[index].element;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={StorySteps[index].id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className="w-full h-screen overflow-hidden flex flex-col items-center"
      >
        {StepComponent}
      </motion.div>
    </AnimatePresence>
  );
};
