import React, { useState } from "react";
import { Grid, InputAdornment, Input, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../../assets/2.jpeg";
import logo2 from "../../assets/4.jpeg";
import logo3 from "../../assets/3.jpeg";
import { Link } from "react-router-dom";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className={classes.content} >
      <div className={classes.toolbar} />
      <Carousel fade infiniteLoop useKeyboardArrows autoPlay>
        <Carousel.Item>
          <img className="d-block w-100" src={logo1} alt=" slide" />
          <Carousel.Caption>
            <Button
              className={classes.but}
              size="large"
              variant="contained"
              color="default"
              href="#pro"
            >
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo3} alt="Second slide" />
          <Carousel.Caption>
            <Button
              className={classes.but}
              size="large"
              variant="contained"
              color="secondary"
              component={Link}
              to="/cart"
            >
              Checkout Cart
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo2} alt="Second slide" />
          <Carousel.Caption>
            <Button
              className={classes.but}
              size="large"
              variant="contained"
              color="primary"
              href="#foot"
            >
              Other Works
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className={classes.searchs}>
        <Input
          className={classes.searchb}
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>

      <Grid className={classes.content} container justify="center" spacing={5}>
        {products
          .filter((product) => {
            if (searchTerm === "") {
              return product;
            } else if (
              product.name
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} id="pro">
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
};

export default Products;
