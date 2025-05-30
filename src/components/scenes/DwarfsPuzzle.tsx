import { useState } from "react";
import { ReactTyped } from "react-typed";
import { useFlow } from "../../contexts/FlowProvider.tsx";

export default function SuspectOne() {
  const { goNext } = useFlow();
  // const [isTypingDone, setIsTypingDone] = useState(false);
  const handleClick = () => {
    // if (isTypingDone)
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
      <div className="absolute top-[7.44rem] left-[5.13rem] w-[109.75rem] h-[54.5rem] rounded-[1.25rem] bg-[rgba(0,0,0,0.6)]
]">
        <p className="font-hanseokbong-subtitle-700 absolute top-[3.06rem] left-[4.3rem] 
          text-white text-[2rem] leading-[160%] tracking-[-0.075rem]">
          {`난쟁이 세명들을 심문한 결과.`} <br />
          {`· 난쟁이 A는 항상 진실만, 난쟁이 B는 항상 거짓만, 난쟁이 C는 진실 혹은 거짓말을 한다.`}
        </p>
        <div className="absolute top-[14.25rem] left-[19.38rem] w-[19.5rem] h-[36.625rem] rounded-[0.75rem] bg-[#080A09]
        inline-flex pt-[2.5rem] pr-[0.5625rem] pb-[0.5625rem] pl-[0.5625rem] items-center gap-[0.625rem]">
          <p className="font-hanseokbong-subtitle-700 absolute top-[0.625rem] left-[8.3125rem] 
          text-white text-[1rem] leading-[140%] tracking-[-0.075rem]">두리번</p>
          <div className="absolute top-[2.5rem] left-[0.56rem] rounded-[0.75rem] bg-[#080A09]">
            <img
              src="/images/dwarf_background.png"
              alt="난쟁이 배경"
              className="w-[18.375rem] h-[33.5625rem]"  
            />
            <img
              src="/images/dwarf1.png"
              alt="난쟁이 두리번"
              className="absolute top-[4.75rem] left-[0.5rem] w-[18rem] h-[18rem]"
            />
            <div className="flex absolute top-[19.25rem] left-[0.5rem] w-[17.3125rem] h-[13.75rem] 
            pt-[3.5rem] pr-[0.5625rem] pb-[2rem] pl-[0.625rem] 
            justify-center items-center rounded-[0.5rem] border border-[#62C4D5] bg-[#FFF9EA]">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

