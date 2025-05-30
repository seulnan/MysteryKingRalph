import { useState } from "react";
import { ReactTyped } from "react-typed";
import { useFlow } from "../../contexts/FlowProvider.tsx";

const Texts = [
  "과거 마녀가 건넨 독사과를 먹고 죽을 뻔한 사건을 겪었다.\n\n" + 
  "이후 심각한 트라우마로 인해 과일을 입에 대지 못하게 되었고, 결국 비타민 결핍으로 괴혈병에 걸렸다.\n" +
  "그녀 곁엔 언제나 충직한 일곱 난쟁이들이 함께하고 있다."
];

export default function SuspectOne() {
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
      src="/images/snowwhite_background.png" 
      alt="백설공주 배경"
      className="relative flex w-[120rem] h-[67.5rem] mx-auto"
      />
      <img
        src="/images/snowwhite.png"
        alt="백설공주"
        className="absolute top-[5.3rem] left-[0] w-[64rem] h-[62.25rem]"
      />
      <div className="absolute top-[8.56rem] left-[52.9rem] w-[60.125rem] h-[50.365rem] rounded-[1.25rem] bg-[rgba(0,0,0,0.6)]
]">
        <p className="font-hanseokbong-subtitle-700 absolute top-[8rem] left-[4rem] 
          text-white tezt-[3rem] tracking-[-0.075rem]">
          {`첫번째 용의자 : 백설 공주`}
        </p>
        <ReactTyped
          strings={Texts}
          typeSpeed={50}
          backSpeed={30}
          loop={false}
          className="font-hanseokbong-des-300 absolute top-[18rem] left-[4rem] 
          text-white text-[2.25rem] tracking-[-0.0375rem] leading-[160%] w-[51.25rem] [Gapyeong Hanseokbong]"
          style={{ whiteSpace: 'pre-line' }}
          onComplete={() => setIsTypingDone(true)}
          />
      </div>
    </div>
  );
}
