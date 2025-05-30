import { StorySteps } from "./StorySteps";
import { useFlow } from "../contexts/FlowProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const FlowRenderer = () => {
  const { index } = useFlow();
  const StepComponent = StorySteps[index].element;

  const audio1Ref = useRef<HTMLAudioElement | null>(null);
  const audio2Ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 오디오 객체가 없으면 생성
    if (!audio1Ref.current) {
      audio1Ref.current = new Audio('/audio/intro.mp3'); // 브금1 경로
      audio1Ref.current.loop = true; // 반복 재생
    }
    if (!audio2Ref.current) {
      audio2Ref.current = new Audio('/audio/suspect.mp3'); // 브금2 경로
      audio2Ref.current.loop = true; // 반복 재생
    }

    const currentStepId = StorySteps[index].id;

    if (currentStepId === 'intro' || currentStepId === 'story') {
      // 브금1 재생, 브금2 중지
      if (!audio2Ref.current?.paused) {
        audio2Ref.current.pause();
        audio2Ref.current.currentTime = 0; // 재생 위치 초기화
      }
      if (audio1Ref.current?.paused) {
        audio1Ref.current?.play().catch(error => console.error("Error playing BGM1:", error));
      }
    } else if (['suspect-1', 'suspect-2', 'suspect-3'].includes(currentStepId)) {
      // 브금2 재생, 브금1 중지
      if (!audio1Ref.current?.paused) {
        audio1Ref.current.pause();
        audio1Ref.current.currentTime = 0; // 재생 위치 초기화
      }
      if (audio2Ref.current?.paused) {
        audio2Ref.current?.play().catch(error => console.error("Error playing BGM2:", error));
      }
    } else {
      // 다른 스텝에서는 모두 중지
      if (!audio1Ref.current?.paused) {
        audio1Ref.current.pause();
        audio1Ref.current.currentTime = 0;
      }
      if (!audio2Ref.current?.paused) {
        audio2Ref.current.pause();
        audio2Ref.current.currentTime = 0;
      }
    }

  }, [index]); // index가 변경될 때마다 실행

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
