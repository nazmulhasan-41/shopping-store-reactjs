
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EmptyCart extends Component {
    render() {
        return (
            <div>

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Cart Is Empty</h1>
    <Link class="btn btn-primary btn-lg" to="/landpage" role="button">Back to Home</Link>
    
  </div>
</div>
                
            </div>
        );
    }
}

export default EmptyCart;