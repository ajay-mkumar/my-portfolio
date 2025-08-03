import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import NetlifyIcon from "../Icon/NetlifyIcon";
import { Tooltip, IconButton } from "@mui/material";

type ExternalLinksPropTypes = {
    isMobile: boolean
}
function ExternalLinks({ isMobile }: ExternalLinksPropTypes) {
  return (
    <ul className={`flex gap-1 ${!isMobile && "absolute right-[200px]"}`}>
      <li>
        <Tooltip title="LinkedIn" arrow>
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/ajay-muthukumaran-9836001a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="text-white" />
          </IconButton>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="GitHub" arrow>
          <IconButton
            aria-label="GitHub"
            href="https://github.com/ajay-mkumar"
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
            <NetlifyIcon className="text-white" />
          </IconButton>
        </Tooltip>
      </li>
    </ul>
  );
}
export default ExternalLinks;
