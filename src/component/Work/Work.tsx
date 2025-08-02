import { workExperience } from "../../common/constants";

function Work() {
  return (
    <div className="m-10 p-5">
      <h1 className="font-bold text-2xl text-blue-800 p-5">
        Tata Consulatncy Services
      </h1>
      <p className="pl-5">July-2022 to present</p>
      {workExperience.map((exp, index) => (
        <div
          key={index}
          className="p-5 m-5 shadow-lg bg-slate-100 hover:scale-105 transition duration-300"
        >
          <h3 className="font-bold text-blue-700">{exp.designation}</h3>
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
  );
}

export default Work;
