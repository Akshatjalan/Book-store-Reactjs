import React from "react";
import scrollToSection from "../scrollToSection";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/circles.png";
import useStyles from "./styles";
import '../stely.css';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Book Store App"
              height="50px"
              className={classes.image}
            />
            <div>BOOK-Y </div>
          </Typography>

          <Hidden smDown>
            <div style={{ display: "flex" }}>
              <a href="#Categories" className="nav" style={{ marginLeft: "70px" }} onClick={() => handleLinkClick("Categories")}> Categories </a>
              <a href="#Best Sellers" className="nav" onClick={() => handleLinkClick("Best Sellers")}> Best Sellers </a>
              <a href="#Discover Books" className="nav" onClick={() => handleLinkClick("Discover Books")}> Discover Books </a>
              <a href="#Contatc Us" className="nav" onClick={() => handleLinkClick("Contatc Us")}> Contatc Us </a>
            </div>
          </Hidden>
          <div className={classes.grow} />
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open navigation"
              onClick={handleDrawerToggle}
            >
              <i className="fas fa-bars" />
            </IconButton>
          </Hidden>

          
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>

          <Drawer
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <List>
              <ListItem button onClick={() => handleLinkClick("Categories")}>
                <ListItemText primary="Categories" />
              </ListItem>
              <ListItem button onClick={() => handleLinkClick("Best Sellers")}>
                <ListItemText primary="Best Sellers" />
              </ListItem>
              <ListItem button onClick={() => handleLinkClick("Discover Books")}>
                <ListItemText primary="Discover Books" />
              </ListItem>
              <ListItem button onClick={() => handleLinkClick("Contatc Us")}>
                <ListItemText primary="Contatc Us" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;