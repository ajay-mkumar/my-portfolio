import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteProject, fetchProjects } from "../../redux/userSlicse";
import AddProject from "./AddProject";
// import { projects } from "../../common/constants";
function Projects(): React.ReactElement {
  const navigate = useNavigate();
  const { projects, loading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { username } = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { username: loggedInUsername } = useAppSelector((state) => state.user);
  const isEdit = loggedInUsername === username;
  useEffect(() => {
    if (username) dispatch(fetchProjects(username));
  }, [dispatch, username]);

  if (loading) return <CircularProgress />;
  if (error) alert(error);

  return (
    <div className="m-10 p-5 flex flex-wrap gap-2 cursor-pointer card">
      {isEdit && <Button onClick={() => setIsFormOpen(true)} sx={{backgroundColor: 'cyan', margin: 2}}>Add</Button>}
      {projects &&
        projects.map((project, index) => (
          <div
            // onClick={() => navigate(`/projects/${project.id}`)}
            key={index}
            className=" shadow-lg overflow-hidden w-full max-w-sm"
          >
            <img
              src={`${project.image}`}
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
            {isEdit && <Button onClick={() => dispatch(deleteProject(project.id))}>delete</Button>}
          </div>
        ))}
      <AddProject open={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default Projects;
