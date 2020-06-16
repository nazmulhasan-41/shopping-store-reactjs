import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


class Details extends Component {
    render() {
        return (

            <ProductConsumer>
                {value => {
                    const { id, title, img, price, info, inCart, company } = value.detailProduct;


                    return (

                        <div class="container">


                            <div class="jumbotron jumbotron-fluid">
                                <div class="container">
                                    <h1 class="display-4">{title}</h1>

                                </div>
                            </div>

                            <div class="row row-cols-1 row-cols-sm-2 ">
                                <div class="col">

                                    <img src={img} class="img-fluid" alt="Responsive image"></img>

                                </div>
                                <div class="col">


                                    <h3 class="text-left">Price: ${price}</h3>
                                    <h4 class="text-left">company: {company}</h4>
                                    <p class="text-left">Specification :</p>
                                    <p class="text-left">{info}</p>



                                    <div class="row row-cols-1 row-cols-sm-2 ">
                                        <div class="col">



                                            {value.inCart(id) ?
                                                <Link to="/cart" class="btn btn-secondary stretched-link">

                                                    Go to<FontAwesomeIcon icon={faCartPlus} />
                                                </Link>

                                                :
                                                <button
                                                    type="button" class="btn btn-primary"

                                                    onClick={() => {
                                                        value.addToCart(id);

                                                    }}
                                                >
                                                    Add to <FontAwesomeIcon icon={faCartPlus} />

                                                </button>
                                            }



                                        </div>

                                        <div class="col">

                                            <Link to="/landpage" class="btn btn-primary stretched-link">
                                                Back to Products</Link>

                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }}

            </ProductConsumer>
        );
    }
}

export default Details;