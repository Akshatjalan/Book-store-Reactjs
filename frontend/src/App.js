import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import ProductView from "./components/ProductView/ProductView";
import Manga from "./components/Manga/Manga";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import loadingImg from "./assets/loader.gif";
import "./style.css";
import Fiction from "./components/Fiction/Fiction";
import Biography from "./components/Bio/Biography";
import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";


const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [mangaProducts, setMangaProducts] = useState([]);
  const [fictionProducts, setFictionProducts] = useState([]);
  const [bioProducts, setBioProducts] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [path, setPath] = useState(window.location.pathname);
  

  const fetchProducts = async () => {
    const res  = await fetch('http://localhost:5000/api/books')
    const data = await res.json();
    console.log("malk");
    console.log("malk");
    console.log(data);
    setProducts(data);
  };

  const fetchMangaProducts = async () => {
    const { data } = await fetch('http://localhost:5000/api/books')

    setMangaProducts(data);
  };

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

  const fetchFictionProducts = async () => {
    const res = await fetch('http://localhost:5000/api/foryou')

    const data = await res.json();
    setFictionProducts(data);
  };

  const fetchBioProducts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["biography"],
    });

    setBioProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  
  useEffect(() =>{
    fetchProducts(),
    fetchFeatureProducts()
  },[]
  )

  return (
    <Router>
      {path === "/admin/66a29a5bcb2c9afdc7083bc7" ? (
        <Route path="/admin/66a29a5bcb2c9afdc7083bc7">
          <Admin />
        </Route>
      ) : (
        <Switch>
          <div>
            <CssBaseline />
            <Navbar
              totalItems={cart.total_items}
              handleDrawerToggle={handleDrawerToggle}
            />
            <Route exact path="/">
              <Products
                products={products}
                featureProducts={featureProducts}
                onAddToCart={handleAddToCart}
                handleUpdateCartQty
              />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route path="/checkout" exact>
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
                />
              </Route>
              <Route path="/product-view/:id" exact>
                <ProductView />
              </Route>
              <Route path="/manga" exact>
                <Manga
                  mangaProducts={mangaProducts}
                  onAddToCart={handleAddToCart}
                  handleUpdateCartQty
                />
              </Route>
              <Route path="/fiction" exact>
                <Fiction
                  fictionProducts={fictionProducts}
                  onAddToCart={handleAddToCart}
                  handleUpdateCartQty
                />
              </Route>
              <Route path="/biography" exact>
                <Biography
                  bioProducts={bioProducts}
                  onAddToCart={handleAddToCart}
                  handleUpdateCartQty
                />
              </Route>
              
            <Footer />
            </div>
          </Switch>
         
        )}
      </Router>
    );
  };
  
  export default App;