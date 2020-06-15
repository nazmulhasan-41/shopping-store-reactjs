import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faMinusSquare, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';



export default function CartItem({ item, value }) {

    const { id, title, img, price, company, info, inCart, count, total } = item;
    const { increment, decrement, removeItem, clearCart } = value;

    return (

        <div>


            <div class="card text-center">
                <div class="card-header">
                    <h5 class="card-title"></h5>
                </div>
                <div class="card-body">

                    <div class="container ">
                        <div class="row ">
                            <div class="col-sm">
                                <img
                                    src={img}
                                    style={{ width: "5rem", height: "5rem" }}
                                    className="img-fluid"
                                    clt="product"
                                />

                            </div>
                            <div class="col-sm">
                               <strong> {title}</strong>
                            </div>


                            <div class="col-sm">
                                Price : {price}
                            </div>




                            <div class="col-sm pb-1">


                                <div class="btn-group mr-2" role="group" aria-label="Second group">
                                    <button type="button" class="btn btn-secondary" onClick={() => {
                                        decrement(id);
                                    }}
                                    > <FontAwesomeIcon icon={faMinus} /></button>



                                </div>




                                <div class="btn-group mr-2 " role="group" aria-label="Third group">
                                    <button type="button" class="btn btn-secondary">{count}</button>
                                </div>

                                <div class="btn-group " role="group" aria-label="Second group">
                                    <button type="button" class="btn btn-secondary"
                                        onClick={() => {
                                            increment(id);
                                        }}> <FontAwesomeIcon icon={faPlus} /></button>

                                </div>




                            </div>

                            <div class="col-sm">
                                <div class="btn btn-secondary" onClick={() => removeItem(id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>



                            <div class="col-sm">
                                Item Total:$ {total}
                            </div>





                        </div>
                    </div>

                </div>

            </div>
        </div>



    );
}


