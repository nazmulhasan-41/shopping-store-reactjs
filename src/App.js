import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

import { Link } from 'react-router-dom';
import FilterProduct from './components/FilterProduct/FilterProduct';
import { ProductConsumer } from './context';
import RangeSlider from './components/RangeSlider';
import LandPage from './components/Cart/LandingPage/LandPage';





export default function App() {




    function add(e) {
        e.preventDefault();

    }

    function fnc() {
        return (<h2 > sdfsdfdsf </h2>)
    }


    return (

        <ProductConsumer>
            {

                (value) => (


                    <BrowserRouter >


                        <div  >

                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                                <button className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarTogglerDemo01"
                                    aria-controls="navbarTogglerDemo01"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation" >
                                    <span className="navbar-toggler-icon" > </span> </button >
                                <div className="collapse navbar-collapse"
                                    id="navbarTogglerDemo01" >





                                    <Link className="navbar-brand"
                                        to="/"
                                        onClick={
                                            () => {
                                                value.setProducts();
                                            }
                                        } > Mobile Outlet </Link> < ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                                        < li className="nav-item active" >


                                            < Link className="nav-link"
                                                to="/LandPage"
                                                onClick={
                                                    () => {
                                                        value.setProducts();
                                                    }
                                                } >
                                                Home < span className="sr-only" > (current) </span></Link >
                                        </li> <li className="nav-item active" >
                                            <Link className="nav-link"
                                                to="/Cart" > Cart < span className="sr-only" > (current) </span></Link >


                                        </li>


                                        {/* <li className="nav-item active" >
                                            < Link className="nav-link"
                                                to="/LandPage" > LandPage < span className="sr-only" > (current) </span></Link >


                                        </li> */}




                                        < li className="nav-item dropdown" >
                                            < Link className="nav-link dropdown-toggle"
                                                data-toggle="dropdown"
                                                to="#"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false" >
                                                Brand </Link> <div className="dropdown-menu" >
                                                < Link className="dropdown-item"
                                                    to="/LandPage"
                                                    onClick={
                                                        () => {
                                                            value.filterProducts("HTC");
                                                        }
                                                    } >
                                                    HTC </Link>




                                                <Link className="dropdown-item"
                                                    to="/LandPage"
                                                    onClick={
                                                        () => {
                                                            value.filterProducts("Samsung");
                                                        }
                                                    } > Samsung </Link>

                                                <Link className="dropdown-item"
                                                    to="/#"
                                                    onClick={
                                                        () => {
                                                            value.filterProducts("Shawmi");
                                                        }
                                                    } >
                                                    Shawmi </Link>



                                                <div className="dropdown-divider" > </div>

                                                <Link className="dropdown-item"
                                                    to="/LandPage"
                                                    onClick={
                                                        () => {
                                                            value.setProducts();
                                                        }
                                                    } > All brands </Link>


                                            </div> </li>






                                        <li className="nav-item active" >
                                            <Link className="nav-link"
                                                to="#" > Sign In < span className="sr-only" > (current) </span></Link >

                                        </li>

                                    </ul>

                                    <Link to="/LandPage" >




                                        <form class="form-inline my-2 my-lg-0"
                                            onSubmit={
                                                (e) => {
                                                    e.preventDefault();
                                                    value.filterProducts(e.target.in.value);
                                                    fnc();
                                                }
                                            } >
                                            <input class="form-control mr-sm-2"
                                                name="in"
                                                type="search"
                                                placeholder="Search"
                                                onChange={
                                                    (e) => {
                                                        e.preventDefault();
                                                        value.filterProducts(e.target.value);
                                                    }


                                                }
                                                aria-label="Search" />
                                            <button class="btn btn-outline-success my-2 my-sm-0"
                                                type="submit"
                                                onClick={
                                                    () => {

                                                    }
                                                } > Search </button> </form >

                                    </Link>





                                </div>
                                
                             </nav >



                            < div className=" w-screen " >



                                <React.Fragment >
                                    <Switch >


                                        <Route path="/"
                                            exact={true}
                                            component={LandPage}
                                        /> <Route path="/Product"
                                            component={Product}
                                        /> <Route path="/Details"
                                            component={Details}
                                        /> <Route path="/Cart"
                                            component={Cart}
                                        /> <Route path="/FilterProduct"
                                            component={FilterProduct}
                                        /> <Route path="/LandPage"
                                            component={ProductList}
                                        /> <Route path="/Range"
                                            component={RangeSlider}
                                        />

                                        <Route component={Default}
                                        />

                                    </Switch>




                                </React.Fragment> </div >

                        </div>

                    </BrowserRouter>
                )
            }

        </ProductConsumer>



    );
}