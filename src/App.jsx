import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(() => {
    // Carga el recorte dinámicamente desde el HTML externo
    fetch("/components/pinkdev-corner.html")
      .then((res) => res.text())
      .then((html) => {
        const container = document.getElementById("pinkdev-corner");
        if (container) {
          container.innerHTML = html;
        }
      });
  }, []);

  return (
    <>
      {/* Aquí se insertará el recorte */}
      <div id="pinkdev-corner"></div>

      <img src="tpdlanding.png" className="logo react" alt="logo" />

      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </a>
        <img src="laravellogo.png" className="logo react" alt="Laravel logo" />
      </div>

      <h3>Portfolio</h3>
      <p className="read-the-docs">Coming Soon!</p>
    </>
  );
}

export default App;
