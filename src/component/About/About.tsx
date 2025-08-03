function About() {
    return (
      <div className="m-5 mt-10 p-5 space-y-10 card">
        {/* About Me */}
        <div className="shadow-lg rounded-xl p-5 bg-slate-100 ">
          <h1 className="text-2xl font-bold text-cyan-500 mb-3">👋 About Me</h1>
          <p className="text-base w-full md:w-2/3 leading-relaxed">
            I'm <b>Ajay</b>, a passionate <b>Frontend Developer</b> with <b>3+ years</b> of experience crafting sleek, responsive UIs using <b>React.js</b>, <b>Tailwind CSS</b>, and modern web tools. I bring a creative edge to code, blending performance with aesthetics.
            <br /><br />
            From building real-time apps to exploring <b>full-stack development</b> with <b>Node.js</b>, <b>Spring Boot</b>, and <b>TypeScript</b>, I’m always learning, always building.
            <br /><br />
            Outside the dev world, I’m a storyteller — scripting films, diving into books, and finding inspiration in cinema and gaming. I code with heart and create with purpose.
          </p>
        </div>
  
        {/* Work Experience */}
        <div className="shadow-lg rounded-xl p-5 bg-slate-100 slide-in">
          <h1 className="text-2xl font-bold text-cyan-500 mb-3">💼 Work Experience</h1>
          <ul className="list-disc pl-5 space-y-1">
            <li><b>Tata Consultancy Services</b></li>
            <li>Full Stack Developer</li>
            <li>July 2022 – Present</li>
            <li>Tech Stack: React, Spring Boot</li>
          </ul>
        </div>
  
        {/* Academics */}
        <div className="shadow-lg rounded-xl p-5 bg-slate-100">
          <h1 className="text-2xl font-bold text-cyan-500 mb-3">🎓 Academics</h1>
          <ul className="list-disc pl-5 space-y-1">
            <li><b>Bachelor of Technology – Information Technology</b></li>
            <li>A.V.C College of Engineering</li>
            <li>Aug 2018 – July 2022</li>
            <li>CGPA: 7.5</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default About;
  