import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "./Layout.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, Outlet } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import "./Layout.css";

const Layout = (props) => {
  const drawerWidth = 240;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box
        className="sidebar"
        sx={{ backgroundColor: "#1A202E", color: "white" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            py: 2,
            ml: 1,
          }}
        >
          <Box className="dashboard_icon">
            <Box className="d_shape"></Box>
          </Box>
          <Typography sx={{ color: "#A4A6B3", fontSize: "19px", ml: 1 }}>
            Dashboard Kit
          </Typography>
        </Box>
        <List>
          <Link style={{ textDecoration: "none" }} to={`/home`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                All Project
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/addprojects`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Add Project
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/editproject`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Edit Project
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/projectdetails`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Project Details
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/employees`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Employees
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/addemployee`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Add Employees
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/editemploy`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Edit Employee
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/employeeprofile`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Employee Profile
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/addcilent`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Add Cilent
              </ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/editclient`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Edit Client
              </ListItemText>
            </ListItem>
          </Link>
          {/* <Link
            style={{ textDecoration: "none" }}
            to={`/employeeprofilesetting`}
          >
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                EmployeeProfileSetting
              </ListItemText>
            </ListItem>
          </Link> */}
          <Link style={{ textDecoration: "none" }} to={`/clientprofile`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                Client Profile
              </ListItemText>
            </ListItem>
          </Link>
          {/* <Link style={{ textDecoration: "none" }} to={`/clientprofilesetting`}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#A4A6B3" }} />
              </ListItemIcon>
              <ListItemText sx={{ color: "#A4A6B3", fontSize: "16px" }}>
                ClientProfile Setting
              </ListItemText>
            </ListItem>
          </Link> */}
        </List>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#262E41",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />

      <AppBar
        sx={{
          backgroundColor: "transparent",
          py: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ zIndex: 1 }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mx: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box>
          <Typography
            variant="h6"
            sx={{ textAlign: "left", ml: 2, color: "#A4A6B3" }}
          >
            Overview
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchIcon sx={{ mx: 2, color: "#A4A6B3" }} />
          <NotificationsIcon sx={{ color: "#A4A6B3" }} />
          <Typography sx={{ px: 2, color: "#A4A6B3", fontSize: "18px" }}>
            Jones
          </Typography>
          {/* <Box sx={{ width: '44px', height: '44px', border: '1.5px solid #DFE0EB', borderRadius: '50%', backgroundColor: "white", mr: 2 }}></Box> */}
          <Stack direction="row">
            <Avatar
              sx={{ marginRight: "35px" }}
              alt="Remy Sharp"
              src="../../Static/Image/face.jpg"
            />
          </Stack>
        </Box>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          color: "white",
        }}
      >
        <Toolbar />

        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Layout;
