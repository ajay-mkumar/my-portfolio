import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import NetlifyIcon from "../Icon/NetlifyIcon";
import { Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sm:flex justify-between m-5 relative">
      <h1 className="absolute left-[250px] font-bold text-white">Ajay Muthukumaran</h1>

      <ul className="flex justify-center gap-5 absolute left-1/2 transform -translate-x-1/2">
      {["Home", "About", "Work", "Project"].map((label, index) => (
          <Link
          to={label.toLowerCase()}
            key={index}
            className="text-white hover:text-blue-500 font-medium text-sm md:text-base cursor-pointer transition-all duration-300 transform hover:scale-110"
          >
            {label}
          </Link>
        ))}
      </ul>

      <ul className="flex gap-1 absolute right-[200px]">
        <li>
          <Tooltip title="LinkedIn" arrow>
            <IconButton
              aria-label="LinkedIn"
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="text-white"  />
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="GitHub" arrow>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="text-white" />
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Netlify" arrow>
            <IconButton
              aria-label="Netlify"
              href="https://your-project.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NetlifyIcon className="text-white"  />
            </IconButton>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
