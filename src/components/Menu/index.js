import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import img from "../../assests/Svg/portada.svg";
import "./styles/Styles.scss";
import KeyPortada from "../../assests/Svg/KeyPortada";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [animate, setanimate] = useState(true);

  useEffect(() => {
    let element = document.getElementById("CARDD");
    let head = document.getElementById("HEADERR");
    let let1 = document.getElementById("ecencia");
    let let2 = document.getElementById("inm");
    let let0 = document.getElementById("key");
    // element.onanimationend = () => {
    //   console.log("event : ", element.style.animationName);
    //   element.setAttribute("style", " animation-play-state: paused;");
    //   element.style.height = "41px";
    // };
    // element.addEventListener("webkitAnimationEnd", myStartFunction);

    // function myStartFunction(event) {
    //   let com = event.animationName;
    //   com += "";
    //   console.log(com);
    //   if (com === "openn") {
    //     console.log("Animation-name is: ", event.animationName);
    //   }
    // }
    if (animate === false) {
      let1.setAttribute("style", "display:block");
      let2.setAttribute("style", "display:block");
      let0.setAttribute("style", "fill:#000");
      element.style.height = "0";
      element.style.paddingTop = "40px";
      element.style.backgroundColor = "#fff";
      element.setAttribute("style", "box-shadow: block");
      head.setAttribute("style", "background: none");
      head.style.boxShadow = "none";
    }
    element.addEventListener("animationend", function (e) {
      let name = "" + e.animationName;
      if (name === "close") {
        let1.setAttribute("style", "display:none");
        let2.setAttribute("style", "display:none");
        let0.setAttribute("style", "fill:#fff");
        element.style.height = "0";
        element.style.paddingTop = "40px";
        element.style.backgroundColor = "#287c8f";
        element.style.boxShadow = "none";
        head.style.backgroundColor = "#287c8f";
      }
    });
    if (animate) {
      element.setAttribute("style", "animation-play-state: running");
    } else if (animate === false) {
      element.setAttribute("style", "animation-play-state: running");
    }
    window.addEventListener(
      "scroll",
      function () {
        let st = window.scrollY;

        if (st > 0) {
          setanimate(true);
          element.className = "carddd animate";

          console.log("cambio");
        } else if (st === 0) {
          setanimate(false);
          element.className = "carddd animated";
        }
      },
      false
    );
  }, [animate]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <AppBar
        position="fixed"
        id="HEADERR"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ background: "none", border: "0", boxShadow: "none" }}
      >
        <Toolbar className="containerrr">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide, "menu")}
          >
            <MenuIcon />
          </IconButton>
          <Router>
            <Route path="/">
              <div className="carddd " id="CARDD">
                <Link to="/">
                  <KeyPortada />
                </Link>
              </div>
            </Route>
          </Router>
          <Router>
            <div className="router">
              <Link to="/">Home</Link>
              <Link to="/">Nosotros</Link>
              <Link to="/">Inmuebles</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Contacto</Link>
            </div>
          </Router>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>

            <ListItemText>prueba</ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
