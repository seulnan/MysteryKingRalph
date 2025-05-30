import { useFlow } from "../../contexts/FlowProvider";

const StartScreen = () => {
    const { goNext } = useFlow();

    const handleClick = () => {
        goNext(); // 클릭 시 다음 스텝으로 이동
    };

    return (
        <div
        className="w-full h-screen flex items-center justify-center bg-black text-white text-2xl cursor-pointer"
        onClick={handleClick}
        >
        </div>
    );
};

export default StartScreen; 