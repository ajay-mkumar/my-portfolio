import { Button, CircularProgress, useMediaQuery } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import WorkForm from "./WorkForm";
import {
  deleteWorkExperience,
  fetchWorkExperience,
} from "../../redux/workExperienceSlice";

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
  const isEdit = loggedInUsername === username;

  useEffect(() => {
    if (username) dispatch(fetchWorkExperience(username));
  }, [dispatch, username]);

  if (loading) return <CircularProgress />;
  if (error) alert(error);

  if (!isMobile)
    return (
      <div className="m-10 p-5 card text-white">
        {isEdit && <Button onClick={() => setIsFormOpen(true)}>Add</Button>}
        <h1 className="font-bold text-2xl text-cyan-500 p-5  rounded-lg shadow-inner text-center">
          Tata Consulatncy Services | July-2022 to present
        </h1>
        <div className="shadow-2xl m-5 pt-5">
          {workExperience &&
            workExperience.map((exp) => (
              <div
                key={exp.id}
                className="p-5 m-5 shadow-2xl rounded-lg  hover:scale-105 transition duration-300"
              >
                <h3 className="font-bold text-cyan-500">{exp.designation}</h3>
                <p>{exp.duration}</p>
                <ul className="m-5 list-disc text-justify list-inside">
                  {exp.workDetails}
                  {/* {exp.workDetails.map((detail, i) => (
                  <li key={i} className="p-1">
                    {detail}
                  </li>
                ))} */}
                </ul>
                {isEdit && (
                  <Button onClick={() => setEditingIndex(exp.id)}>
                    update
                  </Button>
                )}
                {isEdit && (
                  <Button
                    onClick={() => dispatch(deleteWorkExperience(exp.id))}
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
            ))}
        </div>
        <WorkForm open={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    );
  else
    return (
      <div className="text-white">
        <h3 className="font-bold text-cyan-500  m-3">
          Tata Consulatncy Services | July-2022 to present
        </h3>
        <div className="m-5">
          {workExperience &&
            workExperience.map((exp, index) => (
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
            ))}
        </div>
      </div>
    );
}

export default Work;
