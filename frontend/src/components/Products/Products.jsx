import React, { useState, useRef } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Product from "./Product/Product.js";
import useStyles from "./styles";
import logo1 from "../../assets/Bookshop.gif";
import scrollImg from "../../assets/scroll.gif";
import "../ProductView/style.css";
import { Link } from "react-router-dom";
import mangaBg from "../../assets/maxresdefault.jpg";
import bioBg from "../../assets/biography.jpg";
import fictionBg from "../../assets/fiction.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Contact from "../../components/Contact/Contact";
import Slider from "../../components/Slider/Slider";
import p1 from './../../assets/book1.png'
import p2 from './../../assets/book2.png'
import p3 from './../../assets/book3.png'
import p4 from './../../assets/book4.png'
import p5 from './../../assets/book5.png'
import p6 from './../../assets/book6.png'
import p7 from './../../assets/p111.png'
const Products = ({ products, onAddToCart, featureProducts }) => {
  const images = [p1,p2,p3,p4,p5,p6]
  const classes = useStyles();
console.log("abd");
console.log(products);
console.log("============================");
console.log(featureProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const sectionRef = useRef(null);

  const handleInputClick = () => {
    // Scrolls to the section when the input is clicked
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={classes.mainPage}>
      <div className={classes.toolbar} id="first" />
      <img src={scrollImg} className={classes.scrollImg} />
      <div className={classes.hero}>
        <img className={classes.heroImg} style={{ marginTop:'150px' }} src={logo1} height="720px" />

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
        <div id="Categories" className={classes.categorySection}>
          <h1 className={classes.categoryHeader}>Categories</h1>
          <h3 className={classes.categoryDesc}>
            Browse our featured categories
          </h3>
          <div className={classes.buttonSection}>
            <div>
              <Link to="manga">
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${mangaBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName}>Manga</div>
            </div>
            <div>
              <Link to="biography">
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${bioBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName}>Biography</div>
            </div>
            <div>
              <Link to="fiction">
                <button
                  className={classes.categoryButton}
                  style={{ backgroundImage: `url(${fictionBg})` }}
                ></button>
              </Link>
              <div className={classes.categoryName}>Fiction</div>
            </div>
          </div>
        </div>
      )}

      <div className={classes.carouselSection}>
        <Carousel
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
        >
          <div>
            <Link to="manga">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${mangaBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>Manga</div>
          </div>
          <div>
            <Link to="biography">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${bioBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>Biography</div>
          </div>
          <div>
            <Link to="fiction">
              <button
                className={classes.categoryButton}
                style={{ backgroundImage: `url(${fictionBg})` }}
              ></button>
            </Link>
            <div className={classes.categoryName}>Fiction</div>
          </div>
        </Carousel>
      </div>

      {searchTerm === "" && (
        <>
          <div id="Best Sellers">
            <h3 className={classes.contentHeader}>
              For <span style={{ color: "#f1361d" }}>You</span>
            </h3>
            <Grid style={{ backgroundImage: `url(${p7}) `}}
              className={classes.contentFeatured}
              container
              justify="center"
              spacing={1}
            >
              {featureProducts.map((product,index) => (
                <Grid 
                  className={classes.contentFeatured}
                  item
                  xs={6}
                  sm={5}
                  md={3}
                  lg={2}
                  id="pro"
                >
                  <Product image={images[index]}product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      )}

      <div>
        {searchTerm === "" && (
          <>
            <h1 className={classes.booksHeader} id="Discover Books">
              Discover <span style={{ color: "#f1361d" }}>Books</span>
            </h1>
            <h3 className={classes.booksDesc}>
              Explore our comprehensive collection of books.
            </h3>
          </>
        )}
        
        <Grid
          className={classes.content}
          container
          justify="center"
          spacing={2}
        >
          {products
            .map((product,index) => (
              <Grid
                className={classes.content}
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                id="pro"
              >
                <Product image={images[index]} product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
        </Grid>
      </div>
      
      








      








              <Contact/>
    </main>
  );
};

export default Products;
