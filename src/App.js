import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Products from "./pages/Products";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <CartProvider>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/404" component={Error} />
                <Route path="/products-page" component={Products} />
              </Switch>
            </CartProvider>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
