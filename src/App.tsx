import { FlowProvider } from "./contexts/FlowProvider";
import { FlowRenderer } from "./flow/Renderer";
import "./App.css";

function App() {
  return (
    <FlowProvider>
      <FlowRenderer />
    </FlowProvider>
  );
}

export default App;
