import React from 'react';
import Card from './Card';
import { Grid } from '@material-ui/core';

const Products = ({products, onAddToCart}) => {
    return (
        <main id="Products" class="productsContainer">
            <div class="productsTitle">
                <h1> Products</h1>
            </div>
            <Grid container justify="center" spacing={0}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid> 
        </main>
    )
}

export default Products;
