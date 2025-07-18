// src/components/Projects.jsx
import "./ProjectList.css";

function ProjectList() {
  const projects = [
    {
      name: "Mi CV",
      url: "https://cv.thepinkdev.es",
      description: "Currículum interactivo en React y Vite.",
      tech: ["react", "vite", "css"],
    },
    {
      name: "Landing",
      url: "https://thepinkdev.es",
      description: "Landing page con estilo moderno.",
      tech: ["html5", "css", "jss"],
    },
    {
      name: "Mi Blog",
      url: "#",
      description: "Blog en desarrollo con Laravel.",
      tech: ["php", "laravel", "docker", "sass"],
    },
  ];

  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-icons">
              {project.tech.map((tech, i) => (
                <img
                  key={i}
                  src={`/icons/${tech}.svg`} // coloca tus iconos en /public/icons/
                  alt={tech}
                  title={tech}
                />
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
