import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { fetchProjects } from "../../redux/userSlicse";
// import { projects } from "../../common/constants";
function Projects(): React.ReactElement {
  const navigate = useNavigate();
  const { projects, loading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { username } = useParams();

  useEffect(() => {
    if (username) dispatch(fetchProjects(username));
  }, [dispatch, username]);
  
  if (loading) return <CircularProgress />;
  if (error) alert(error);

  return (
    <div className="m-10 p-5 flex flex-wrap gap-2 cursor-pointer card">
      {projects &&
        projects.map((project, index) => (
          <div
            onClick={() => navigate(`/projects/${project.id}`)}
            key={index}
            className=" shadow-lg overflow-hidden w-full max-w-sm"
          >
            <img
              src={project.image}
              loading="lazy"
              alt={`${project.name} preview`}
              className="w-full object-cover"
            />
            <h3 className="text-cyan-500 font-semibold p-5">{project.name}</h3>
            <ul className="pb-2 pl-5 flex gap-4">
              {JSON.parse(project.techStacks).map(
                (tech: string, index: string) => (
                  <li
                    key={index}
                    className="bg-cyan-800 p-1 text-white rounded-lg shadow-lg hover:scale-110 transition duration-300"
                  >
                    {tech}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Projects;
