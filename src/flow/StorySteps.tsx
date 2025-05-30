import DwarfsPuzzle from "../components/scenes/DwarfsPuzzle";
import IntroScene from "../components/scenes/IntroScene";
import StoryScene from "../components/scenes/StoryScene";
import SuspectOne from "../components/scenes/SuspectOne";
import SuspectTwo from "../components/scenes/SuspectTwo";
import SuspectThree from "../components/scenes/SuspectThree";
import StartScreen from "../components/scenes/StartScreen";
import TextScene from "../components/scenes/TextScene";
import AlibiOne from "../components/scenes/AlibiOne";
export interface StoryStep {
  id: string;
  element: React.ReactNode;
}

export const StorySteps: StoryStep[] = [
  { id: "start", element: <StartScreen /> },
  { id: "intro", element: <IntroScene /> },
  { id: "story", element: <StoryScene /> },
  { id: "suspect-1", element: <SuspectOne /> },
  { id: "suspect-2", element: <SuspectTwo /> },
  { id: "suspect-3", element: <SuspectThree /> },
  { id: "TextScene-1", element: <TextScene title="첫번째 용의자" subtitle="백설공주 조사" /> },
  { id: "alibi-1", element: <AlibiOne /> },
  { id: "puzzle-1", element: <DwarfsPuzzle /> },
  { id: "TextScene-2", element: <TextScene title="두번째 용의자" subtitle="라푼젤 조사" /> },
  { id: "ending", element: <TextScene title="..는 다음에 공개" /> },

];
