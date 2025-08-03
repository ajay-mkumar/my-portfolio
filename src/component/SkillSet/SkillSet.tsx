import { skills } from "../../common/constants";

function SkillSet() {
  return (
    <div className="m-[100px] p-5 shadow-lg">
      <h1 className="text-center font-bold text-cyan-500 text-4xl">Skillset</h1>
      <div className="m-5 p-5 flex flex-wrap justify-center gap-5">
        {Object.entries(skills).map(([category, techs]) => (
          <div
            key={category}
            className=" m-5 p-5 rounded-xl shadow-md w-64 flex flex-col items-start"
          >
            <h3 className="text-xl font-semibold capitalize text-slate-200 mb-3">
              {category.replace(/([A-Z])/g, " $1")}
            </h3>

            <ul className="flex flex-col gap-3 w-full card">
              {techs.map((tech) => (
                <li
                  key={tech}
                  className="px-4 py-1 text-sm text-slate-100 bg-cyan-800 rounded-full shadow hover:scale-110 transition duration-500 hover:bg-slate-700 transition-colors text-center"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSet;
