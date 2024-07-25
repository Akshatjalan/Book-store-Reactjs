import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/circles.png";
import useStyles from "./styles";
import '../stely.css';
const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
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
            <div>BOOKSHOP </div>
            
            
              <a className="nav" style={{ marginLeft:"70px" }}> malk </a>
              <a className="nav"> malk </a>
              <a className="nav"> malk </a>
        
            
            
          </Typography>

          <div className={classes.grow} />
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
