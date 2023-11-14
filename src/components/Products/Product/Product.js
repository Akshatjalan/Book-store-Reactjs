import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardActionArea,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={`product-view/${product.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          />
        </CardActionArea>
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <p className={classes.cardContentName}> {product.name}</p>
        </div>
        <div className={classes.cardContent}>
          <p className={classes.cardContentPrice}>
            <b>{product.price.formatted_with_symbol}</b>
          </p>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<AddShoppingCart />}
          onClick={() => onAddToCart(product.id, 1)}
        >
          <b>ADD TO CART</b>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
