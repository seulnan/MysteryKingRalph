import { useFlow } from "../../contexts/FlowProvider";

interface TextSceneProps {
  title: string;
  subtitle?: string;
}

export default function TextScene({ title, subtitle }: TextSceneProps) {
  const { goNext } = useFlow();

  return (
    <div 
        className="relative flex w-[120rem] h-[67.5rem] bg-[#080A09] mx-auto"
        onClick={goNext}>

      <h1 className="font-hanseokbong-des-title-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white leading-[140%] tracking-[-0.075rem]">
        {title}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </h1>

    </div>
  );
}