import React from 'react';
import { Typography, Button, CardActions } from '@material-ui/core';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
  

    return (
        <div class="row cartItem">
            <div class="cardContent">
                <div class="upperContainer">
                    <img src={item.media.source} alt={item.name}/>
                </div>
                <div class="lowerCartContainer">
                    <div class="item">
                        <h3 class="itemName">{item.name}</h3>
                        <div>
                        <span class="price"><span class="cartTotalText">Each: </span>{item.price.formatted_with_symbol}</span>
                        </div>
                        <div>
                        <span class="price"><span class="cartTotalText">Total: </span>{item.line_total.formatted_with_symbol}</span>
                        </div>                        
                    </div>
                </div>
                <CardActions class="cartActions">
                    <div class="cartButtons">
                        <Button type="button cartButton" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                        <Typography class="itemQuantity">{item.quantity}</Typography>
                        <Button type="button cartButton" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                    </div>
                    <div class="cartRemoveBtn">
                        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                    </div>
                </CardActions>
                </div>
        </div>
    )
}

export default CartItem;