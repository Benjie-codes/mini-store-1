import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import ProductList from "./pages/ProductList";
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <div className="font-montserrat">
      <MantineProvider>
        <Router>
          <div className="App">
            <Navbar />
            <div className="content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/404" component={Error} />
                  <Route path="/products" component={ProductList} />
                </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </MantineProvider>
      
    </div>
  );
}

export default App;
