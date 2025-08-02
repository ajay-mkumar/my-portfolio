import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExternalLinks from "./ExternalLinks";

function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", "About", "Project", "Work"].map((text) => (
          <ListItemButton
            key={text}
            component={Link}
            to={`/${text.toLowerCase()}`}
          >
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ background: "none" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Ajay Muthukumaran
          </Typography>
          <ExternalLinks isMobile={true} />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
}

export default MobileNav;
