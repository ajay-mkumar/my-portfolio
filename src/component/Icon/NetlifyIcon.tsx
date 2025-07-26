import { SvgIcon, type SvgIconProps } from "@mui/material";

function NetlifyIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M256 0L0 256l256 256 256-256L256 0zm158.4 197.2l-54.8-54.8L393.6 96 416 118.4l-57.6 57.6zm-68.8-68.8l-22.4-22.4-54.8 54.8-54.8-54.8L197.2 128l54.8 54.8-54.8 54.8 22.4 22.4 54.8-54.8 54.8 54.8 22.4-22.4-54.8-54.8 54.8-54.8z"
      />
    </SvgIcon>
  );
}

export default NetlifyIcon;
