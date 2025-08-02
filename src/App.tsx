import Work from "./component/Work/Work";
import About from "./component/About/About";
import Homepage from "./component/Homepage/Homepage";
import NavBar from "./component/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./Footer/Footer";
import Projects from "./component/Project/Projects";
import Project from "./component/Project/Project";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
