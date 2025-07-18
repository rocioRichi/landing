import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PinkDevCorner from "./components/PinkDevCorner";
import ProjectsList from "./components/ProjectList";

function App() {
  return (
    <>
      <PinkDevCorner />

      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </a>
        <img src="laravellogo.png" className="logo react" alt="Laravel logo" />
      </div>
      <ProjectsList />

      <h3>Portfolio</h3>
      <p className="read-the-docs">Coming Soon!</p>
    </>
  );
}

export default App;
