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
      description: "www.thepinkdev.es",
      tech: ["typescript", "html5", "css", "react", "vite"],
    },
    {
      name: "Mi vida pasada",
      url: "https://rocio1975.wordpress.com/2018/05/09/estructura/",
      description: "Blog de fotos de trabajos de carpintería.",
      tech: ["wordpress", "html5", "css"],
    },
    {
      name: "Clientes",
      url: "https://clientes.thepinkdev.es",
      description: "Crud con Laravel-Blade, Node, npm, Certbot (Lets Encrypt)",
      tech: ["laravel", "mysql", "html5", "css"],
    },
    {
      name: "SpacePIc",
      url: "https://spacepic.onrender.com/?action=gallery",
      description:
        "Web con fotos del espacio. Conexión a la API de la NASA. Despliegue del back en render y front en Netlifly, just php",
      tech: ["php", "html5", "css"],
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
