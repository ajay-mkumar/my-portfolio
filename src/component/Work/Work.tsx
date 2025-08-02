import { workExperience } from "../../common/constants";

function Work() {
  return (
    <div className="m-10 p-5">
      <h1 className="font-bold text-2xl text-cyan-500 p-5 bg-white rounded-lg shadow-inner text-center">
        Tata Consulatncy Services | July-2022 to present
      </h1>
      <div className="shadow-2xl m-5 pt-5">
        {workExperience.map((exp, index) => (
          <div
            key={index}
            className="p-5 m-5 shadow-2xl rounded-lg bg-white hover:scale-105 transition duration-300"
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
}

export default Work;
