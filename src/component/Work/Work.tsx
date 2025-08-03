import { useMediaQuery } from "@mui/material";
import { workExperience } from "../../common/constants";

function Work() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  if (!isMobile)
    return (
      <div className="m-10 p-5 card text-white">
        <h1 className="font-bold text-2xl text-cyan-500 p-5  rounded-lg shadow-inner text-center">
          Tata Consulatncy Services | July-2022 to present
        </h1>
        <div className="shadow-2xl m-5 pt-5">
          {workExperience.map((exp, index) => (
            <div
              key={index}
              className="p-5 m-5 shadow-2xl rounded-lg  hover:scale-105 transition duration-300"
            >
              <h3 className="font-bold text-cyan-500">{exp.designation}</h3>
              <p>{exp.Duration}</p>
              <ul className="m-5 list-disc text-justify list-inside">
                {exp.details.map((detail, i) => (
                  <li key={i} className="p-1">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  else
    return (
      <div className="text-white">
        <h3 className="font-bold text-cyan-500  m-3">
          Tata Consulatncy Services | July-2022 to present
        </h3>
        <div className="m-5">
          {workExperience.map((exp, index) => (
            <div key={index} className=" p-5">
              <h3 className="font-bold text-cyan-500">{exp.designation}</h3>
              <p className="shadow-lg p-3 ">{exp.Duration}</p>
              <ul className="shadow-lg p-3 space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className=" shadow-lg">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Work;
