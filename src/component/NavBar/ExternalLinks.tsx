import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import { Tooltip, IconButton } from "@mui/material";
import type { UserDetails } from "../../redux/type/UserType";

type ExternalLinksPropTypes = {
    isMobile: boolean
    user: UserDetails
}
function ExternalLinks({ isMobile, user }: ExternalLinksPropTypes) {
  return (
    <ul className={`flex gap-1 ${!isMobile && "absolute right-[200px]"}`}>
      <li>
        <Tooltip title="LinkedIn" arrow>
          <IconButton
            aria-label="LinkedIn"
            href={user.linkedIn}
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
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="text-white" />
          </IconButton>
        </Tooltip>
      </li>
      <li>
        <Tooltip title={user.email} arrow>
          <IconButton
            aria-label="Email"
            href={`mailto:${user.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className="text-white" />
          </IconButton>
        </Tooltip>
      </li>
    </ul>
  );
}
export default ExternalLinks;
