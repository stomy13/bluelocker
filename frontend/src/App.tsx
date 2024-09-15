import "./App.css";
import { Scene } from "./Scene";

function App() {
  return (
    <div id="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Scene />
      </div>
    </div>
  );
}

export default App;
