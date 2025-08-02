type Project = {
  name: string;
  img: string;
  techStack: string[];
  description: string[];
};

type WorkExperience = {
  designation: string;
  Duration: string;
  details: string[];
};

type Skills = {
  frontend: string[];
  backend: string[];
  testingAndTools: string[];
};

export const projects: Project[] = [
  {
    name: "Ecommerce Platform",
    img: "projects/image.png",
    techStack: ["React.js", "Node.js", "Express"],
    description: [
      "Developed product listing, filtering, checkout components, and user authentication features.",
      "Integrated PayPal payment gateway and dynamic recommendation sections.",
      "Implemented shopping cart, order management, and personalized user dashboards.",
    ],
  },
];

export const workExperience: WorkExperience[] = [
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

export const skills: Skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Material UI",
  ],
  backend: ["Node.js", "Java", "Spring Boot"],
  testingAndTools: ["Jest", "Git & GitHub", "VS Code", "Postman"],
};
