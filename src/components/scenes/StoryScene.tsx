import { useState } from "react";
import { ReactTyped } from 'react-typed';
import { useFlow } from "../../contexts/FlowProvider.tsx";


const StoryTexts = [
  "마녀가 자신의 성에서 쓰러진 채 발견됐다\n" +
  "조사 결과, 사인은 청산가리에 의한 독살로 밝혀졌으며\n" +
  "입가에서 청산가리 흔적이 검출되었다.\n" +
  "범행 시점은 이틀 전 오후 7시에서 9시 사이로 추정된다.\n\n" +
  "왕실 수사국은 수사 끝에,\n" +
  "마녀와 깊은 원한 관계에 있던 세 명의 주요 용의자를 특정했다.\n",
];

export default function StroyScene() {
  const { goNext } = useFlow();
  const [isTypingDone, setIsTypingDone] = useState(false);

  const handleClick = () => {
    if (isTypingDone)
      goNext();
  }

  return (
    <div 
      className="relative flex w-[120rem] h-[67.5rem] bg-[#080A09] mx-auto overflow-hidden"
      onClick={handleClick}>
      <img
        src="/images/witch.png"
        alt="죽은 마녀"
        className="w-[119rem] h-[45.938rem] absolute top-[10.813rem] left-[26.75rem] mix-blend-luminosity"
      />
      <ReactTyped
        strings={StoryTexts}
        typeSpeed={50}
        backSpeed={30}
        loop={false}
        className="font-hanseokbong-des-400 text-[2.25rem] leading-[160%] absolute top-[22rem] left-[7.375rem] text-white tracking-[-0.0225rem] 
        w-[105.25rem] h-[30.5rem]"
        style={{ whiteSpace: 'pre-line' }}
        onComplete={() => setIsTypingDone(true)}
      />
    </div>
  )
}
