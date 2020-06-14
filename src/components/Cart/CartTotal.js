import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function CartTotal ({value}){
    const {cartTotal,cartSubTotal,cartTax,clearCart}=value;

        return (
            <div>
                <div class="container">
  <div class="row">
    <div class="col-sm">
      
    </div>
    <div class="col-sm">
      
    </div>
    <div class="col-sm">
      



    <ul class="list-group list-group-flush">
  <li class="list-group-item">
      <Link to="/">
      <button type="button" class="btn btn-danger" onClick={()=>clearCart()}>Clear Cart</button>

      </Link>
      
      </li>
        <li class="list-group-item">cartSubTotal : $ {cartSubTotal}</li>
        <li class="list-group-item">Tax :$ {cartTax}</li>
  <li class="list-group-item">CartTotal : $ {cartTotal}</li>
  <li class="list-group-item"></li>
</ul>



    </div>
  </div>
</div>
            </div>
        );
    
}

export default CartTotal;