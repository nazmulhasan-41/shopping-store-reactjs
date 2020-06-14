import React from 'react';
import './App.css';

import {BrowserRouter ,Switch,Route} from 'react-router-dom';

import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

import {Link} from 'react-router-dom';





function App() {
  return (
    
      
      <BrowserRouter> 
 

<div className="App">

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    
      <Link className="navbar-brand" to="/">Mobile Outlet</Link>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
       

          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
        <Link className="nav-link" to="/Cart">Cart <span className="sr-only">(current)</span></Link>
     
             

        </li>
        <li className="nav-item active">
        <Link className="nav-link" to="#">Sign In <span className="sr-only">(current)</span></Link>
     
              </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
          <Link className="dropdown-item" to="/#">Pants</Link>
     
          <Link className="dropdown-item" to="/#">Shirts</Link>
           
            

            <div className="dropdown-divider"></div>

            <Link className="dropdown-item" to="/#">others</Link>

           
          </div>
        </li>

      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>



  <div className="container">

  <React.Fragment>
    <Switch>

    
    <Route path="/" exact={true}  component={ProductList} />
    <Route path="/Product" component={Product} />
    <Route path="/Details"  component={Details} />
    <Route path="/Cart"  component={Cart} />
    <Route   component={Default} />

    </Switch>


   

    </React.Fragment>
  </div>

</div>

</BrowserRouter>

  );
}

export default App;
