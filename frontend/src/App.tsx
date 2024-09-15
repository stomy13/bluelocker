import reflect from "./assets/images/bluelock/reflect.jpg";
import "./App.css";

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
        <img
          src={reflect}
          id="reflect"
          alt="reflect"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default App;
