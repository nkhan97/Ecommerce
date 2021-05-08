import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro'
import Benefits from './components/Benefits';
import Products from './components/Products';
import Footer from './components/Footer';
import { commerce } from './lib/commerce';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    const fetchCart =  async () => {
        setCart(await commerce.cart.retrieve())
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const { cart } = await commerce.cart.update(lineItemId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (lineItemId) => {
        const { cart } = await commerce.cart.remove(lineItemId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCart(newCart);
    };
    
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
          setErrorMessage(error.data.error.message);
        }
    }


    return (
        <Router>
            <div>
                <CssBaseline />
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Intro />
                        <Benefits/>
                        <Products products={products} onAddToCart = {handleAddToCart} handleUpdateCartQty/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            cart={cart} 
                            onUpdateCartQty={handleUpdateCartQty} 
                            onRemoveFromCart={handleRemoveFromCart} 
                            onEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout" >
                        <Checkout 
                            cart={cart} 
                            order={order} 
                            onCaptureCheckout={handleCaptureCheckout} 
                            refreshCart={refreshCart}
                            error={errorMessage} 
                        />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;