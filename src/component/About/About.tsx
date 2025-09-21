import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Button, CircularProgress } from "@mui/material";
import WorkDetailsForm from "./WorkDetailsForm";
import { useParams } from "react-router-dom";
import AccademicsForm from "./AccademicsForm";
import AboutMeForm from "./AboutForm";
import { fetchUserDetails } from "../../redux/userSlicse";
import { getToken } from "../../utility/TokenHelper";

function About() {
  const { userDetails, workDetails, accademics, loading, error } =
    useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isWorkFormOpen, setIsWorkFormOpen] = useState(false);
  const [isAccademicsFormOpen, setIsAccademicsFormOpen] = useState(false);
  const [isAboutMeFormOpen, setIsAboutMeFormOpen] = useState(false);
  const { username } = useParams();
  const { username: loggedInUsername } = useAppSelector((state) => state.user);
  const token = getToken();
  const isEdit = token && username === loggedInUsername;

  useEffect(() => {
    if (username) dispatch(fetchUserDetails(username));
  }, [username, dispatch]);

  if (loading) return <CircularProgress />;
  if (error) alert(error);

  return (
    <div className="m-5 mt-10 p-5 space-y-10 card text-white">
      {/* About Me */}
      {userDetails?.aboutMe && (
        <div className="shadow-lg rounded-xl p-5">
          <h1 className="text-2xl font-bold text-cyan-500 mb-3">👋 About Me</h1>
          <p
            className="text-base w-full md:w-2/3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: userDetails.aboutMe }}
          />

          {isEdit && (
            <Button
              onClick={() => setIsAboutMeFormOpen(true)}
              sx={{ backgroundColor: "cyan", margin: 2 }}
            >
              update
            </Button>
          )}
        </div>
      )}

      {/* about details form to update about details */}
      <AboutMeForm
        open={isAboutMeFormOpen}
        onClose={() => setIsAboutMeFormOpen(false)}
        aboutMe={userDetails?.aboutMe}
      />

      {/* Work Experience */}
      {workDetails && (
        <div className="shadow-lg rounded-xl p-5 slide-in">
          <h1 className="text-2xl font-bold text-cyan-500 mb-3">
            💼 Work Experience
          </h1>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <b>{workDetails?.companyName}</b>
            </li>
            <li>{workDetails?.designation}</li>
            <li>{workDetails?.duration}</li>
            <li>Tech Stack: {workDetails?.techStack}</li>
          </ul>
          {isEdit && (
            <Button
              onClick={() => setIsWorkFormOpen(true)}
              sx={{ backgroundColor: "cyan", margin: 2 }}
            >
              update
            </Button>
          )}
        </div>
      )}

      {/* work details form to update work details */}
      <WorkDetailsForm
        open={isWorkFormOpen}
        onClose={() => setIsWorkFormOpen(false)}
        workDetails={workDetails}
      />

      {/* Academics */}
      {accademics ? (
        <div className="shadow-lg rounded-xl p-5">
          <h1 className="text-2xl font-bold text-cyan-500 mb-3">
            🎓 Academics
          </h1>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <b>
                {accademics?.degree} – {accademics?.specialization}
              </b>
            </li>
            <li>{accademics?.college}</li>
            <li>{accademics?.duration}</li>
            <li>CGPA: {accademics?.CGPA}</li>
          </ul>
          {isEdit && (
            <Button
              onClick={() => setIsAccademicsFormOpen(true)}
              sx={{ backgroundColor: "cyan", margin: 2 }}
            >
              update
            </Button>
          )}
        </div>
      ) : (
        isEdit && (
          <Button onClick={() => setIsAccademicsFormOpen(true)}>add</Button>
        )
      )}

      {/* accademic details form to update accademic details */}
      <AccademicsForm
        open={isAccademicsFormOpen}
        onClose={() => setIsAccademicsFormOpen(false)}
        accademics={accademics}
      />
    </div>
  );
}

export default About;
