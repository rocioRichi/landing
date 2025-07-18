import "./App.css";
import PinkDevCorner from "./components/PinkDevCorner";
import ProjectsList from "./components/ProjectList";
const logoNames = [
  "reactcolor",
  "vitecolor",
  "laravelcolor",
  "phpcolor",
  "githubcolor",
  "babelcolor",
  "bootstrapcolor",
  "csscolor",
  "dockercolor",
  "gitcolor",
  "githubcolor",
  "gitlabcolor",
  "htmlcolor",
  "jscolor",
  "mongocolor",
  "mysqlcolor",
];

function TechBand() {
  return (
    <div className="tech-band">
      {logoNames.map((name, index) => (
        <img
          key={index}
          src={`/icons/color/${name}.png`}
          alt={`${name} logo`}
          className="tech-logo"
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <PinkDevCorner />
      <TechBand />

      <ProjectsList />

      <h3>Portfolio</h3>
      <p className="read-the-docs">Coming Soon!</p>
    </>
  );
}

export default App;
