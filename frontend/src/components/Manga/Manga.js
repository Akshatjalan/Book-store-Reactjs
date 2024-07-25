import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product.js";
import useStyles from "../Products/styles.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../ProductView/style.css";

const Manga = ({ onAddToCart, mangaProducts }) => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.mainPage}>
        <div className={classes.toolbar} />

        <>
          <div className={classes.categorySection}>
            <h3 className={classes.categoryHeader}>
              Anime <span style={{ color: "#f1361d" }}>Manga</span>
            </h3>
            <h3 className={classes.categoryDesc}>
              Browse our handpicked selection of manga series
            </h3>
            <Grid
              className={classes.categoryFeatured}
              container
              justify="center"
              spacing={1}
            >
              {mangaProducts.map((product) => (
                <Grid
                  className={classes.categoryFeatured}
                  item
                  xs={6}
                  sm={5}
                  md={3}
                  lg={2}
                  id="pro"
                >
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      </main>
    </>
  );
};

export default Manga;
