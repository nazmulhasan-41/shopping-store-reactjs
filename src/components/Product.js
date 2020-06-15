import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from './Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinusSquare, faMinus, faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Modal2 from './Cart/Modal2';



export default class Product extends Component {
    render() {

        const { id, title, img, price, info, inCart, company } = this.props.product;


        return (
            <div>

                <ProductConsumer>



                    {(value) => {
                         
                         


                        return (


                            <div class="card " style={{ width: "18rem" }}>

                                <Link to="/Details" onClick={() => {
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

                                                <Link to="/Cart" class="btn btn-primary stretched-link ">

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



