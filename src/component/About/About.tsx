import { useAppSelector } from "../../hooks/hooks";

function About() {
  const { userDetails, workDetails, accademics } = useAppSelector(
    (state) => state.user
  );

  return (
    <div className="m-5 mt-10 p-5 space-y-10 card text-white">
      {/* About Me */}
      {userDetails?.aboutMe && (
        <div className="shadow-lg rounded-xl p-5">
          <h1 className="text-2xl font-bold text-cyan-500 mb-3">👋 About Me</h1>
          <p className="text-base w-full md:w-2/3 leading-relaxed">
            {userDetails?.aboutMe}
          </p>
        </div>
      )}

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
        </div>
      )}

      {/* Academics */}
      {accademics && (
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
        </div>
      )}
    </div>
  );
}

export default About;
