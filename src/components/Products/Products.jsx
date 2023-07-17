import React, { useState } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../../assets/4.jpeg";
import logo2 from "../../assets/2.jpeg";
import "../ProductView/style.css";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Carousel fade infiniteLoop useKeyboardArrows autoPlay>
        {/* <Carousel.Item>
          <img className="d-block w-100" src={logo2} alt=" slide" />
          <Carousel.Caption>
            <div className={classes.searchs}>
              <Input
                className={classes.searchb}
                type="text"
                placeholder="Which book are you looking for?"
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
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img className="d-block w-100" src={logo1} alt="slide" />
          <Carousel.Caption>
            <div className={classes.searchs}>
              <Input
                className={classes.searchb}
                type="text"
                placeholder="Which book are you looking for?"
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
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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
