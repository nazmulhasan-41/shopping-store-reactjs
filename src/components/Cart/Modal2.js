import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductConsumer } from '../../context';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '0px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Modal2(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //const { id, title, img, price, info, inCart, company } = p;
    //console.log(this.props.p);

    return (




        <ProductConsumer>
                {(value) => (



        <div>
            <button type="button" class="btn btn-primary" onClick={handleOpen}>
                Add to <FontAwesomeIcon icon={faCartPlus} />
            </button>




            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>







                        <div class="card text-center">
                            <div class="card-header">
                                <strong>{props.p.title}</strong>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Price: ${props.p.price}</h5>
                                <img src={props.p.img} class="card-img-top" alt="..." />

                            </div>
                            <div class="card-footer text-muted">



                                {/* <a href="#" class="btn btn-primary">

                                    Add to <FontAwesomeIcon icon={faCartPlus} />

                                </a> */}



                                {props.p.inCart ?
                                        <Link to="/cart" class="btn btn-primary stretched-link mr-2">

                                            Go to <FontAwesomeIcon icon={faCartPlus} />
                                        </Link>

                                        :

                                        


                                          <button
                                            type="button" class="btn btn-secondary mr-2"

                                            onClick={() => {
                                                value.addToCart(props.p.id);
                                                

                                            }}
                                        >

                                            Add to <FontAwesomeIcon icon={faCartPlus} /> 

                                            

                                        </button> 

                                    }



                                <Link to='/cart'>

                                    <button type="button" class="btn btn-primary" data-dismiss="modal"
                                        onClick={() => {

                                        }}>My Cart <FontAwesomeIcon icon={faCartPlus} />
                                    </button>

                                </Link>



                            </div>


                        </div>







                    </div>
                </Fade>
            </Modal>
        </div>

                )}

</ProductConsumer>
                
    );
}
