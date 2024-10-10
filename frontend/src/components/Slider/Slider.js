import { useEffect,useState } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import Product from "../Products/Product/Product";
import useStyles from "../Cart/CartItem/styles";
function Slider() {
    const classes = useStyles();
    const [fictionProducts, setFeatureProducts] = useState([]);
let arr=[1,1,1,1,1,1]
    const fetchFeatureProducts = async () => {
        let result = await fetch('http://localhost:5000/api/getUserCategory/66a3ce6d8209037fde1f64ef')
        console.log("++++++++++++++++mmmmmmmmmmmm----------------------")
        const category1 = await result.json()
        const category= category1.category
         
        console.log("kaudkausgdkasdgasd",category)
        let bookFilterMethod= "Between 6 months and 1 Year"
        const res = await fetch(`http://localhost:5000/api/foryou/Between 6 months and 1 Year/${category}`)
        console.log("++++++++++++++++")
        const data = await res.json()
        console.log("++++++++++++++++")
        console.log(data)
    
        setFeatureProducts(data)
      }

      useEffect(() =>{
        fetchFeatureProducts()
      },[]
      )
    return (
<div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
    
<Grid
                  className={classes.contentFeatured}
                  item
                  xs={6}
                  sm={5}
                  md={3}
                  lg={2}
                  id="pro"
                  style={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}
                >
                  <Product product={fictionProducts}  />
                </Grid>
</div>

    )
}
export  default Slider;
