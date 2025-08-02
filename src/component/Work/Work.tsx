const workExperience = [
  {
    designation: "Assistant System Engineer Trainee",
    Duration: "July 2022 -January 2023",
    details: [
      "Underwent comprehensive React.js training, mastering Hooks, Redux, Routing, and Custom Hooks development",
    ],
  },
  {
    designation: "Assistant System Engineer",
    Duration: "Feb 2023 -July 2023",
    details: [
      "Developed user interfaces for eCommerce applications using React.js and Redux, improving user engagement by 20%",
      "Collaborated with backend developers to integrate RESTful APIs ensuring seamless data flow across the application.",
    ],
  },
  {
    designation: "System Engineer(Onsite)",
    Duration: "July 2023 -Nov 2024",
    details: [
      "Worked as a Full Stack Developer at client location (Mexico) for an eCommerce application.",
      "Led development of critical frontend features in React.js and backend APIs in Node.js.",
      "Built reusable components and maintained UI consistency with component libraries and Tailwind CSS.",
      "Implemented form validations, advanced state management, conditional rendering, and component composition to avoid prop drilling. Worked within Agile teams, participating in daily stand-ups, sprint planning, and retrospectives.",
      "Contributed to backend development and bug fixing using Node.js and Express.js.",
      "Enhanced application performance and improved UI responsiveness and scalability.",
    ],
  },
  {
    designation: "System Engineer(offshore)",
    Duration: "Dec 2024 - present",
    details: [
      "Currently working as a Full Stack Developer for an insurance client based in India.",
      "Developing and maintaining scalable React.js frontend and Node.js backend services.",
    ],
  },
];
function Work() {
  return (
    <div className="m-10 p-5">
      <h1 className="font-bold text-2xl text-blue-800 p-5">Tata Consulatncy Services</h1>
      <p className="pl-5">July-2022 to present</p>
      {workExperience.map((exp, index) => (
        <div key={index} className="p-5 m-5 shadow-lg bg-slate-100 hover:scale-105 transition duration-300">
          <h3 className="font-bold text-blue-700">{exp.designation}</h3>
          <p>{exp.Duration}</p>
          <ul className="m-5 list-disc text-justify list-inside">
            {exp.details.map((detail, i) => (
              <li key={i} className="p-1">{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Work;
