import { useFlow } from "../../contexts/FlowProvider";

interface TextSceneProps {
  title: string;
  subtitle?: string;
}

export default function TextScene({ title, subtitle }: TextSceneProps) {
  const { goNext } = useFlow();

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#080A09]">
      <div
        className="relative w-[120rem] h-[67.5rem] transform origin-center flex items-center justify-center"
        onClick={goNext}
        style={{
          transform: 'scale(min(100vw/1920,100vh/1080))',
          transformOrigin: 'center'
        }}
      >
        <h1 className="font-hanseokbong-des-title-700 text-center text-white leading-[140%] tracking-[-0.075rem]">
          {title}
          {subtitle && (
            <>
              <br />
              {subtitle}
            </>
          )}
        </h1>
      </div>
    </div>
  );
}