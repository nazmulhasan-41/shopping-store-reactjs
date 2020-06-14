import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Default extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron">
  <h1 class="display-4">404 !</h1>
  <p class="lead">Error</p>
  <p class="lead">Your Searched page not found. </p>


  

  <Link class="btn btn-primary btn-lg" to="/" role="button">Back to Home</Link>
</div>
            </div>
        );
    }
}

export default Default;