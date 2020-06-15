import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';


class FilterProduct extends Component {
    render() {

     //   const { id, title, img, price, info, inCart, company } = this.props.product;

        return (
           

                <ProductConsumer>
                {(value) => (

                    <div class="card " style={{ width: "18rem" }}>

                        <Link to="/" onClick={() => {
                            value.filterProducts();
                        }} >

                            FILTER
                            
                        </Link>

                        
                    </div>

                )}
            </ProductConsumer>
     
           
        );
    }
}

export default FilterProduct;