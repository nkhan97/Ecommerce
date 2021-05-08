import React from 'react';
import { AddShoppingCart } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const Card = ({product, onAddToCart}) => {
    return (
        <div class="row">
            <div class="cardContent">
                <div class="upperContainer">
                    <img src={product.media.source} alt={product.name}/>
                </div>
                <div class="lowerContainer">
                    <div class="item">
                        <h3 class="itemName">{product.name}</h3>
                        <p class="itemDesc" dangerouslySetInnerHTML={{ __html: product.description }}/>
                    </div>
                    <div class="purchase">
                        <span class="price">{product.price.formatted_with_symbol}</span>
                        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                            <AddShoppingCart  />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;