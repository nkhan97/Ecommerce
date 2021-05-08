import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';


const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const handleEmptyCart = () => onEmptyCart();

    const EmptyCart = () => (
        <Typography class="cartEmptyTxt" variant="subtitle1" > Your Shopping Cart is currently empty!  
            <Link to='/#Products' class="ProductsLink"> Check out our products</Link>
        </Typography>
    );

    const FilledCart = () => (
        <> 
            <Grid style={{ paddingLeft: '30px' }} container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div class="cardDetails">
                <h3 class="cartSubtotal">Subtotal: <span>{cart.subtotal.formatted_with_symbol}</span></h3>
                <div class="cartBtns">
                    <Button size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>

    );

    if(!cart.line_items) return 'Loading...';

    
    return (
        <Container style={{ width: '100%', overflowX:'hidden' }} class="cart">
                <h2 class="cartTitle" >Your Shopping Cart</h2>
                { !cart.line_items.length ? <EmptyCart /> : <FilledCart/> }
        </Container>
    )
}

export default Cart;