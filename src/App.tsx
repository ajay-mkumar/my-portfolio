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
import Project from "./component/Project/Project";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
