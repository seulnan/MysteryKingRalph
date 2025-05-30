import { useFlow } from "../../contexts/FlowProvider";

export default function IntroScene() {
  const { goNext } = useFlow();

  // 위치 관련해서는 아예 고정되게 px 사용하는게 나을려나요..??
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#080A09]">
      <div
        className="relative w-[100vw] h-auto aspect-[16/9]"
        onClick={goNext}
        style={{ objectFit: 'contain', aspectRatio: '16 / 9' }}
      >
        <img
          src="/images/princesses.png"
          alt="공주들"
          className="absolute top-[10.4vh] left-[5vw] w-[46vw] h-[52vh] z-20"
        />
        <img
          src="/images/witch.png"
          alt="죽은 마녀"
          className="w-[70.875rem] h-[27.375rem] absolute top-[24.625rem] left-[49.125rem] mix-blend-luminosity"
        />

        <h1 className="font-hanseokbong-title-700 absolute top-[10.375rem] left-[67.063rem]">
          마녀살인사건
        </h1>

        <p className="font-hanseokbong-subtitle-700 absolute top-[20.25rem] left-302 text-white">
          {`<그림자에 잠긴 비명>`}
        </p>

        <button
          className="font-gmarket-btntext w-[13.25rem] h-20 absolute top-[54.188rem] left-[80.438rem] rounded-lg border-[5px] border-[#FEF200] bg-[#E50014] px-4 pt-2 pb-1.6 flex gap-2 items-center justify-center text-white"
          onClick={goNext}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
