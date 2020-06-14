import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';

import { ProductConsumer } from '../../context';
import CartList from './CartList';
import {Link} from 'react-router-dom';
import CartTotal from './CartTotal';



class Cart extends Component {
    render() {
        
        return (
            <section>
            <ProductConsumer>

                    {

                        
                        
                        value => {
                            const { cart } = value;

                            console.log(cart);
                            console.log("recieving cart ");
                             if(cart.length > 0) {
                                return (
                                    <React.Fragment>
                                    
                                        <CartColumns />

                                        

                                        <CartList value={value}/>
                                        <CartTotal value={value}/>
                                        

                                        </React.Fragment>

                                    

                                );
                            
                            }
                            else{
                               return  <EmptyCart/>;

                            }
                        }
                    }

                

            </ProductConsumer>

           
         

            </section>
        );
    }
}

export default Cart; 