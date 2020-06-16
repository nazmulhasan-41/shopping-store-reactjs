import React, { Component } from 'react';
import portfolio1 from './img/portfolio-1.jpg';
import portfolio2 from './img/portfolio-2.jpg';
import portfolio3 from './img/portfolio-3.jpg';
import portfolio4 from './img/portfolio-4.jpg';

import {Link} from 'react-router-dom';

class LandPage extends Component {
    render() {
        return (


            <div >


<body id="page-top">





<header class="masthead d-flex">
    <div class="container text-center my-auto">
        <h1 class="mb-1">Shopping Outlet</h1>
        <h3 class="mb-5">
            <em>Myriad products for making your life fashionable
                 </em>
        </h3>
        <Link class="btn btn-primary btn-xl js-scroll-trigger" to="/landpage">Products Shop</Link>
    </div>
    <div class="overlay"></div>
</header>


<section class="content-section bg-light" id="about">
    <div class="container text-center">
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <h2>Stylish artefact is the perfect metarial for making your life sturdy  </h2>
                
                <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">What We Offer</a>
            </div>
        </div>
    </div>
</section>


<section class="content-section bg-primary text-white text-center" id="services">
    <div class="container">
        <div class="content-section-heading">
            <h3 class="text-secondary mb-0">Services</h3>
            <h2 class="mb-5">Previlige You Redeem</h2>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
        <i class="icon-screen-smartphone"></i>
      </span>
                <h4>
                    <strong>Responsive</strong>
                </h4>
                <p class="text-faded mb-0">Looks great on any screen size!</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
        <i class="icon-pencil"></i>
      </span>
                <h4>
                    <strong>Designed</strong>
                </h4>
                <p class="text-faded mb-0">Freshly redesigned futuristic & brand new products.</p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span class="service-icon rounded-circle mx-auto mb-3">
        <i class="icon-like"></i>
      </span>
                <h4>
                    <strong>Favorited</strong>
                </h4>
                <p class="text-faded mb-0">Millions of users
                    <i class="fas fa-heart"></i> product reviews</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3">
        <i class="icon-mustache"></i>
      </span>
                <h4>
                    <strong>Question & Answer</strong>
                </h4>
                <p class="text-faded mb-0">Q&A section for supporting you 24/7</p>
            </div>
        </div>
    </div>
</section>


<section class="callout">
    <div class="container text-center">
        <h2 class="mx-auto mb-5">Welcome to
            <em>your</em> next website!</h2>
        <Link class="btn btn-primary btn-xl" to="/landpage">Let's Dive</Link>
    </div>
</section>


<section class="content-section" id="portfolio">
    <div class="container">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Portfolio</h3>
            <h2 class="mb-5">Recent Projects</h2>
        </div>
        <div class="row no-gutters">
            <div class="col-lg-6">
                <a class="portfolio-item" href="#">
                    <span class="caption">
          <span class="caption-content">
            <h2>Stationary</h2>
            <p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
          </span>
                    </span>
                    <img class="img-fluid" src={portfolio2} alt=""/>
                </a>
            </div>
            <div class="col-lg-6">
                <a class="portfolio-item" href="#">
                    <span class="caption">
          <span class="caption-content">
            <h2>Ice Cream</h2>
            <p class="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
          </span>
                    </span>
                    <img class="img-fluid" src={portfolio1} alt=""/>
                </a>
            </div>
            <div class="col-lg-6">
                <a class="portfolio-item" href="#">
                    <span class="caption">
          <span class="caption-content">
            <h2>Strawberries</h2>
            <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
          </span>
                    </span>
                    <img class="img-fluid" src={portfolio3} alt=""/>
                </a>
            </div>
            <div class="col-lg-6">
                <a class="portfolio-item" href="#">
                    <span class="caption">
          <span class="caption-content">
            <h2>Workspace</h2>
            <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
          </span>
                    </span>
                    <img class="img-fluid" src={portfolio4} alt=""/>
                </a>
            </div>
        </div>
    </div>
</section>


<section class="content-section bg-primary text-white">
    <div class="container text-center">
        
      
        <a href="#" class="btn btn-xl btn-dark">Page Up</a>
    </div>
</section>


<section id="contact" class="map">
    <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
    <br />
    <small>
  <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
</small>
</section>


<footer class="footer text-center">
    <div class="container">
        <ul class="list-inline mb-5">
            <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="#">
                    <i class="icon-social-facebook"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="social-link rounded-circle text-white mr-3" href="#">
                    <i class="icon-social-twitter"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="social-link rounded-circle text-white" href="#">
                    <i class="icon-social-github"></i>
                </a>
            </li>
        </ul>
        
    </div>
</footer>


<a class="scroll-to-top rounded js-scroll-trigger" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>



</body>


                


        </div>
        );
    }
}

export default LandPage;