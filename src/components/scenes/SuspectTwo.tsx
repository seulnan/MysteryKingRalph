import { useState } from "react";
import { ReactTyped } from "react-typed";
import { useFlow } from "../../contexts/FlowProvider.tsx";

const Texts = [
  "과거 마녀에게 감금당한 채 오랜 시간 탑에 갇혀 지냈다.\n" +
  "구출된 이후에도 사회에 적응하지 못하고 자발적 은둔자(히키코모리)로 지내고 있다.\n\n" +
  "관리되지 않은 매우 긴 금발 머리와 함께,\n" +
  "탁월한 그림 실력을 지닌 것으로 알려졌다."
];

export default function SuspectTwo() {
  const { goNext } = useFlow();
  const [isTypingDone, setIsTypingDone] = useState(false);
  const handleClick = () => {
    if (isTypingDone)
      goNext();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#080A09]">
      <div
        className="relative w-[120rem] h-[67.5rem] transform origin-center"
        onClick={handleClick}
        style={{
          transform: 'scale(min(100vw/1920,100vh/1080))',
          transformOrigin: 'center'
        }}
      >
        <img
          src="/images/rapunzel_background.png"
          alt="라푼젤 배경"
          className="relative flex w-[120rem] h-[67.5rem] mx-auto"
        />
        <img
          src="/images/rapunzel.png"
          alt="라푼젤"
          className="absolute top-[5.3rem] left-[13rem] w-[37.625rem] h-[63.9375rem]"
        />
        <div className="absolute top-[8.56rem] left-[52.9rem] w-[60.125rem] h-[50.365rem] rounded-[1.25rem] bg-[rgba(0,0,0,0.6)]
]">
          <p className="font-hanseokbong-subtitle-700 absolute top-[8rem] left-[4rem] 
          text-white text-[3rem] tracking-[-0.075rem]">
            {`두번째 용의자 : 라푼젤`}
          </p>
          <ReactTyped
            strings={Texts}
            typeSpeed={50}
            backSpeed={30}
            loop={false}
            className="font-hanseokbong-des-300 absolute top-[18rem] left-[4rem] 
          text-white text-[2.25rem] tracking-[-0.0375rem] leading-[160%] w-[51.25rem]"
            style={{ whiteSpace: 'pre-line' }}
            onComplete={() => setIsTypingDone(true)}
            />
        </div>
      </div>
    </div>
  );
}
