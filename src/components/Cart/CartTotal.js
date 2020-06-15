import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

function CartTotal ({value,history}){
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
  <li class="list-group-item mr-2 ">
      <Link to="/" class="mr-2 ">
      <button type="button" class="btn btn-danger pb-1" onClick={()=>clearCart()}>Clear Cart</button>

      </Link>


      <Link to="/">
      <button type="button" class="btn btn-primary py-1 my-1" >Home</button>

      </Link>


      
      </li>
        <li class="list-group-item">cartSubTotal : $ {cartSubTotal}</li>
        <li class="list-group-item">Tax :$ {cartTax}</li>
  <li class="list-group-item">CartTotal : $ {cartTotal}</li>
  <li class="list-group-item">

    <PayPalButton total={cartTotal} 
    clearCart={clearCart}
    history={history}/>
  </li>
</ul>




    </div>
  </div>
</div>
            </div>
        );
    
}

export default CartTotal;