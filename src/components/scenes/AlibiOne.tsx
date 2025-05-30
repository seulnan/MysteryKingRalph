import { useState } from "react";
import { ReactTyped } from "react-typed";
import { useFlow } from "../../contexts/FlowProvider.tsx";

const Texts = [
  "저는 사건 추정 시각 내내 난쟁이 오두막 안에 있었습니다.\n" +
  "도프와 해피는 밖에서 장작을 패고 있었고,\n" +
  "저는 두리번이 끓이던 수프에 허브를 넣고 있었습니다.\n\n" +
  "20시 정각, 벽난로 위 뻐꾸기 시계가 종을 치는 소리를 우리 모두 들었습니다.\n" +
  "그 시간 동안 난쟁이 세 명이 제 곁을 지켜봤으니 언제든 확인해 보셔도 됩니다."
];

export default function AlibiOne() {
  const { goNext } = useFlow();
  const [isTypingDone, setIsTypingDone] = useState(false);
  const handleClick = () => {
    if (isTypingDone)
      goNext();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#080A09]">
      <div
        className="relative w-[120rem] h-[67.5rem] max-w-screen max-h-screen mx-auto aspect-w-16 aspect-h-9"
        onClick={handleClick}
        style={{ objectFit: 'contain', aspectRatio: '16 / 9' }}
      >
        <img
          src="/images/snowwhite_background.png"
          alt="백설공주 배경"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/images/snowwhite.png"
          alt="백설공주"
          className="absolute top-[5.3rem] left-[0] w-[64rem] h-[62.25rem]"
        />
        <div className="absolute top-[8.56rem] left-[52.9rem] w-[60.125rem] h-[50.365rem] rounded-[1.25rem] bg-[rgba(0,0,0,0.6)]">
          <p className="font-hanseokbong-subtitle-700 absolute top-[6.3rem] left-[4rem] 
            text-white text-[3rem] tracking-[-0.075rem]">
            {`백설 공주의 증언`}
          </p>
          <ReactTyped
            strings={Texts}
            typeSpeed={50}
            backSpeed={30}
            loop={false}
            className="font-hanseokbong-des-300 absolute top-[15.12rem] left-[4rem] 
            text-white text-[2.25rem] tracking-[-0.0375rem] leading-[160%] w-[51.25rem] [Gapyeong Hanseokbong]"
            style={{ whiteSpace: 'pre-line' }}
            onComplete={() => setIsTypingDone(true)}
          />
        </div>
      </div>
    </div>
  );
}