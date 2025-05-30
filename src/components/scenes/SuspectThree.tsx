import { useState } from "react";
import { ReactTyped } from "react-typed";
import { useFlow } from "../../contexts/FlowProvider.tsx";

const Texts = [
  "바다 왕국 출신으로, 과거 인간이 되기 위해\n" +
  "마녀와 목소리를 대가로 한 위험한 계약을 맺은 바 있다.\n\n" +
  "계약 이후 목소리를 완전히 잃었으며,\n" +
  "현재도 필담을 통해서만 의사소통이 가능하다."
];

export default function SuspectThree() {
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
          src="/images/mermaid_background.png"
          alt="인어공주 배경"
          className="relative flex w-[120rem] h-[67.5rem] mx-auto"
        />
        <img
          src="/images/mermaid.png"
          alt="인어공주"
          className="absolute top-[5.3rem] left-[10rem] w-[39.375rem] h-[59.1875rem]"
        />
        <div className="absolute top-[8.56rem] left-[52.9rem] w-[60.125rem] h-[50.365rem] rounded-[1.25rem] bg-[rgba(0,0,0,0.6)]
]">
          <p className="font-hanseokbong-subtitle-700 absolute top-[8rem] left-[4rem] 
          text-white text-[3rem] tracking-[-0.075rem]">
            {`두번째 용의자 : 인어공주`}
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