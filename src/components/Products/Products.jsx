import React, { useState, useRef } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo1 from "../../assets/Bookshop.gif";
import scrollImg from "../../assets/scroll.gif";

import "../ProductView/style.css";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  const sectionRef = useRef(null);

  const handleInputClick = () => {
    // Scrolls to the section when the input is clicked
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={classes.mainPage}>
      <div className={classes.toolbar} />
      <img src={scrollImg} className={classes.scrollImg} />
      <div className={classes.hero}>
        <img className={classes.heroImg} src={logo1} height="720px" />

        <div className={classes.heroCont}>
          <h1 className={classes.heroHeader}>
            Discover Your Next Favorite Book Here.
          </h1>
          <h3 className={classes.heroDesc} ref={sectionRef}>
            Explore our curated collection of new and popular books to find your
            next literary adventure.
          </h3>
          <div className={classes.searchs}>
            <Input
              className={classes.searchb}
              type="text"
              placeholder="Which book are you looking for?"
              onClick={handleInputClick}
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
      </div>

      {searchTerm === "" && (
        <>
          <h3 className={classes.contentHeader}>
            Featured<span style={{ color: "#f1361d" }}>Deals</span>
          </h3>
          <Grid
            className={classes.contentFeatured}
            container
            justify="center"
            spacing={2}
          >
            {products.map((product) => (
              <>
                {/* categories: [{id: "cat_r2LM5QqDr5ZV1g", slug: "featured", name: "Featured"}] */}
                {product.categories.length > 0 ? (
                  <Grid
                    className={classes.contentFeatured}
                    item
                    xs={8}
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
        {searchTerm === "" && (
          <>
            <h1 className={classes.booksHeader}>
              Discover<span style={{ color: "#f1361d" }}>Books</span>
            </h1>
            <h3 className={classes.booksDesc}>
              Explore our comprehensive collection of books.
            </h3>
          </>
        )}
        <div className={classes.mobileSearch}>
          <div className={classes.mobSearchs}>
            <Input
              className={classes.mobSearchb}
              type="text"
              placeholder="Search for books"
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
        <Grid
          className={classes.content}
          container
          justify="center"
          spacing={2}
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
                xs={6}
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
