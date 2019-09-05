import React from 'react';

import Header from './Header.js'

class Main extends React.Component {
    render(){
        return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="http://hdqwalls.com/wallpapers/web-development-minimalism-bl.jpg" alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>Ultimate Solution for Your
Website or Landing Page</h5>
    <p>High-quality Responsive Website Template Based on Bootstrap 4 to Create Complete Website in Minutes</p>
    <div>
    <button className="car_button">get started</button>
    </div>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pond5.com/close-businessman-working-laptop-pool-footage-085933830_prevstill.jpeg" alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>We Promise You'll Be
Impressed With Crystal</h5>
    <p>High-quality Responsive Website Template Based on Bootstrap 4 to Create Complete Website in Minutes</p>
    <div>
    <button className="car_button brushed">download</button>
    </div>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/VnxYrY1ux/videoblocks-4k-hand-close-up-of-developer-who-typing-text-code-at-retro-old-laptop_bvw9dyhdm_thumbnail-full01.png" alt="Third slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>Create Bootstrap 4 Powered
Website in Minutes</h5>
    <p>High-quality Responsive Website Template Based on Bootstrap 4 to Create Complete Website in Minutes</p>
    <div>
    <button className="car_button brushed">download</button>
    <button className="car_button ml-5" >learn more</button>
    </div>
  </div>
      
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        )
    }
}
export default Main