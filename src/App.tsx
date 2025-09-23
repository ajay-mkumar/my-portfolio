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
import Footer from "./component/Footer/Footer";
import Projects from "./component/Project/Projects";
import Project from "./component/Project/Project";
import LoginComponent from "./component/Auth/LoginComponent";
import { useEffect } from "react";
import { startTokenTimer } from "./utility/TokenHelper";
import SignUpComponent from "./component/Auth/SignUpComponent";
import LandingPage from "./component/Homepage/LandingPage";
import UpdateUser from "./component/Homepage/UpdateUser";

function App() {
  useEffect(() => {
    startTokenTimer();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth">
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginComponent />} />
          <Route path="signup" element={<SignUpComponent />} />
        </Route>
        <Route path="/:username" element={<NavBar />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Homepage />} />
          <Route path="update" element={<UpdateUser />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/projects/:id" element={<Project />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
