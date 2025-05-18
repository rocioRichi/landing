import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src="laravellogo.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Portfolio</h1>

      <p className="read-the-docs">Coming Soon!</p>
    </>
  );
}

export default App;
