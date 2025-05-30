import { useState } from "react";
import { useFlow } from "../../contexts/FlowProvider.tsx";

export default function DwarfsPuzzle() { // 함수 이름 수정
  const { goNext } = useFlow();
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount < 3) {
      setClickCount((prev) => prev + 1);
    } else {
      goNext();
    }
  };

  return (
    // 가장 바깥쪽 래퍼: 화면 꽉 채우고 중앙 정렬, 넘치는 내용 숨김
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#080A09]">
      {/* 디자인 영역 컨테이너: 고정 비율, 최대 화면 크기 제한, 중앙 정렬, object-fit: contain 적용 */}
      <div
        className="relative w-[120rem] h-[67.5rem] max-w-screen max-h-screen mx-auto aspect-w-16 aspect-h-9"
        onClick={handleClick}
        style={{ objectFit: 'contain', aspectRatio: '16 / 9' }}
      >
        {/* 배경 이미지는 디자인 영역에 꽉 채우도록 absolute inset-0 w-full h-full object-cover */}\
        <img
          src="/images/snowwhite_background.png"
          alt="백설공주 배경"
          className="absolute inset-0 w-full h-full object-cover" // 배경 이미지 스타일 수정
        />
        {/* 나머지 요소들은 기존 절대 위치/크기 유지 */}
        <div className="absolute shrink-0 top-[7.44rem] left-[5.13rem] w-[109.75rem] h-[54.5rem] rounded-[1.25rem] bg-[rgba(0,0,0,0.6)]">
          <p className="font-hanseokbong-subtitle-700 absolute top-[3.06rem] left-[4.3rem]
            text-white text-[2rem] leading-[160%] tracking-[-0.075rem]">
            {`난쟁이 세명들을 심문한 결과.`} <br />
            {`· 난쟁이 A는 항상 진실만, 난쟁이 B는 항상 거짓만, 난쟁이 C는 진실 혹은 거짓말을 한다.`}
          </p>

          {/* 난쟁이 두리번 */}
          <div className={`absolute top-[14.25rem] left-[19.38rem] w-[19.5rem] h-[36.625rem] rounded-[0.75rem] bg-[#080A09]
          inline-flex pt-[2.5rem] pr-[0.5625rem] pb-[0.5625rem] pl-[0.5625rem] items-center gap-[0.625rem]
          transition-opacity duration-700 ${clickCount >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-hanseokbong-subtitle-700 absolute top-[0.625rem] left-1/2
            text-white text-[1rem] leading-[140%] tracking-[-0.075rem]" style={{ transform: 'translateX(-50%)' }}>두리번</p> {/* 중앙 정렬 스타일 추가 */}
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
              <ol className="list-decimal pl-5 font-hanseokbong-subtitle-700
                  text-[#4D2600] text-[1rem] leading-[140%] tracking-[-0.025rem]">
                <li>20시 정각에 벽난로 뻐꾸기 시계가 분명히 울렸어.</li>
                <br/>
                <li>그 시각에 백설공주는 수프 냄비 옆에 있었고, 난 바로 옆에서 허브를 건네줬어.</li>
              </ol>
              </div>
            </div>
          </div>

          {/* 난쟁이 도프 */}
          <div className={`absolute top-[14.25rem] left-[45.12rem] w-[19.5rem] h-[36.625rem] rounded-[0.75rem] bg-[#080A09]
          inline-flex pt-[2.5rem] pr-[0.5625rem] pb-[0.5625rem] pl-[0.5625rem] items-center gap-[0.625rem]
          transition-opacity duration-700 ${clickCount >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-hanseokbong-subtitle-700 absolute top-[0.625rem] left-1/2
            text-white text-[1rem] leading-[140%] tracking-[-0.075rem]" style={{ transform: 'translateX(-50%)' }}>도프</p> {/* 중앙 정렬 스타일 추가 */}
            <div className="absolute top-[2.5rem] left-[1.31rem] rounded-[0.75rem] bg-[#080A09]">
              <img
                src="/images/dwarf_background.png"
                alt="난쟁이 배경"
                className="w-[18.375rem] h-[33.5625rem]"
              />
              <img
                src="/images/dwarf2.png"
                alt="난쟁이 도프"
                className="absolute top-[4.75rem] left-[0.5rem] w-[15.95831rem] h-[23.9375rem]"
              />
              <div className="flex absolute top-[19.25rem] left-[0.5rem] w-[17.3125rem] h-[13.75rem]
              pt-[3.5rem] pr-[0.5625rem] pb-[2rem] pl-[0.625rem]
              justify-center items-center rounded-[0.5rem] border border-[#62C4D5] bg-[#FFF9EA]">
              <ol className="list-decimal pl-5 font-hanseokbong-subtitle-700
                  text-[#4D2600] text-[1rem] leading-[140%] tracking-[-0.025rem]">
                <li>우리는 그날 장작 같은 건 전혀 패지 않았어.</li>
                <br/>
                <li>20시 무렵엔 오두막에 아무도 없었어.</li>
              </ol>
              </div>
            </div>
          </div>

          {/* 난쟁이 해피 */}
          <div className={`absolute top-[14.25rem] left-[70.88rem] w-[19.5rem] h-[36.625rem] rounded-[0.75rem] bg-[#080A09]
          inline-flex pt-[2.5rem] pr-[0.5625rem] pb-[0.5625rem] pl-[0.5625rem] items-center gap-[0.625rem]
          transition-opacity duration-700 ${clickCount >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-hanseokbong-subtitle-700 absolute top-[0.625rem] left-1/2
            text-white text-[1rem] leading-[140%] tracking-[-0.075rem]" style={{ transform: 'translateX(-50%)' }}>해피</p> {/* 중앙 정렬 스타일 추가 */}
            <div className="absolute top-[2.5rem] left-[0.56rem] rounded-[0.75rem] bg-[#080A09]">
              <img
                src="/images/dwarf_background.png"
                alt="난쟁이 배경"
                className="w-[18.375rem] h-[33.5625rem]"
              />
              <img
                src="/images/dwarf3.png"
                alt="난쟁이 해피"
                className="absolute top-[4.75rem] left-[2.25rem] w-[13.8125rem] h-[20.5rem]"
              />
              <div className="flex absolute top-[19.25rem] left-[0.5rem] w-[17.3125rem] h-[13.75rem]
              pt-[3.5rem] pr-[0.5625rem] pb-[2rem] pl-[0.625rem]
              justify-center items-center rounded-[0.5rem] border border-[#62C4D5] bg-[#FFF9EA]">
              <ol className="list-decimal pl-5 font-hanseokbong-subtitle-700
                  text-[#4D2600] text-[1rem] leading-[140%] tracking-[-0.025rem]">
                <li>두리번은 20시 전에 수프를 끓이고 있었어.</li>
                <br/>
                <li>뻐꾸기 시계는 고장 나서 종이 울리지 않았어.</li>
              </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}