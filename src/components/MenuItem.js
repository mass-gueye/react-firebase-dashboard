import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
// internal
import { useStyles } from "../styles";
// external
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function MenuItem({
  label,
  DashboardIcon,
  DashboardOutlined,
  open,
  path
}) {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <div>
      <ListItem
        component={Link}
        to={path}
        button
        className={clsx(classes.menuItem, active && classes.menuItemActive)}
      >
        <ListItemIcon>
          <IconButton
            onClick={() => setActive(!active)}
            color="secondary"
            className={classes.menuItemIcon}
          >
            {active ? <DashboardIcon /> : <DashboardOutlined />}
          </IconButton>
        </ListItemIcon>
        <ListItemText
          primary={label}
          primaryTypographyProps={{ variant: "body2" }}
          className={clsx(!open && classes.toggleText)}
          onClick={() => setActive(!active)}
        />
      </ListItem>
    </div>
  );
}
