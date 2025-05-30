import DwarfsPuzzle from "../components/scenes/DwarfsPuzzle";
import EndingForNext from "../components/scenes/EndingForNext";
import IntroScene from "../components/scenes/IntroScene";
import StoryScene from "../components/scenes/StoryScene";
import SuspectOne from "../components/scenes/SuspectOne";
import SuspectTwo from "../components/scenes/SuspectTwo";
import SuspectThree from "../components/scenes/SuspectThree";

export interface StoryStep {
  id: string;
  element: React.ReactNode;
}

export const StorySteps: StoryStep[] = [
  { id: "intro", element: <IntroScene /> },
  { id: "story", element: <StoryScene /> },
  { id: "suspect-1", element: <SuspectOne /> },
  { id: "suspect-2", element: <SuspectTwo /> },
  { id: "suspect-3", element: <SuspectThree /> },
  { id: "puzzle-1", element: <DwarfsPuzzle /> },
  { id: "ending", element: <EndingForNext /> },
];
