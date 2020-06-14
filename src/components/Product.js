import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from './Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinusSquare, faMinus ,faTrash, faCartPlus} from '@fortawesome/free-solid-svg-icons';



export default class Product extends Component {
    render() {
        const { id, title, img, price, info, inCart, company } = this.props.product;

        return (

            <ProductConsumer>
                {(value) => (

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

                                    {inCart ?
                                        <Link to="/Cart" class="btn btn-primary stretched-link">

                                            Go to <FontAwesomeIcon icon={faCartPlus} />
                                        </Link>

                                        :
                                        <button
                                            type="button" class="btn btn-secondary"

                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);

                                            }}
                                        >
                                            Add to <FontAwesomeIcon icon={faCartPlus} />

                                        </button>

                                    }

                                </div>

                            </div>







                            {/*  {
                                inCart ? (

                                    <Modal />
                                )
                                    : (
                                        <h4></h4>


                                    )

                            } */}

                            {/* <Link to="/Cart" onClick={() => {
                                value.handleDetail(id);
                            }} >
                                Go to cart
                            </Link> */}


                        </div>
                    </div>

                )}
            </ProductConsumer>

        );

    }
}



