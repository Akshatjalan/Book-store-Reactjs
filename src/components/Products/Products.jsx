import React,{ useState} from 'react';
import {Grid, InputAdornment, Input} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Product from './Product/Product.js'
import useStyles from './styles';
import Carousel from 'react-bootstrap/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from '../../assets/1.jpeg';
import logo1 from '../../assets/2.jpeg';
import logo2 from '../../assets/4.jpeg';
import logo3 from '../../assets/3.jpeg';

const Products = ({products, onAddToCart}) =>{
    
    const classes = useStyles();

    const [searchTerm, setSearchTerm] = useState('')

   
    return (
      
        <main className = {classes.content} >
         <div className={classes.searchs} >

          <Input className={classes.searchb} type="text" placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}} startAdornment={
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment> }/>
          </div>
 
          <Carousel fade infiniteLoop useKeyboardArrows autoPlay >
          <Carousel.Item>
              <img className="d-block w-100" src={logo1} alt=" slide" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logo} alt="First slide" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logo3} alt="Second slide" />         
          <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={logo2} alt="Second slide" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={5}>

                {products.filter((product) => {
                  if(searchTerm=== ''){
                    return product
                  } 
                  else if(product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return product;
                  }
                }).map((product) => (
                  
                 <Grid item  key= {product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                 </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products;