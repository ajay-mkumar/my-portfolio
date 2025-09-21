import { Box, Button, CircularProgress, useMediaQuery } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import WorkForm from "./WorkForm";
import {
  deleteWorkExperience,
  fetchWorkExperience,
} from "../../redux/workExperienceSlice";
import { getToken } from "../../utility/TokenHelper";

function Work() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { username } = useParams();
  const dispatch = useAppDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { workExperience, loading, error } = useAppSelector(
    (state) => state.work
  );
  const { username: loggedInUsername } = useAppSelector((state) => state.user);
  const [editingIndex, setEditingIndex] = useState<string | null>(null);
  const token = getToken();
  const isEdit = token && username === loggedInUsername;

  useEffect(() => {
    if (username) dispatch(fetchWorkExperience(username));
  }, [dispatch, username]);

  if (loading) return <CircularProgress />;
  if (error) alert(error);

  if (workExperience && workExperience.length === 0)
    return (
      <div className="flex flex-col justify-center items-center text-white text-xl min-h-screen">
        Work Experience not added yet!
        <Button
          onClick={() => setIsFormOpen(true)}
          sx={{ backgroundColor: "cyan", m: 2 }}
        >
          Add Work Experience
        </Button>
        <WorkForm open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );

  if (!isMobile)
    return (
      <>
        {" "}
        {isEdit && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", m: 2 }}>
            <Button
              onClick={() => setIsFormOpen(true)}
              sx={{ backgroundColor: "cyan" }}
            >
              Add Work Experience
            </Button>
          </Box>
        )}
        <div className="m-10 p-5 card text-white">
          <div className="shadow-2xl m-5 pt-5">
            {workExperience &&
              workExperience.map((exp) => (
                <>
                  <h1 className="font-bold text-2xl text-cyan-500 p-5  rounded-lg shadow-inner text-center">
                    {exp.companyName} | {exp.duration}
                  </h1>
                  <div
                    key={exp.id}
                    className="p-5 m-5 shadow-2xl rounded-lg  hover:scale-105 transition duration-300"
                  >
                    <h3 className="font-bold text-cyan-500">
                      {exp.designation}
                    </h3>
                    <p>{exp.duration}</p>
                    <ul className="m-5 list-disc text-justify list-inside">
                      {exp.workDetails}
                      {/*todo {exp.workDetails.map((detail, i) => (
                  <li key={i} className="p-1">
                    {detail}
                  </li>
                ))} */}
                    </ul>
                    {isEdit && (
                      <Button
                        onClick={() => setEditingIndex(exp.id)}
                        sx={{ backgroundColor: "cyan", margin: 2 }}
                      >
                        update
                      </Button>
                    )}
                    {isEdit && (
                      <Button
                        onClick={() => dispatch(deleteWorkExperience(exp.id))}
                        sx={{
                          backgroundColor: "red",
                          color: "white",
                          margin: 2,
                        }}
                      >
                        delete
                      </Button>
                    )}
                    {editingIndex === exp.id && (
                      <WorkForm
                        open={true}
                        onClose={() => setEditingIndex(null)}
                        workExperience={exp}
                        id={exp.id}
                      />
                    )}
                  </div>
                </>
              ))}
          </div>
          <WorkForm open={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
      </>
    );
  else
    return (
      <div className="text-white">
        <div className="m-5">
          {workExperience &&
            workExperience.map((exp, index) => (
              <>
                <h3 className="font-bold text-cyan-500  m-3">
                  {exp.companyName} | {exp.duration}
                </h3>
                <div key={index} className=" p-5">
                  <h3 className="font-bold text-cyan-500">{exp.designation}</h3>
                  <p className="shadow-lg p-3 ">{exp.duration}</p>
                  <ul className="shadow-lg p-3 space-y-2">
                    {/* {exp.details.map((detail, i) => (
                  <li key={i} className=" shadow-lg">
                    {detail}
                  </li>
                ))} */}
                    {exp.workDetails}
                  </ul>
                </div>
              </>
            ))}
        </div>
      </div>
    );
}

export default Work;
