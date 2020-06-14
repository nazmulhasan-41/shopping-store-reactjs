import React, { Component } from 'react';
import Product from './Product';

import { ProductConsumer } from '../context';


class ProductList extends Component {

  render() {


    return (
      <div>



<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Products</h1>
    
  </div>
</div>




        <div class="container ">
          <div class="row justify-content-md-center border  row-cols-1 row-cols-sm-2 row-cols-md-4">
          
              <ProductConsumer>
                {(value) => {
                  return (
                    value.products.map(product => {

                      return(
                        <div class="col-12 col-md-4 py-5 ">

                      <Product key={product.id} product={product} />

                      </div>

                      )
                    })
                  )
                }}

              </ProductConsumer>

          </div>

        </div>
      </div>
    );
  }
}

export default ProductList;