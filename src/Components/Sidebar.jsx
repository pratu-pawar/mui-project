import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Pages,
  Groups,
  ModeNight,
} from "@mui/icons-material";
import StoreFrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from "@mui/icons-material/People"
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = (mode, setMode) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablepadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="homepage"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablepadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="pages"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablepadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablepadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <StoreFrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablepadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <PeopleIcon/>
              </ListItemIcon>
              <ListItemText primary="PeopleIcon"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablepadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="setting"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablepadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
               <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile"></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablepadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode ==="light" ? "dark": "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
