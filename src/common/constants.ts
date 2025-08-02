type Project = {
  id: number;
  name: string;
  img: string;
  techStack: string[];
  description: string[];
  url: string,
  code: string,
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

export const navItems = ["Home", "About", "Work", "Projects"];

export const projects: Project[] = [
  {
    id: 1,
    name: "Ecommerce Platform",
    img: "/projects/ecommerce.png",
    techStack: ["React.js", "Node.js", "Express"],
    description: [
      "Developed product listing, filtering, checkout components, and user authentication features.",
      "Integrated PayPal payment gateway and dynamic recommendation sections.",
      "Implemented shopping cart, order management, and personalized user dashboards.",
    ],
    url:'https://aj-shop-vqie.onrender.com/',
    code: 'https://github.com/ajay-mkumar/ecommerce'
  },
  {
    id: 2,
    name: "Photo studio UI",
    img: "/projects/photostudio.png",
    techStack: ["React.js", "Tailwind css"],
    description: [
      "A modern and minimalist web application designed to bring photography services into the digital era. From showcasing elegant photo galleries to booking sessions, this app streamlines the customer experience for photography studios.",
      "Gallery Showcase – A beautifully crafted responsive image grid to display studio works.",
      "Booking System – Clients can schedule photo shoots by sending email directly from UI.",
    ],
    url:'https://aj-studio4.netlify.app/',
    code: 'https://github.com/ajay-mkumar/photo-studio-UI'
  },
  {
    id: 3,
    name: "Trip Tracking UI",
    img: "/projects/trip.png",
    techStack: ["React.js"],
    description: [
      "MyWorldTrip is a modern travel portfolio web app where journeys come alive. Designed to showcase destinations, memories, and experiences, it blends elegant visuals with intuitive UI to inspire wanderlust and adventure.",
    ],
    url:'https://myworldtrip.netlify.app/',
    code: 'https://github.com/ajay-mkumar/worldwise'
  },
  {
    id: 4,
    name: "Movie Tracking UI",
    img: "/projects/movie.png",
    techStack: ["React.js", "Axios"],
    description: [
      "GrabPopcornn is a sleek and dynamic movie browsing web app designed for film buffs who live for the next great story. With a crisp UI and smooth user experience, the app lets users explore trending movies, dive into details, and plan their watchlist with style.",
      "Live movie data fetched from TMDb API",
      "Trending & popular movie displays with real-time updates",
      "Search functionality for your favorite flicks",
      "Detailed pages with overviews, posters, ratings & release dates",
      "Responsive design with a mobile-first experience",
      "Crafted with love for both cinephiles and casual viewers",
    ],
    url:'http://grabpopcornn.netlify.app/',
    code: 'https://github.com/ajay-mkumar/grab-popcorn'
  },
  {
    id: 5,
    name: "Quiz App",
    img: "/projects/quiz.png",
    techStack: ["React.js"],
    description: [
      "React Quizzy is a fun and responsive quiz web app built for curious minds and trivia lovers. Whether you're testing your knowledge or just passing time, Quizzy offers an engaging and dynamic quiz-taking experience right in your browser.",
      "Interactive quiz gameplay with real-time feedback",
      "Countdown timer to keep you on your toes",
      "Progress bar for visual tracking of your quiz journey",
      "Detailed pages with overviews, posters, ratings & release dates",
      "Responsive design with a mobile-first experience",
      "Final score summary to see how you stack up",
    ],
    url: 'https://react-quizzy-app.netlify.app/',
    code: 'https://github.com/ajay-mkumar/grab-popcorn'
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
