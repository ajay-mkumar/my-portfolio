import { useParams } from "react-router-dom";
import { projects } from "../../common/constants";

function Project() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));
  if (project)
    return (
      <div className="m-10 p-5 space-y-10  min-h-screen">
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6 hover:shadow-2xl transition duration-300">
          <h1 className="text-2xl font-bold text-blue-800">{project.name}</h1>

          <img
            src={project.img}
            alt={`${project.name} preview`}
            className="w-full md:w-2/3 lg:w-1/2 rounded-lg mx-auto"
          />

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 bg-slate-50 p-4 rounded-lg shadow-inner">
            <span className="font-semibold text-gray-700">Tech Stack:</span>
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-400 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Description */}
          <ul className="list-disc list-inside text-gray-700 bg-slate-50 p-5 rounded-lg shadow-inner">
            {project.description.map((des, i) => (
              <li key={i} className="mb-1">
                {des}
              </li>
            ))}
          </ul>
          <button className="bg-blue-600 p-3 rounded-2xl text-white cursor-pointer active:scale-70 transition duration-300">
            View Project
          </button>
        </div>
      </div>
    );
  else 
    return <div className="flex justify-center items-center text-white text-xl min-h-screen">No Project found with the id: {id}</div>
}

export default Project;
