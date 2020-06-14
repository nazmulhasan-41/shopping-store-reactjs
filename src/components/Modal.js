import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom';


class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {

                        return <h1>dsfdsf</h1>;
                    }
                    else {

                       

                        return (
                            <div>

                            


<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



                              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                                    Zoom
                                </button> 

                                {/* modal-dialog modal-dialog-centered */}
                                <div class="modal fade   " id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel"> {title}</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">



                                                <div class="card text-center">
                                                    <div class="card-header">
                                                        Featured
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Price: ${price}</h5>
                                                        <img src={img} class="card-img-top" alt="..." />
                                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                    <div class="card-footer text-muted">
                                                        2 days ago
                                                    </div>

                                                    <Link to='/Cart'>

                                                        <button type="button" class="btn btn-primary" data-dismiss="modal"
                                                            onClick={() => {

                                                            }}>go to Cart
                                                    </button>

                                                    </Link>
                                                </div>





                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Understood</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        );


                    }

                })}

            </ProductConsumer>
        );
    }
}




export default Modal;


