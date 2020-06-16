import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Modal2 from './Cart/Modal2';



export default class Product extends Component {
    render() {

        const { id, title, img, price,  company } = this.props.product;


        return (
            <div>

                <ProductConsumer>



                    {(value) => {
                         
                         


                        return (


                            <div class="card " style={{ width: "18rem" }}>

                                <Link to="/details" onClick={() => {
                                    value.handleDetail(id);
                                }} >
                                    <img src={img} class="card-img-top" alt="..." />
                                </Link>

                                <div class="card-body">
                                    <h5 class="card-title">{title} - $ {price}</h5>
                                    <p class="card-text">{company}</p>


                                    <div class="row row-cols-1 row-cols-sm-1 ">
                                        <div class="col">



                                            {value.inCart(id) ?

                                                <Link to="/cart" class="btn btn-secondary stretched-link ">




                                                    Go to <FontAwesomeIcon icon={faCartPlus} />
                                                </Link>

                                                :

                                                <Modal2 key={id} p={this.props.product} />
                                            }

                                        </div>

                                    </div>

                                </div>
                            </div>

                        )
                    }
                }

    
            </ProductConsumer>

            </div>

        );

    }
}



