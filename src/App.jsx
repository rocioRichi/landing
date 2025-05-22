import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <img src="tpdlanding.png" className="logo react" alt="logo" />
      <div></div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo react" alt="Vite logo" />
          </a>
          <img
            src="laravellogo.png"
            className="logo react"
            alt="Laravel logo"
          />
        </a>
      </div>
      <h3>Portfolio</h3>

      <p className="read-the-docs">Coming Soon!</p>
    </>
  );
}

export default App;
