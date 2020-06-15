import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinusSquare, faMinus, faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';


class Modal extends Component {
    render() {

        let { id, title, img, price, info, inCart, company } = this.props.p;
        

       

        return (
           

                    
                            <div>




                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                                    Add to <FontAwesomeIcon icon={faCartPlus} />
                                </button>

                               
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
                                                        <strong>{title}</strong>
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Price: ${price}</h5>
                                                        <img src={img} class="card-img-top" alt="..." />

                                                    </div>
                                                    <div class="card-footer text-muted">



                                                        <a href="#" class="btn btn-primary">

                                                            Add to <FontAwesomeIcon icon={faCartPlus} />

                                                        </a>

                                                        <Link to='/'>

                                                            <button type="button" class="btn btn-primary" data-dismiss="modal"
                                                                onClick={() => {

                                                                }}>Go to <FontAwesomeIcon icon={faCartPlus} />
                                                            </button>

                                                        </Link>



                                                    </div>


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
}




export default Modal;


