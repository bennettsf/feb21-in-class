import "./App.css";
import { Toolbar } from "./components/AlertButton";
import { ToolbarMapping } from "./components/AlertButtonMapping.js";
import NestedButtons from "./components/NestedButtons.js";

function App() {
  return (
    <div className="App">
      <h1>Event Propagation Assignment</h1>
      <NestedButtons />

      <h1>Custom Alert Buttons</h1>
      <Toolbar />

      <h1>Dynamic Alert Buttons with Props</h1>
      <ToolbarMapping />

    </div>
  );
}

export default App;
