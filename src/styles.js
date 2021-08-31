import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
 
  navLogo: {
    width: "45%",
  },
  navLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing(6),
  },
  navDrawer: {
    width: 240,
    whiteSpace: "nowrap",
    overflowX: "hidden",
    overflowY: "hidden",
    padding: "0 .5rem",
    
  },
  menuItemIcon: {
    margin: "0 .5rem",

    // "&:hover": {
    //   background: "",
    // },
  },
  menuItem: {
    width: "100%",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    
  },
  menuItemActive: {
    background: "#EBEBEC",
  },
  navList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex:1,
    //   alignItems: "center",

    width: "100%",
  },
  navSpacer: {
    flex: 4,
    textDecoration:'underline'
  },
  navToolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar,
  },
  navigationDrawerCollapse: {
    width: theme.spacing(9),
  },
  navToolbarCollapse: {
    justifyContent: "center",
    paddingRight: 0,
  },
  toggleText: {
    display: "none",
  },
}));
