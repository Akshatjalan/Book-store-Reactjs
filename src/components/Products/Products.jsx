import React, { useState } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../../assets/Bookshop.gif";
import "../ProductView/style.css";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className={classes.mainPage}>
      <div className={classes.toolbar} />
      <div className={classes.hero}>
        <img className={classes.heroImg} src={logo1} height="720px" />

        <div className={classes.heroCont}>
          <h1 className={classes.heroHeader}>
            Discover Your Next Favorite Book Here.
          </h1>
          <h3 className={classes.heroDesc}>
            Explore our curated collection of new and popular books to find your
            next literary adventure.
          </h3>
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
        </div>
        {/* <img src={logo1} height="800px" /> */}
      </div>

      {searchTerm === "" && (
        <>
          <h3 className={classes.contentHeader}>Featured Deals</h3>
          <Grid
            className={classes.contentFeatured}
            container
            justify="center"
            spacing={1}
          >
            {products.map((product) => (
              <>
                {product.categories.length > 0 ? (
                  <Grid
                    className={classes.contentFeatured}
                    item
                    xs={6}
                    sm={5}
                    md={3}
                    lg={2}
                    id="pro"
                  >
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>
                ) : (
                  ""
                )}
              </>
            ))}
          </Grid>
        </>
      )}

      <div>
        <h1 className={classes.booksHeader}>Discover Books</h1>
        <h3 className={classes.booksDesc}>
          Explore our comprehensive collection of books.
        </h3>
        <Grid
          className={classes.content}
          container
          justify="center"
          spacing={5}
        >
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
              <Grid
                className={classes.content}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                id="pro"
              >
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
        </Grid>
      </div>
    </main>
  );
};

export default Products;
