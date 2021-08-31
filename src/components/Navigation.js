import React, { useState } from "react";
import MenuItem from "./MenuItem";

// @material-ui
import { Drawer, IconButton, List } from "@material-ui/core";

// assets
import Logo from "../assets/images.jpg";
import { useStyles } from "../styles";
import { routes } from "../routes";
import { ChevronLeft, MenuOutlined } from "@material-ui/icons";
import clsx from "clsx";
import { logout } from "../firebase";

export default function Navigation() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const toggleNavigation = () => setOpen(!open);
  return (
    <div>
      <Drawer
        variant="permanent"
        open={open}
        classes={{
          paper: clsx(
            classes.navDrawer,
            !open && classes.navigationDrawerCollapse
          ),
        }}
        className={classes.navDrawer}
      >
        <div
          className={clsx(
            classes.navToolbar,
            !open && classes.navToolbarCollapse
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {open ? <ChevronLeft /> : <MenuOutlined />}
          </IconButton>
        </div>
        <div className={classes.navLogoContainer}>
          <img
            src={Logo}
            style={open ? null : { width: "100%" }}
            alt="Online School Logo"
            className={classes.navLogo}
          />
        </div>
        <List className={classes.navList}>
          {routes.map((route, idx) => (
            <React.Fragment key={idx}>
              {route.label === "Logout" && (
                <div className={classes.navSpacer}></div>
              )}
              <MenuItem
                onClick={logout}
                open={open}
                label={route.label}
                DashboardIcon={route.icon}
                DashboardOutlined={route.activeIcon}
                path={route.path}
              />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
