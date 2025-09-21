import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Box, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteProject, fetchProjects } from "../../redux/userSlicse";
import AddProject from "./AddProject";
import { getToken } from "../../utility/TokenHelper";
// import { projects } from "../../common/constants";
function Projects(): React.ReactElement {
  const { projects, loading, error } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { username } = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { username: loggedInUsername } = useAppSelector((state) => state.user);
  const token = getToken();
  const isEdit = token && username === loggedInUsername;
  useEffect(() => {
    if (username) dispatch(fetchProjects(username));
  }, [dispatch, username]);

  if (loading) return <CircularProgress />;
  if (error) alert(error);

  return (
    <>
      {isEdit && (
        <Box sx={{ margin: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => setIsFormOpen(true)}
            sx={{ backgroundColor: "cyan" }}
          >
            Add Project
          </Button>
        </Box>
      )}
      <div className="m-10 p-5 flex flex-wrap gap-2 cursor-pointer card">
        {projects &&
          projects.map((project, index) => (
            <div
              key={index}
              className=" shadow-lg overflow-hidden w-full max-w-sm"
            >
              <img
                src={`${project.image}`}
                loading="lazy"
                alt={`${project.name} preview`}
                className="w-full object-cover"
              />
              <h3 className="text-cyan-500 font-semibold p-5">
                {project.name}
              </h3>
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
              <Button
                onClick={() => navigate(`projects/${project.id}`)}
                sx={{ backgroundColor: "cyan", ml: 1 }}
              >
                View
              </Button>
              {isEdit && (
                <Button
                  onClick={() => dispatch(deleteProject(project.id))}
                  sx={{ backgroundColor: "red", color: "white", margin: 2 }}
                >
                  delete
                </Button>
              )}
            </div>
          ))}
        <AddProject open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </>
  );
}

export default Projects;
