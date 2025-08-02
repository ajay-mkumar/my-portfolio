import { useNavigate } from "react-router-dom";
import { projects } from "../../common/constants";
function Projects(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <div className="m-10 p-5 flex flex-wrap gap-2">
      {projects.map((project, index) => (
        <div
          onClick={() => navigate(`/projects/${project.id}`)}
          key={index}
          className="bg-white shadow-lg overflow-hidden w-full max-w-sm border"
        >
          <img
            src={project.img}
            alt={`${project.name} preview`}
            className="w-full object-cover"
          />
          <h3 className="text-cyan-500 font-semibold p-5">{project.name}</h3>
          <ul className="pb-2 pl-5 flex gap-4">
            {project.techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-cyan-800 p-1 text-white rounded-lg shadow-lg hover:scale-110 transition duration-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Projects;
